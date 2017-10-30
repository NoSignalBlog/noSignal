package hu.noSignal.noSignal.Modell;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode (callSuper = true)
@Table(name = "USERS")
public class User extends BaseEntity {

    @Column(nullable = false, unique = true)
    private String username;

    @Column (nullable = false)
    private String lastName;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;

    @Column(nullable = false)
    private Timestamp registerDate;

    @Column
    private String profilePicture;

    public enum Role {
        GUEST, USER, ADMIN
    }
}
