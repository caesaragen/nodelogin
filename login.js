const mysql = require("mysql");
const express = require("express");
const session = require("express-session");
const path = require("path");
const Router = express.Router();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodelogin",
});

const app = express();

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "style")));
app.use(express.static(path.join(__dirname, "script")));
app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  response.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});
// http://localhost:3000/
app.get("/", function (request, response) {
  // Render login template
  response.sendFile(path.join(__dirname + "/login.html"));
});
// http://localhost:3000/

// http://localhost:3000/auth
app.post("/auth", function (request, response) {
  // Capture the input fields
  let username = request.body.username;
  let password = request.body.password;
  // Ensure the input fields exists and are not empty
  if (username && password) {
    // Execute SQL query that'll select the account from the database based on the specified username and password
    connection.query(
      "SELECT * FROM login WHERE Names = ? AND Passwords = ?",
      [username, password],
      function (error, results, fields) {
        // If there is an issue with the query, output the error
        if (error) throw error;
        // If the account exists
        if (results.length > 0) {
          // Authenticate the user
          request.session.loggedin = true;
          request.session.username = username;
          // Redirect to home page
          response.redirect("/homepage");
        } else {
          response.send("You don’t have access, Please contact IT.");
        }
        response.end();
      }
    );
  } else {
    response.send("Please enter Username and Password!");
    response.end();
  }
});

// http://localhost:3000/home
app.get("/homepage", function (request, response) {
  // Render homepage template
  if (request.session.loggedin) {
    // Output username

    response.sendFile(path.join(__dirname + "/homepage.html"));
  }
  else {
    // Not logged in
    response.send("Please login to view this page!");
  }
});
// http://localhost:3000/home
Router.get("/page1", function (request, response) {
  // Render homepage template
  if (request.session.username == "User1" || request.session.username == "User2") {
    // Output username
    // response.sendFile(path.join(__dirname + "/page1.html"));
    return response.sendFile(path.join(__dirname + "/page1.html"));
    // response.sendFile(path.join(__dirname + "/page1.html"));
  } else {
    // Not logged in
    response.send("You don't have access to this");
  }
});
// app.use("/page1", function (request, response) {
//   // Render homepage template
//   response.sendFile(path.join(__dirname + "/page1.html"));
// });
// app.get('/', (request, response) => { }
//   response.sendFile('index.html', {
//     root: './'
//   }
// });
Router.get("/page1", function (request, response) { 
   response.sendFile(path.join(__dirname + "/page1.html"));
});
app.use('/user', function(request, response, next){
   response.send(request.session.username);
   next();
});
 
app.get('/user', function(req, res){
    console.log(req.session.username)
});
app.use((err, request, response, next) => {
    response.status(err.status || 500).json({error: {message: err.message}});
});
app.listen(3000);
