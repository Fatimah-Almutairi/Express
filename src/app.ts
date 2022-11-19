import express, { NextFunction, Request, Response }  from "express";
import { Ipeople } from "./generalType";

const app = express();

let People :Ipeople[] = [];
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
})

app.delete('/people/:id',(req, res) => {
    const { id } = req.params;
    const deleted = People.filter((people) => {
        return people.id !== id;
      });
    
    People = deleted;
    return res.json({ message: 'The Name Deleted'});
})

// app.delete('/people/:id', (req, res) => {
//     const { id } = req.params;
//     const peopleDeleted = People.filter( (people) => {
//         return people.id !== id;
//     });
//     People = peopleDeleted;
//     return res.json( {message: 'The Name Deleted...'});
// });

app.listen(5000);