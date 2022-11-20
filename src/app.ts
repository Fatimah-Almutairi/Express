import express, { NextFunction, Request, Response }  from "express";
import router from "./routers/router";
import {z} from 'zod'
// import { Ipeople } from "./generalType";
// import {IGrade} from "./generalType";
// import {ITracker} from "./generalType";

const app = express();
app.use(express.json())


app.use('/',router);


// let People :Ipeople[] = [];
// let Grade :IGrade[] = [];
// let Tracker:ITracker[] = [];

// // Q1 Part1
// app.get('/people', (req,res) => {
//     return res.json(People);
// });

// app.post ('/people', (req,res) => {
//     const newPeople = req.body as Ipeople;
//     People.push(newPeople)
//     // console.log(req.body)
//     return res.json({ message:'The Name Added !'});
// });

// app.put('/people/:id',(req, res) => {
//     const updatePeople = req.body as Ipeople;
//     const { id } = req.params;
//     const updated = People.filter((people) => {
//         return people.id !== id;
//       });
    
//     updated.push(updatePeople);
//     People = updated;

//     // console.log('updatePeople', updatePeople);
//     // console.log('index', index);
//     return res.json({ message: 'The Name Updated'});
// });

// app.delete('/people/:id',(req, res) => {
//     const { id } = req.params;
//     const deleted = People.filter((people)=> {
//         return people.id !== id;
//       });
    
//     People = deleted;
//     return res.json({ message: 'The Name Deleted'});
// });

// // Q1 Part 2
// app.get('/grade', (req, res) => {
//     return res.json(Grade);
// });

// app.post('/grade', (req, res) => {
//     const newGrade = req.body as IGrade;
//     Grade.push(newGrade)
//     return res.json({
//         message: 'Grade Added'
//     });
// });

// app.put('/grade/:id', (req, res) => {
//     const updateGrade = req.body as IGrade;
//     const {id} = req.params;
//     const updated = Grade.filter( (grade) => {
//         return grade.id !== id;
//     });

//     updated.push(updateGrade);
//     Grade = updated;
//     return res.json({message: "The Grade Updated"});
// });

// app.delete('/grade/:id', (req, res) => {
//     const {id} = req.params;
//     const deleted = Grade.filter( (grade) => {
//         return grade.id !== id;
//     });
//     Grade = deleted;
//     return res.json({message: 'The Grade Deleted...'});
// });


// // Q2 
// app.get('/tracker', (req,res) => {
//     return res.json(Tracker);
// });

// app.post('/tracker', (req,res) =>{
//     const newTracker = req.body as ITracker;
//     Tracker.push(newTracker)
//     return res.json({message: 'Tracker Added'});
// });

// app.put('/tracker/:id', (req,res) => {
//     const updateTracker = req.body as ITracker;
//     const { id } = req.params;
//     const updated = Tracker.filter((tracker) => {
//         return tracker.id !== id;
//     });
//     updated.push(updateTracker);
//     Tracker = updated;
//     return res.json({message: "tracker updated.."});
// });

// app.delete('/tracker/:id',(req,res) => {
//     const { id } = req.params;
//     const Deleted = Tracker.filter( (tracker) => {
//         return tracker.id !== id;
//     });
//     Tracker = Deleted;
//     return res.json({message: "tracker deleted"});
// });


// // Search

// app.get('/tracker/:title', (req,res) => {
//     let title = req.params.title;
//     let searchVal = Tracker.filter((tracker)=>{
//         return tracker.title === title
//     //   return tracksa.title.toLowerCase() === key;
//     })
//     return res.json(searchVal);
//   });


app.listen(5000);