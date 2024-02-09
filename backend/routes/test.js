var express = require('express');
var router = express.Router();
const fs = require("fs");
const cors = require('cors');

router.use(cors());



/* GET users listing. */
/* router.get('/', function(req, res, next) {
    fs.readFile("testmessage.json", (err, data) => {
        if (err) console.log("err", err);
        
        testMessage = JSON.parse(data);
        res.json(testMessage);
    });
}); */

/* GET SPECIFIK USER BY ID */
router.get('/:id', function(req, res, next) {

    let specificUserId = req.params.id;
    console.log("user", specificUserId);

    fs.readFile("./testmessage.json", (err, data) => {
        if (err) console.log("err", err);
        console.log(data);
        let users = JSON.parse(data);

        const specificUser = users.find(user => user.id == specificUserId);
            
        if (specificUser) {
        // If user is found, send it back as a JSON response
        res.json(specificUser);
        console.log(specificUser);
        } else {
            res.status(404).json({message: "No user found"})
        }

    });

});


router.post("/saveMessage", function(req, res) {

    fs.readFile("messages.json", (err, data) => {
        if (err) console.log("err", err);
        console.log(data);
        let messages = JSON.parse(data);
        let newMessage = {userSubject: req.body.userSubject, userMessage: req.body.userMessage};

        // let newImage = {imageName: req.body.imageName, altText: req.body.altText, img: req.file.filename,}

    console.log("newmessage", newMessage);
    messages.push(newMessage);

    fs.writeFile("messages.json", JSON.stringify(messages, null, 2), function(err) {
        if (err) {
            console.log(err);
        }
    });

    res.send(newMessage);
    return;
});
})


/* GET users listing. */
router.get('/', function(req, res, next) {
    fs.readFile("messages.json", (err, data) => {
        if (err) console.log("err", err);
        
        messages = JSON.parse(data);
        res.json(messages);
    });
});


module.exports = router;
