# Calqora — Smart Calculators & Online Tools

Calqora is a modern web application that provides a collection of free online calculators and useful everyday tools.

The project is built with **React and Vite**, with a dedicated **Node.js / Express.js REST API** backend.

---

## 🚀 Demo

**Live Demo:**
https://calculator-hub-frontend.vercel.app/

## 📚 API Documentation

**Postman Documentation:**
https://documenter.getpostman.com/view/37433179/2sBYB2q6ug

---

## ✨ Features

* Percentage Calculator
* Discount Calculator
* BMI Calculator
* Age Calculator
* GPA Calculator
* Salary Calculator
* Loan Calculator
* Date Difference Calculator
* Length Converter
* Weight Converter
* Temperature Converter
* Statistics Tools
* Factorial Calculator
* Prime Number Checker
* GCD Calculator
* LCM Calculator
* Simple Interest Calculator
* Compound Interest Calculator
* Tip Calculator
* ROI Calculator
* Currency Converter
* Currency Exchange Rates
* Timezone Tools
* CSV Export
* Responsive Design
* Loading States
* Error Handling
* Reusable Components
* Advertisement-ready Layout

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* JavaScript
* Axios
* React Router
* CSS

### Backend

* Node.js
* Express.js
* JavaScript
* REST API
* Helmet
* CORS
* Express Rate Limit
* Vercel

---

## 🏗️ Architecture

```text
                    Calqora
                       │
        ┌──────────────┴──────────────┐
        │                             │
    Frontend                       Backend
        │                             │
     React                        Express.js
        │                             │
      Axios                    Business Logic
        │                             │
        └──────────────┬──────────────┘
                       │
                  REST API
```

---

## 📁 Project Structure

```text
Calculator-Hug/
│
├── backend/
│   │
│   ├── src/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── package.json
│   └── README.md
│
└── calculator-hub-frontend/
    │
    ├── public/
    │
    ├── src/
    │   ├── components/
    │   ├── constants/
    │   ├── pages/
    │   ├── services/
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    │
    ├── package.json
    ├── vite.config.js
    └── README.md
```

---

## 🧩 Frontend Architecture

The frontend is organized around reusable React components and a dedicated service layer.

```text
Pages
  │
  ▼
Reusable Components
  │
  ▼
Service Layer
  │
  ▼
Axios Client
  │
  ▼
Backend REST API
```

This structure makes it easier to add new calculators and tools without duplicating application logic.

---

## 🧮 Available Tools

### Calculators

* Percentage
* Discount
* BMI
* Age
* GPA
* Salary
* Loan
* Date Difference

### Converters

* Length
* Weight
* Temperature

### Statistics

* Statistical calculations
* Dataset analysis

### Number Tools

* Factorial
* Prime Number
* GCD
* LCM

### Finance

* Simple Interest
* Compound Interest
* Tip
* ROI

### Currency

* Currency conversion
* Exchange rates
* Supported currencies

### Time

* Timezone information

### Export

* CSV data export

---

## 🔗 API Integration

The frontend communicates with the backend through a centralized Axios client.

The API URL is configured through an environment variable:

```env
VITE_API_URL=https://backend-sand-nine-7j1ewccfds.vercel.app
```

Example:

```javascript
import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

export default api;
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/amf5/Calculator-Hug.git
```

Navigate to the frontend:

```bash
cd Calculator-Hug/calculator-hub-frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
VITE_API_URL=https://backend-sand-nine-7j1ewccfds.vercel.app
```

Start the development server:

```bash
npm run dev
```

The application will normally run on:

```text
http://localhost:5173
```

---

## 🏗️ Production Build

Build the application:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 🚀 Deployment

The frontend is deployed on **Vercel**.

The backend is also deployed independently, while both projects are maintained inside the same GitHub repository.

```text
GitHub
   │
   └── Calculator-Hug
          │
          ├── backend
          │      └── Vercel
          │
          └── calculator-hub-frontend
                 └── Vercel
```

---

## 📱 Responsive Design

Calqora is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile

The interface focuses on simplicity, accessibility, and fast interaction with the available tools.

---

## 🎨 Reusable Components

The application uses reusable components such as:

```text
CalculatorPage
CalculatorCard
ResultCard
Loader
Navbar
Footer
ScrollToTop
AdSlot
```

This allows multiple tools to share common UI and interaction patterns.

---

## 📢 Advertisement Ready

The application contains reusable advertisement slots that can be integrated with an advertising platform in the future.

The goal of Calqora is to provide useful free online tools while maintaining a clean and simple user experience.

---

## 🔎 SEO

The project includes:

* `robots.txt`
* `sitemap.xml`
* Favicon
* Structured page organization

The calculator pages can also be expanded with educational content, formulas, examples, and FAQs to improve search visibility.

---

## 🔐 Environment Variables

The frontend uses:

```env
VITE_API_URL=
```

Example:

```env
VITE_API_URL=https://backend-sand-nine-7j1ewccfds.vercel.app
```

Environment files should not be committed to the repository.

---

## 👨‍💻 Author

**Ahmed Walid Amin**

Backend Developer

### Main Technologies

* Node.js
* Express.js
* Java
* Spring Boot
* React
* REST APIs
* Database Systems

### GitHub

https://github.com/amf5

---

## 📄 License

This project is developed for educational, portfolio, and demonstration purposes.
