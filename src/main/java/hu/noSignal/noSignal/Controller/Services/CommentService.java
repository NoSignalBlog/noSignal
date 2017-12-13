package hu.noSignal.noSignal.Controller.Services;

import hu.noSignal.noSignal.Modell.Comment;
import hu.noSignal.noSignal.Modell.Exceptions.CommentException;
import hu.noSignal.noSignal.Modell.Post;
import hu.noSignal.noSignal.Modell.Repositories.CommentRepository;
import hu.noSignal.noSignal.Modell.Repositories.PostRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Iterator;

@Service
@SessionScope
@Data
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private PostRepository postRepository;


    public Comment newComment(Comment comment) throws CommentException {
        if (postRepository.findOne(comment.getPostid()) == null) {
            throw new CommentException();
        }
        comment.setDate(new Timestamp(System.currentTimeMillis()));
        System.out.println(comment);
        commentRepository.save(comment);
        return comment;
    }

    public Iterable<Comment> listAll() {
        Iterator<Comment> comments = commentRepository.findAll().iterator();
        Iterable<Comment> iterComments = new ArrayList<>();
        while ( comments.hasNext() ) {
            Comment comment = comments.next();
            ((ArrayList) iterComments).add(comment);
        }
        return iterComments;
    }


    public Iterable<Comment> getCommentsByPost(long id, Comment comment){
        Iterator<Comment> iter = listAll().iterator();
        Iterable<Comment> byPostId = new ArrayList<>();
        while (iter.hasNext()) {
            Comment current = iter.next();
            if (current.getPostid() == id) {
                ((ArrayList) byPostId).add(current);
            }
        }
        return byPostId;
    }
}

