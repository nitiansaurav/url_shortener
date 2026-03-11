# MERN URL Shortener

A full-stack URL shortener built using the MERN stack.

## Features
- User Authentication using JWT
- Create Short URLs
- Custom Slug Support
- Redirect to Original URL
- Dashboard for managing links

## Tech Stack

Frontend
- React
- TanStack Router
- Redux Toolkit
- TailwindCSS

Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

## Installation

Clone the repository

git clone https://github.com/nitiansaurav/url_shortener.git

Backend

cd backend
npm install
npm run dev

Frontend

cd frontend
npm install
npm run dev

## Environment Variables

Create `.env` in backend

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
PORT=3000
FRONTEND_URL=http://localhost:5173
