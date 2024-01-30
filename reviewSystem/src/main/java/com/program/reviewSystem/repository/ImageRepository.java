package com.program.reviewSystem.repository;

import com.program.reviewSystem.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {

    public List<Image> findByProductId(long productId);

}
