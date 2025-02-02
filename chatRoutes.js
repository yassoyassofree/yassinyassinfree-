const express = require('express');
const router = express.Router();
const ChatController = require('../controllers/chatController');
const chatController = new ChatController();

// User login route
router.post('/login', chatController.loginUser);

// User account creation route
router.post('/register', chatController.createUser);

// Group chat link generation route
router.post('/group-chat', chatController.generateGroupLink);

// Private messaging route
router.post('/private-message', chatController.sendMessage);

module.exports = router;