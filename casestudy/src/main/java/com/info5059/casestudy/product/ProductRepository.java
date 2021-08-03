package com.info5059.casestudy.product;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import javax.transaction.Transactional;

@Repository
@CrossOrigin
@RepositoryRestResource(collectionResourceRel = "products", path = "products")
public interface ProductRepository extends CrudRepository<Product, String> {
    // will return the number of rows deleted
    @Modifying
    @Transactional
    @Query("delete from Product where Id = ?1")
    Integer deleteOne(String productid);

}



