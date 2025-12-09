# Testing the Registration Form Application

## How to Test the Complete Registration Flow

### Prerequisites
1. Make sure both frontend and backend servers are running
2. Your browser is up to date
3. MongoDB Atlas account with connection string configured

### Steps to Test

1. **Configure MongoDB Atlas**
   - Sign up for a free MongoDB Atlas account at [mongodb.com](https://www.mongodb.com/cloud/atlas)
   - Create a cluster and database named `registrationdb`
   - Obtain your connection string
   - Update the `.env` file in the backend directory with your connection string:
     ```
     MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>.mongodb.net/registrationdb?retryWrites=true&w=majority
     ```

2. **Start the Backend Server**
   - Open a terminal in the `backend` directory
   - Run: `npm run dev`
   - The server should start on port 5000
   - You should see "MongoDB Atlas connected successfully" in the terminal

3. **Start the Frontend Server**
   - Open a terminal in the `frontend` directory
   - Run: `npm run dev`
   - The server should start on port 5174 (or another available port)
   - Note the URL displayed in the terminal (e.g., http://localhost:5174/)

4. **Access the Registration Form**
   - Open your browser and navigate to the frontend URL
   - You should see the registration form with the following fields:
     - First Name
     - Last Name
     - Gender (dropdown)
     - Email
     - Address
     - City
     - Date of Birth

5. **Fill Out the Form**
   - Enter valid data in all fields
   - Select a gender from the dropdown
   - Enter a valid email address
   - Select a date of birth

6. **Submit the Form**
   - Click the "Register" button
   - If both servers are running correctly:
     - Data will be saved to your MongoDB Atlas database
     - You'll see an alert "Registration successful!"

7. **Verify the Submission**
   - Check the backend terminal for confirmation messages
   - Confirm the success alert appears in the browser
   - Verify data is stored in your MongoDB Atlas database

### Troubleshooting

**If you see "Registration failed!" alert:**
- Check that both frontend and backend servers are running
- Verify there are no network errors in the browser's developer console
- Ensure the backend API endpoint is accessible (http://localhost:5000/api/register)
- Check the backend terminal for MongoDB connection errors

**If MongoDB Atlas connection errors appear in backend terminal:**
- Verify your connection string in the `.env` file is correct
- Ensure your IP address is whitelisted in MongoDB Atlas
- Confirm your database username and password are correct
- Check that your MongoDB Atlas cluster is active

### MongoDB Atlas Setup Details

1. **Getting Your Connection String:**
   - Log into MongoDB Atlas
   - Navigate to your cluster
   - Click "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<username>` and `<password>` with your actual credentials

2. **Whitelisting Your IP Address:**
   - In MongoDB Atlas, go to "Network Access" in the left sidebar
   - Click "Add IP Address"
   - For development, you can add `0.0.0.0/0` to allow access from anywhere (not recommended for production)
   - For production, add your specific IP address

3. **Creating a Database User:**
   - In MongoDB Atlas, go to "Database Access" in the left sidebar
   - Click "Add New Database User"
   - Choose "Password" as the authentication method
   - Enter a username and password
   - Grant the user "Read and write to any database" permissions