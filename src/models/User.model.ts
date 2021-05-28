import { Schema, model } from "mongoose";

interface User {
  message: string;
  first_name: string;
  email: string;
  password: string;
  phone: number;
}

const schema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});

export default model<User>("user", schema);
