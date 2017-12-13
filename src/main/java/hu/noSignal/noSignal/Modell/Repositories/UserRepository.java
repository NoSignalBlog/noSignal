package hu.noSignal.noSignal.Modell.Repositories;

import hu.noSignal.noSignal.Modell.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository <User, Long> {

    Optional<User> findByUsername(String userame);

    Optional<User> findByUsernameAndPassword(String username, String password);

    Optional<User> findById(long id);
}
