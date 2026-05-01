const express = require("express");
const cors = require("cors");
const path = require("path");

const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const officerRoutes = require("./routes/officerRoutes");
const reportRoutes = require("./routes/reportRoutes");
const complaintRoutes = require("./routes/complaintRoutes");

const app = express();

app.use(express.json());
app.use(cors());

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/officer", officerRoutes);
app.use("/api/report", reportRoutes);
app.use("/api/complaints", complaintRoutes);

// static files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Serve React build (ONLY if exists)
const buildPath = path.join(__dirname, "build");
app.use(express.static(buildPath));

// Catch-all (ONLY ONE)
app.use((req, res) => {
  if (!req.originalUrl.startsWith("/api")) {
    res.sendFile(path.join(buildPath, "index.html"));
  }
});

// PORT FIX (IMPORTANT)
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});