# Registration Form Backend

This is the backend server for the registration form application built with Node.js, Express, and MongoDB.

## Prerequisites

1. Node.js (v14 or higher)
2. MongoDB Atlas Account (free tier available)

## Setup Instructions

1. Install dependencies:
   ```
   npm install
   ```

2. Set up MongoDB Atlas:
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a free account
   - Create a new cluster
   - Create a database named `registrationdb`
   - Whitelist your IP address (or allow access from anywhere for development)
   - Create a database user with read/write permissions
   - Get your connection string

3. Configure environment variables:
   - Create a `.env` file in the root directory
   - Set `MONGODB_URI` to your MongoDB Atlas connection string
   - Replace `<username>`, `<password>`, and `<cluster-url>` with your actual credentials
   - Example format:
     ```
     MONGODB_URI=mongodb+srv://myuser:mypassword@cluster0.abc123.mongodb.net/registrationdb?retryWrites=true&w=majority
     ```
   - Set `PORT` to your desired port (default is 5000)

4. Start the development server:
   ```
   npm run dev
   ```

5. Build for production:
   ```
   npm start
   ```

## API Endpoints

- `POST /api/register` - Register a new user
- `GET /` - Health check endpoint

## Data Model

The user data is stored in MongoDB with the following schema:

```javascript
{
  firstName: String,
  lastName: String,
  gender: String,
  email: String,
  address: String,
  city: String,
  dateOfBirth: Date
}
```