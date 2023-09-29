const userModel = require('../model/userModel');

const userRegister = async (req,res) => {
    try {
        const { companyName, email, phone, password } = req.body;
        console.log(req.body);
    
        const exists = await userModel.findOne({ email: email });
        if (exists) {
          return res
            .status(200)
            .json({ exists: true, message: "EMAIL ALREADY EXISTS" });
        }
    
        const newUser = new userModel({
          username: companyName,
          email: email,
          password: password
        });
    
        await newUser.save();
        res
          .status(200)
          .json({
            message: "REGISTRATION SUCCESSFULL",
          });
      } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message, created: false });
      }
};

module.exports = {
    userRegister
}