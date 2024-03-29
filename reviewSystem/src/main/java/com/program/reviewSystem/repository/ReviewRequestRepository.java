package com.program.reviewSystem.repository;

import com.program.reviewSystem.model.ReviewRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRequestRepository extends JpaRepository<ReviewRequest, Long> {

    public List<ReviewRequest> findByUid(long uid);

    public List<ReviewRequest> findByUidAndProductId(long uid, long productId);

}
