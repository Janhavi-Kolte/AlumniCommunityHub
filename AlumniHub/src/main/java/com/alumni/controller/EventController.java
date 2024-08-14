package com.alumni.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alumni.dto.EventDTO;
import com.alumni.entity.Event;
import com.alumni.service.EventService;

@RestController
@RequestMapping("/events")
@CrossOrigin(origins = "http://localhost:3000")
public class EventController {

	@Autowired
	private EventService eventService;

	@PostMapping
	public ResponseEntity<Event> addEvent(@RequestBody Event event) {

		Event createEvent = eventService.addEvent(event);
		return new ResponseEntity<>(createEvent, HttpStatus.CREATED);

	}

	@PutMapping("/{id}")
	public ResponseEntity<Event> updateEvent(@PathVariable Long id, @RequestBody Event updateEvent) {
		Event event = eventService.updateEvent(id, updateEvent);
		return new ResponseEntity<>(event, HttpStatus.OK);
	}

	@GetMapping("/all")
	public ResponseEntity<List<Event>> getAllEvents() {

		List<Event> events = eventService.getAllEvent();
		return new ResponseEntity<>(events, HttpStatus.OK);
	}

	@DeleteMapping("/alumni/{id}")
	public ResponseEntity<Event> deleteEvent(@PathVariable Long id) {
		eventService.DeleteEventById(id);
		return ResponseEntity.noContent().build();
	}
	
	//for notification
	@PostMapping("/create")
	public ResponseEntity<Event> createEventRequest(@RequestBody Event event){
		
		Event request = eventService.createEventRequest(event);
		return ResponseEntity.ok(request);
	}
	
	//to regsiter for the event
	@PostMapping("/{eventId}/register")
    public ResponseEntity<String> registerForEvent(@PathVariable Long eventId, @RequestBody Long studentId) {
        eventService.eventRegistration(eventId, studentId);
        return ResponseEntity.ok("Student registered for the event successfully!");
    }
}
