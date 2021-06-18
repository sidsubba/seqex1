module.exports = app => {
    const category = require("./controller.js");
  
    var router = require("express").Router();
  
  

    router.get("/", category.findAll);
  
    
    router.get("/:id", category.findOne);

    router.put("/:id", category.update);

    router.post("/",category.create);
  
  
    app.use('/api/category', router);
  };