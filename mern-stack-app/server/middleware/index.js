import verifyToken from './verifyToken.middleware.js';

const middleware = {
  auth: verifyToken
};

export default middleware;
