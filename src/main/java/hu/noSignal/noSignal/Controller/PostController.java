package hu.noSignal.noSignal.Controller;

import hu.noSignal.noSignal.Controller.Services.Annotations.Role;
import hu.noSignal.noSignal.Controller.Services.CommentService;
import hu.noSignal.noSignal.Controller.Services.PostService;
import hu.noSignal.noSignal.Controller.Services.UserService;
import hu.noSignal.noSignal.Modell.Comment;
import hu.noSignal.noSignal.Modell.Exceptions.CommentException;
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
@RequestMapping("/api/posts")
public class PostController {

    @Autowired
    private PostService postService;

    @Autowired
    private UserService userService;

    @Autowired
    private CommentService commentService;

    @Role({ADMIN, USER})
    @PostMapping("/new")
    private ResponseEntity<Post> create(@RequestBody Post post) {
        try {
            // userService.getUser().getPosts().add(post);
            // userService.update(userService.getUser().getId(), userService.getUser());
           // post.setUser(userService.getUser());
            post.setUserid(userService.getUser().getId());
            return ResponseEntity.ok(postService.newPost(post));
        } catch (PostException e) {
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
    @PostMapping("/like")
    private ResponseEntity<Post> like(@RequestBody Post post)  {
        try {
            System.out.println("like");
            return ResponseEntity.ok(postService.likePost(post));
        } catch (PostException e) {
            return ResponseEntity.badRequest().build();
        }
    }
  
    @Role({USER, ADMIN})
    @PutMapping("/edit/{id}")
    private ResponseEntity<Post> editPost(@PathVariable long id, @RequestBody Post post)  {
        try {
            post.setUserid(userService.getUser().getId());
            return ResponseEntity.ok(postService.editPost(id, post));
        } catch (PostException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @Role({USER,ADMIN})
    @PostMapping("/comment")
    private ResponseEntity<Comment> writeComment(@RequestBody Comment comment) {
        try {
            return ResponseEntity.ok(commentService.newComment(comment));
        } catch (CommentException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @Role({USER, ADMIN})
    @DeleteMapping("/delete/{id}")
    private ResponseEntity<Post> deletePost(@PathVariable long id, @RequestBody Post post)  {
        try {
            post.setUserid(userService.getUser().getId());
            return ResponseEntity.ok(postService.deletePost(id,post));
        } catch (PostException e) {
            return ResponseEntity.badRequest().build();
        }
    }



}