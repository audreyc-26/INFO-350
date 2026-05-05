const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Simple logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
});

// Environment variable
const greeting = process.env.GREETING || "Hello from your deployed app!";

// In-memory data
let items = [
  { id: 1, name: "Sample Item 1" },
  { id: 2, name: "Sample Item 2" }
];

// GET route
app.get("/api/items", (req, res) => {
  res.json(items);
});

// POST route
app.post("/api/items", (req, res) => {
  const newItem = {
    id: Date.now(),
    name: req.body.name
  };

  if (!newItem.name) {
    return res.status(400).json({ error: "Item name is required" });
  }

  items.push(newItem);
  res.status(201).json(newItem);
});

// Example env route
app.get("/api/message", (req, res) => {
  res.json({ message: greeting });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});