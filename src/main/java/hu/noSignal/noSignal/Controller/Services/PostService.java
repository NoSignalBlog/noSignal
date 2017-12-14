package hu.noSignal.noSignal.Controller.Services;

import hu.noSignal.noSignal.Modell.Exceptions.PostException;
import hu.noSignal.noSignal.Modell.Exceptions.UserException;
import hu.noSignal.noSignal.Modell.Post;
import hu.noSignal.noSignal.Modell.Repositories.PostRepository;
import hu.noSignal.noSignal.Modell.Repositories.UserRepository;
import hu.noSignal.noSignal.Modell.User;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.Optional;

@Service
@SessionScope
@Data
public class PostService {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    public Post newPost(Post post) throws PostException {
        if (userRepository.findOne(post.getUserid()) == null) {
            throw new PostException();
        }
        post.setDate(new Timestamp(System.currentTimeMillis()));
        Optional<User> user = userRepository.findById(post.getId());
        user.get().getPosts().add(post);
        userRepository.save(user.get());
        System.out.println(post);
        postRepository.save(post);
        return post;
    }

    public Iterable<Post> listAll() {
        Iterator<Post> posts = postRepository.findAll().iterator();
        Iterable<Post> iterPosts = new ArrayList<>();
        while ( posts.hasNext() ) {
            Post post = posts.next();
            post.setUser(userRepository.findById(post.getUserid()).get());
            ((ArrayList) iterPosts).add(post);
        }
        return iterPosts;
    }

    public Iterable<Post> listPublic() {
        Iterator<Post> iter = listAll().iterator();
        Iterable<Post> publics = new ArrayList<>();
        while (iter.hasNext()) {
            Post current = iter.next();
            if (current.isVisibility()) {
                ((ArrayList) publics).add(current);
            }
        }
        return publics;
    }

    public Post likePost(Post post) throws PostException {
        Post postToLike = postRepository.findOne(post.getId());
        if ( postToLike != null ) {
            int likes = postToLike.getLikes();
            postToLike.setLikes(++likes);
            postRepository.save(postToLike);
            return postToLike;
        } else {
            throw new PostException();
        }
    }
    public Post editPost(long id, Post post) throws PostException {
        Post postToEdit = postRepository.findOne(id);
        if ( postToEdit != null ) {
            postToEdit.setTitle(post.getTitle());
            postToEdit.setText(post.getText());
            postToEdit.setDate(post.getDate());
            postToEdit.setVideos(post.getVideos());
            postToEdit.setLinks(post.getLinks());
            postToEdit.setVisibility(post.isVisibility());
            postRepository.save(postToEdit);
            return postToEdit;
        } else {
            throw new PostException();
        }
    }

    public Post deletePost(long id) throws PostException {
        Post postToDelete = postRepository.findOne(id);
        if ( postToDelete != null ) {
            postRepository.delete(postToDelete);
            return postToDelete;
        } else {
            throw new PostException();
        }
    }

}
