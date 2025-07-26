const Listing = require("../models/listing.js");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing not found");
    return res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
  let response = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location, // The location to geocode
      limit: 1,
    })
    .send();

  const newListing = new Listing(req.body.listing);
  let url = req.file.path;
  let filename = req.file.filename;
  newListing.owner = req.user._id; // Set the owner to the current user
  newListing.image = { url, filename }; // Set the image URL and filename
  newListing.geometry = response.body.features[0].geometry; // Use the coordinates from the geocoding response

  let savedListing = await newListing.save();
  console.log(savedListing);
  req.flash("success", "Listing created successfully!");
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing not found");
    return res.redirect("/listings");
  }
  let originalImageUrl = listing.image.url;
  originalImageUrl.replace("/upload", "/upload/h_300,w_250");
  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
  const { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing }); // Update the listing with the new data
  if (typeof req.file !== "undefined" && req.file) {
    let url = req.file.path; // Get the URL of the uploaded image
    let filename = req.file.filename; // Get the filename of the uploaded image
    listing.image = { url, filename }; // Set the image URL and filename
    await listing.save();
  }
  req.flash("success", "Listing updated successfully!");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing deleted successfully!");
  res.redirect("/listings");
};
