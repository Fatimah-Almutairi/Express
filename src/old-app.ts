import express, { NextFunction, Request, Response }  from "express";

const app = express();

const users = [{
    username: 'Fatimah',
    password: '1234'
}]
app.use( (req, res, next) => {
console.log('From App');
// console.log('IP Address' + req.ip);
// console.log(req.header)
console.log('MiddleWare');
next();
})

app.use( (req, res, next) => {
console.log("Next MiddleWare");
next();
})
app.get( '/users',(req, res, next) => {
console.log("Users");
return res.json(users);
// return res.send('<h1> This is the EndPoint</h1>')
})

// this function in express but should call inside MiddleWare
// const checkIP = (req:Request, res:Response, next: NextFunction) => {
//     if (req.ip == '1.0.0.0'){
//         return res.json({
//             message: 'You Not Allowed !',
//         });
//     }else{
//         next();
//     }
// }  

app.listen(5000);