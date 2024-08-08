import nodemailer from "nodemailer";
import mongoose from "mongoose";
import Models from "./template.mjs";
const mongoURI =
  "mongodb+srv://Mathbkj:Naruto1020@primary.mmhvmau.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=Primary";
const mailregex = /^\S+@\S+\.\S+$/;

async function API(name, mail) {
  if (!mailregex.test(mail)) {
    const API_ERROR = new Error();
    API_ERROR.name = "FormatException";
    API_ERROR.message = `Invalid Format Exception at: \\n
     ${mail}`;
    throw API_ERROR;
  }
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      secure: false,
      auth: {
        user: "matheusgblasel@hotmail.com",
        pass: "lojkxvajukcmquvq",
      },
    });
    const mailOptions = {
      from: "matheusgblasel@hotmail.com",
      to: `${mail}`,
      subject: "Monoth Support | Help 📭",
      html: "<h1 class=' text-white bg-slate-950'>Hello,</h1><br/><p>This is an auto-generated message from our website and we'll be contacting you soon for help<br/> Keep on the wait🕒</p><br/><button type='button' class=' p-4 font-mono'>Click here if you still haven't been attended</button>",
    };
    //Mongoose Connection
    await mongoose.connect(mongoURI);
    //
    await transporter.sendMail(mailOptions);
    const user = new Models.User({ username: name, email: mail });
    await user.save();
  } catch (error) {
    await mongoose.disconnect();
    console.error(error);
  }
}
export default API;
