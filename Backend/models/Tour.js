const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TourPackageSchema = new Schema({
   
  title: {
    type: String,
  },

    description: {
    type: String,
    required:true,
  },

    itinerary: {
    type: Object, 
  },

  includes: {
    type: Object,
  },

  excludes: {
    type: Object, 
  },

  terms_conditions: {
    type: String,
  },

  summary: {
    type: Object, 
  },

  offer_price: {
    type: Number,
    required: true,
  },

  original_price: {
    type: Number,
    required:true,
  },

  available_dates: {
    type: [Date],
    required:true,
  },

  TourImage: {
    type: [String], 
  },

  coupon_codes: {
    type: Object, 
  },

  related_places: {
    ref:'place',
    type: [Schema.Types.ObjectId], // Array of ObjectIds referencing related places
  },

  related_blogs: {
    ref:'blogs',
    type: [Schema.Types.ObjectId], // Array of ObjectIds referencing related blogs
  },
}, {
  timestamps: true, 
});

const TourPackage = mongoose.model('TourPackage', TourPackageSchema);
module.exports = TourPackage;
