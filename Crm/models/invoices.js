const mongoose = require("mongoose");

const invoiceSchema = mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true
    },
    address: {
      type: String
    },
    paymentType:{
     type:String
    },
    phone: {
      type: Number,
      unique: true,
    },
    product: {
      type: String,
    },
    quantity: {
      type: Number,
    },
    price: {
      type: Number,
    },
    date: {
      type: String,
    },
    Id: {
      type: String,
    },
    InvoiceNo: {
      type: String
    },
    serial: {
      type: String
    },
    businessName:{
      type:String
    },
    businessAddress:{
      type:String
    },
    Gst:{
      type:String,
    },
    gstInvoice: {
      default: false,
      type: Boolean
    },
    isAquakartUser: {
      default: false,
      type: Boolean,
    },
    aquakartuser: {
      type: String
    },
    Type: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Invoice", invoiceSchema);
