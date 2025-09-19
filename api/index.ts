import type { VercelRequest, VercelResponse } from '@vercel/node';
import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Basic API routes for your portfolio
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Portfolio API is running' });
});

app.get('/api/contact', (req, res) => {
  res.json({
    email: 'pharshb1781@gmail.com',
    github: 'https://github.com/harshpatel010202',
    linkedin: 'https://www.linkedin.com/in/harsh-patel2020/'
  });
});

// Export the Express app as a Vercel serverless function
export default app;
