const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// making schema
const listingSchema =new Schema({
    title:{
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://images.unsplash.com/photo-1433477155337-9aea4e790195?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.0.3https://images.unsplash.com/photo-1433477155337-9aea4e790195?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.0.3https://images.unsplash.com/photo-1433477155337-9aea4e790195?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        set: (v) => v === "" ? "https://images.unsplash.com/photo-1433477155337-9aea4e790195?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.0.3https://images.unsplash.com/photo-1433477155337-9aea4e790195?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.0.3https://images.unsplash.com/photo-1433477155337-9aea4e790195?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.0.3": v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;