let express = require("express");
let path = require("path");
let app = express();
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    console.log(req.ip + " has just connected.");

});

app.get("/getTime", (req, res) => {
    let time = new Date;
    let package = {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds(),
        milisecond: time.getMilliseconds()
    };
    res.send(JSON.stringify(package));
});


app.listen("8080", "localhost", () => {
    console.log("Server running");
});