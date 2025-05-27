const express = require('express');
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingsController = require("../controllers/listings.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });


router.route("/")   
.get( wrapAsync(listingsController.index))
.post( isLoggedIn, upload.single('listing[image]'), validateListing, wrapAsync(listingsController.create));

//New Route ...
router.get("/new", isLoggedIn, listingsController.new);

router.route("/:id")
.get( wrapAsync(listingsController.show))
.put( isLoggedIn, isOwner, upload.single('listing[image]'), validateListing, wrapAsync(listingsController.update))
.delete( isLoggedIn, isOwner, wrapAsync(listingsController.delete));


//Edit route..
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingsController.edit));




module.exports = router; 