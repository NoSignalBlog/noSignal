package hu.noSignal.noSignal.Controller;

import hu.noSignal.noSignal.Controller.Services.Annotations.Role;
import hu.noSignal.noSignal.Controller.Services.PostService;
import hu.noSignal.noSignal.Controller.Services.UserService;
import hu.noSignal.noSignal.Modell.Exceptions.PostException;
import hu.noSignal.noSignal.Modell.Exceptions.UserException;
import hu.noSignal.noSignal.Modell.Post;
import hu.noSignal.noSignal.Modell.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static hu.noSignal.noSignal.Modell.User.Role.ADMIN;
import static hu.noSignal.noSignal.Modell.User.Role.USER;

@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    private PostService postService;

    @Autowired
    private UserService userService;

    @Role({ADMIN, USER})
    @PostMapping("/new")
    private ResponseEntity<Post> create(@RequestBody Post post) {
        try {
            userService.getUser().getPosts().add(post);
            userService.update(userService.getUser().getId(), userService.getUser());
            post.setUser(userService.getUser());
            return ResponseEntity.ok(postService.newPost(post));
        } catch (UserException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping
    private ResponseEntity<Iterable<Post>> list() {
        if (userService.isLoggedIn()) {
            return ResponseEntity.ok(postService.listAll());
        } else {
            return ResponseEntity.ok(postService.listPublic());
        }
    }

    @Role({USER, ADMIN})
    @PutMapping("/like/{id}")
    private ResponseEntity<Post> like(@PathVariable long id, @RequestBody Post post)  {
        try {
            return ResponseEntity.ok(postService.likePost(id,post));
        } catch (PostException e) {
            return ResponseEntity.badRequest().build();
        }
    }
  
    @Role({USER, ADMIN})
    @PutMapping("/edit/{id}/{isDelete}")
    private ResponseEntity<Post> editPost(@PathVariable long id, @PathVariable boolean isDelete, @RequestBody Post post)  {
        try {
            return ResponseEntity.ok(postService.editPost(isDelete,id,post));
        } catch (PostException e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
