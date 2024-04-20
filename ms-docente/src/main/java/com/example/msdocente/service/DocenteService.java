package com.example.msdocente.service;

import com.example.msdocente.entity.Docente;

import java.util.List;
import java.util.Optional;

public interface DocenteService {

    public List<Docente> listar();

    public Docente guardar(Docente docente);

    public Optional<Docente> buscarPorId(Integer id);

    public Docente actualizar(Docente docente);

    public void eliminar(Integer id);
}
