# StudyNotion

StudyNotion is a fully functional ed-tech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) to provide a seamless and interactive learning experience.

## Features

- **For Students**:
  - Browse and enroll in courses
  - Rate and review courses
  - Manage account details
  - Wishlist and cart management

- **For Instructors**:
  - Create and manage courses
  - View insights and feedback
  - Manage profile details

- **For Admin (Future Scope)**:
  - Platform overview and insights
  - Instructor and course management

## Tech Stack

- **Front-end**: React.js, Redux, Tailwind CSS, React Router
- **Back-end**: Node.js, Express.js, JWT for authentication, Bcrypt for password hashing, Cloudinary for media management, Mongoose ODM
- **Database**: MongoDB (hosted on MongoDB Atlas)
- **Deployment**:
  - Front-end: Vercel
  - Back-end: Render or Railway
  - Media: Cloudinary

## System Architecture

- **Client-Server Architecture**: Front-end communicates with the back-end via RESTful APIs.
- **Database**: MongoDB stores user data, course content, and other relevant information.

## API Endpoints (Sample)

- `POST /api/auth/signup` - Create a new user account
- `POST /api/auth/login` - Log in and generate JWT token
- `GET /api/courses` - Retrieve all courses
- `POST /api/courses` - Create a new course
- `PUT /api/courses/:id` - Update an existing course

## Deployment

- **Front-end**: Hosted on [Vercel]
- **Back-end**: Hosted on [Render]
- **Database**: Hosted on [MongoDB Atlas]
- **Media**: Managed with [Cloudinary]

## Future Enhancements

- **Gamification**: Badges, points, and leaderboards
- **Personalized Learning Paths**: Tailored learning experiences
- **Social Learning**: Group discussions, peer feedback
- **Mobile App**: Convenient access to content
- **AI Recommendations**: Personalized course suggestions
- **VR/AR Integration**: Immersive learning experiences

## Getting Started

1. **Clone the repo and Link**:

   git clone: https://github.com/Sahul54/StudyNotion

   Live Link: https://study-notion-lae7d64lz-sahul-kumars-projects.vercel.app/

## License
### This project is licensed under the MIT License.

This README provides a high-level overview of the StudyNotion project, including its features, tech stack, architecture, and deployment instructions. It’s concise and easy to follow for developers who want to understand and contribute to the project.
