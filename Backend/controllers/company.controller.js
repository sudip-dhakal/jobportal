const Company = require("../models/company.model");

const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;
    console.log(companyName);
    if (!companyName) {
      return res
        .status(400)
        .json({ error: "Company name is required", success: false });
    }
    let company = await Company.findOne({ name: companyName });
    if (company) {
      return res
        .status(400)
        .json({ error: "Company already exists", success: false });
    }
    company = await Company.create({
      name: companyName,
      userId: req.id,
    });
    return res.status(200).json({
      success: true,
      message: "Company created successfully",
      company,
    });
  } catch (err) {
    console.error(err);
  }
};

const getCompany = async (req, res) => {
  try {
    const userId = req.id; //logged in user Id
    const companies = await Company.find({ userId });
    if (!companies) {
      return res
        .status(404)
        .json({ error: "No companies found", success: false });
    }

    return res.status(200).json({
      companies,
      success: true,
    });
  } catch (err) {
    console.error(err);
  }
};

const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);
    if (!company) {
      return res
        .status(404)
        .json({ error: "No companies found", success: false });
    } else {
      return res.status(200).json({
        success: true,
        message: "Company fetched successfully",
        company,
      });
    }
  } catch (error) {
    console.error(err);
  }
};

const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;
    const file = req.file;
    //cloudinary belongs here

    const updateData = { name, description, website, location };

    const company = await Company.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    if (!company) {
      return res.status(404).json({
        message: "Company not found",
        success: false,
      });
    } else {
      return res.status(200).json({
        message: "Compnay Information updated successfully",
        success: true,
      });
    }
  } catch (error) {
    console.error(err);
  }
};

module.exports = {
  registerCompany,
  updateCompany,
  getCompany,
  getCompanyById,
};
