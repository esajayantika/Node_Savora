# Savora — Recipe Catalog Web Application

## 1. Overview

Savora is a web-based recipe catalog application that uses the MealDB API to provide recipe search and information.

This website was created as an informational platform for recipe enthusiasts. Its main concept is to search for recipes and allow users to save recipes they want to use or try.

## 2. Features

- Recipe search
- Recipe detail
- Favorite recipes
- PDF export
- YouTube cooking video
- AJAX search
- Form validation
- Ingredient Source
- Notification

## 3. Tech Stack

- Frontend: HTML, CSS, JavaScript, Bootstrap, EJS
- Backend: Node.js, Express.js, MongoDB
- API: MealDB API, internal API
- Other: Git, GitHub, PDFKit, express-session, express-validator, AOS

## 4. How It Works

### Application Flow

```mermaid
flowchart ID
  A[User] --> B[Browser]
  B --> C[Express.js]
  C --> D[MealDB API]
  D --> E[MongoDB/Session]
  E --> F[EJS]
  F --> B
```

### EXAMPLE: Recipe Search

```mermaid
flowchart ID
  A[Keyword] --> B[AJAX Req]
  B --> C[/api/search]
  C --> D[MealDB API]
  D --> E[JSON Response]
  E --> F[Update UI]
```

### EXAMPLE: Save to MyFav List

```mermaid
flowchart ID
  A[Click add] --> B[AJAX Req]
  B --> C[/add-fav/]
  C --> D[MongoDB]
  D --> E[Notification]
```

## 5. Project Highlights

- Integrated an external REST API (MealDB).
- Created several endpoints for AJAX requests.
- Implemented asynchronous data fetching.
- Managed favorite recipes using session/local storage (MongoDB).
- Implemented server-side form validation.
- Generated PDF files using PDFKit.
- Handled errors and unavailable data/API conditions.
- Used AOS for slide animations in the UI.

## 6. Installation

```bash
git clone <repository-url>
cd <project-folder>
npm install
npm start
```

## Open on http://localhost:3000

## 7. Future Improvements

- Deploy to VPS
- MongoDB Atlas (cloud database)
- User authentication
- Improved error handling
- Automated testing

## 8. Status

**Development complete — deployment in progress.**
