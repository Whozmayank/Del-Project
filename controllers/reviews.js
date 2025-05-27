const Review = require('../models/review');
const Listing = require('../models/listing');

module.exports.createReview = async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;    

    await newReview.save();
    listing.reviews.push(newReview._id); // <-- Push only the ObjectId

    await listing.save();
    req.flash("success", "Review Created!");
    res.redirect(`/listings/${listing._id}`);   
};


module.exports.deleteReview = async (req, res) => {
        let { id, reviewId } = req.params;

        // Remove the reviewId from the listing's reviews array
        await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
        await Review.findByIdAndDelete(reviewId);   
        req.flash("success", "Review Deleted!");
        res.redirect(`/listings/${id}`);
        
};