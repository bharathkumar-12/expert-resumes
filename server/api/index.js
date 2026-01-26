// server/api/index.js

// Import required modules
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Setup PDF fonts
pdfMake.vfs = pdfFonts.pdfMake.vfs;

// Initialize Express App
const app = express();
const PORT = process.env.PORT || 4000;
const mongoURI = process.env.MONGODB_URI;

// Check if MongoDB URI is provided
if (!mongoURI) {
  console.error(
    '❌ ERROR: MONGODB_URI is not defined in environment variables.',
  );
  console.error(
    'Please create a .env file with MONGODB_URI=your-mongodb-connection-string',
  );
  process.exit(1);
}

// Middleware
app.use(express.json()); // Use native JSON parsing
app.use(cors()); // Enable Cross-Origin Resource Sharing

// MongoDB Connection
mongoose
  .connect(mongoURI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    console.error(
      'Please ensure MongoDB is running or check your connection string.',
    );
    process.exit(1); // Exit if unable to connect to DB
  });

// Data Models
const educationSchema = new mongoose.Schema({
  id: { type: String, required: true },
  schoolName: { type: String, required: true },
  schoolLocation: { type: String, required: true },
  degree: { type: String, required: true },
  fieldOfStudy: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  courseWork: { type: String },
});

const experienceSchema = new mongoose.Schema({
  id: { type: String, required: true },
  jobTitle: { type: String, required: true },
  city: { type: String, required: true },
  employer: { type: String, required: true },
  country: { type: String, required: true },
  jobDescription: { type: String },
  startDate: { type: String, required: true },
  endDate: { type: String },
});

const projectSchema = new mongoose.Schema({
  id: { type: String },
  projectTitle: { type: String },
  projectDescription: { type: String },
  projectLink: { type: String },
});

const resumeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    github: { type: String },
    linkedin: { type: String },
    education: [educationSchema],
    experience: [experienceSchema],
    skills: { type: String },
    project: [projectSchema],
  },
  { timestamps: true },
);

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

// Models
const Resume = mongoose.model('Resume', resumeSchema);
const Contact = mongoose.model('Contact', contactSchema);

// Routes
app.get('/', (req, res) => {
  res.status(200).send('Nuxt Backend Running Fine');
});

// Create a new resume
app.post('/api/resume', async (req, res) => {
  try {
    const resume = await Resume.create(req.body);
    console.log('Received payload:', req.body); // Log the payload
    res.status(201).json(resume);
  } catch (error) {
    console.error('Error creating resume:', error);
    res.status(400).json({ message: 'Failed to create resume', error });
  }
});

// Generate PDF for a resume
app.get('/api/resume/:id/pdf', async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) return res.status(404).json({ message: 'Resume not found' });

    const docDefinition = {
      content: [
        { text: resume.name, style: 'header' },
        // Add other content based on the resume data
      ],
      styles: {
        header: {
          fontSize: 22,
          bold: true,
          alignment: 'center',
          margin: [0, 0, 0, 10],
        },
      },
    };

    const pdfDoc = pdfMake.createPdf(docDefinition);
    pdfDoc.getBase64((base64) => {
      res.json({
        pdfBase64: base64,
        fileName: `${resume.name.replace(' ', '_')}-resume.pdf`,
      });
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Create a new contact message
app.post('/api/contact', async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (error) {
    console.error('Error creating contact:', error);
    res.status(400).json({ message: 'Failed to create contact', error });
  }
});

// Centralized error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res
    .status(err.status || 500)
    .json({ message: err.message || 'Internal Server Error' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Export the app for Nuxt integration
export default app;
