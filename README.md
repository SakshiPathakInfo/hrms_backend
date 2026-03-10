# HRMS Lite

## Project Overview

HRMS Lite is a lightweight Human Resource Management System that provides essential HR functionalities including employee management, attendance tracking, and dashboard analytics. Built as a full-stack application, it offers a modern web interface for managing employee data and tracking attendance records.

### Key Features
- Employee CRUD operations (Create, Read, Update, Delete)
- Attendance tracking and management
- Dashboard with key HR metrics
- Responsive web interface
- RESTful API backend

## Tech Stack Used

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS, Lucide React icons
- **Backend**: Express.js, TypeScript, Node.js
- **Database**: MongoDB with Mongoose ODM
- **Development Tools**: TSX for TypeScript execution, Vite dev server
- **Additional Libraries**: date-fns for date handling, better-sqlite3 (fallback), dotenv for environment variables

## Steps to Run the Project Locally

### Prerequisites
- Node.js (version 18 or higher)
- MongoDB (local installation or cloud instance)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hrms-lite/backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the backend directory:
   ```
   MONGODB_URI=mongodb://localhost:27017/hrms-lite
   PORT=3001
   ```

4. **Start MongoDB**
   Ensure MongoDB is running locally on port 27017, or update the MONGODB_URI to point to your MongoDB instance.

5. **Run the application**
   ```bash
   npm run dev
   ```

6. **Access the application**
   Open your browser and navigate to `http://localhost:3001`

### Available Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run TypeScript type checking

## Assumptions or Limitations

### Assumptions
- MongoDB is available and accessible
- Node.js version 18+ is installed
- Basic understanding of web development concepts
- Local development environment setup

### Limitations
- Currently supports only MongoDB as the database
- No user authentication/authorization system implemented
- Limited to basic HR operations (employees and attendance)
- No data export/import functionality
- Dashboard metrics are basic and may need expansion for enterprise use
- No automated testing suite included
- Single environment configuration (development/production not fully separated)
