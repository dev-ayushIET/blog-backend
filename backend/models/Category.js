const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
    {
    name: {
        type: String,
        required: trusted,
    },
},
{timestamps: true}
);

module.exports = mongoose.model("Category", CategorySchema);