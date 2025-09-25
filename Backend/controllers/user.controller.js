const User = require("../models/user.model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, password, role = "user" } = req.body;
    console.log(fullName, email, phoneNumber, password, role);

    if (!fullName || !email || !phoneNumber || !password) {
      return res.status(400).json({
        error: "All fields are required",
        success: false,
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        error: "Email already exists",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      fullName,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
    });

    return res.status(201).json({
      message: "User registered successfully",
      success: true,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    console.log(email, password, role);

    if (!email || !password || !role) {
      return res.status(400).json({
        error: "All fields are required",
        success: false,
      });
    }

    let user = await User.findOne({ email, role });

    if (!user) {
      return res.status(400).json({
        error: "User not found",
        success: false,
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({
        error: "Invalid password",
        success: false,
      });
    }

    if (role !== user.role) {
      return res.status(400).json({
        error: "Invalid role for the user",
        success: false,
      });
    }

    //If the email, password, and role are correct, a JWT  is generated using the user's _id as part of the payload:

    const tokenData = {
      userId: user._id,
    };

    const token = jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    // creating simplified version of the user object to avoid sending sensitive information (like the password) back in the response:
    user = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
      })
      .json({
        message: "Logged in successfully",
        success: true,
        myuser: user,
      });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Logged out successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Logout failed" });
  }
};

const updateProfile = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, bio, skills } = req.body;
    console.log(bio, skills);
    const file = req.file;

    //cloudinary comes here
    let skillsArray;
    if (skills) {
      skillsArray = skills.split(",");
    }

    const userId = req.id; //middleware authentication

    let user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({
        message: "User not found",
        success: false,
      });
    }

    //Udating user data
    if (fullName) user.fullName = fullName;
    if (email) user.email = email;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (bio) user.profile.bio = bio;
    if (skills) user.profile.skills = skillsArray;

    //resume comes later here

    await user.save();

    user = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res.status(200).json({
      message: "Profile Updated Successfully",
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  register,
  updateProfile,
  login,
  logout,
};
