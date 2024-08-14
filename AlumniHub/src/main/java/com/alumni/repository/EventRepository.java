package com.alumni.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alumni.entity.Event;

@Repository
public interface EventRepository extends JpaRepository<Event, Long>{

}
