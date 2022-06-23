import express from "express";
import {dirname, join} from "path";
import { fileURLToPath } from "url";

import indexRouter from "./routes/index.js";


const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));


app.set("views", join(__dirname, 'views'));
app.set("view engine", "ejs");	// set the view engine to ejs

app.use(indexRouter);// use the index router for all requests(gets)
app.use(express.static(join(__dirname, 'public'))); // use the public folder for static files


app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port 3000", process.env.PORT);
    }   
);  // listen on port 3000, default is 3000 y para que funcione en heroku procees.env.PORT(variable de entorno)
