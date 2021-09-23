const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema(
  {
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },

    userScore: {
      type: Number ,
      range: {
          min: { type: Number, min: 0 },
          max: { type: Number, min: 36 }
      }
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Survey", surveySchema);
