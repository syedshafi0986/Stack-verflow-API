# Using StackOverflow API for Backend

This project provides backend functionality for managing questions and answers using a custom API. The API is hosted on **Vercel** and built with **Node.js**, **Express.js**, and **MongoDB**.

## Live API URL

[https://stack-verflow-api.vercel.app/questions](https://stack-verflow-api.vercel.app/questions)

---

## API Endpoints

### POST `/questions/load`

- **Purpose**: Load questions from the Stack Overflow API into the local database.
- **Details**:
  - Fetch data from the Stack Overflow API: [Stack Overflow API Documentation](https://api.stackexchange.com/docs/questions).
  - Store the data in appropriate collections/documents.

---

### GET `/questions`

- **Purpose**: Retrieve all questions with filtering, sorting, and pagination.
- **Supported Filtering**:
  - `is_answered` (true/false): Filter questions based on whether they are answered.
  - `tags` (comma-separated values): Filter by tags.
  - `answers_count__gt`: Filter questions with answers count greater than the specified value.
  - `answers_count__lt`: Filter questions with answers count less than the specified value.
- **Supported Sorting**:
  - `sort=score`: Sort by score (Trending).
  - `sort=created_at`: Sort by creation date (Latest).
- **Pagination**:
  - Use `page` (e.g., `page=1`) for pagination.

**Example**:
GET /questions?is_answered=true&tags=javascript&ans_count**gt=5&ans_count**lt=10&sort=score&page=1

### POST `/questions`

- **Purpose**: Create a new question.
- **Details**:
  - Provide the question details in the request body.

---

### PUT or PATCH `/questions/:id`

- **Purpose**: Update a specific question by its `id`.
- **Details**:
  - Provide the updated fields in the request body.

---

### DELETE `/questions/:id`

- **Purpose**: Delete a specific question by its `id`.

---

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB**
- **Vercel**
