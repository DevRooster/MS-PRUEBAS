package com.example.msdocente.controller;

import com.example.msdocente.entity.Docente;
import com.example.msdocente.service.DocenteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/docente")
public class DocenteController {
    @Autowired
    private DocenteService docenteService;

    @GetMapping
    public ResponseEntity<List<Docente>> listar() {
        return ResponseEntity.ok(docenteService.listar());
    }

    @PostMapping
    public ResponseEntity<Docente> guardar(@RequestBody Docente docente) {
        return ResponseEntity.ok(docenteService.guardar(docente));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Docente> buscarPOrId(@PathVariable(required = true) Integer id) {
        return ResponseEntity.ok(docenteService.buscarPorId(id).get());
    }

    @PutMapping
    public ResponseEntity<Docente> actualizar(@RequestBody Docente docente) {
        return ResponseEntity.ok(docenteService.actualizar(docente));

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<List<Docente>>  eliminar(@PathVariable(required = true) Integer id) {
        docenteService.eliminar(id);
        return ResponseEntity.ok(docenteService.listar());
    }
}
