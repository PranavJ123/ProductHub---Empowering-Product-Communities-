package com.program.reviewSystem.services;

import com.program.reviewSystem.model.Message;
import com.program.reviewSystem.model.ReviewRequest;
import com.program.reviewSystem.model.ReviewRequestStatus;

import java.util.List;

public interface ReviewRequestService {

    public Message request(ReviewRequest request);

    public Message approve(ReviewRequest request);

    public Message reject(ReviewRequest request);

    public ReviewRequestStatus getStatusById(long id);

    public List<ReviewRequest> status(long uid);
    public void setRequestAsReviewed(long requestId);
    public List<ReviewRequest> getAllRequests();

}
