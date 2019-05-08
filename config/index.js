require('dotenv').config()
dbData = {
    dbUser: process.env.db_user,
    dbDatabase: process.env.db_database
}
const config={
    port: process.env.port,
    db:{
        url:`mongodb://${dbData.dbUser}/${dbData.dbDatabase}`
    }
};
module.exports = {config}