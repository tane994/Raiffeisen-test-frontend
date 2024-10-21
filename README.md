# Raiffeisen Note App Frontend

This project is a React-based frontend for a note-taking application. It allows users to create, view, edit, and delete notes.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm (Node Package Manager)
- You have a Windows/Linux/Mac machine

## Installing Raiffeisen Note App Frontend

To install the Raiffeisen Note App Frontend, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/tane994/Raiffeisen-test-frontend.git
   ```
2. Navigate to the project directory:
   ```
   cd Raiffeisen-test-frontend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Using Raiffeisen Note App Frontend

To use the Raiffeisen Note App Frontend, follow these steps:

1. Ensure that the backend server is running (see backend README for instructions)
2. Start the development server:
   ```
   npm run dev
   ```
3. Open your web browser and navigate to `http://localhost:5173` (or the port specified in the console output)

## Features

- Create new notes with a title and content
- View a list of all notes
- Edit existing notes
- Delete notes

## Architecture

The Raiffeisen Note App follows a client-server architecture. Here's an overview of the system:

![Architecture - Raiffeisen Note App](https://github.com/user-attachments/assets/c41e7777-161b-4000-9295-8ead15b5118b)

```
[Client Side]
    |
    | (HTTP Requests)
    v
[API Layer]
    |
    v
[Service Layer]
    |
    v
[Data Access Layer]
    |
    v
[Database]
```

- **Client Side**: The frontend is built using React, providing a user interface for interacting with notes.
- **API Layer**: Handles HTTP requests (GET, POST, PUT, DELETE) between the client and server.
- **Service Layer**: Contains the business logic of the application.
- **Data Access Layer**: Manages data persistence and retrieval from the database.
- **Database**: Stores all the note data.

The frontend (this repository) represents the Client Side in this architecture, communicating with the backend server through HTTP requests to the API Layer.
