# Tech Trivia

A full-stack quiz app for testing your web development knowledge — HTML, CSS, JavaScript, and more. Built with React (Vite + Tailwind CSS) on the frontend and Express + MongoDB on the backend, with JWT-based authentication and saved quiz results.

## Features

- Sign up / log in with JWT authentication
- Browse quiz categories and take timed quizzes
- View your past results on a personal results page
- Clean, responsive UI

## Project structure

```
tech-trivia/
├── frontend/   # React + Vite client
└── backend/    # Express + MongoDB API
```

## Getting started

### 1. Backend

```bash
cd backend
npm install
cp .env.example .env   # then fill in MONGO_URI and JWT_SECRET
npm run dev
```

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173) with the backend running on http://localhost:5000.

## Tech stack

- **Frontend:** React 19, Vite, Tailwind CSS, React Router, Axios
- **Backend:** Node.js, Express, MongoDB (Mongoose), JWT, bcrypt

## License

MIT — see [LICENSE](LICENSE).
