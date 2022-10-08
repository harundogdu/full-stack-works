import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  let token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    token = token.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid Token' });
  }
};
