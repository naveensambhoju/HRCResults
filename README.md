# HRCResults

Admin message and results display app using Firebase Firestore. Admin saves results, and visitors see the latest data in real-time.

## Features

- **Firebase Firestore**: Stores and retrieves results in real-time
- **Admin Panel**: Authenticated admin can save results with timestamp
- **Public Display**: Shows the latest saved result on home page
- **Vanilla JavaScript**: No build tools needed, pure client-side
- **Firebase Hosting**: Deploy directly to Firebase for free

## Usage (development)

1. Install dependencies: `npm install`
2. Start local server: `npm start` (uses `server.js`)
3. Open `http://localhost:3000`

## Deploy on Firebase Hosting

### Prerequisites

- Firebase project created at [firebase.google.com](https://firebase.google.com)
- Firebase CLI installed: `npm install -g firebase-tools`

### Step 1: Authenticate with Firebase

```bash
firebase login
```

### Step 2: Initialize Firebase (if not done)

```bash
firebase init hosting
# Select your Firebase project when prompted
# Public directory: public
# Configure as single-page app: Yes
```

### Step 3: Deploy

```bash
firebase deploy
```

Your app will be live at: `https://hrcresults-2ff45.web.app`

### Step 4: Set Up Firestore Database

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project
3. Go to **Firestore Database**
4. Click **Create Database**
5. Choose **Start in test mode** (for development)
6. Create a collection named `items` with documents containing `results` and `createdAt` fields

## Deploy on GoDaddy cPanel

### Step 1: Upload Project to cPanel

**Option A: Using Git (Recommended)**

1. Log in to your GoDaddy cPanel
2. Go to **File Manager** or use **Terminal** (if available)
3. Navigate to your home directory or a subdirectory (e.g., `public_html/hrcresults`)
4. Clone the repository:
   ```bash
   git clone https://github.com/naveensambhoju/HRCResults.git .
   ```

**Option B: Using Zip Upload**

1. Download this project as ZIP
2. In cPanel, go to **File Manager** → navigate to desired folder
3. Click **Upload** and select the ZIP file
4. Extract the ZIP file in the same folder
5. Rename the extracted folder (if needed)

### Step 2: Install Dependencies

1. In cPanel, go to **Terminal** (if available) or use **Terminal** via SSH
2. Navigate to your project directory:

   ```bash
   cd ~/public_html/hrcresults
   ```

   (or wherever you uploaded the project)

3. Install Node.js dependencies:
   ```bash
   npm install
   ```

### Step 3: Set Up Node.js App in cPanel

1. In cPanel, search for and go to **Setup Node.js App**
2. Click **Create Application** button
3. Configure:

   - **Node.js version**: Select the latest available (v16+)
   - **Application root**: `/home/username/public_html/hrcresults` (use the full path)
   - **Application startup file**: `server.js`
   - **Application URL**: Choose your domain/subdomain (e.g., `hrcresults.yourdomain.com`)
   - **Passenger log file**: Leave default (or set custom path)

4. (Optional) Set Environment Variables:

   - Click **Environment Variables** section
   - Add a new variable: `ADMIN_KEY` with value `MY_SECRET_KEY` (or any key you prefer)

5. Click **Create** button

### Step 4: Verify and Start the App

1. After creation, click **Restart** to start the app
2. You should see a green "Running" status
3. Visit your app URL (e.g., `https://hrcresults.yourdomain.com`)

### Step 5: Troubleshooting

**If app doesn't start:**

- Check the Passenger log file in cPanel for error messages
- Ensure all dependencies installed: Run `npm install` again
- Verify Node.js version is compatible with Express 4.18+

**If you can't see the admin message:**

- Ensure `data.txt` has write permissions (644 or 755)
- Check that `/content` endpoint returns JSON

**To view logs:**

1. In cPanel **Setup Node.js App**, select your app
2. Click **View Log** to see Passenger logs
3. Check for any errors

### Manual Commands (via cPanel Terminal)

```bash
# Navigate to project
cd ~/public_html/hrcresults

# Install dependencies
npm install

# Start the app (runs in background via cPanel)
npm start

# Stop the app
npm stop

# Restart the app
npm restart

# View logs
tail -f logs/error.log
```

### Important Notes

- **data.txt** will be created automatically on first admin save
- Store sensitive keys in environment variables, not in code
- The `.gitignore` file excludes `node_modules/`, `dist/`, and `data.txt` from version control
- Make sure your GoDaddy plan supports Node.js applications (most do nowadays)

### For Static-Only Hosting

If your host doesn't support Node apps:

1. Run `npm run build` locally to create `dist/` folder
2. Upload only the `dist/` folder contents to `public_html`
3. Note: Admin save functionality won't work without Node.js server

---

Need help? Check the original repository: https://github.com/naveensambhoju/HRCResults
