// const { default: mongoose } = require("mongoose");
// const { productSchema, orderSchema, userSchema } = require("./schema");


// const VegProductModel=mongoose.model("veg",productSchema);
// const NonvegProductModel=mongoose.model("nonveg",productSchema);
// const SweetsModel=mongoose.model("sweet",productSchema);
// const DrinksProductModel=mongoose.model("drink",productSchema);
// const DessertsProductModel=mongoose.model("dessert",productSchema);
// const BreakfastProductModel=mongoose.model("breakfast",productSchema);
// const SnacksModel=mongoose.model("snack",productSchema);
// const FastfoodModel=mongoose.model("fastfood",productSchema);
// const SoupsModel=mongoose.model("soup",productSchema);
// const BakeryModel=mongoose.model("bakery",productSchema);

// const OrderModel=mongoose.model("order",orderSchema);
// const userModel=mongoose.model("user",userSchema)


// // const createNewOrder = async (orderData) => {
// //   const { items, totalAmount } = orderData;

// //   if (!items || !items.length || !totalAmount) {
// //     throw new Error("Items and totalAmount are required");
// //   }

// //   const newOrder = new OrderModel(orderData);
// //   return await newOrder.save();
// // };


// const createNewOrder = async (orderData) => {
//   const itemsWithSubtotal = orderData.items.map(item => ({
//     ...item,
//     subtotal: item.price * item.quantity
//   }));

//   const totalMRP = itemsWithSubtotal.reduce((sum, item) => sum + item.subtotal, 0);

//   const newOrder = new OrderModel({
//     userId: orderData.userId || null,
//     items: itemsWithSubtotal,
//     totalMRP,
//     discountAmount: orderData.discountAmount || 0,
//     couponDiscount: orderData.couponDiscount || 0,
//     gstAmount: orderData.gstAmount || 0,
//     deliveryCharges: orderData.deliveryCharges || 0,
//     finalPayableAmount:
//       totalMRP -
//       (orderData.discountAmount || 0) -
//       (orderData.couponDiscount || 0) +
//       (orderData.gstAmount || 0) +
//       (orderData.deliveryCharges || 0),
//     paymentMethod: orderData.paymentMethod,
//     deliveryAddress: orderData.deliveryAddress,
//     status: "Pending"
//   });

//   return await newOrder.save();
// };


// const addVegProducts = async(newVegProducts)=>{
//         await VegProductModel.insertMany(newVegProducts)

// }

// const addNonVegProducts = async(newNonVegProducts)=>{
//             await NonvegProductModel.insertMany(newNonVegProducts)

// }

// const addSweets = async(newSweets)=>{
//             await SweetsModel.insertMany(newSweets)

// }

// const addDrinkProducts = async(newDrinkProducts)=>{
//             await DrinksProductModel.insertMany(newDrinkProducts)

// }
// const addDessertProducts = async(newDessertProducts)=>{
//             await DessertsProductModel.insertMany(newDessertProducts)

// }

// const addBreakfastProducts = async(newBreakfastProducts)=>{
//             await BreakfastProductModel.insertMany(newBreakfastProducts)

// }

// const addSnacks = async(newSnackProducts)=>{
//             await SnacksModel.insertMany(newSnackProducts)

// }

// const addFastfood = async(newFastfoodProducts)=>{
//             await FastfoodModel.insertMany(newFastfoodProducts)

// }

// const addSoups = async(newSoupProducts)=>{
//             await SoupsModel.insertMany(newSoupProducts)

// }
// const addBakery = async(newBakeryProducts)=>{
//             await BakeryModel.insertMany(newBakeryProducts)

// }


// //posting registration details
// const registerUser = async (data) => {
//   const { name, email, password, phone, address } = data;

//   const userExist = await userModel.findOne({ email });
//   if (userExist) {
//     return { status: false, message: "Email already registered" };
//   }

//   const newUser = await userModel.create({
//     name,
//     email,
//     password,   // NO HASHING
//     phone,
//     address
//   });

//   return {
//     status: true,
//     message: "Registration Successful!",
//     user: newUser
//   };
// };



// const  fetchAllVegProducts=async() =>
// {
//     return await VegProductModel.find();
// }
// const  fetchAllNonVegProducts=async() =>
// {
//     return await NonvegProductModel.find();
// }

// const  fetchAllSweets=async() =>
// {
//     return await SweetsModel.find();
// }

// const  fetchAllDrinkProducts=async() =>
// {
//     return await DrinksProductModel.find();
// }

// const  fetchAllDessertProducts=async() =>
// {
//     return await DessertsProductModel.find();
// }

// const  fetchAllBreakfastProducts=async() =>
// {
//     return await BreakfastProductModel.find();
// }

// const  fetchAllSnackProducts=async() =>
// {
//     return await SnacksModel.find();
// }

// const  fetchAllFastfoodProducts=async() =>
// {
//     return await FastfoodModel.find();
// }

// const  fetchAllSoupProducts=async() =>
// {
//     return await SoupsModel.find();
// }

// const  fetchAllBakeryProducts=async() =>
// {
//     return await BakeryModel.find();
// }

// // const  fetchAllOrderedProducts=async() =>
// // {
// //     return await OrderModel.find();
// // }


// const fetchAllOrderedProducts = async () => {
//   return await OrderModel.find().sort({ createdAt: -1 });
// };


// const getOrdersForUser = async (userId) => {
//   return await OrderModel.find({ userId }).sort({ createdAt: -1 });
// };





// const jwt = require("jsonwebtoken");

// const loginService = async (email, password) => {
//   const user = await userModel.findOne({ email });

//   // User not found
//   if (!user) {
//     return {
//       status: false,
//       message: "User not found",
//       user: null,
//       token: null
//     };
//   }

//   // Password mismatch
//   if (user.password !== password) {
//     return {
//       status: false,
//       message: "Incorrect password",
//       user: null,
//       token: null
//     };
//   }

//   // Prepare user data (remove password)
//   const userData = {
//     id: user.id,
//     name: user.name,
//     email: user.email,
//     phone: user.phone,
//     address: user.address
//   };

//   // Generate JWT Token
//   const token = jwt.sign(
//     { id: user._id, email: user.email },  // payload
//     process.env.JWT_SECRET,              // secret key
//     { expiresIn: process.env.JWT_EXPIRES_IN }  // expiry
//   );

//   return {
//     status: true,
//     message: "Login Successful!",
//     user: userData,
//     token: token
//   };
// };




// // Fetch only summary for a user
// const getOrdersSummaryForUser = async (userId) => {
//     const orders = await OrderModel.find({ userId })
//         .sort({ createdAt: -1 })
//         .select("_id orderDate finalPayableAmount status"); // summary fields
//     return orders.map(order => ({
//         orderId: order._id,
//         date: order.orderDate,
//         total: order.finalPayableAmount,
//         status: order.status
//     }));
// };

// // Fetch full order details by orderId
// const getOrderDetailsById = async (userId, orderId) => {
//     return await OrderModel.findOne({ _id: orderId, userId });
// };




// module.exports={addVegProducts,addNonVegProducts,addSweets,addDrinkProducts,createNewOrder,registerUser,getOrderDetailsById,
//     addBreakfastProducts,addSnacks,addFastfood,addSoups,addBakery,fetchAllBreakfastProducts,getOrdersForUser,getOrdersSummaryForUser,
//     fetchAllSnackProducts,fetchAllFastfoodProducts,fetchAllSoupProducts,fetchAllBakeryProducts,fetchAllOrderedProducts,loginService,
//     addDessertProducts,fetchAllVegProducts,fetchAllNonVegProducts,fetchAllSweets,fetchAllDrinkProducts,fetchAllDessertProducts}

const mongoose = require("mongoose");
const { productSchema, orderSchema, userSchema } = require("./schema");
const jwt = require("jsonwebtoken");

// Product Models
const VegProductModel = mongoose.model("veg", productSchema);
const NonvegProductModel = mongoose.model("nonveg", productSchema);
const SweetsModel = mongoose.model("sweet", productSchema);
const DrinksProductModel = mongoose.model("drink", productSchema);
const DessertsProductModel = mongoose.model("dessert", productSchema);
const BreakfastProductModel = mongoose.model("breakfast", productSchema);
const SnacksModel = mongoose.model("snack", productSchema);
const FastfoodModel = mongoose.model("fastfood", productSchema);
const SoupsModel = mongoose.model("soup", productSchema);
const BakeryModel = mongoose.model("bakery", productSchema);

// Orders & Users
const OrderModel = mongoose.model("order", orderSchema);
const userModel = mongoose.model("user", userSchema);

// -------------------- Products --------------------
const addVegProducts = async (data) => VegProductModel.insertMany(data);
const addNonVegProducts = async (data) => NonvegProductModel.insertMany(data);
const addSweets = async (data) => SweetsModel.insertMany(data);
const addDrinkProducts = async (data) => DrinksProductModel.insertMany(data);
const addDessertProducts = async (data) => DessertsProductModel.insertMany(data);
const addBreakfastProducts = async (data) => BreakfastProductModel.insertMany(data);
const addSnacks = async (data) => SnacksModel.insertMany(data);
const addFastfood = async (data) => FastfoodModel.insertMany(data);
const addSoups = async (data) => SoupsModel.insertMany(data);
const addBakery = async (data) => BakeryModel.insertMany(data);

const fetchAllVegProducts = async () => VegProductModel.find();
const fetchAllNonVegProducts = async () => NonvegProductModel.find();
const fetchAllSweets = async () => SweetsModel.find();
const fetchAllDrinkProducts = async () => DrinksProductModel.find();
const fetchAllDessertProducts = async () => DessertsProductModel.find();
const fetchAllBreakfastProducts = async () => BreakfastProductModel.find();
const fetchAllSnackProducts = async () => SnacksModel.find();
const fetchAllFastfoodProducts = async () => FastfoodModel.find();
const fetchAllSoupProducts = async () => SoupsModel.find();
const fetchAllBakeryProducts = async () => BakeryModel.find();
const fetchAllOrderedProducts = async () => OrderModel.find().sort({ createdAt: -1 });

// -------------------- Orders --------------------
const createNewOrder = async (orderData) => {
  const itemsWithSubtotal = orderData.items.map((item) => ({
    ...item,
    subtotal: item.price * item.quantity,
  }));

  const totalMRP = itemsWithSubtotal.reduce((sum, item) => sum + item.subtotal, 0);

  const newOrder = new OrderModel({
    userId: orderData.userId || null,
    items: itemsWithSubtotal,
    totalMRP,
    discountAmount: orderData.discountAmount || 0,
    couponDiscount: orderData.couponDiscount || 0,
    gstAmount: orderData.gstAmount || 0,
    deliveryCharges: orderData.deliveryCharges || 0,
    finalPayableAmount:
      totalMRP -
      (orderData.discountAmount || 0) -
      (orderData.couponDiscount || 0) +
      (orderData.gstAmount || 0) +
      (orderData.deliveryCharges || 0),
    paymentMethod: orderData.paymentMethod,
    deliveryAddress: orderData.deliveryAddress,
    status: "Pending",
  });

  return await newOrder.save();
};

const getOrdersForUser = async (userId) => OrderModel.find({ userId }).sort({ createdAt: -1 });
const getOrdersSummaryForUser = async (userId) => {
  const orders = await OrderModel.find({ userId })
    .sort({ createdAt: -1 })
    .select("_id orderDate finalPayableAmount status");
  return orders.map((o) => ({
    orderId: o._id,
    date: o.orderDate,
    total: o.finalPayableAmount,
    status: o.status,
  }));
};
const getOrderDetailsById = async (userId, orderId) =>
  OrderModel.findOne({ _id: orderId, userId });

// -------------------- Users --------------------
const bcrypt = require("bcryptjs");

const registerUser = async ({ name, email, password, phone, address }) => {
  const userExist = await userModel.findOne({ email });
  if (userExist) return { status: false, message: "Email already registered" };

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await userModel.create({ name, email, password: hashedPassword, phone, address });

  return { status: true, message: "Registration Successful!", user: newUser };
};

// const loginService = async (email, password) => {
//   const user = await userModel.findOne({ email });
//   if (!user)
//     return { status: false, message: "User not found", user: null, token: null };
//   if (user.password !== password)
//     return { status: false, message: "Incorrect password", user: null, token: null };

//   const token = jwt.sign(
//     { id: user._id, email: user.email },
//     process.env.JWT_SECRET,
//     { expiresIn: process.env.JWT_EXPIRES_IN }
//   );

//   return {
//     status: true,
//     message: "Login Successful!",
//     user: {
//       id: user._id,
//       name: user.name,
//       email: user.email,
//       phone: user.phone,
//       address: user.address,
//     },
//     token,
//   };
// };
const loginService = async (email, password) => {
  const user = await userModel.findOne({ email });
  if (!user) return { status: false, message: "User not found", user: null, token: null };

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return { status: false, message: "Incorrect password", user: null, token: null };

  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  return {
    status: true,
    message: "Login Successful!",
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address,
    },
    token,
  };
};


const crypto = require("crypto");

// Save reset token for user
const saveResetToken = async (email, token, expiry) => {
  return await userModel.findOneAndUpdate(
    { email },
    { resetToken: token, resetTokenExpiry: expiry },
    { new: true }
  );
};

// // Reset password using token
// const resetPasswordService = async (email, token, newPassword) => {
//   const user = await userModel.findOne({ email, resetToken: token });

//   if (!user) throw new Error("Invalid token");
//   if (user.resetTokenExpiry < new Date()) throw new Error("Token expired");

//   user.password = newPassword;
//   user.resetToken = undefined;
//   user.resetTokenExpiry = undefined;
//   await user.save();

//   return true;
// };
const resetPasswordService = async (email, token, newPassword) => {
  const user = await userModel.findOne({ email, resetToken: token });

  if (!user) throw new Error("Invalid token");
  if (user.resetTokenExpiry < new Date()) throw new Error("Token expired");

  // Hash new password
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  user.password = hashedPassword;
  user.resetToken = undefined;
  user.resetTokenExpiry = undefined;
  await user.save();

  return true;
};




module.exports = {
  addVegProducts,
  addNonVegProducts,
  addSweets,
  addDrinkProducts,
  addDessertProducts,
  addBreakfastProducts,
  addSnacks,
  addFastfood,
  addSoups,
  addBakery,
  fetchAllVegProducts,
  fetchAllNonVegProducts,
  fetchAllSweets,
  fetchAllDrinkProducts,
  fetchAllDessertProducts,
  fetchAllBreakfastProducts,
  fetchAllSnackProducts,
  fetchAllFastfoodProducts,
  fetchAllSoupProducts,
  fetchAllBakeryProducts,
  fetchAllOrderedProducts,
  createNewOrder,
  getOrdersForUser,
  getOrdersSummaryForUser,
  getOrderDetailsById,
  registerUser,
  loginService,
  saveResetToken,resetPasswordService
};
