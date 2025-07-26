const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js"); // Utility to handle async errors
const Listing = require("../models/listing.js"); // Model for listings
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js"); // Middleware for authentication and validation
const listingController = require("../controllers/listing.js"); // Controllers for listing operations
const multer = require("multer"); // Middleware for file uploads
const { cloudinary, storage } = require("../cloudConfig.js"); // Cloudinary configuration
const upload = multer({ storage }); // Directory to store uploaded files

router.route("/").get(wrapAsync(listingController.index)).post(
  isLoggedIn,
  upload.single("listing[image]"), // Middleware to handle file upload
  validateListing,
  
  wrapAsync(listingController.createListing)
);

// New route
router.get("/new", isLoggedIn, listingController.renderNewForm);

router
  .route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"), // Middleware to handle file upload
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

// Edit route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

module.exports = router;
