let mysql = require('mysql')
let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: " Emoblis"
}
)
con.connect(function (err){
    if(err) throw err
    console.log("successfully connected")
    let sql = "CREATE TABLE  students(Id INT(8) , Name VARCHAR(50) ,Email EMAIL, Age INT )"
    con.query(sql,function (err,results){
        if (err) throw err
        console.log("successfully created  Table")
    })
})