import express from "express";
import {dirname, join} from "path";
import { fileURLToPath } from "url";


const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));


app.set("views", join(__dirname, 'views'));
app.set("view engine", "ejs");	// set the view engine to ejs


app.get ("/", (req, res) => res.render("index"));


app.listen(3000, () => {
    console.log("Server is running on port 3000");
    }   
);  // listen on port 3000, default is 3000
//QUEDE EN MITUNO 18.50 DE TU PRIMER APLICACION DE NODEJS DESDE CERO