 
const { Sequelize } = require('sequelize');

 const DbConnect=(database,username,password,host)=>{

    const sequelize = new Sequelize(database,username, password, {
        host:host,
        dialect:'mysql',
        port:3307
      });

       return sequelize
 }

module.exports=DbConnect