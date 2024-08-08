import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema(
  {
    title: { type: String },
    content: { type: String },
    author: { type: String, default: "Mathbkj <matheusgblasel@hotmail.com>" },
  },
  { timestamps: true, bufferCommands: false }
);
const userSchema = new Schema({
  username: { type: String, default: "User" },
  email: { type: String, default: "User@example.com" },
});
const Blog = mongoose.model("blog", blogSchema, "blogs");
const User = mongoose.model("user", userSchema, "users");
const Models = { Blog, User };

export default Models;
