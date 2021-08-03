package com.info5059.casestudy.product;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

/**
 * Product entity
 */
@Entity
@Data
@RequiredArgsConstructor
public class Product {
    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    private String Id;
    private int vendorid;
    private String name;
    private BigDecimal costprice;
    private BigDecimal msrp;
    private int rop;
    private int eoq;
    private int qoh;
    private int qoo;
    //private String qrcode;
    private String qrcodetxt;
    // needed in case 2
//    @Basic(optional = true)
//    @Lob
    private String dateincurred;
    // needed in case 2
    @Lob
    @Basic(optional = true)
    private byte[] qrcode;
    private String receiptscan;


}


//• costprice – is what we purchase the good for, make sure it is lower than MSRP which is what we sell it for
//• rop – is the Reorder Point, when stock falls to this # we re-order the good
//• eoq – is the Economic Order Quantity this is a value calculated by some bean counter who has figured out that it makes most economic sense to order this amount. This value will be smaller for say a fridge than it would for a good like a thumb tack
//• qoh – Quantity on Hand, what we have in inventory
//• qoo – Quantity on Order. what we have ordered but not received
//• qrcode – we’ll use this in case 2
//• qrcodetxt – we’ll use this case 2

