package com.example.msdocente.repository;

import com.example.msdocente.entity.Docente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DocenteRepository extends JpaRepository<Docente,Integer> {
}
