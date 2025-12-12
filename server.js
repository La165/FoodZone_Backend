

// // const express = require("express");

// // const cors = require("cors");

// // const { default: mongoose } = require("mongoose");
// // const router = require("./routes");


// // const app=express();
// // app.use(cors());
// // app.use(express.json());

// // const MONGO_URL = "mongodb+srv://jlalitha2001_db_user:T16IiZd4DjZALZJs@cluster0.syvbtjd.mongodb.net/?appName=Cluster0";



// // mongoose.connect(MONGO_URL)
// //   .then(() => console.log("MongoDB Connected"))
// //   .catch(err => console.log(err));



// // app.listen(3000, ()=>
// // {
// //     console.log("server is running on 3000");
// // });

// // app.use("/api/v1/products",router);

// require("dotenv").config();      
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const router = require("./routes");

// const app = express();

// // Middlewares
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB using .env variable
// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => console.log("✔ MongoDB Connected"))
//   .catch((err) => console.log("❌ MongoDB Error:", err));

// // Use router
// app.use("/api/v1/products", router);

// // Start Server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes");

const app = express();

// ⭐ FIXED CORS — allow ALL ports but also allow credentials
app.use(
  cors({
    origin: (origin, callback) => {
      callback(null, origin || "*"); 
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("✔ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

// Routes
app.use("/api/v1/products", router);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
