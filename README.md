# HRCResults

Simple Node + Express app (vanilla JS) to let an admin save a single message to a text file and show that message to all visitors.

Features

- Admin can save the latest message (saved to `data.txt`)
- Public page shows the latest message from `/content`
- Build script copies `public/` to `dist/` for static deployment
- Uses `ADMIN_KEY` env var (defaults to `MY_SECRET_KEY`) for admin saves

Usage (development)

1. Install dependencies: `npm install`
2. Start: `npm start` (uses `server.js`)

Build

- `npm run build` — copies `public/` -> `dist/`

Deploy on cPanel (GoDaddy)

1. Upload project to your cPanel account (via Git, or Zip upload + Extract).
2. In cPanel, go to **Setup Node.js App** (if available). Create an app with:
   - App root: the project folder
   - App file: `server.js`
   - Environment variables: set `ADMIN_KEY` if you don't want the default
3. Run `npm install` in the app's virtual environment (cPanel provides a UI to install packages), or via terminal.
4. Start the app using the cPanel UI (or run `npm start`). The app will use the port provided by cPanel (`process.env.PORT`).

If your host does not support Node apps, you can run the build (`npm run build`) and serve `dist/` as static site (but admin save endpoint requires Node server).
