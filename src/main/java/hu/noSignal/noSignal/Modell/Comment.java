package hu.noSignal.noSignal.Modell;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
@EqualsAndHashCode(callSuper = true)
@Table(name = "COMMENTS")
public class Comment extends BaseEntity {

    @Column(nullable = false)
    private long postid;

    @Column(nullable = false)
    private long userid;

    @Column(nullable = false)
    private Timestamp date;

    @Column(nullable = false)
    private String text;

    @Column
    private String username;

    @JsonIgnore
    @JoinColumn(name = "post", referencedColumnName = "id")
    @ManyToMany(targetEntity = Post.class)
    private List<Post> posts;
}
