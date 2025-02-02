# Chat Application

## Overview
This is a chat application that allows users to log in or create an account, engage in group chats, and send private messages. The application features a hacker-themed aesthetic and displays user information in the corner of the interface.

## Features
- User login and account creation
- Group chat functionality with link generation for joining
- Private chat options
- Hacker-themed design
- User information display

## Project Structure
```
chat-app
├── public
│   ├── css
│   │   └── styles.css
│   ├── js
│   │   └── main.js
│   └── index.html
├── src
│   ├── controllers
│   │   └── chatController.js
│   ├── models
│   │   └── userModel.js
│   ├── routes
│   │   └── chatRoutes.js
│   ├── views
│   │   └── chat.ejs
│   └── app.js
├── package.json
├── .gitignore
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd chat-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
1. Start the server:
   ```
   npm start
   ```
2. Open your browser and go to `http://localhost:3000` to access the chat application.

## Contributing
Feel free to submit issues or pull requests for improvements and bug fixes.

## License
This project is licensed under the MIT License.