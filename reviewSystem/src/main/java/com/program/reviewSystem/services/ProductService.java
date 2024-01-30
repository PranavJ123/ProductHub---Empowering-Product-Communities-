package com.program.reviewSystem.services;

import com.program.reviewSystem.model.Message;
import com.program.reviewSystem.model.ProductRequest;

import java.util.List;

public interface ProductService {

    public List<ProductRequest> getProducts();

    public ProductRequest getProductById(long productId);

List<ProductRequest> getProductsByCriteria(String name, String code, String brand);
    public Message addProduct(ProductRequest productRequest);

    public long totalProducts();

}
