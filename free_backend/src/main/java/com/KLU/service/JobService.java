package com.KLU.service;

import com.KLU.model.Job;
import com.KLU.repository.JobRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService {
    private final JobRepo jobRepo;
    public JobService(JobRepo jobRepo) {
        this.jobRepo = jobRepo;
    }

    public Job postJob(Job job) {
        return jobRepo.save(job);
    }

    public List<Job> getAllJobs() {
        return jobRepo.findAll();
    }
}
