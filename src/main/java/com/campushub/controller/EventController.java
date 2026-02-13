package com.campushub.controller;

import com.campushub.model.Event;
import com.campushub.repository.EventRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/events")
public class EventController {

    private final EventRepository repository;

    public EventController(EventRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Event> getAll() {
        return repository.findAll();
    }

    @PostMapping
    public Event create(@RequestBody Event event) {
        return repository.save(event);
    }
}

