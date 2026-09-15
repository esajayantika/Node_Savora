# Savora — Recipe Catalog Web Application

## 1. Overview

Savora adalah aplikasi web katalog resep yang menggunakan MealDB API untuk menyediakan pencarian dan informasi resep.
Website ini dibuat sebagai sarana informasi resep makanan bagi orang yang membacanya dan konsep utamanya adalah pencarian resep untuk
kemudian pengguna bisa menyimpan resep yang diinginkan/ ingin digunakan.

---

## 2. Features

* Recipe search
* Recipe detail
* Favorite recipes
* PDF export
* YouTube cooking video
* AJAX search
* Form validation
* Ingredient Source
* Notification

---

## 3. Tech Stack

Frontend: HTML, CSS, JavaScript, Bootstrap, EJS
Backend: Node.js, Express.js, MongoDB
API: MealDB API, internal API
Other: Git, GitHub, PDFKit, express-session, express-validator, AOS

---

## 4. How It Works

Application Flow

User
 ↓
Browser
 ↓
Express.js
 ├── MealDB API
 └── Local Storage (MongoDB) 
 └── Session
 ↓
EJS
 ↓
Browser

---

**EXAMPLE: Recipe Search**

Search keyword
 ↓
AJAX Request
 ↓
/api/search
 ↓
MealDB API
 ↓
JSON Response
 ↓
Update UI

---

**EXAMPLE: Save to MyFav List**

User click add to MyFav
↓
AJAX Request
↓
/add-fav/
↓
MongoDB
↓
Notification

---

## 5. Project Highlights

- Mengintegrasikan external REST API (MealDB).
- Membuat beberapa endpoint untuk kebutuhan AJAX.
- Mengimplementasikan asynchronous data fetching.
- Mengelola favorite recipe menggunakan session/local storage (MongoDB).
- Melakukan server-side form validation.
- Menghasilkan file PDF menggunakan PDFKit.
- Menangani error dan kondisi ketika data/API tidak tersedia.
- Menggunakan AOS untuk menangani animasi slide pada tampilan UI

---

## 6. Installation

```bash
git clone <repository-url>
cd <project-folder>
npm install
npm start
```

Open on http://localhost:3000
---

## 7. Future Improvements

* Deploy to VPS
* MongoDB Atlas (cloud database)
* User authentication
* Improved error handling
* Automated testing

---

## 8. Status

**Development complete — deployment in progress.**
