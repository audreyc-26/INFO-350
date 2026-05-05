# Final Project - Dashboard App

## Overview
This project is a full-stack dashboard application using:
- Frontend: HTML, CSS, JavaScript
- Backend: Express.js
- Deployment: Render

## Features
- User profile input
- Task manager
- Fetch and display data from Express API
- Add new items using POST request
- Loading messages and error handling
- Responsive card layout

## API Endpoints
- GET /api/items → returns all items
- POST /api/items → adds a new item

## Environment Variables
- GREETING = custom message from server

## Deployment Steps (Render)
1. Push project to GitHub
2. Go to https://render.com
3. Create new Web Service
4. Connect GitHub repo
5. Set:
   - Build Command: npm install
   - Start Command: node server.js
6. Add environment variable:
   GREETING=Hello from production
7. Deploy

## Screenshots
(Add screenshots here before submission)