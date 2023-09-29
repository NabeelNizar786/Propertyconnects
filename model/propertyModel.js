const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model for property owner
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  availableFromDate: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  propertyType: {
    type: String,
    enum: ['Apartment', 'House', 'Commercial', 'Land', 'Other'], // Enumerate property types
    required: true,
  },
  // Add more fields as needed, such as bedrooms, bathrooms, description, etc.
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
