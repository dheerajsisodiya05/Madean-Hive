# 🛒 Multi-Vendor eCommerce Platform

A full-stack **Multi-Vendor eCommerce Application** designed and developed to simulate real-world online marketplace systems. This project focuses on **scalable backend architecture, secure transactions, and role-based system design**.

---

## 📌 Overview

This application enables **multiple sellers to list and manage products**, while customers can browse, purchase, and interact with the platform. It supports **Admin, Seller, and Customer roles**, each with dedicated functionalities.

The system is built with a strong focus on **clean architecture, modular design, and real-world backend practices**.

---

## 🚀 Core Features

### 👤 Customer

* Product browsing with category and price filtering
* Cart management (add, update, remove items)
* Secure checkout with payment integration
* Order history and cancellation
* Wishlist functionality
* Product reviews and ratings

---

### 🛍️ Seller

* Seller dashboard with sales insights
* Product CRUD operations
* Order management and tracking
* Inventory and stock handling

---

### ⚙️ Admin

* Centralized admin dashboard
* Seller approval and management
* Coupon and offer management
* Platform monitoring and control

---

## 🧱 Tech Stack

### Backend

* Java, Spring Boot
* Spring Security
* JWT Authentication
* Hibernate (JPA)
* MySQL

### Frontend

* React, TypeScript
* Redux Toolkit
* Tailwind CSS, Material UI
* Axios, React Router

### Payments

* Razorpay, Stripe

---

## 🔐 Security Implementation

* JWT-based authentication
* Role-based authorization (Admin / Seller / Customer)
* Secure REST API design
* Input validation and exception handling

---

## 📊 System Design

* Layered Architecture:

  * Controller → Service → Repository
* RESTful API structure
* Modular and maintainable codebase
* Designed with **microservices scalability in mind**

---

## 🛠️ Setup Instructions

### Clone Repository
### Frontend

```bash
cd frontend
npm install
npm start
```

---

## ⚙️ Configuration

Frontend `.env`:

```
REACT_APP_API_URL=http://localhost:8080
```

---

## 💡 Key Highlights

* Designed a **role-based multi-vendor system** from scratch
* Implemented **secure authentication using JWT**
* Integrated **payment gateways for real-world transactions**
* Built scalable backend using **Spring Boot best practices**
* Developed responsive frontend using **React + Redux**

---

## 📌 Future Improvements

* Docker & containerization
* CI/CD pipeline integration
* Advanced analytics dashboard
* Caching using Redis

---

## 👨‍💻 Author

**Dheeraj Sisodiya**

* GitHub: https://github.com/dheerajsisodiya05
* LinkedIn: https://www.linkedin.com/in/dheeraj-s-abb303263/

---




<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
=======
# Madean-Hive
Madean Hive  Frontend (Minor Project ).
>>>>>>> f5e6dda873d8fd5cc53b0d127cffbfbef1853059
