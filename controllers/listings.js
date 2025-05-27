const Listing = require("../models/listing.js");

module.exports.index = async (req, res) => {
    let allListings = await Listing.find();
    res.render("listings/index.ejs", { allListings });
};

module.exports.new = (req, res) => {
    res.render("listings/new.ejs");
};

module.exports.show = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
      .populate({
        path: "reviews",
        populate: {
         path: "author"
        },
     })
    .populate("owner");
    if(!listing) {
        req.flash("error", "Listing not found!");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
};

module.exports.create = async (req, res, next) => {
    let url = req.file.path;
    let filename = req.file.filename;
        let { title, description, image, price, location, country } = req.body.listing;
        const newListing = new Listing({
            title,
            description,
            image: { url: image },
            price,
            location,
            country,
        });
        newListing.owner = req.user._id; // Set the owner to the logged-in user
        newListing.image = {
            url: url,
            filename: filename,
        };
        await newListing.save();
    req.flash("success", "New Listing Created Successfully");
    res.redirect("/listings");
};

module.exports.edit = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing not found!");
        return res.redirect("/listings");
    }

    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250/");
    res.render("listings/edit.ejs", { listing, originalImageUrl  });
};


module.exports.update = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id, {...req.body.listing});

    if (typeof req.file !== "undefined") {
        // If a new file is uploaded, update the image details
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {
            url: url,
            filename: filename,
        };
        await listing.save();
    }
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.delete = async (req, res) => {
    let { id } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    console.log("Deleted SuccessFully", { deletedListing });
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
};
