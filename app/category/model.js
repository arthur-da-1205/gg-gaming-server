const mongoose = require("mongoose");

let categoryScheme = mongoose.Schema({
  categoryName: {
    type: String,
    require: [true, "Nama kategori tidak boleh kosong"],
  },
});

module.exports = mongoose.model("Category", categoryScheme);
