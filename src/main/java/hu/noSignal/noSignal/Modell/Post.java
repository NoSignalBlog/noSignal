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
public class Post extends BaseEntity{

    @Column(nullable = false) //TODO: let it be unique?
    private long user_id;

    @Enumerated(EnumType.STRING)
    @Column (nullable = false)
    private Visibility visibility;

    @Column (nullable = false)
    private int num_of_likes;

    @Column (nullable = false)
    private String text;

    @Column(nullable = false)
    private Timestamp post_date;

    @Column(nullable = false)
    private long comment_id;

    public enum Visibility {
        PUBLIC, PRIVATE
    }
}
