import express, { NextFunction, Request, Response }  from "express";
import { Ipeople } from "./generalType";
import {IGrade} from "./generalType";

const app = express();

let People :Ipeople[] = [];
let Grade :IGrade[] = [];
app.use(express.json())


app.get('/people', (req,res) => {
    return res.json(People);
});

app.post ('/people', (req,res) => {
    const newPeople = req.body as Ipeople;
    People.push(newPeople)
    // console.log(req.body)
    return res.json({ message:'The Name Added !'});
});

app.put('/people/:id',(req, res) => {
    const updatePeople = req.body as Ipeople;
    const { id } = req.params;
    const updated = People.filter((people) => {
        return people.id !== id;
      });
    
    updated.push(updatePeople);
    People = updated;

    // console.log('updatePeople', updatePeople);
    // console.log('index', index);
    return res.json({ message: 'The Name Updated'});
});

app.delete('/people/:id',(req, res) => {
    const { id } = req.params;
    const deleted = People.filter((people) => {
        return people.id !== id;
      });
    
    People = deleted;
    return res.json({ message: 'The Name Deleted'});
});

// app.delete('/people/:id', (req, res) => {
//     const { id } = req.params;
//     const peopleDeleted = People.filter( (people) => {
//         return people.id !== id;
//     });
//     People = peopleDeleted;
//     return res.json( {message: 'The Name Deleted...'});
// });

app.get('/grade', (req, res) => {
    return res.json(Grade);
});

app.post('/grade', (req, res) => {
    const newGrade = req.body as IGrade;
    Grade.push(newGrade)
    return res.json({
        message: 'Grade Added'
    });
});

app.put('/grade/:id', (req, res) => {
    const updateGrade = req.body as IGrade;
    const {id} = req.params;
    const updated = Grade.filter( (grade) => {
        return grade.id !== id;
    });

    updated.push(updateGrade);
    Grade = updated;
    return res.json({message: "The Grade Updated"});
});

app.delete('/grade/:id', (req, res) => {
    const {id} = req.params;
    const deleted = Grade.filter( (grade) => {
        return grade.id !== id;
    });
    Grade = deleted;
    return res.json({message: 'The Grade Deleted...'})
})


app.listen(5000);