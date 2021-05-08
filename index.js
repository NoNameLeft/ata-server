const server = require("./src/app");
const port = process.env.PORT || 8080;

server.listen(port, () => {
    console.log("Listening on " + port);
});