import express from 'express';
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';

// Mock database
let users = [];

// Getting the list of users from the mock database
router.get('/', (req, res) => {
    res.send(users);
})

//Creating a new User 
router.post('/', (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(`User with the name ${user.first_name} added to the database!`);
})

//get a single user by id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);

    if (!foundUser) {
        return res.status(404).send(`User with id ${id} not found`);
    }
    res.send(`User with the id ${id} is ${foundUser.first_name}`);
});

//delete a user
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex((user) => user.id === id);

    // Check if user exists
    if (userIndex === -1) {
        return res.status(404).send(`User with the id ${id} not found`);
    }

    // Remove user
    users.splice(userIndex, 1);

    res.send(`User with the id ${id} deleted from the database`);
});


//update a user
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, age } = req.body;

    const user = users.find((user) => user.id === id);

    // Check if user exists
    if (!user) {
        return res.status(404).send(`User with the id ${id} not found`);
    }
    if (first_name) {
        user.first_name = first_name;
    }
    if (last_name) {
        user.last_name = last_name;
    }
    if (age) {
        user.age = age;
    }
    res.send(`User with the id ${id} has been updated`);
});

export default router;
