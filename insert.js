let mysql = require('mysql')
let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "Emoblis"
    }
)
con.connect(function (err){
    if(err) throw err
    console.log("successfully connected")
    let sql = "INSERT INTO  students(ID, Name,Email,Age)VALUES('2','JUnior','ollah@gmail.com','44')"
    con.query(sql,function (err,results){
        if (err) throw err
        console.log("successfully created  Data")
    })
})