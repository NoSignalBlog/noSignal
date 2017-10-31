package hu.noSignal.noSignal.Controller;

import hu.noSignal.noSignal.Controller.Services.UserService;
import hu.noSignal.noSignal.Modell.Exceptions.UserException;
import hu.noSignal.noSignal.Modell.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static hu.noSignal.noSignal.Modell.User.Role.USER;

@RestController
@RequestMapping("/usr")
public class UserController {

    private static final String LOG_OUT = "LOGGED_OUT";

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    private ResponseEntity<User> register(@RequestBody User user) {
        try {
            User registeredUser = userService.register(user);
            return ResponseEntity.ok(registeredUser);
        } catch (UserException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/login")
    private ResponseEntity<User> login(@RequestBody User user) {
        try {
            User loggedInUser = userService.login(user);
            return ResponseEntity.ok(loggedInUser);
        }catch (UserException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/logout")
    private ResponseEntity<String> logout(@RequestBody User user) {
        try {
            userService.logout();
            return ResponseEntity.ok(LOG_OUT);
        } catch (UserException e) {
            return ResponseEntity.badRequest().build();
        }
    }
}