package hu.noSignal.noSignal.Controller.Services.Annotations;

import hu.noSignal.noSignal.Modell.User;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)     //available runtime
@Target(ElementType.METHOD)             //we will use the authentication on methods
public @interface Role {
    User.Role[] value() default {User.Role.GUEST};
}
