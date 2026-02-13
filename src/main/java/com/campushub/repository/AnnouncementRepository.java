package com.campushub.repository;

import com.campushub.model.Announcement;
import com.campushub.repository.AnnouncementRepository;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnnouncementRepository extends JpaRepository<Announcement, Long> {
}
