const mongoose = require("mongoose");

const SiteSchema = mongoose.Schema({
    homeImage     :  { type: String, required: "Home Image Cannot Be Empty"},
    aboutImage    :  { type: String, required: "About Image Cannot Be Empty"},
    aboutText     :  { type: String, required: "About Text Cannot Be Empty"},
    contactImage  :  { type: String, required: "Contact Image Cannot be Empty"},
    contactText   :  { type: String, required: "Contact Text Cannot be Empty"},
});

module.exports = mongoose.model("Site", SiteSchema);