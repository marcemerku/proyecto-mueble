const mysql= require('mysql2');

const databaseConnection=mysql.createConnection({
    host:'b3sccg6zm6ioleh815qd-mysql.services.clever-cloud.com',
    user:'uuk2k9y1wc4x6adr',
    database: 'b3sccg6zm6ioleh815qd',
    password: 'lTz9092a3ngFrAz6cojh'
});

databaseConnection.connect((error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Servidor conectado a MySQL");
    }
});

module.exports=databaseConnection;