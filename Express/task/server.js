import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';

const app = express();

//question 1 logging middleware
const logger = (req, res, next) => {
    console.log("Method:", req.method);
    console.log("URL:", req.url);
    console.log("Date and Time:", new Date().toLocaleString());
    next();
};
app.use(logger);


//question 2 password check
const checkPassword = (req, res, next) => {
    const password=req.query.password;
    if(password==="12345"){
        next();
    } else {
        res.status(401).send('Unauthorized: Incorrect password');
    }
};
app.get("/admin",checkPassword,(req,res)=>{
    res.send("Welcome, Admin!");
});

//question 3 visit time
const visit=(req,res,next)=>{
    req.requestTime=new Date();
    next();
}
app.use("/visittime",visit,(req,res)=>{
    res.send("Request Time: " , req.requestTime);
});

app.get("/visit",visit,(req,res)=>{
    res.send("Request Time: " + req.requestTime);    
});

//question 4 two middlewares 
const firstmiddleware=(req,res,next)=>{
    console.log("First Middleware");
    next();
};
const secondmiddleware=(req,res,next)=>{
    console.log("Second Middleware");
    next();
};

app.get("/middleware",firstmiddleware,secondmiddleware,(req,res)=>{
    res.send("Done!");
});

//question 5 time restriction
const timerestriction=(req,res,next)=>{
    const hour=new Date().getHours();
    if(hour>=0 && hour<6){
        res.send("The site is not accessible");
    }
    else{
        next();
    }
};
app.get("/restrict",timerestriction,(req,res)=>{
    res.send("Welcome to the site!");
});

//question 6
app.use(bodyParser.json());

app.post("/data",(req,res)=>{
    console.log("received data: " , req.body);
    res.send("Data received");
});


//question 7 error handling
app.get("/error",(req,res)=>{
    throw new Error("Something went wrong!");
});
app.use((err,req,res,next)=>{
    console.error("error:",err.message);
    res.status(500).send("Something went wrong");
});

//question 8

const checkRole = (role) => {
  return (req, res, next) => {
    if (req.query.role === role) {
      next();
    } else {
      res.send("Not Authorized");
    }
  };
};
app.get("/rolecheck", checkRole("admin"), (req, res) => {
  res.send("Welcome Admin!");
});

//question 9 global vs route middleware
const globalMiddleware=(req,res,next)=>{
    console.log("Global Middleware");
    next();
};
app.use(globalMiddleware);

const routeMiddleware = (req, res, next) => {
  console.log("Route Middleware");
  next();
};
app.get("/home", (req, res) => {
    res.send("Home Page (global)");
});


app.get("/about",routeMiddleware,(req,res)=>{
    res.send("About Page (route)");
});

app.get("/special",routeMiddleware,(req,res)=>{
    res.send("Special Page (route)");
});

//question 10 middleware chain
const mw1=(req,res,next)=>{
    console.log("log request",req.method,req.url);
    next();
};

const mw2=(req,res,next)=>{
    req.user={name:"test user"};
    next();
};

const mw3=(req,res,next)=>{
    console.log("check user");
    if(req.user={name:"test user"}){
        next();
    }else{
        res.status(401).send("Unauthorized");
    }
};

app.get("/middleware-chain",mw1,mw2,mw3,(req,res)=>{
    res.send("User is authenticated");
});



const server = http.createServer(app);
server.listen(3000, () => {
    console.log('http://localhost:3000');
});