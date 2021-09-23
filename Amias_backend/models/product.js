const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "name is required",
    },

    type: {
      type: String, // if it is face type or body type
      
    },

    brand:{
      type: String, //which brand
      required: true, 
   },

    ingredient: [String], // what is product consist of

    category: {
        type: String, //which type of product like face wash, sunscreen etc
    },
   
    price: {
        type: Number,
        required: true,
        default:0,
    },

    userScore: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Survey",
    },

    user_Id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    
    product_image: {
      type: String,
      required: true,
    }
    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
