# React + Vite

**Task Manager React Application**

This is a modern task management application built with React that allows users to create, read, update, and delete tasks with a clean and intuitive user interface.

## Features

- ✨ Create new tasks with a title and description
- 📝 View all tasks in a clean, organized layout
- 🔄 Edit existing tasks
- 🗑️ Delete tasks
- 💾 Persistent data storage with backend API integration
- 🎨 Modern, responsive design
- ⚡ Real-time updates

## Technologies Used

- React.js
- CSS3
- Axios for API integration
- RESTful API

## Prerequisites

Before you begin, ensure that you have the following installed:

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Project Structure

```
task-manager/
├── src/
│   ├── components/
│   │   ├── Posts.js
│   │   └── Posts.css
│   ├── api/
│   │   └── PostApi.js
│   ├── App.js
│   └── index.js
├── public/
├── package.json
└── README.md
```

## API Integration

The application uses the following API endpoints:

- **GET**    /api/posts      // Fetch all posts
- **POST**   /api/posts      // Create a new post
- **PUT**    /api/posts/:id  // Update a post
- **DELETE** /api/posts/:id  // Delete a post

Make sure to update the API base URL in `src/api/PostApi.js` to match your backend server.

## Usage

### Creating a Task

1. Fill in the task title and description in the form.
2. Click the "Add Post" button to create a new task.

### Editing a Task

1. Click the "Edit" button on any task.
2. Modify the details in the form.
3. Click the "Update Post" button to save changes.

### Deleting a Task

Click the "Delete" button on any task to remove it.

## Styling

The application uses custom CSS with:

- Responsive design for both mobile and desktop
- A modern color scheme
- Smooth transitions and hover effects
- A clean and intuitive user interface

## Contributing

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request.
