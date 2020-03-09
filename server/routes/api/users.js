const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Получаем пользователя
router.get('/', async (req, res) => {
    const users = await loadUsersCollection();
    res.send(await users.find({}).toArray());
});

// Добавляем пользователя

// Удаляем пользователя

async function loadUsersCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb://localhost:27017/cash-control', {
        useNewUrlParser: true
    });

    return client.db('cash-control').collection('users');
}

module.exports = router;