package hu.noSignal.noSignal.Controller;

import hu.noSignal.noSignal.Controller.Services.PostService;
import hu.noSignal.noSignal.Controller.Services.UserService;
import hu.noSignal.noSignal.Modell.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    private PostService postService;

    @Autowired
    private UserService userService;

    @PostMapping("/new")
    private ResponseEntity<Post> create(@RequestBody Post post) {
        //post.setUser(userService.getUser());
        return ResponseEntity.ok(postService.newPost(post));
    }

    @GetMapping
    private ResponseEntity<Iterable<Post>> list() {
        if (userService.isLoggedIn()) {
            return ResponseEntity.ok(postService.listAll());
        } else {
            return ResponseEntity.ok(postService.listPublic());
        }
    }
}
