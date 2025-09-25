const express  = require('express');
const { postJob,    getAllJobs ,    getJobById,    getAdminJobs } = require("../controllers/job.controller");
const { isAuthenticated } = require('../middlewares/authenticate');


const router = express.Router();

router.route("/post").post(isAuthenticated,postJob);
router.route("/get").get(isAuthenticated, getAllJobs);
router.route("/getadminjobs").get(isAuthenticated, getAdminJobs);  
    
router.route("/get/:id").get(isAuthenticated,getJobById);


router.get("/", (req, res) => {
  res.json({ message: "Job API is working" });
});

module.exports= router;
