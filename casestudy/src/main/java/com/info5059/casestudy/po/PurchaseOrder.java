package com.info5059.casestudy.po;

import com.fasterxml.jackson.annotation.JsonFormat;
import javax.persistence.CascadeType;
import javax.persistence.*;
import javax.persistence.GeneratedValue;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Entity
@Data
@RequiredArgsConstructor
public class PurchaseOrder {
    // PurchaseOrder private members
    @Id
    @GeneratedValue
    private Long Id;
    private Long vendorid;
    private BigDecimal amount;
    //    @JsonFormat(pattern="yyyy-MM-dd")
    @JsonFormat(pattern="yyyy-MM-dd@HH:mm:ss")
    private Date podate;
    @OneToMany(mappedBy = "po", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<PurchaseOrderLineitem> items = new ArrayList<PurchaseOrderLineitem>();
}
