
const mongoose = require("mongoose");
const {
  addNonVegProducts,
  addVegProducts,
  fetchAllVegProducts,
  fetchAllNonVegProducts,
  addDessertProducts,
  fetchAllSweets,
  fetchAllDrinkProducts,
  fetchAllDessertProducts,
  addDrinkProducts,
  addSweets,
  addSnacks,
  addBreakfastProducts,
  fetchAllBreakfastProducts,
  fetchAllSnackProducts,
  addFastfood,
  addSoups,
  addBakery,
  fetchAllFastfoodProducts,
  fetchAllSoupProducts,
  fetchAllBakeryProducts,
  fetchAllOrderedProducts,
  createNewOrder,
  registerUser,
  loginService,
  getOrdersForUser,
  getOrdersSummaryForUser,
  getOrderDetailsById,
} = require("./service");





// -------------------- Product Controllers --------------------
const createVegProducts = async (req, res) => {
  await addVegProducts(req.body);
  res.send("Veg items added successfully");
};

const createNonVegProducts = async (req, res) => {
  await addNonVegProducts(req.body);
  res.send("Non-veg items added successfully");
};

const saveSweets = async (req, res) => {
  await addSweets(req.body);
  res.send("Sweet items added successfully");
};

const saveDrinkProducts = async (req, res) => {
  await addDrinkProducts(req.body);
  res.send("Drink items added successfully");
};

const saveDessertProducts = async (req, res) => {
  await addDessertProducts(req.body);
  res.send("Dessert items added successfully");
};

const saveBreakfastProducts = async (req, res) => {
  await addBreakfastProducts(req.body);
  res.send("Breakfast items added successfully");
};

const saveFastfoodProducts = async (req, res) => {
  await addFastfood(req.body);
  res.send("Fastfood items added successfully");
};

const saveSnackProducts = async (req, res) => {
  await addSnacks(req.body);
  res.send("Snack items added successfully");
};

const saveSoupProducts = async (req, res) => {
  await addSoups(req.body);
  res.send("Soup items added successfully");
};

const saveBakeryProducts = async (req, res) => {
  await addBakery(req.body);
  res.send("Bakery items added successfully");
};
//-----------------------------Update& delete----------------------
const getModelByCategory = (category) => {
  const models = {
    veg: VegProductModel,
    nonveg: NonvegProductModel,
    sweet: SweetsModel,
    drink: DrinksProductModel,
    dessert: DessertsProductModel,
    breakfast: BreakfastProductModel,
    snack: SnacksModel,
    fastfood: FastfoodModel,
    soup: SoupsModel,
    bakery: BakeryModel,
  };

  return models[category] || null;
};

// 2️⃣ --- UPDATE PRODUCT ---
const updateProduct = async (req, res) => {
  try {
    const { category, id } = req.params;

    const Model = getModelByCategory(category);
    if (!Model)
      return res.status(400).json({ message: "Invalid category" });

    const updatedProduct = await Model.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedProduct)
      return res.status(404).json({ message: "Product not found" });

    res.status(200).json({
      status: true,
      message: "Product updated successfully",
      product: updatedProduct,
    });

  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// 3️⃣ --- DELETE PRODUCT ---
const deleteProduct = async (req, res) => {
  try {
    const { category, id } = req.params;

    const Model = getModelByCategory(category);
    if (!Model)
      return res.status(400).json({ message: "Invalid category" });

    const deleted = await Model.findByIdAndDelete(id);

    if (!deleted)
      return res.status(404).json({ message: "Product not found" });

    res.status(200).json({
      status: true,
      message: "Product deleted successfully",
    });

  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// -------------------- Fetch Products --------------------
const getAllVegProducts = async (req, res) => res.send(await fetchAllVegProducts());
const getAllNonVegProducts = async (req, res) => res.send(await fetchAllNonVegProducts());
const getAllSweets = async (req, res) => res.send(await fetchAllSweets());
const getAllDrinkProducts = async (req, res) => res.send(await fetchAllDrinkProducts());
const getAllDessertProducts = async (req, res) => res.send(await fetchAllDessertProducts());
const getAllBreakfastProducts = async (req, res) => res.send(await fetchAllBreakfastProducts());
const getAllSnacksProducts = async (req, res) => res.send(await fetchAllSnackProducts());
const getAllFastFoodProducts = async (req, res) => res.send(await fetchAllFastfoodProducts());
const getAllSoupsProducts = async (req, res) => res.send(await fetchAllSoupProducts());
const getAllBakeryProducts = async (req, res) => res.send(await fetchAllBakeryProducts());

// -------------------- User Registration & Login --------------------
const registerController = async (req, res) => {
  try {
    const result = await registerUser(req.body);
    if (!result.status) return res.status(400).json(result);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};


// const loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password)
//       return res.status(400).json({ status: false, message: "Email and password are required", user: null, token: null });

//     const result = await loginService(email, password);
//     if (!result.status) return res.status(401).json(result);

//     return res.status(200).json(result);
//   } catch (error) {
//     return res.status(500).json({ status: false, message: "Server Error", error: error.message });
//   }
// };

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        status: false,
        message: "Email and password are required",
        user: null,
        token: null,
      });
    }

    const result = await loginService(email, password);
    if (!result.status) return res.status(401).json(result);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ status: false, message: "Server Error", error: error.message });
  }
};



// -------------------- Orders --------------------
const createOrders = async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ message: "Please login to place an order" });

    const order = await createNewOrder({ ...req.body, userId: req.user.id });
    res.status(201).json({ success: true, message: "Order placed successfully", order });
  } catch (error) {
    res.status(500).json({ message: "Server error while placing order", error });
  }
};

// Orders page → full list for logged-in user
const getAllOrderedProducts = async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ message: "Unauthorized: Please login" });
    const orders = await getOrdersForUser(req.user.id);
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Cannot fetch orders", error: error.message });
  }
};

// Orders page → summary only
const getOrdersSummary = async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });
    const summary = await getOrdersSummaryForUser(req.user.id);
    res.status(200).json(summary);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Order details page → full details
const getOrderDetails = async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });

    const orderId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(orderId)) return res.status(400).json({ message: "Invalid order ID" });

    const order = await getOrderDetailsById(req.user.id, orderId);
    if (!order) return res.status(404).json({ message: "Order not found" });

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const nodemailer = require("nodemailer");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs"); // for hashing passwords
const { userSchema } = require("./schema");

const userModel = mongoose.model("user", userSchema);

// -------------------- Forgot Password --------------------
const forgotPasswordController = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const token = uuidv4();
    const expiry = Date.now() + 3600000; // 1 hour

    user.resetToken = token;
    user.resetTokenExpiry = expiry;
    await user.save();

    const resetLink = `http://localhost:9008/reset-password?token=${token}&email=${email}`;

    // Nodemailer setup
    const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


    await transporter.sendMail({
      from: '"Food App" <jlalitha2001@gmail.com>',
      to: email,
      subject: "Reset Password",
      html: `<p>You requested a password reset.</p>
             <p>Click the link to reset your password:</p>
             <a href="${resetLink}">${resetLink}</a>`,
    });

    res.json({ message: "Reset link sent to your email" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// -------------------- Reset Password --------------------
const resetPasswordController = async (req, res) => {
  try {
    const { email, token, password } = req.body;

    const user = await userModel.findOne({ email, resetToken: token });
    if (!user) return res.status(400).json({ message: "Invalid token" });
    if (user.resetTokenExpiry < Date.now())
      return res.status(400).json({ message: "Token expired" });

    // Hash new password
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    user.resetToken = null;
    user.resetTokenExpiry = null;

    await user.save();

    res.json({ message: "Password reset successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};




module.exports = {
  createVegProducts,resetPasswordController,forgotPasswordController,
  createNonVegProducts,
  saveSweets,
  saveDrinkProducts,
  saveDessertProducts,
  saveBreakfastProducts,
  saveSnackProducts,
  saveFastfoodProducts,
  saveSoupProducts,
  saveBakeryProducts,
  getAllVegProducts,
  getAllNonVegProducts,
  getAllSweets,updateProduct,deleteProduct,
  getAllDrinkProducts,
  getAllDessertProducts,
  getAllBreakfastProducts,
  getAllSnacksProducts,
  getAllFastFoodProducts,
  getAllSoupsProducts,
  getAllBakeryProducts,
  registerController,
  loginUser,getModelByCategory,
  createOrders,
  getAllOrderedProducts,
  getOrderedProducts: fetchAllOrderedProducts,
  getOrdersSummary,
  getOrderDetails,updateProduct,deleteProduct
};
