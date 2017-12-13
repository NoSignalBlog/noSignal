package hu.noSignal.noSignal.Modell;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;

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
    private String lastname;

    @Column(nullable = false)
    private String firstname;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;

    @Column(nullable = false)
    private Timestamp registerdate;

    @Column()
    private String profilepicture;

    //@JoinColumn
    //@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, targetEntity = Post.class)
    //private List<Post> posts;

    public enum Role {
        GUEST, USER, ADMIN
    }
}
