const express = require('express');
const router = express.Router({mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");

const reviewsController = require("../controllers/reviews.js");




// Reviews..
//Post review route
router.post("/",isLoggedIn, validateReview, wrapAsync (reviewsController.createReview));

//Delete review route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewsController.deleteReview));

  module.exports = router;