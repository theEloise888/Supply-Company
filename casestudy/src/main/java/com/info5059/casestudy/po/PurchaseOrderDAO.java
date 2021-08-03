package com.info5059.casestudy.po;
import org.springframework.stereotype.Component;
import javax.persistence.EntityManager;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import javax.persistence.PersistenceContext;
import java.util.Date;
@Component
public class PurchaseOrderDAO {
    @PersistenceContext
    private EntityManager entityManager;

    @Transactional
    public Long create(PurchaseOrder clientrep) {
        PurchaseOrder realPurchaseOrder = new PurchaseOrder();
        realPurchaseOrder.setVendorid(clientrep.getVendorid());
        realPurchaseOrder.setAmount(clientrep.getAmount());
        realPurchaseOrder.setPodate(new Date());
        entityManager.persist(realPurchaseOrder);

        for(PurchaseOrderLineitem item:clientrep.getItems()) {
            PurchaseOrderLineitem realItem = new PurchaseOrderLineitem();
            realItem.setPo(realPurchaseOrder.getId());
            realItem.setProductid(item.getProductid());
            realItem.setQty(item.getQty());
            realItem.setCostprice(item.getCostprice());
            realItem.setPrice(item.getPrice());
            entityManager.persist(realItem);
        }
        return realPurchaseOrder.getId();
    }

    public PurchaseOrder findOne(Long id) {
        PurchaseOrder purchaseOrder = entityManager.find(PurchaseOrder.class, id);
        if (purchaseOrder == null) {
            throw new EntityNotFoundException("Can't find report for ID "
                    + id);
        }
        return purchaseOrder;
    }

    public Iterable<PurchaseOrder> findByPO(Long poId) {
        return entityManager.createQuery("select r from PurchaseOrder r where r.Id = :id")
                .setParameter("id", poId)
                .getResultList();
    }

}
