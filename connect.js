let mysql = require('mysql')
let con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password: ""
}
)
con.connect(function (err){
    if (err) throw err
    console.log("you have successfully connected ")
    con.query("CREATE DATABASE Emoblis",function (err,result){
      if (err) throw  err
      console.log("You have successfully created a database")
    })
})