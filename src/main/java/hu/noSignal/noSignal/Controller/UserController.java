package hu.noSignal.noSignal.Controller;

import hu.noSignal.noSignal.Controller.Services.UserService;
import hu.noSignal.noSignal.Modell.Exceptions.UserException;
import hu.noSignal.noSignal.Modell.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/usr")
public class UserController {

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
}
