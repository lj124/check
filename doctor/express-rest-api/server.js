
var express = require("express")
var cors = require('cors')
var db = require("./sqlitedb.js")

var app = express()
app.use(cors());

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var HTTP_PORT = 8000 
app.listen(HTTP_PORT, () => {
   console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});

app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

app.get("/api/doctor", (req, res, next) => {
   var sql = "select * from doctor"
   var params = []
   db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({"error":err.message});
        return;
      }
      res.json(rows)
     });

});
app.get("/api/patient", (req, res, next) => {
    var sql = "select * from patient"
    var params = []
    db.all(sql, params, (err, rows) => {
       if (err) {
         res.status(400).json({"error":err.message});
         return;
       }
       res.json(rows)
      });
 
 });
 app.get("/api/appointment", (req, res, next) => {
   var sql = "select * from appointment"
   var params = []
   db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({"error":err.message});
        return;
      }
      res.json(rows)
     });

});

app.get("/api/doctor/:doctorid", (req, res, next) => {
   var sql = "select * from doctor where doctorid = ?"
   var params = [req.params.id]
   db.get(sql, params, (err, row) => {
      if (err) {
         res.status(400).json({"error":err.message});
         return;
      }
      res.json(row)
   });
});
app.get("/api/patient/:id", (req, res, next) => {
   var sql = "select * from patient where id = ?"
   var params = [req.params.id]
   db.get(sql, params, (err, row) => {
      if (err) {
         res.status(400).json({"error":err.message});
         return;
      }
      res.json(row)
   });
});
app.get("/api/appointment/:id", (req, res, next) => {
   var sql = "select * from appointment where id = ?"
   var params = [req.params.id]
   db.get(sql, params, (err, row) => {
      if (err) {
         res.status(400).json({"error":err.message});
         return;
      }
      res.json(row)
   });
});

app.post("/api/doctor/", (req, res, next) => {
         console.log("Into POST method");
   var errors=[]
   if (!req.body.doctoremail){
      errors.push("No   specified");
         console.log("No   specified");
   }
   var data = {
      doctorname : req.body.doctorname,
      password : req.body.password,
      doctoremail: req.body.doctoremail,
      doctorage: req.body.doctorage,
      doctorspeciality: req.body.doctorspeciality,
    //   doctorpassword : req.body.doctorpassword,
      doctorgender: req.body.doctorgender,
    //   createdOn: req.body.createdOn
   }
   var sql = 'INSERT INTO doctor (doctorname,password, doctoremail, doctorspeciality, doctorgender,doctorage) VALUES (?,?,?,?,?,?)'
   var params =[data.doctorname,data.password, data.doctoremail, data.doctorspeciality, data.doctorgender, data.doctorage]
   db.run(sql, params, function (err, result) {
      if (err){
         res.status(400).json({"error": err.message})
         console.log("Err--"+err.message); 
         return;
      }
      data.id = this.lastID;
      res.json(data);
   });
})

app.post("/api/patient/", (req, res, next) => {
    console.log("Into POST method");
var errors=[]
if (!req.body.Email){
 errors.push("No   specified");
    console.log("No   specified");
}
var data = {
 Name: req.body.Name,
 Age: req.body.Age,
 Gender: req.body.Gender,
 Email: req.body.Email,

 Password: req.body.Password,




//   createdOn: req.body.createdOn
}
var sql = 'INSERT INTO patient (Name,Email, Gender, Age,Password) VALUES (?,?,?,?,?)'
var params =[data.Name,data.Email, data.Gender, data.Age,data.Password ]
db.run(sql, params, function (err, result) {
 if (err){
    res.status(400).json({"error": err.message})
    console.log("Err--"+err.message); 
    return;
 }
 data.id = this.lastID;
 res.json(data);
//  alert("Success");
});
})

app.post("/api/appointment/", (req, res, next) => {
   console.log("Into POST method");
var errors=[]
if (!req.body.DoctorName){
errors.push("No  specified");
   console.log("No  specified");
}
var data = {
DoctorName: req.body.DoctorName,
PatientName: req.body.PatientName,
PatientAge: req.body.PatientAge,
Speciality:req.body.Speciality,
date:req.body.date,
time:req.body.time,
issue:req.body.issue,
Gender: req.body.Gender,
//   createdOn: req.body.createdOn
}
var sql = 'INSERT INTO appointment (DoctorName, PatientName,Speciality, Gender,PatientAge, date,time,issue) VALUES (?,?,?,?,?,?,?,?)'
var params =[data.DoctorName, data.PatientName,data.Speciality, data.Gender, data.PatientAge,data.date,data.time,data.issue]
db.run(sql, params, function (err, result) {
if (err){
   res.status(400).json({"error": err.message})
   console.log("Err--"+err.message); 
   return;
}
data.id = this.lastID;
res.json(data);
//  alert("Success");
});
})


app.put("/api/patient/", (req, res, next) => {
   var data = {
      Name: req.body.Name,
      Age: req.body.Age,
      Gender: req.body.Gender,
      Email: req.body.Email,
     
      Password: req.body.Password,
     
   }
   db.run(
      `UPDATE doctor SET
         Name = ?, 

         Age = ?,
         Gender = ?, 
         Email = ?, 

         Password = ? 
         WHERE id = ?`,
            [data.Name , data.Age, data.Gender, data.Email, data.Password, req.params.id],
      function (err, result) {
         if (err){
            console.log(err);
            res.status(400).json({"error": res.message})
            return;
         }
         res.json(data)
   });
})

app.delete("/api/appointment/:id", (req, res, next) => {
   db.run(
      'DELETE FROM appointment WHERE id = ?',
      req.params.id,
      function (err, result) {
         if (err){
            res.status(400).json({"error": res.message})
            return;
         }
         res.json({"message":"deleted", changes: this.changes})
   });
})

app.use(function(req, res){
   res.status(404);
});


