const mongoose = require("mongoose");
exports.connectDB = (mongoose) => {
  try {
    mongoose.connect(
      "mongodb+srv://root:root@testing-ecommerce-app.ggrwouv.mongodb.net/testing-ecommerce-app?appName=testing-ecommerce-app",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    );
    console.log("Database Connected Successfully");
  } catch (err) {
    console.log("Database Not Connected");
  }
};
