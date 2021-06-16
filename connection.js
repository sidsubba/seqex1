module.exports={
    HOST:"localhost",
    USER:"root",
    PASSWORD:"nithya123",
    DB:"sakila",
    dialect:"mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
};