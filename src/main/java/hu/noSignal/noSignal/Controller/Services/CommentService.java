package hu.noSignal.noSignal.Controller.Services;

import hu.noSignal.noSignal.Modell.Comment;
import hu.noSignal.noSignal.Modell.Exceptions.CommentException;
import hu.noSignal.noSignal.Modell.Repositories.CommentRepository;
import hu.noSignal.noSignal.Modell.Repositories.PostRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;

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

        commentRepository.save(comment);
        return comment;
    }
}

