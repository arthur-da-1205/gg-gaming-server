const mongoose = require("mongoose");

let nominalScheme = mongoose.Schema({
  cointName: {
    type: String,
    require: [true, "Nama koin tidak boleh kosong"],
  },
  cointQty: {
    type: Number,
    default: 0,
    require: [true, "Kuantiti tidak boleh kosong"],
  },
  price: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Nominal", nominalScheme);
