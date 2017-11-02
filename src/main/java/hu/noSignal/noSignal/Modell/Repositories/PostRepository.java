package hu.noSignal.noSignal.Modell.Repositories;

import hu.noSignal.noSignal.Modell.Post;
import hu.noSignal.noSignal.Modell.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PostRepository extends CrudRepository <Post, Long>{

    Optional<Post> findByUser(User user);
}
