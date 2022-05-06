
const { Router } = require('express');
const express =require('express')
const router= express.Router();

const collegeController=require('../controllers/collegeController')
const internController=require('../controllers/internController')



router.post("/functionup/colleges", collegeController.createCollege);
router.post("/functionup/interns",internController.createIntern)
router.get("/functionup/collegeDetails",collegeController.getCollege)


module.exports=router;







// const express = require('express');
// const router = express.Router ();
// const collegeController = require ("../controller/collegeController");
// const internController = require('../controller/internController');
// const InternController = require ('../controller/internController')

// router.post ("/createCollege", collegeController.createCollege)
// router.post("/createintern",internController.createintern)




// module.exports = router;