package hu.noSignal.noSignal.Controller.Services;

import hu.noSignal.noSignal.Modell.Post;
import hu.noSignal.noSignal.Modell.Repositories.PostRepository;
import hu.noSignal.noSignal.Modell.User;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;

import java.util.ArrayList;
import java.util.Iterator;

@Service
@SessionScope
@Data
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public Post newPost(Post post) {
        postRepository.save(post);
        return post;
    }

    public Iterable<Post> listAll() {
        return postRepository.findAll();
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

    public Post likePost(long id) {
        int likes = postRepository.findOne(id).getLikes();
        postRepository.findOne(id).setLikes(++likes);
        return postRepository.findOne(id);
    }
}
