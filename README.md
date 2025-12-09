# Registration Form Application

This is a full-stack registration form application with a React frontend and Node.js/Express backend with MongoDB Atlas storage.

## Project Structure

- `/frontend` - React application with TailwindCSS
- `/backend` - Node.js/Express server with MongoDB Atlas integration

## Features

- User registration form with validation
- Responsive design using TailwindCSS
- RESTful API for data submission
- MongoDB Atlas storage for user data

## Setup Instructions

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure MongoDB Atlas connection string in `.env` file:
   - Sign up for a free MongoDB Atlas account at [mongodb.com](https://www.mongodb.com/cloud/atlas)
   - Create a cluster and database
   - Obtain your connection string
   - Add it to the `.env` file as `MONGODB_URI`

4. Start the development server:
   ```
   npm run dev
   ```

## Usage

1. Start both frontend and backend servers
2. Open your browser and navigate to the frontend URL (typically http://localhost:5173)
3. Fill out the registration form and submit
4. Data will be stored in MongoDB Atlas

## Technologies Used

- Frontend: React, TailwindCSS, Vite
- Backend: Node.js, Express
- Database: MongoDB Atlas