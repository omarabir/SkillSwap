# SkillSwap — A Local Skill Exchange Platform

Live: https://skilswapp.netlify.app/  
Repo: https://github.com/programming-hero-web-course2/b12-a9-firesheild-OmarAbir

## Purpose
SkillSwap is a single-page application that connects local skill providers and learners. Users can browse skill listings, view details, book sessions, and manage their profile. Authentication is via Firebase (email/password + Google).

## Key Features
- Public home page with hero slider and popular skills (Swiper).
- Skill details page (protected — login required).
- Book session form with success toast.
- User authentication: Email/password + Google login.
- Signup form with password validation (uppercase, lowercase, min length).
- My Profile: view and update name & image.
- Forgot Password flow integrated with Firebase (redirects to Gmail after request).
- Responsive design across mobile/tablet/desktop.
- Subtle animations using AOS and Swiper.

## Tech Stack
- React + Vite
- Firebase Authentication
- React Router
- Swiper (slider)
- react-hot-toast (notifications)
- AOS (scroll animations)
- CSS / Tailwind (or your CSS framework)

## Environment Variables
Create `.env.local`:
