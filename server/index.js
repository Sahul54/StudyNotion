// const express = require("express");
// const app = express();

// const userRoutes = require("./routes/User");
// const profileRoutes = require("./routes/Profile");
// const paymentRoutes = require("./routes/Payments");
// const courseRoutes = require("./routes/Course");

// const database = require("./config/database");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const { cloudinaryConnect } = require("./config/cloudinary");
// const fileUpload = require("express-fileupload");
// const dotenv = require("dotenv");

// dotenv.config();
// const PORT = process.env.PORT || 4000;

// // Database connection
// database.connect();

// // Middlewares
// app.use(express.json());
// app.use(cookieParser());

// // CORS configuration
// const corsOptions = {
//   origin: process.env.FRONTEND_URL || 'https://study-notion-v1-mu.vercel.app/', // Default to Netlify
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true, // Ensure this is true for cross-origin credentials (cookies, JWT)
//   optionsSuccessStatus: 204,
// };

// // Apply CORS middleware
// app.use(cors(corsOptions));

// // Handle preflight requests for all routes
// app.options('*', cors(corsOptions));

// app.use(
//   fileUpload({
//     useTempFiles: true,
//     tempFileDir: "/tmp",
//   })
// );

// // Cloudinary connection
// cloudinaryConnect();

// // Routes
// app.use("/api/v1/auth", userRoutes);
// app.use("/api/v1/profile", profileRoutes);
// app.use("/api/v1/course", courseRoutes);
// app.use("/api/v1/payment", paymentRoutes);

// // Default route
// app.get("/", (req, res) => {
//   return res.json({
//     success: true,
//     message: 'Your server is up and running....',
//   });
// });

// // Server listening
// app.listen(PORT, () => {
//   console.log(`App is running at ${PORT}`);
// });


const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");

// Load environment variables
dotenv.config();

// Import custom modules
const database = require("./config/database");
const { cloudinaryConnect } = require("./config/cloudinary");

// Import routes
const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/Profile");
const paymentRoutes = require("./routes/Payments");
const courseRoutes = require("./routes/Course");

// Connect to DB
database.connect();

// Middlewares
app.use(express.json());
app.use(cookieParser());

// CORS Configuration
const allowedOrigins = [
  "http://localhost:3000",
  "https://study-notion-vert-rho.vercel.app", // Your deployed frontend
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

// File Upload Middleware
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

// Cloudinary Connection
cloudinaryConnect();

// Routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);

// Health Check Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Your server is up and running....",
  });
});

// Error Handling Middleware (fallback)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong on the server!",
  });
});

// Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🌐 Environment: ${process.env.NODE_ENV || "development"}`);
});
