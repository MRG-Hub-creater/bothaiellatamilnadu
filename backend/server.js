// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.use(cors());

// app.get('/api/status', (req, res) => {
//   res.json({ message: "Node.js backend is active and routing." });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Backend server running on http://localhost:${PORT}`);
// });



// require('dotenv').config();

// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');

// // Import your routes
// const antiDrugRoutes = require('./routes/antiDrug');

// const app = express();

// const allowedOrigins = [
//   'http://localhost:5173',
//   'http://127.0.0.1:5173',
//   'http://localhost:3000',
//   'http://127.0.0.1:3000',
//   process.env.CLIENT_URL,
//   process.env.CLIENT_URL_1,
//   process.env.VITE_API_URL,
//   process.env.NGROK_URL,
//   'https://decimal-blimp-apricot.ngrok-free.dev'
// ].filter(Boolean);

// app.use(cors({
//   origin: (origin, callback) => {
//     if (!origin) {
//       return callback(null, true);
//     }

//     const normalizedOrigin = origin.trim().replace(/\/$/, '');
//     const isAllowed = allowedOrigins.some((allowedOrigin) => {
//       const normalizedAllowedOrigin = (allowedOrigin || '').trim().replace(/\/$/, '');
//       return (
//         normalizedOrigin === normalizedAllowedOrigin ||
//         normalizedOrigin.startsWith('http://localhost:') ||
//         normalizedOrigin.startsWith('http://127.0.0.1:') ||
//         normalizedOrigin.startsWith('http://192.168.') ||
//         normalizedOrigin.includes('ngrok-free.dev') ||
//         normalizedOrigin.includes('ngrok.app')
//       );
//     });

//     if (isAllowed) {
//       callback(null, true);
//     } else {
//       console.warn(`CORS blocked origin: ${origin}`);
//       callback(null, true);
//     }
//   },
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   credentials: true,
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));

// app.use(express.json()); // Required to parse incoming JSON payloads (req.body)

// // Connect to MongoDB via .env or a local fallback
// const mongoConnection = process.env.CONNECTION_STRING || 'mongodb://127.0.0.1:27017/antiDrugDB';

// mongoose.connect(mongoConnection)
//   .then(() => console.log('MongoDB Connected Successfully!'))
//   .catch(err => console.error('MongoDB Connection Error:', err));

// // Health check route
// app.get('/api/status', (req, res) => {
//   res.json({ message: "Node.js backend is active and routing." });
// });

// // Register the Anti-Drug routes
// app.use('/api/antidrug', antiDrugRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Backend server running on http://localhost:${PORT}`);
// });


// require('dotenv').config();

// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');

// // Import routes
// const antiDrugRoutes = require('./routes/antiDrug');

// const app = express();

// // CORS

// const allowedOrigins = [
//   'http://localhost:5173',
//   'http://127.0.0.1:5173',
//   'http://localhost:3000',
//   'http://127.0.0.1:3000',

//   // Production frontend
//   process.env.CLIENT_URL,

//   // Optional additional frontend
//   process.env.CLIENT_URL_1,

//   // Local / development
//   process.env.NGROK_URL,
//   'https://decimal-blimp-apricot.ngrok-free.dev'
// ].filter(Boolean);

// app.use(
//   cors({
//     origin: (origin, callback) => {
//       // Allow requests without an Origin header
//       if (!origin) {
//         return callback(null, true);
//       }

//       const normalizedOrigin = origin
//         .trim()
//         .replace(/\/$/, '');

//       const isAllowed = allowedOrigins.some((allowedOrigin) => {
//         const normalizedAllowedOrigin = allowedOrigin
//           .trim()
//           .replace(/\/$/, '');

//         return (
//           normalizedOrigin === normalizedAllowedOrigin ||
//           normalizedOrigin.startsWith('http://localhost:') ||
//           normalizedOrigin.startsWith('http://127.0.0.1:') ||
//           normalizedOrigin.startsWith('http://192.168.') ||
//           normalizedOrigin.includes('ngrok-free.dev') ||
//           normalizedOrigin.includes('ngrok.app')
//         );
//       });

//       if (isAllowed) {
//         callback(null, true);
//       } else {
//         console.warn(`CORS blocked origin: ${origin}`);
//         callback(new Error('Not allowed by CORS'));
//       }
//     },

//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     credentials: true,
//     allowedHeaders: ['Content-Type', 'Authorization']
//   })
// );

// // Middleware

// app.use(express.json());

// // Health Check

// app.get('/', (req, res) => {
//   res.json({
//     message: 'Anti-Drug Backend API is running!'
//   });
// });

// app.get('/api/status', (req, res) => {
//   res.json({
//     message: 'Node.js backend is active and routing.'
//   });
// });

// // Routes

// app.use('/api/antidrug', antiDrugRoutes);

// // PORT

// const PORT = process.env.PORT || 5000;

// // IMPORTANT FOR RENDER:
// // Listen on 0.0.0.0
// app.listen(PORT, '0.0.0.0', () => {
//   console.log(`Backend server running on port ${PORT}`);
// });

// // MongoDB

// const mongoConnection = process.env.CONNECTION_STRING;

// if (!mongoConnection) {
//   console.error('ERROR: CONNECTION_STRING is not defined.');
// } else {
//   mongoose
//     .connect(mongoConnection, {
//       serverSelectionTimeoutMS: 10000
//     })
//     .then(() => {
//       console.log('MongoDB Connected Successfully!');
//     })
//     .catch((err) => {
//       console.error('MongoDB Connection Error:', err.message);
//     });
// }




const dns = require('dns');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '.env') });

try {
  dns.setServers(['8.8.8.8', '8.8.4.4']);
  console.log("DNS forcibly set to Google Public DNS");
} catch (e) {
  console.log("Could not set DNS:", e);
}

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Import routes
const antiDrugRoutes = require('./routes/antiDrug');

const app = express();

// CORS Configuration

const allowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:3000',
  'http://127.0.0.1:3000',

  // Production Domains for Hostinger
  'https://bothaiellatamilnadu.in',
  'https://www.bothaiellatamilnadu.in',

  // Environment Variables
  process.env.CLIENT_URL,
  process.env.CLIENT_URL_1,

  // Development Tunneling
  process.env.NGROK_URL,
  'https://decimal-blimp-apricot.ngrok-free.dev'
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests without an Origin header (like Postman or curl)
      if (!origin) {
        return callback(null, true);
      }

      const normalizedOrigin = origin
        .trim()
        .replace(/\/$/, '');

      const isAllowed = allowedOrigins.some((allowedOrigin) => {
        const normalizedAllowedOrigin = allowedOrigin
          .trim()
          .replace(/\/$/, '');

        return (
          normalizedOrigin === normalizedAllowedOrigin ||
          normalizedOrigin.startsWith('http://localhost:') ||
          normalizedOrigin.startsWith('http://127.0.0.1:') ||
          normalizedOrigin.startsWith('http://192.168.') ||
          normalizedOrigin.endsWith('bothaiellatamilnadu.in') || // Matches both root and subdomains
          normalizedOrigin.endsWith('.vercel.app') ||              // Matches Vercel deployments
          normalizedOrigin.includes('ngrok-free.dev') ||
          normalizedOrigin.includes('ngrok.app')
        );
      });

      if (isAllowed) {
        callback(null, true);
      } else {
        console.warn(`CORS blocked origin: ${origin}`);
        callback(new Error('Not allowed by CORS'));
      }
    },

    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);

// Middleware

app.use(express.json());

// Health Check Routes

app.get('/', (req, res) => {
  res.json({
    message: 'Anti-Drug Backend API is running!'
  });
});

app.get('/api/status', (req, res) => {
  res.json({
    message: 'Node.js backend is active and routing.'
  });
});

// Routes

app.use('/api/antidrug', antiDrugRoutes);

// PORT

const PORT = process.env.PORT || 5000;

// Listen on 0.0.0.0 (required for Render)
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend server running on port ${PORT}`);
});

// MongoDB Connection

const mongoConnection = process.env.CONNECTION_STRING;

if (!mongoConnection) {
  console.error('ERROR: CONNECTION_STRING is not defined.');
} else {
  mongoose
    .connect(mongoConnection, {
      serverSelectionTimeoutMS: 10000
    })
    .then(() => {
      console.log('MongoDB Connected Successfully!');
    })
    .catch((err) => {
      console.error('MongoDB Connection Error:', err.message);
    });
}