const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require('./review');

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image:  {
        filename: {type: String},
        url: {
            type: String,
            default: "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
            set: (v) => v === "" ? "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" : v, 
        }
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    category: {
        type: String,
        enum: ["Mountains", "Rooms", "Iconic cities", "Beach", "Camping", "Castles", "Amazing pools", "Arctic", "Trending" ],
    },
   
});

listingSchema.post('findOneAndDelete', async function (listing) {
    if (listing) {
        await Review.deleteMany({
            _id: {
                $in: listing.reviews
            }
        });
    }
}); 

const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;                   