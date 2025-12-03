# SkillSwap — Local Skill Exchange Platform

A modern, fully responsive web application that connects skill providers and learners in their local community. Users can browse, book, and exchange skills seamlessly with Firebase authentication and real-time updates.

**Live:** [https://skilswapp.netlify.app/](https://skilswapp.netlify.app/)

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Authentication](#authentication)

---

## ✨ Features

### Core Features

- **Public Home Page**

  - Hero carousel slider with Swiper (minimum 3 slides)
  - Featured/Top-rated skills section
  - Skills by category section
  - How it works section
  - Testimonials section
  - Blog/Articles section
  - Newsletter subscription
  - Professional footer with social links

- **All Skills Page**

  - Browse all available skills
  - Advanced filtering and sorting (Ascending/Descending)
  - Responsive grid layout (4 columns on desktop)
  - Public access (no login required)

- **Skill Details Page**

  - Complete skill information
  - Professional clean design
  - Book session button
  - Protected route (login required)

- **Authentication System**

  - Email/Password registration with validation
  - Google OAuth login
  - Password strength requirements:
    - At least one uppercase letter
    - At least one lowercase letter
    - Minimum 6 characters length
  - Forgot password functionality (Firebase integrated)
  - Email verification support

- **User Profile Management**

  - View profile information
  - Update name and profile image
  - View booking history
  - Manage listed skills

- **Session Booking**

  - Interactive booking form
  - Success notifications with React Hot Toast
  - Booking confirmation

- **User Experience**
  - Smooth animations (AOS - Animate On Scroll)
  - Toast notifications for actions
  - Sticky navigation bar
  - Mobile hamburger menu
  - Dark mode support
  - Fully responsive design

### Additional Features

- Professional 404 error page
- About Us page
- Contact Us page
- Support page
- Dark/Light theme toggle
- Accessibility optimized
- SEO friendly structure

---

## 🛠 Tech Stack

### Frontend

- **React 18** - UI library
- **Vite** - Fast build tool and dev server
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Swiper** - Touch slider carousel
- **AOS (Animate On Scroll)** - Scroll animations
- **Lucide React** - Icon library

### Backend & Services

- **Firebase**
  - Authentication (Email/Password + Google)
  - Firestore Database
  - Cloud Storage (for profile images)

### UI & Notifications

- **React Hot Toast** - Toast notifications
- **Tailwind CSS** - Responsive styling

---

---

## 📦 Dependencies

### Production Dependencies

| Package          | Version  | Purpose                                     |
| ---------------- | -------- | ------------------------------------------- |
| react            | ^18.2.0  | UI library                                  |
| react-dom        | ^18.2.0  | React DOM rendering                         |
| react-router-dom | ^6.20.0  | Client-side routing                         |
| firebase         | ^10.7.0  | Backend services (Auth, Firestore, Storage) |
| swiper           | ^11.0.3  | Touch carousel slider                       |
| react-hot-toast  | ^2.4.1   | Toast notifications                         |
| aos              | ^2.3.4   | Animate on scroll animations                |
| lucide-react     | ^0.292.0 | Icon library                                |
| tailwindcss      | ^3.3.6   | CSS utility framework                       |

### Development Dependencies

| Package                     | Version  | Purpose                     |
| --------------------------- | -------- | --------------------------- |
| @vitejs/plugin-react        | ^4.2.1   | Vite React plugin           |
| vite                        | ^5.0.8   | Build tool & dev server     |
| @types/react                | ^18.2.37 | React TypeScript types      |
| @types/react-dom            | ^18.2.15 | React DOM TypeScript types  |
| eslint                      | ^8.54.0  | Code linting                |
| eslint-plugin-react         | ^7.33.2  | ESLint React plugin         |
| eslint-plugin-react-hooks   | ^4.6.0   | ESLint React hooks plugin   |
| eslint-plugin-react-refresh | ^0.4.5   | ESLint React refresh plugin |
| postcss                     | ^8.4.31  | CSS processing              |
| autoprefixer                | ^10.4.16 | CSS vendor prefixing        |

---

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Clone & Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/skillswap.git

# Navigate to project directory
cd skillswap

# Install dependencies
npm install
```

### Install All Dependencies

```bash
npm install react-router-dom lucide-react swiper react-hot-toast aos firebase
```

---

## 🔐 Environment Setup

### Create `.env.local` file

Create a new file `.env.local` in the root directory:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### Get Firebase Credentials

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Authentication (Email/Password + Google)
4. Enable Firestore Database
5. Copy your project credentials to `.env.local`

---

## 🚀 Usage

### Development Server

```bash
npm run dev
```

Opens at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint Code

```bash
npm run lint
```

---

## 🔐 Authentication

### Registration Flow

1. User fills registration form with email and password
2. Password validation:
   - Minimum 6 characters
   - At least one uppercase letter
   - At least one lowercase letter
3. Firebase creates user account
4. User automatically logged in
5. Redirects to profile setup page

### Login Flow

1. Email/Password login or Google OAuth
2. Firebase authenticates user
3. Session persisted in browser
4. Redirects to dashboard

### Forgot Password

1. User clicks "Forgot Password" on login page
2. Enters email address
3. Firebase sends reset link via email
4. User resets password
5. Automatically redirects to Gmail (if configured)

### Protected Routes

- Skill details page (requires login)
- Profile page (requires login)
- Booking confirmation (requires login)

---

### Features

- Mobile hamburger navigation menu
- Touch-friendly buttons and inputs
- Optimized images for all devices
- Flexible grid layouts
- Readable font sizes on all screens
- Proper spacing and padding

---

## 📋 Page Overview

| Page         | Route      | Protected | Description                       |
| ------------ | ---------- | --------- | --------------------------------- |
| Home         | /          | ❌        | Landing page with featured skills |
| All Items    | /all-items | ❌        | Browse all skills with filters    |
| Item Details | /item/:id  | ✅        | Full skill information & booking  |
| About        | /about     | ❌        | About SkillSwap platform          |
| Contact      | /contact   | ❌        | Contact form & info               |
| Support      | /support   | ❌        | FAQ & support resources           |
| Login        | /login     | ❌        | User login page                   |
| Register     | /register  | ❌        | User registration page            |
| Profile      | /profile   | ✅        | User profile management           |
| 404          | \*         | ❌        | Page not found                    |

---

## 🔄 Data Flow

```
User → Navbar (Router) → Page/Component
                ↓
        Firebase Authentication
                ↓
        Protected/Public Route
                ↓
        Firestore Database
                ↓
        Display Content/Form
                ↓
        User Action → Toast Notification
```

---

## 🙏 Acknowledgments

- Firebase for authentication and database services
- Swiper for carousel functionality
- AOS for scroll animations
- Tailwind CSS for styling
- React community for tools and libraries

---
