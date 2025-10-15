const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');
const db = require('./config/db');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Logging
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, '..', 'logs', 'access.log'),
  { flags: 'a' }
);
app.use(morgan('combined', { stream: accessLogStream }));

// ✅ Import routes
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

// ✅ Use routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/tasks', taskRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('🚀 Primetrade Backend Running');
});

app.get('/test', (req, res) => {
  res.json({ message: '✅ Test route working fine!' });
});

// Error handler
app.use((err, req, res, next) => {
  fs.appendFileSync(path.join(__dirname, '..', 'logs', 'error.log'), err.stack + '\n');
  res.status(500).json({ error: 'Internal Server Error' });
});

// ✅ Server start
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
