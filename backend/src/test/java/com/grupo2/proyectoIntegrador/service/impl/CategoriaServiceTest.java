package com.grupo2.proyectoIntegrador.service.impl;

import com.grupo2.proyectoIntegrador.model.Categoria;
import com.grupo2.proyectoIntegrador.service.ICategoriaService;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Set;


@SpringBootTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class CategoriaServiceTest {

    @Autowired
    private ICategoriaService categoriaService;


    @Test
    @Order(1)
    void crearCategoria(){
        Categoria categoria = new Categoria();
        categoria.setTitulo("All Inclusive");
        categoria.setDescripcion("Disfrutá de todos los servicios de nuestros hoteles sin gastos adicionales. Todo incluido!");
        categoria.setUrlImagen("https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749");

        Categoria allInclusive = categoriaService.crearCategoria(categoria);


        Assertions.assertNotNull(categoriaService.buscarCategoria(allInclusive.getId()));
    }

    @Test
    @Order(2)
    void modificarCategoria() {

        Categoria categoria = new Categoria();
        categoria.setTitulo("BnB");
        categoria.setDescripcion("Soy un Bed and Breakfast");
        categoria.setUrlImagen("https://images.unsplash.com/photo-1648737153811-69a6d8c528bf?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470");

        Categoria bedAndBreakfast = categoriaService.crearCategoria(categoria);

        bedAndBreakfast.setTitulo("Bed and Breakfast");

        categoriaService.modificarCategoria(bedAndBreakfast);

        Assertions.assertEquals("Bed and Breakfast", categoriaService.buscarCategoria(bedAndBreakfast.getId()).getTitulo());

    }

    @Test
    @Order(3)
    void eliminarOdontologo() {

        Set<Categoria> categorias = categoriaService.listarCategorias();

        for (Categoria categoria: categorias) {
            categoriaService.eliminarCategoria(categoria.getId());
        }

        Assertions.assertTrue(categoriaService.listarCategorias().isEmpty());
    }

}