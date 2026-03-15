const express = require("express");
const { getAllVegProducts, getAllNonVegProducts, getAllSweets, getAllDrinkProducts, getAllDessertProducts, saveSweets,
     getAllBreakfastProducts, getAllSnacksProducts, getAllFastFoodProducts, getAllSoupsProducts, getAllBakeryProducts,
      saveDessertProducts, saveBreakfastProducts, saveSnackProducts, saveFastfoodProducts, saveSoupProducts, 
      saveBakeryProducts, createVegProducts, createNonVegProducts, saveDrinkProducts, 
      createOrders,
      getAllOrderedProducts,
      registerController,
      loginUser,
      getOrderedProducts,
      getOrdersSummary,
      getOrderDetails,
     
      updateProduct,
      deleteProduct,
      forgotPasswordController,
      resetPasswordController} = require("./controller");


const authMiddleware = require("./authorization");

const { default: mongoose } = require("mongoose");

const router = express.Router();




// API Endpoint
router.post("/register", registerController);

router.post("/login", loginUser);
router.post("/forgot-password", forgotPasswordController);
router.post("/reset-password", resetPasswordController);


router.get("/veg",getAllVegProducts);
router.get("/nonveg", getAllNonVegProducts);
router.get("/sweets", getAllSweets);
router.get("/drinks", getAllDrinkProducts);
router.get("/desserts", getAllDessertProducts);
router.get("/breakfast", getAllBreakfastProducts);
router.get("/snacks", getAllSnacksProducts);
router.get("/fastfood", getAllFastFoodProducts);
router.get("/soups", getAllSoupsProducts);
router.get("/bakery", getAllBakeryProducts);



router.post("/saveVeg", createVegProducts);
router.post("/saveNonveg",createNonVegProducts);
router.post("/saveSweets",saveSweets);
router.post("/saveDrinks",saveDrinkProducts);
router.post("/saveDesserts",saveDessertProducts);
router.post("/saveBreakfast",saveBreakfastProducts);
router.post("/saveSnacks",saveSnackProducts);
router.post("/saveFastfood",saveFastfoodProducts);
router.post("/saveSoups",saveSoupProducts);
router.post("/saveBakery",saveBakeryProducts);

router.put("/product/:category/:id", updateProduct);
router.delete("/product/:category/:id", deleteProduct);


router.use(authMiddleware);

router.post("/saveOrders", createOrders);
router.get("/orders", getAllOrderedProducts);
router.get("/orders/all", getOrderedProducts); // full orders
router.get("/orders/summary", getOrdersSummary); // summary only
router.get("/orders/details/:id", getOrderDetails); // full details








module.exports = router;
