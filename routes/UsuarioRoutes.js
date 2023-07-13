const express = require('express');
const api = express.Router();

const Usuarios = [
    { id: 1, nombre: 'Juan Perez', edad: 18 },
    { id: 2, nombre: 'Elias Ayub', edad: 70 },
    { id: 3, nombre: 'Pedro Picapiedra', edad: 30 },
    { id: 4, nombre: 'Pablo Novelo', edad: 25 },
    { id: 5, nombre: 'Roberto Can', edad: 38 },
];
api.get('/usuarios', (req, res) => {
    res.json({ usuarios: Usuarios });
});
api.get('/usuarios/:id', (req, res) => {
    // const productobyid = productos.filter((producto) => producto.id === Number(req.params.id));
    // res.json({ productobyid: productobyid });
    const id = Number(req.params.id);
    const user = Usuarios.find((p) => p.id === id);
    res.json({ usuarios: user });
});

api.post('/usuarios', (req, res) => {
    const { nombre, edad } = req.body;
    const id = Usuarios.length + 1;
    const newUsuario = { id, nombre, edad };
    Usuarios.push(newUsuario);
    res.json({ usuarios: Usuarios });
});

// api.delete('/usuarios/:id', (req, res) => {
//     const id = Number(req.params.id);
//     const user = Usuarios.filter((p) => p.id !== id);
//     res.json({ usuarios: user });
// });

api.delete('/usuarios/:id', (req, res) => {
    const { id } = req.params
    const user = Usuarios.find((p) => p.id == id)
    const index = Usuarios.indexOf(user)
    Usuarios.splice(index, 1)
    res.json(Usuarios)
})


// Endpoints de la API - CRUD


module.exports = api;