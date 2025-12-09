# MongoDB Atlas Connection Troubleshooting

## Common Issue: IP Whitelisting Error

The error you're seeing:
```
MongooseServerSelectionError: Could not connect to any servers in your MongoDB Atlas cluster.
One common reason is that you're trying to access the database from an IP that isn't whitelisted.
```

## Solution Steps:

### 1. Add Your Current IP Address to MongoDB Atlas Whitelist

1. Go to [MongoDB Atlas](https://cloud.mongodb.com/) and log in
2. Select your cluster
3. In the left navigation menu, click "Network Access" under the "Security" section
4. Click the "Add IP Address" button
5. Choose one of these options:
   - **Recommended for development**: Click "Add Current IP Address" to automatically detect and add your current IP
   - **For testing only**: Add `0.0.0.0/0` to allow access from any IP (NOT recommended for production)

### 2. Verify Your Database User Credentials

1. In MongoDB Atlas, click "Database Access" under the "Security" section
2. Make sure your user `sateeshugargol_db_user` exists
3. Verify that the password `QvwMhndm4rxsssDH` is correct
4. Ensure the user has "Read and Write to any database" permissions

### 3. Check Cluster Status

1. In MongoDB Atlas, go to "Clusters" in the left navigation
2. Make sure your cluster status is "Idle" or "Running" (not "Paused" or "Stopping")

### 4. Wait for Changes to Propagate

After making changes to IP whitelist or user permissions, it may take 1-2 minutes for the changes to take effect.

## Alternative Solutions:

### Option 1: Use a More Permissive Connection String

Try adding additional parameters to your connection string in the `.env` file:

```
MONGODB_URI=mongodb+srv://sateeshugargol_db_user:QvwMhndm4rxsssDH@cluster0.xz3ax7p.mongodb.net/registrationdb?retryWrites=true&w=majority&maxPoolSize=10&serverSelectionTimeoutMS=30000&connectTimeoutMS=30000&appName=Cluster0
```

### Option 2: Check Your Firewall/Antivirus

Some firewalls or antivirus software may block connections to MongoDB Atlas. Temporarily disable them to test if this is the issue.

### Option 3: Use a Different Network

If you're on a corporate or restricted network, try connecting from a different network (like your mobile hotspot) to see if that resolves the issue.