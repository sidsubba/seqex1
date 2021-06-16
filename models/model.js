const sequelize = require('sequelize');
const{Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
class categoryinfo extends Model{

    static associate(models) {
    
    }

}

categoryinfo.init(
{

    category_id:DataTypes.BOOLEAN,
    name : DataTypes.STRING,
    last_update:DataTypes.DATE

},
{
  sequelize,
  modelName:'categoryinfo',
  tableName:'category',
  createdAt: 'date_created',
  underscore: true,
  timestamps: false,

},
);
categoryinfo.removeAttribute('id');
 return categoryinfo;
};