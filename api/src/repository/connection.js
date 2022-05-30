import mysql from 'mysql2/promise'

typeCast: function (field, next) {

if(field.type === 'TINY' && field.length ===1){

return(field.string() === '1');

}else{

return next();

}

}

const con = await mysql.createConnection({

host: process.env.MYSQL_HOST,

user: process.env.MYSQL_USER,

password: process.env.MYSQL_PWB,

database:process.env.MYSQL_DB

})

export { con }