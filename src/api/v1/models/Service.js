const mogoose = require("mongoose");

const serviceSchema = new mogoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    descriptions: {
      type: [String],
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mogoose.model("Service", serviceSchema);
