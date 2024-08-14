package com.alumni.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alumni.entity.Event;
import com.alumni.entity.EventRegistration;
import com.alumni.entity.Student;
import com.alumni.exception.ResourceNotFoundException;
import com.alumni.repository.EventRegistrationRepository;
import com.alumni.repository.EventRepository;
import com.alumni.repository.StudentRepository;

@Service
public class EventServiceImpl implements EventService {

	@Autowired
	private EventRepository eventRepo;
	
	@Autowired
	private StudentRepository studentRepo;
	
	@Autowired
	private EventRegistrationRepository registrationRepo;

	/*
	 * @Autowired private JavaMailSender mailSender;
	 */

	// to add event
	@Override
	public Event addEvent(Event event) {
		// TODO Auto-generated method stub
		return eventRepo.save(event);
	}

	@Override
	public Event updateEvent(Long id, Event updateEvent) {
		// TODO Auto-generated method stub

		Event event = eventRepo.findById(id).orElseThrow(() -> new RuntimeException("Event Not Found!!"));
		event.setEventName(updateEvent.getEventName());
		event.setEventDate(updateEvent.getEventDate());
		event.setEventLocation(updateEvent.getEventLocation());
		event.setEventDescription(updateEvent.getEventDescription());
		return eventRepo.save(event);
		// return null;
	}

	@Override
	public List<Event> getAllEvent() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void DeleteEventById(Long id) {
		// TODO Auto-generated method stub

		eventRepo.deleteById(id);

	}

	// event notification

	@Override
	public Event createEventRequest(Event event) {
		// TODO Auto-generated method stub
		Event eventRequest = eventRepo.save(event);
		sendNotification(eventRequest);
		return eventRequest;
	}

	@Override
	public void sendNotification(Event event) {
		// TODO Auto-generated method stub

	}

	@Override
	public List<Event> getAllRequest(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void eventRegistration(Long eventId, Long studentId) {
		// TODO Auto-generated method stub

		Event event = eventRepo.findById(eventId)
				.orElseThrow(() -> new ResourceNotFoundException("Event not found"));
		Student student = studentRepo.findById(studentId)
				.orElseThrow(() -> new ResourceNotFoundException("Student not found"));

		EventRegistration registration = new EventRegistration();
		registration.setEvent(event);
        registration.setStudent(student);
        registration.setRegistrationDate(LocalDateTime.now());
		

		registrationRepo.save(registration);

	}

}
