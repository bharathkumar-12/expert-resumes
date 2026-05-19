# Expert Resumes

A professional resume builder application built with Nuxt 3, Vue 3, and MongoDB. Create, customize, and export professional resumes with ease.

## Features

- 📝 **Resume Builder**: Intuitive interface for creating professional resumes
- 🎨 **Multiple Templates**: Choose from various professional resume templates
- 📄 **PDF Export**: Generate and download resumes as PDF files
- 💾 **Data Persistence**: Save resume data with MongoDB integration
- 📱 **Responsive Design**: Fully responsive design built with Tailwind CSS
- 🎯 **Contact Form**: Integrated contact form for client communication
- 📊 **Analytics**: Google Analytics integration for tracking user engagement
- ⚡ **Modern Stack**: Built with Nuxt 3, Vue 3, and Express.js

## Tech Stack

### Frontend

- **Nuxt 3**: Vue.js framework for building modern web applications
- **Vue 3**: Progressive JavaScript framework
- **Tailwind CSS**: Utility-first CSS framework
- **Pinia**: State management for Vue
- **Font Awesome**: Icon library for UI components

### Backend

- **Express.js**: Node.js web application framework
- **MongoDB**: NoSQL database for data storage
- **Mongoose**: MongoDB object modeling for Node.js
- **PDFMake**: PDF document generation library

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (local installation or MongoDB Atlas account)

## Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd expert-resumes
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Environment Configuration**

   Create a `.env` file in the root directory by copying the example file:

   ```bash
   cp .env.example .env
   ```

   Update the `.env` file with your configuration:

   ```env
   # MongoDB Configuration
   MONGODB_URI=mongodb://localhost:27017/expert-resumes

   # API Configuration
   NUXT_PUBLIC_API_BASE=http://localhost:4000

   # Google Analytics (Optional)
   NUXT_PUBLIC_GTAG_ID=your-google-analytics-id

   # Server Configuration
   PORT=4000
   ```

## Running the Application

### Development Mode

1. **Start MongoDB** (if running locally)

   ```bash
   mongod
   ```

2. **Start the Express backend server**

   ```bash
   node server/api/index.js
   ```

3. **Start the Nuxt development server** (in a separate terminal)

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`

### Production Mode

1. **Build the application**

   ```bash
   npm run build
   ```

2. **Preview the production build**
   ```bash
   npm run preview
   ```

## Project Structure

```
expert-resumes/
├── assets/               # Static assets (CSS, images)
│   ├── css/             # Global styles
│   └── images/          # Image files
├── components/          # Vue components
│   └── blocks/          # Reusable component blocks
├── layouts/             # Nuxt layouts
├── pages/               # Application pages/routes
│   ├── index.vue        # Home page
│   ├── create-resume.vue # Resume builder
│   ├── resume-preview.vue # Resume preview
│   ├── services.vue     # Services page
│   ├── about.vue        # About page
│   └── contact.vue      # Contact page
├── plugins/             # Nuxt plugins
├── public/              # Public static files
├── server/              # Backend server code
│   └── api/
│       └── index.js     # Express API server
├── store/               # Pinia stores
│   ├── resume.js        # Resume state management
│   ├── admin.js         # Admin state management
│   └── users.js         # User state management
├── .env.example         # Environment variables template
├── nuxt.config.ts       # Nuxt configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Project dependencies
```

## API Endpoints

### Resume Endpoints

- `POST /api/resume` - Create a new resume
- `GET /api/resume/:id/pdf` - Generate and retrieve resume PDF

### Contact Endpoints

- `POST /api/contact` - Submit a contact form message

## Features in Detail

### Resume Builder

- **Personal Information**: Add name, email, phone, GitHub, and LinkedIn
- **Education**: Multiple education entries with dates and details
- **Experience**: Work experience with job titles, companies, and descriptions
- **Projects**: Showcase your projects with descriptions and links
- **Skills**: List your technical and soft skills

### PDF Generation

- Generates professional PDF resumes using PDFMake
- Customizable templates and styling
- Download or preview before downloading

## Environment Variables

| Variable               | Description                  | Required | Default                 |
| ---------------------- | ---------------------------- | -------- | ----------------------- |
| `MONGODB_URI`          | MongoDB connection string    | Yes      | -                       |
| `NUXT_PUBLIC_API_BASE` | Backend API base URL         | Yes      | `http://localhost:4000` |
| `NUXT_PUBLIC_GTAG_ID`  | Google Analytics tracking ID | No       | -                       |
| `PORT`                 | Backend server port          | No       | `4000`                  |

## Database Schema

### Resume Schema

```javascript
{
  name: String (required),
  email: String (required),
  phone: String (required),
  github: String,
  linkedin: String,
  education: [EducationSchema],
  experience: [ExperienceSchema],
  skills: String,
  project: [ProjectSchema],
  timestamps: true
}
```

### Contact Schema

```javascript
{
  name: String (required),
  email: String (required),
  message: String (required),
  date: Date (default: Date.now),
  timestamps: true
}
```

## Deployment

### Deploying to Vercel (Frontend)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Deploying Backend to Heroku/Railway

1. Ensure your `server/api/index.js` is properly configured
2. Add a `Procfile` if needed: `web: node server/api/index.js`
3. Configure environment variables in your platform
4. Deploy your backend

### MongoDB Atlas (Cloud Database)

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Get your connection string
4. Update `MONGODB_URI` in your `.env` file

## Troubleshooting

### MongoDB Connection Issues

- Ensure MongoDB is running: `mongod`
- Check connection string format in `.env`
- For MongoDB Atlas, ensure IP whitelist is configured

### Port Already in Use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Kill process on port 4000
lsof -ti:4000 | xargs kill -9
```

### Build Errors

- Clear the `.nuxt` directory: `rm -rf .nuxt`
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@expertresumes.com or create an issue in the repository.

## Acknowledgments

- [Nuxt 3](https://nuxt.com/) - The Vue.js framework
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [MongoDB](https://www.mongodb.com/) - Database
- [Font Awesome](https://fontawesome.com/) - Icons
- [PDFMake](http://pdfmake.org/) - PDF generation

---

Built with ❤️ using Nuxt 3 and Vue 3

---

## Maintenance

Last maintenance update: <!--LAST_UPDATED-->2026-05-19<!--/LAST_UPDATED-->
