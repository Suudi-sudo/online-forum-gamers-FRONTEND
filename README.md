# 🎮 Online Forum for Gamers

## Overview
The Online Forum for Gamers is a web-based platform designed for gamers to connect, discuss their favorite games, share tips, and team up for collaborative gameplay. Users can create posts, reply to discussions, like content, search for topics, send private messages, and join teams.

## Features

### ✅ User Features
- User Registration & Login: Secure authentication system for users.
- Create & View Posts: Gamers can start discussions and browse existing posts.
- Reply & Like Posts: Users can engage in conversations by commenting and liking posts.
- Search Functionality: Easily find discussions based on keywords or categories.
- Join a Team: Users can join teams to collaborate with other players.
- Modern UI: Responsive and user-friendly interface with Tailwind CSS.

---

## 🛠 Tech Stack

### 🔹 Backend
- Framework: Flask (Python)
- Database: SQLite
- Authentication: JWT (JSON Web Tokens)
- ORM: SQLAlchemy
- Dependency Management: Pipenv

### 🔹 Frontend
- Framework: React (Vite)
- State Management: Context API
- Styling: Tailwind CSS
- Routing: React Router
- API Communication: Fetch API / Axios



## 🚀 Installation & Setup

### 🔹 Backend Setup

1. Clone the repository:

    ```bash
    git clone <repository_url>
    cd backend
    ```

2. Install dependencies using Pipenv:

    ```bash
    pipenv install
    ```

3. Set up the database:

    ```bash
    pipenv run flask db upgrade
    ```

4. Start the backend server:

    ```bash
    pipenv run flask run
    ```

---

### 🔹 Frontend Setup

1. Navigate to the frontend folder:

    ```bash
    cd frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

4. Open the app in your browser:

    ```
    http://localhost:5173
    ```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/register` | Register a new user |
| POST | `/login` | Log in a user |
| GET | `/posts` | Fetch all posts |
| POST | `/posts` | Create a post |
| GET | `/posts/{id}` | Fetch a specific post |
| POST | `/posts/{id}/reply` | Reply to a post |
| POST | `/posts/{id}/like` | Like a post |
| POST | `/team/join` | Join a team |
| 
---

## 🏗 Deployment

To build the frontend for production:

  ## links
 backend link : https://github.com/Suudi-sudo/online-forum-gamer-BACKEND.git
  -------------------------------------------
  video link : https://share.vidyard.com/watch/h1QBYnEnKuaZMZp73zH3Uy?
  -------------------------------------------------------
  slides link : https://docs.google.com/presentation/d/1eRp6Vg6aCkY-1iypJ1KnDLlqqE4s309ROtc_u8rGiaM/edit?usp=sharing
  ------------------------------

```bash
npm run build

# 📜 License
This project is licensed under the MIT License.

 


