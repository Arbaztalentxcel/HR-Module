const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000' }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/onboarding', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
const personalInfoRoutes = require('./routes/personalInfo');
const documentUploadRoutes = require('./routes/documentUpload');
const feedbackRoutes = require('./routes/feedback');

app.use('/api/personal-info', personalInfoRoutes);
app.use('/api/document-upload', documentUploadRoutes);
app.use('/api/feedback', feedbackRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
