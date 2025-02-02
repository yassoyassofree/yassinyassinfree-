// /d:/cheateas and un blockers/new/chat-app/public/js/main.js

const socket = io();

// Elements
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const messageContainer = document.getElementById('message-container');

// Event listener for form submission
messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    if (message) {
        socket.emit('chatMessage', message);
        messageInput.value = '';
    }
});

// Listen for chat messages from server
socket.on('chatMessage', (message) => {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageContainer.appendChild(messageElement);
});