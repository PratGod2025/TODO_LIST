import  express from 'express';//to use express framework
export const app=express();//create app using express
import dbconnection from "./config/dbconnection.js";
dbconnection();


