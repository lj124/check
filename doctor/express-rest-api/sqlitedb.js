var sqlite3 = require('sqlite3').verbose()
const DBSOURCE = "doctorappdb.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
   if (err) {
      console.error(err.message)
      throw err
   }else{
      console.log('Connected to the SQLite database.')
      db.run(`CREATE TABLE IF NOT EXISTS doctor (
        doctorid INTEGER PRIMARY KEY AUTOINCREMENT,
        
        doctorname text NOT NULL,
          doctoremail text NOT NULL,
          doctorspeciality text NOT NULL,
            password text Not Null,
          doctorgender text(255),
          doctorage INT
          
     
         
         )`,
            (err) => {
               if (err) {
                  console.log(err);
               }else{
                  // var insert = 'INSERT INTO doctor (doctorname, doctoremail, doctorspeciality, doctorgender,doctorage) VALUES (?,?,?,?,?)'

                  // db.run(insert, ['ABC', 'English.j@.com', 'Diabetes',  'Female', '22'])
    // db.run(insert, ['Titanic3', 'English', 'Hollywood', 'Regal', '2021-07-26 10:10', '2020-05-26 10:10'])
    // db.run(insert, ['Titanic4', 'English', 'Hollywood', 'Alpana', '2021-07-28 10:10', '2020-05-26 10:10'])
    // db.run(insert, ['Meg2', 'English', 'Hollywood', 'PVR', '2021-07-26 10:10', '2020-05-26 10:10'])
    // db.run(insert, ['PK', 'Hindi', 'Hollywood', 'Plaza', '2021-07-26 10:10', '2020-05-26 10:10'])
               }
            }
      );  
      db.run(`CREATE TABLE  IF NOT EXISTS patient (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        
        Name text NOT NULL,
          Email text NOT NULL,
     
            Password text NOT NULL,
          Gender text,
          AGE INT
          
     
         
         )`,
            (err) => {
               if (err) {
                  console.log(err);
               }else{
                  // var insert = 'INSERT INTO patient (Name, Email, Gender,Age) VALUES (?,?,?,?)'

                  // db.run(insert, ['ABC', 'English.j@.com',  'Female', '22'])
    // db.run(insert, ['Titanic3', 'English', 'Hollywood', 'Regal', '2021-07-26 10:10', '2020-05-26 10:10'])
    // db.run(insert, ['Titanic4', 'English', 'Hollywood', 'Alpana', '2021-07-28 10:10', '2020-05-26 10:10'])
    // db.run(insert, ['Meg2', 'English', 'Hollywood', 'PVR', '2021-07-26 10:10', '2020-05-26 10:10'])
    // db.run(insert, ['PK', 'Hindi', 'Hollywood', 'Plaza', '2021-07-26 10:10', '2020-05-26 10:10'])
               }
            }
      ); 
      db.run(`CREATE TABLE  IF NOT EXISTS appointment (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         
         DoctorName text NOT NULL,
         Speciality text NOT NULL,
         PatientName text NOT NULL,
         PatientAge text NOT NULL, 
         Gender text NOT NULL,
         date DATE NOT NULL,
         time DATETIME NOT NULL,
         issue text NOT NULL
        
         
        
          
          
          )`,
             (err) => {
                if (err) {
                   console.log(err);
                }else{
                  //  var insert = 'INSERT INTO appointment (DoctorName, PatientName,Speciality, Gender,PatientAge, date,time,issue) VALUES (?,?,?,?,?,?,?,?)'
 
                  //  db.run(insert, ['ABC', 'XYZ', 'Bone', 'Female', '22','2021-07-26', '10:10','SDF'])
     // db.run(insert, ['Titanic3', 'English', 'Hollywood', 'Regal', '2021-07-26 10:10', '2020-05-26 10:10'])
     // db.run(insert, ['Titanic4', 'English', 'Hollywood', 'Alpana', '2021-07-28 10:10', '2020-05-26 10:10'])
     // db.run(insert, ['Meg2', 'English', 'Hollywood', 'PVR', '2021-07-26 10:10', '2020-05-26 10:10'])
     // db.run(insert, ['PK', 'Hindi', 'Hollywood', 'Plaza', '2021-07-26 10:10', '2020-05-26 10:10'])
                }
             }
       ); 
   }
});

module.exports = db
