const express = require("express");

const app = express();

let Photos = [{
            id: 1,
            author: "Andew",
            title: "Uzhhorod",
            description: "My hobby",
            url: "https://www.aplustopper.com/wp-content/uploads/2020/06/10-Lines-on-My-Hobby-for-Kids.png",
            hashtags: "#hobby, #games",
            published: new Date(2021, 12, 12),
            likes: 15556
        },
        {
            id: 2,
            author: "Yana",
            title: "Dog",
            description: "Dog",
            url: "https://i.kym-cdn.com/entries/icons/original/000/029/671/wide_dog_cover2_.jpg",
            hashtags: "#dog, #animal",
            published: new Date(2019, 2, 16),
            likes: 20000
        }
    ]
    /*для вказаного автора що має найбільшу кількість «лайків».*/
app.get("/photo/:id", (req, res) => {
    let idPhoto = Photos.filter(photo => photo.id == req.params.id);
    if (idPhoto.length == 0)
        res.status(404).send("Not Found");
    else {
        idPhoto.sort(
            (id1) => id1.id
        )
        res.send(idPhoto[0]);
    }
});

app.set("view engine", "ejs");
app.use(express.static("./public"));

app.get("/", (req, res) => {
    res.render("photo");
});

if (process.env.NODE_ENV == "test") module.exports = app;
else
    app.listen(3000, () => {
        console.log("http://localhost:3000");
    })