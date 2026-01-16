# HRC Results - Setup Guide

## User Management Setup

### Adding Allowed Users to Firebase

1. **Go to Firebase Console:**

   - Visit: https://console.firebase.google.com/
   - Select project: `hrcresults-2ff45`

2. **Create Collection:**

   - In Firestore Database, click "Create collection"
   - Collection name: `allowed_users`

3. **Add User Documents:**

   - Click "Add document"
   - Document ID: Enter the 10-digit phone number (e.g., `9876543210`)
   - Add field:
     - Field name: `phone`
     - Type: `String`
     - Value: `+919876543210` (with +91 prefix)
   - Click "Save"

4. **Repeat for each user:**
   - Create a document for each allowed phone number
   - Use 10-digit number as Document ID
   - Add the phone field with +91 prefix

### Example Documents:

```
Collection: allowed_users
├── Document ID: 9876543210
│   └── Field: phone = "+919876543210"
├── Document ID: 9123456789
│   └── Field: phone = "+919123456789"
└── Document ID: 9998765432
    └── Field: phone = "+919998765432"
```

## User Flow:

1. User visits https://hrcresults.com (index-access.html)
2. Enters 10-digit phone number
3. System checks if phone exists in `allowed_users` collection
4. If exists → OTP sent via SMS
5. User enters OTP → Verified
6. Redirected to index.html to view results
7. User cannot access other pages directly

## Admin Flow:

1. Admin visits https://hrcresults.com (index-access.html)
2. Clicks "Admin Login"
3. Redirected to admin-login.html
4. Enters username: `admin`, password: `admin123`
5. Redirected to admin.html
6. Can save note and results
7. Can logout to go back to access page

## Security Notes:

- Users are validated against allowed_users collection in Firestore
- Only verified phone numbers can access results
- Admin has hard-coded credentials (consider upgrading later)
- All pages check authentication status and redirect if not authorized
