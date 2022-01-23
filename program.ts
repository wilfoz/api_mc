import StartUp from "./startUp";

let port = "5000";
let connection = new StartUp()

connection.app.listen(port, function() {
    console.log(`servidor rodando na porta: ${port}`);
});