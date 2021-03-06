package hu.noSignal.noSignal.Controller.Services;

import hu.noSignal.noSignal.Controller.Util.BCrypt;
import hu.noSignal.noSignal.Modell.Exceptions.UserException;
import hu.noSignal.noSignal.Modell.Repositories.UserRepository;
import hu.noSignal.noSignal.Modell.User;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;

import javax.swing.text.html.Option;
import java.sql.Timestamp;
import java.util.Calendar;
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


    private String encryptPassword(String password) {
        return BCrypt.hashpw(password, BCrypt.gensalt());
    }

    private boolean matchPassword(String candidate, String hashed) {
        return BCrypt.checkpw(candidate, hashed);
    }

    public User register(User user) throws UserException {
        user.setRole(USER);
        user.setRegisterdate(new Timestamp(System.currentTimeMillis()));
        user.setPassword(encryptPassword(user.getPassword()));
        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            throw new UserException();
        }
        userRepository.save(user);

        return user;
    }

    public User login(User user) throws UserException {
        Optional<User> userToLogin = userRepository.findByUsername(user.getUsername());
        if (userToLogin.isPresent() && matchPassword(user.getPassword(), userToLogin.get().getPassword())) {
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
            //userToUpdate.setPassword(user.getPassword());
            userToUpdate.setProfilepicture(user.getProfilepicture());
            //userToUpdate.setPosts(user.getPosts());
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
            userToGet.setPassword("");
            return userToGet;
        } else {
            throw new UserException();
        }
    }

    public User findUserById(long id) throws UserException {
        User foundUser = userRepository.findOne(id);
        if (foundUser != null) {
            foundUser.setPassword("");
            return foundUser;
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

    public boolean checkPassword(User user) {
        Optional<User> userToCheck = userRepository.findByUsername(user.getUsername());
        return userToCheck.isPresent() && matchPassword(user.getPassword(), userToCheck.get().getPassword());
    }

    public Boolean changePassword(User user) throws UserException {
        Optional<User> userToModify = userRepository.findByUsername(user.getUsername());
        if (userToModify.isPresent()) {
            User modifiedUser = userToModify.get();
            modifiedUser.setPassword(encryptPassword(user.getPassword()));
            if (this.user.getId() == modifiedUser.getId()) {
                this.user.setPassword(modifiedUser.getPassword());
            }
            userRepository.save(modifiedUser);
            return new Boolean(true);
        } else {
            throw new UserException();
        }
    }
}
