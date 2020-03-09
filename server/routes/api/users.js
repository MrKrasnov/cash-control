const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Получаем пользователя
router.get('/', async (req, res) => {
    const users = await loadUsersCollection();
    res.send(await users.find({}).toArray());
});

// Добавляем пользователя
router.post('/', async (req, res) => {
    const users = await loadUsersCollection();
    await users.insertOne({
        login: req.body.login,
        password: req.body.password
    });
    res.status(201).send();
});
// Удаляем пользователя
router.delete('/:id', async (req, res) => {
    const users = await loadUsersCollection();
    await users.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
    res.status(200).send();
});



async function loadUsersCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb://localhost:27017/cash-control', {
        useNewUrlParser: true
    });

    return client.db('cash-control').collection('users');
}

module.exports = router;