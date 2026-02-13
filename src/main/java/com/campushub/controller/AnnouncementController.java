package com.campushub.controller;

import com.campushub.model.Announcement;
import com.campushub.repository.AnnouncementRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;




@RestController



@RequestMapping("/api/announcements")
public class AnnouncementController {

    private final AnnouncementRepository repository;

    public AnnouncementController(AnnouncementRepository repository) {
        this.repository = repository;
    }
    @GetMapping("/ping")
    public String ping() {
        return "announcements alive";
    }
    @GetMapping
    public List<Announcement> getAll() {
        return repository.findAll();
    }

    @PostMapping
    public Announcement create(@RequestBody Announcement announcement) {
        return repository.save(announcement);
    }
}
