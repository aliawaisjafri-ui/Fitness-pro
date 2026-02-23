# Fitness Tracking App

A comprehensive fitness tracking application built with React and Express.js that helps users monitor their health metrics including BMI, calorie intake, steps, and medical history.

## Features

- **User Authentication**: Secure registration and login with JWT tokens
- **BMI Calculator**: Track your BMI based on height and weight
- **Calorie Tracker**: Log daily calorie consumption and burn
- **Step Counter**: Track daily steps and activity levels
- **Medical History**: Store and manage medical records, doctor visits, medications, and allergies
- **Health Dashboard**: Real-time display of current health metrics
- **History Tracking**: View historical data for weight, BMI, calories, and steps
- **Profile Management**: Update personal information and health metrics

## Tech Stack

### Frontend
- React 18
- React Router for navigation
- Axios for API calls
- Vite for build tool
- CSS3 for styling

### Backend
- Node.js with Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- CORS for cross-origin requests

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (locally installed or MongoDB Atlas connection)

## Installation

### Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```

4. Update `.env` with your MongoDB URI and JWT secret:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/fitness-app
   JWT_SECRET=your_secure_secret_key
   NODE_ENV=development
   ```

5. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected)
- `PUT /api/auth/profile` - Update user profile (protected)

### Health Data
- `POST /api/health/add` - Add daily health data
- `GET /api/health/history` - Get health history
- `GET /api/health/today` - Get today's summary
- `PUT /api/health/:id` - Update health data
- `GET /api/health/bmi-history` - Get BMI history
- `GET /api/health/steps-history` - Get steps history
- `GET /api/health/calories-history` - Get calories history

### Medical History
- `POST /api/medical/add` - Add medical record
- `GET /api/medical/history` - Get medical history
- `GET /api/medical/urgent` - Get urgent records
- `GET /api/medical/:id` - Get single record
- `PUT /api/medical/:id` - Update medical record
- `DELETE /api/medical/:id` - Delete medical record

## Usage

1. **Register**: Create a new account with your email and password
2. **Complete Profile**: Add your age, gender, height, and weight for BMI calculation
3. **Log Health Data**: Use "Log Health" to add daily metrics
4. **View Dashboard**: See your current health statistics
5. **Check History**: View trends in BMI, steps, and calories
6. **Store Medical Records**: Save important medical information with dates and urgency levels

## Features in Detail

### BMI Calculation
- Automatically calculated based on height and weight
- Categories: Underweight, Normal, Overweight, Obese

### Calorie Tracking
- Log calories consumed and burned
- View net calorie balance
- Track weekly trends

### Step Tracking
- Log daily steps
- View historical data
- Compare step counts over time

### Medical History
- Record types: Doctor visits, medications, test results, allergies, conditions
- Add doctor name, hospital, and urgency levels
- Keep important medical information organized

## Project Structure

```
fitness-app/
├── backend/
│   ├── src/
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── HealthData.js
│   │   │   └── MedicalHistory.js
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── healthController.js
│   │   │   └── medicalController.js
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   ├── healthRoutes.js
│   │   │   └── medicalRoutes.js
│   │   ├── middleware/
│   │   │   └── auth.js
│   │   ├── server.js
│   │   └── db.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── AddHealthData.jsx
│   │   │   ├── History.jsx
│   │   │   ├── MedicalHistory.jsx
│   │   │   └── Profile.jsx
│   │   ├── components/
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── Navbar.jsx
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   └── authContext.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   └── package.json
└── README.md
```

## Security Considerations

- Passwords are hashed using bcryptjs
- JWT tokens expire after 7 days
- All API routes require authentication (except login/register)
- Medical records are user-specific and cannot be accessed by others

## Future Enhancements

- Add chart visualizations for health data
- Implement data export functionality
- Add fitness goal setting and tracking
- Integrate wearable device APIs
- Add push notifications for health alerts
- Implement social features and challenges

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please create an issue in the project repository.
