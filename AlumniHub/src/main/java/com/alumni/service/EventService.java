package com.alumni.service;

import java.util.List;

import com.alumni.entity.Event;

public interface EventService {

	public Event addEvent(Event event);
	public Event updateEvent(Long id, Event updateEvent);
	public List<Event> getAllEvent();
	public void DeleteEventById(Long id);
	
	//to notify event manager
	public Event createEventRequest(Event event);
	public void sendNotification(Event event);
	public List<Event> getAllRequest(Long id);
	
	//student registration for the event
	public void eventRegistration(Long eventId, Long studentId);
}
