package hu.noSignal.noSignal.Controller.Services;

import hu.noSignal.noSignal.Modell.Exceptions.UserException;
import hu.noSignal.noSignal.Modell.Repositories.UserRepository;
import hu.noSignal.noSignal.Modell.User;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;

import java.util.Optional;

import static hu.noSignal.noSignal.Modell.User.Role.USER;

@Service
@SessionScope
@Data
public class UserService {

    @Autowired
    private UserRepository userRepository;

    private User user;

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
            return userToLogin.get();
        } else {
            throw new UserException();
        }
    }
}
