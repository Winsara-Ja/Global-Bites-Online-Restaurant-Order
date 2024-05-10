const mongoose = require("mongoose")

const cateringMenu = mongoose.Schema({
    MenuID: String,
    image: String,
    Description: String,
    MenuItems: [
        {
            ItemName: String
        },
    ],
    TotalPrice: Number

})

const Menu = mongoose.model("CateringMenu", cateringMenu)

module.exports = Menu