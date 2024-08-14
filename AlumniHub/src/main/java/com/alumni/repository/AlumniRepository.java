package com.alumni.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alumni.entity.Alumni;

@Repository
public interface AlumniRepository extends JpaRepository<Alumni, Long> {
	
	  Optional<Alumni> findOneByEmailAndPassword(String emailId, String password);
	  Alumni findByEmail(String emailId);

}
