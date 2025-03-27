const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Enable CORS for frontend
app.use(cors());

// Serve static files
app.use(express.static(path.join(__dirname)));

// Initialize views data file if it doesn't exist
const viewsFilePath = path.join(__dirname, 'views.json');
if (!fs.existsSync(viewsFilePath)) {
    fs.writeFileSync(viewsFilePath, JSON.stringify({ views: 0 }));
}

// Get current views
app.get('/api/views', (req, res) => {
    const data = JSON.parse(fs.readFileSync(viewsFilePath));
    res.json(data);
});

// Increment views
app.post('/api/views', (req, res) => {
    const data = JSON.parse(fs.readFileSync(viewsFilePath));
    data.views += 1;
    fs.writeFileSync(viewsFilePath, JSON.stringify(data));
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});