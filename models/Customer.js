import { Schema, model, models } from "mongoose";

const CustomerSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 1,
  },
  lastName: {
    type: String,
    required: true,
    minLength: 1,
  },
  email: {
    type: String,
    required: true,
    minLength: 1,
  },
  phone: String,
  address: String,
  postalCode: Number,
  date: Date, //tarikh sabte name moshtari dar database
  products: {
    type: Array,
    default: [], //besurate default yek Array khali bashad
  },
  createAt: Date, //tarikhe sabt dar system
  default: () => Date.now(),
  immutable: true, //ke natunim ino taghir bedim
  updateAt: {
    type: Date,
    default: () => Date.now(),
  },
});

const Customer = models.Customer || model("Customer", CustomerSchema);

export default Customer;
