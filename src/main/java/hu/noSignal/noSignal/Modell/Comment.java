package hu.noSignal.noSignal.Modell;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.sql.Timestamp;

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
}
