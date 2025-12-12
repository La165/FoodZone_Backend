// const jwt = require("jsonwebtoken");

// // const authMiddleware = (req, res, next) => {
// //   const authHeader = req.headers.authorization;

// //   // 1️⃣ Check if token exists
// //   if (!authHeader || !authHeader.startsWith("Bearer ")) {
// //     return res.status(401).json({ message: "Unauthorized. No token provided" });
// //   }

// //   const token = authHeader.split(" ")[1];

// //   try {
// //     // 2️⃣ Verify token
// //     const decoded = jwt.verify(token, process.env.JWT_SECRET);

// //     // 3️⃣ Attach user info to request
// //     req.user = decoded; // e.g., { id: 'userId', email: 'user@example.com' }
// //     next(); // continue to next middleware / route handler
// //   } catch (err) {
// //     return res.status(401).json({ message: "Invalid or expired token" });
// //   }
// // };


// const authMiddleware = (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(401).json({ message: "Unauthorized - No token provided" });
//   }

//   const token = authHeader.split(" ")[1];

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: "Invalid or expired token" });
//   }
// };

// module.exports = authMiddleware;

const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer "))
    return res.status(401).json({ message: "Unauthorized - No token provided" });

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // attach user info
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = authMiddleware;

