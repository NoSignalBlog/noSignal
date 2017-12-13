package hu.noSignal.noSignal.Modell;

import lombok.Data;

import javax.persistence.*;

@MappedSuperclass
@Data
public class BaseEntity {

    @Id
    @GeneratedValue (strategy = GenerationType.SEQUENCE)
    private long id;

    @Version
    private int version;
}
