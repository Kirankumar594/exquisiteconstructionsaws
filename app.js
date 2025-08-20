const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React build folder (if any)
app.use(express.static(path.join(__dirname, '../client/build')));

// Sample API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

// Catch-all route to handle frontend routing
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../'));
// }); 

app.use(express.static(path.join(__dirname, 'build'))); // Change 'build' to your frontend folder if needed

// Redirect all requests to the index.html file

app.get("*", (req, res) => {
  return  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
