import express from 'express';
import * as dotenv from 'dotenv';
import connectMongo from './config/index.js';
import cors from 'cors';
import session from 'express-session';
import router from './router/index.js';
/* app initialized */
dotenv.config();
connectMongo();
const app = express();

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
);

// Routes
app.use('/api/auth', router.auth);
app.use('/api/post', router.post);
app.get('/', (req, res) => {
  res.json({
    status: 200,
    message: 'Welcome to the MERN Stack App',
    availableRoutes: {
      '/api/auth': 'Authentication Routes',
      '/api/post': 'Post Routes'
    }
  });
});
app.use((req, res) => {
  res.status(404).json({ message: 'Not Found 404' });
});

/* app listening on port 5000 */
app.listen(1923, function () {
  console.log('Server is running on port : ' + this.address().port);
});
