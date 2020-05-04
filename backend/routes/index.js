var express = require('express');
var router = express.Router();
const data = require('../models/dbConnection');

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// Get all users
router.get('/get_users', (request, response) => {
    data.query('SELECT * FROM users', (error, result) => {
        if (error) throw error;

        response.send(result);
    });
});

// Get user by id
router.get('/users/:id', (request, response) => {
    const id = request.params.id;

    data.query('SELECT * FROM users WHERE id = ?', id, (error, result) => {
        if (error) throw error;

        response.send(result);
    });
});

// Add a new user
router.post('/add_user', (request, response) => {
    data.query('INSERT INTO users SET ?', request.body, (error, result) => {
        if (error) throw error;

        response.status(201).send(`User added with ID: ${result.insertId}`);
    });
});

// Update an existing user
router.put('/update_user/:id', (request, response) => {
    const id = request.params.id;

    data.query('UPDATE users SET ? WHERE id = ?', [request.body, id], (error, result) => {
        if (error) throw error;

        response.send('User updated successfully.');
    });
});

// Delete a user
router.delete('/delete_user/:id', (request, response) => {
    const id = request.params.id;

    data.query('DELETE FROM users WHERE id = ?', id, (error, result) => {
        if (error) throw error;
        response.send('User deleted successfully.');
    });
});

module.exports = router;
