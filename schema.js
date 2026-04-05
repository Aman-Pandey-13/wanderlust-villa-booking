// schema.js
const Joi = require("joi");

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().trim().required().messages({
      "string.empty": "Title is required!",
    }),
    description: Joi.string().trim().required().messages({
      "string.empty": "Description is required!",
    }),
    price: Joi.number().required().min(0).messages({
      "number.base": "Price must be a number!",
      "number.min": "Price must be at least 0!",
      "any.required": "Price is required!",
    }),
    location: Joi.string().trim().min(1).required().messages({
      "string.empty": "Location is required!",
      "any.required": "Location cannot be empty!",
    }),
    country: Joi.string().trim().required().messages({
      "string.empty": "Country is required!",
    }),
    // ✅ Allow optional latitude and longitude
    lat: Joi.number().optional().messages({
      "number.base": "Latitude must be a number!",
    }),
    lng: Joi.number().optional().messages({
      "number.base": "Longitude must be a number!",
    }),
  }).required(),
});

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5).messages({
      "number.base": "Rating must be a number!",
      "any.required": "Rating is required!",
    }),
    comment: Joi.string().trim().required().messages({
      "string.empty": "Comment cannot be empty!",
    }),
  }).required(),
});
