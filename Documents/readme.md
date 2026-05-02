Digital Complaint and Grievance System

Overview
The Complaint Management System is a full-stack web application designed to streamline the process of submitting, tracking, and resolving complaints within an organization.
It provides a centralized platform for users, administrators, and officers, ensuring efficient communication, transparency, and faster resolution.

Features
-	User
•	Register & Login
•	Submit complaints
•	Track complaint status
-	Admin
•	Manage users and officers
•	Assign complaints
•	Monitor all complaints
•	View assigned complaints
•	Update complaint status
 o	Pending
 o	In Progress
 o	Resolved
-	Security
•	JWT Authentication
•	Password hashing (bcrypt)
•	Role-based access control

-	Tech Stack
Frontend
•	React.js
•	Axios
•	React Router DOM
Backend
•	Node.js
•	Express.js
Database
•	MySQL
Other Tools
•	JWT (jsonwebtoken)
•	bcryptjs
•	dotenv

Key Highlights
- Role-based access control (User, Admin) 
- Secure authentication using JWT 
- Full-stack MERN architecture 
- Organized complaint tracking system

Project Structure

complaint-system/
│   ├── controllers/
│   │   ├── adminController.js
│   │   ├── authController.js
│   │   ├── categoryController.js
│   │   ├── complaintController.js
│   │   ├── officerController.js
│   │   └── reportController.js
│   │
│   ├── middleware/
│   │   ├── adminMiddleware.js
│   │   └── authMiddleware.js
│   │
│   ├── routes/
│   │   ├── adminRoutes.js
│   │   ├── authRoutes.js
│   │   ├── categoryRoutes.js
│   │   ├── complaintRoutes.js
│   │   ├── officerRoutes.js
│   │   └── reportRoutes.js
│
│   ├── src/
│   │   ├── components/
│   │   │   ├── ComplaintCard.jsx
│   │   │   ├── ComplaintDetails.jsx
│   │   │   ├── ComplaintTable.jsx
│   │   │   ├── FilterComplaints.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProtectedRoute.js
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── StatusDropdown.jsx
│   │   │
│   │   ├── contexts/
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── AllComplaints.jsx
│   │   │   ├── ComplaintHistory.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── ManageComplaints.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── SubmitComplaint.jsx
│   │   │   ├── TrackComplaint.jsx
│   │   │   └── UserDashboard.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.js
│   │   └── App.css
│
└── README.md
 
 Installation
1. Clone the repo
    git clone https://github.com/your-username/complaint-system.git
    cd complaint-system
2. Install dependencies
      npm install
3. Setup environment variables
Create a .env file:
PORT=3001
JWT_SECRET=your_secret
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=your_password
MYSQL_DATABASE=complaints

Running the Project
Start Backend
   npm run build
Start Frontend
   npm start

Workflow
1.	User registers/login 
2.	User submits complaint 
3.	Admin assigns complaint 
4.	Admin resolves complaint 
5.	Status updated in real-time

API Endpoints
Auth
•	POST /api/auth/register 
•	POST /api/auth/login 
Complaints
•	POST /api/complaints 
•	GET /api/complaints 
•	PUT /api/complaints/:id 
Categories
•	GET /api/categories 
•	POST /api/categories

Future Improvements
•	Real-time notifications 
•	File upload for complaints 
•	Mobile app support 
•	Analytics dashboard 

What We Learned
- Gained experience in full-stack development 
- Learned how to build REST APIs 
- Implemented authentication using JWT 
- Worked with database like MySQL 
- Improved teamwork and collaboration skills 
- Learned debugging and problem-solving in real projects






