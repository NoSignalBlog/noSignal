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
@EqualsAndHashCode(callSuper = true)
@Table(name = "POSTS")
public class Post extends BaseEntity {

    @JoinColumn (name = "username", referencedColumnName = "username")
    @ManyToOne(targetEntity = User.class)
    private User user;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private long userid;

    @Column(nullable = false)
    private boolean visibility;

    @Column(nullable = false)
    private int likes;

    @Column(nullable = false)
    private String text;

    @Column(nullable = false)
    private Timestamp date;

    @Column
    private String videos;

    @Column
    private String links;
}
