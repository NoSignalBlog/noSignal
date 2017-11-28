package hu.noSignal.noSignal.Controller.Services;

import hu.noSignal.noSignal.Modell.Exceptions.UserException;
import hu.noSignal.noSignal.Modell.Repositories.UserRepository;
import hu.noSignal.noSignal.Modell.User;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;

import java.util.Optional;

import static hu.noSignal.noSignal.Modell.User.Role.ADMIN;
import static hu.noSignal.noSignal.Modell.User.Role.USER;

@Service
@SessionScope
@Data
public class UserService {

    @Autowired
    private UserRepository userRepository;

    private User user;

    public Iterable<User> listAll() {
        return userRepository.findAll();
    }

    public boolean isLoggedIn() {
        return this.user != null;
    }

    public User register(User user) throws UserException {
        user.setRole(USER);
        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            throw new UserException();
        }
        this.user = userRepository.save(user);

        return user;
    }

    public User login(User user) throws UserException {
        Optional<User> userToLogin = userRepository.findByUsernameAndPassword(user.getUsername(), user.getPassword());
        if (userToLogin.isPresent()) {
            this.user = userToLogin.get();
            if ( this.user.getRole() == ADMIN ) {
                this.user.setRole(ADMIN);
            } else {
                this.user.setRole(USER);
            }
            return userToLogin.get();
        } else {
            throw new UserException();
        }
    }

    public void logout() throws UserException {
        if (this.user == null) {
            throw new UserException();
        }
        this.user = null;
    }

    public User update(long id, User user) throws UserException {
        if (this.user == null) {
            throw new UserException();
        }

        User userToUpdate = userRepository.findOne(id);
        if (userToUpdate != null) {
            userToUpdate.setEmail(user.getEmail());
            userToUpdate.setFirstname(user.getFirstname());
            userToUpdate.setLastname(user.getLastname());
            userToUpdate.setPassword(user.getPassword());
            userToUpdate.setProfilepicture(user.getProfilepicture());
            userToUpdate.setPosts(user.getPosts());
            userRepository.save(userToUpdate);
            this.user = userToUpdate;
            return userToUpdate;
        } else {
            throw new UserException();
        }
    }


    public User searchUser(long id, User user) throws UserException {
        if (this.user == null) {
            throw new UserException();
        }
        User userToGet = userRepository.findOne(id);
        if ( userToGet != null ) {
            return userToGet;
        } else {
            throw new UserException();
        }
    }

    public User delete(long id, User user) throws UserException {
        if (this.user == null) {
            throw new UserException();
        }
        User userToDelete = userRepository.findOne(id);
        if (userToDelete != null) {
            userRepository.delete(userToDelete);
            return userToDelete;
        } else {
            throw new UserException();
        }
    }
}
