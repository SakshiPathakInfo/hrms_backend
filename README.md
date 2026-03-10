# HRMS Lite

A lightweight Human Resource Management System built with React, Express, TypeScript, and MongoDB.

## Features

- Employee management (CRUD operations)
- Attendance tracking
- Dashboard with key metrics
- Modern React frontend with Tailwind CSS
- RESTful API backend
- MongoDB database integration

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS, Lucide React icons
- **Backend**: Express.js, TypeScript, MongoDB with Mongoose
- **Database**: MongoDB
- **Development**: Vite dev server, TSX for TypeScript execution

## Installation

1. Clone the repository
2. Navigate to the backend directory
3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the backend directory with:
   ```
   MONGODB_URI=mongodb://localhost:27017/hrms-lite
   PORT=3001
   ```

5. Start MongoDB locally or update MONGODB_URI to point to your MongoDB instance

## Usage

### Development
```bash
npm run dev
```
This starts the development server with hot reload for both frontend and backend.

### Production Build
```bash
npm run build
npm start
```

### API Endpoints

#### Employees
- `GET /api/employees` - Get all employees
- `POST /api/employees` - Create a new employee
- `DELETE /api/employees/:id` - Delete an employee

#### Attendance
- `GET /api/attendance` - Get attendance records
- `POST /api/attendance` - Record attendance
- `DELETE /api/attendance/:id` - Delete attendance record

#### Dashboard
- `GET /api/dashboard` - Get dashboard statistics

## Project Structure

```
backend/
├── controllers/          # Route handlers
├── models/              # MongoDB schemas
├── routes/              # API route definitions
├── server.ts            # Main server file
├── package.json
└── README.md
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Type check with TypeScript
- `npm run clean` - Clean build directory

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.
