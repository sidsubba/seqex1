const express = require('express');
const db = require("./models");
const category = db.sakila;
const Op = db.Sequelize.Op;
const  bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '100mb', parameterLimit: 1000000 }));

exports.findAll = (req,res)=>
{
    const name = req.query.name;
    var condition =name ? { name: { [Op.like]: `%${name}%` } } : null;

    category.findAll({ where:condition})
    .then(data=>{
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving category."
        });
      });
  };

  exports.findOne =(req,res) =>
  {
      const id= req.params.id;
      category.findOne( {where: {category_id:id} })
      .then(data=>{
          res.send(data);
      })
      .catch(err=>{
          res.status(500).send({
              message:"Error retrieving category with id=" + id
          });
      });
  };



  exports.update=(req,res)=>
  {
      const id=req.params.id;
      category.update(req.body,{where:{category_id:id}})
      .then(num=>{
        if (num == 1) {
            res.send({
              message: "category was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update category with id=${id}. Maybe city was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
          message: "Error updating category with id=" + id
        });
      });
  };



/*exports.create = (req,res)=>
{
  console.log("request"+req.body.category_id);

  const category_id = req.body.category_id;
  const name = req.body.name;
  const last_update = req.body.last_update;

  category.create({
   category_id: req.body.category_id,
   name: req.body.name,
   last_update: req.body.last_update
  })
  .then(data=>{
    
    console.log("data"+data);
    res.send(data);
    
  })
  .catch(err=>{
    res.status(500).send({
      message:"error in creating new category"
    });
  });
};*/



  