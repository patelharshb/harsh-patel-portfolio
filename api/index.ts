import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Handle different API routes
  if (req.method === 'GET') {
    if (req.url === '/api/health') {
      res.status(200).json({ status: 'ok', message: 'Portfolio API is running' });
      return;
    }
    
    if (req.url === '/api/contact') {
      res.status(200).json({
        email: 'pharshb1781@gmail.com',
        github: 'https://github.com/harshpatel010202',
        linkedin: 'https://www.linkedin.com/in/harsh-patel2020/'
      });
      return;
    }
  }

  // Default response
  res.status(404).json({ error: 'Not found' });
}
