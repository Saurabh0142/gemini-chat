# Gemini Chat

A full-stack AI chat application built with React, Spring Boot, Gemini API, Docker, and Nginx.

## 🚀 Tech Stack

### Frontend
- React.js
- Vite
- Axios
- Bootstrap

### Backend
- Java 17
- Spring Boot
- Spring WebFlux
- WebClient
- Gemini API

### DevOps
- Docker
- Docker Compose
- Nginx

## ✨ Features

- AI-powered chat using Google Gemini API
- React-based chat interface
- Spring Boot REST API
- Dockerized frontend and backend
- Nginx for serving the React production build
- Docker Compose for running the complete application
- Environment variables for API configuration

## 🏗️ Architecture

```text
                User
                  |
                  v
          React Frontend
                  |
                  | HTTP
                  v
            Nginx :5173
                  |
                  v
        Spring Boot Backend
             :8080
                  |
                  | HTTPS
                  v
             Gemini API