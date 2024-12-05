const express = require("express");
const app = express();
const mongoose = require("mongoose"); 
const path = require("path");
const FarmersListing = require("./models/farmersListing.js");
const methodOverride = require("method-override"); 
const ejsMate = require("ejs-mate")
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { farmersSchema } = require("./schema.js");

const MONGO_URL =  "mongodb://127.0.0.1:27017/greenpath"; 

main().then(() =>{
    console.log("Connected to db")
}).catch(err =>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
} 

app.set("view engine" , "ejs");
app.set("views" , path.join( __dirname, "views"));
app.use(express.urlencoded({ extended: true })); 
app.use(methodOverride("_method")); 
app.engine("ejs", ejsMate); 
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.json());



app.get("/",(req,res) =>{
    res.send("Hi, I am Root")
});

const validateListing = (req,res,next) =>{
    let {error} = farmersSchema.validate(req.body);
    console.log(error);
    if(error){
        let errMsg =  error.details.map((el) => el.message).join(", "); 
        throw new ExpressError(400, errMsg); 
    } else{
        next();
    }
}

//Index Route
app.get("/farmerslistings" ,wrapAsync ( async (req,res) =>{
    const allListings = await FarmersListing.find({});
    res.render("listings/index.ejs" , {allListings} );
}));  

// New Route
app.get("/farmerslistings/new" , wrapAsync (async(req,res) =>{
    res.render("listings/new.ejs")
})); 

// Show Route
app.get("/farmerslistings/:id",wrapAsync ( async (req,res) =>{
    let {id} = req.params;
    const listing = await FarmersListing.findById(id);
    res.render("listings/show.ejs" , { listing }) ;
}) );  

// Create Route
app.post(
    "/farmerslistings", 
    validateListing, 
    wrapAsync (async (req,res,next) => { 
    const newListing = new FarmersListing(req.body.listing);
    await newListing.save(); 
    res.redirect("/farmerslistings");
})); 

// Edit Route
app.get("/farmerslistings/:id/edit" , 
    wrapAsync ( async (req,res) =>{
    let {id} = req.params;
    const listing = await FarmersListing.findById(id);
    res.render("listings/edit.ejs" ,{ listing })
}));

// Update Route
app.put("/farmerslistings/:id",
     validateListing,
     wrapAsync (async (req,res) =>{
     let {id} = req.params;
     await FarmersListing.findByIdAndUpdate(id, {...req.body.listing}); 
     res.redirect(`/farmerslistings/${id}`)
}));
// Delete Route
app.delete("/farmerslistings/:id" , wrapAsync (async(req,res)=>{
    let {id} = req.params;
    let deletedListing = await FarmersListing.findByIdAndDelete(id); 
    console.log(deletedListing) 
    res.redirect("/farmerslistings");
}));

//  TestingRoute
// app.get("/testing" , async (req,res) =>{
//     let sampleData = new FarmersListing ({
//         name: "Surya Rao",
//         state: "Andhra Pradesh",
//         city: "Bhopal",
//         items: "Tobacco, Maize ",
//         country: "India",
//     });
//     await sampleData.save();
//       console.log("sample was saved");
//       res.send("successful testing");
//     }); 

app.all("*",(req,res,next) =>{
    next(new ExpressError(404,"Page Not Found!"));
});

app.use((err,req,res,next) =>{
    let {statusCode = 500, message ="Something went wrong!"} = err;
    res.status(statusCode).render("error.ejs",{ message })
    // res.status(statusCode).send(message);
});

app.listen(8080 , () =>{
    console.log("Server is listening to the port");
});