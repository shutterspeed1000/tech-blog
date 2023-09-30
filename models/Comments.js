const { Model, DataTypes } = require('sequelize');
const sequelize = require('../controllers/connection');

class Comments extends Model {}

Comments.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    post_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'posts',
          key: 'id',
        },
        allowNull: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        allowNull: true,
      },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    timestamps: false,
    modelName: 'comments',
  }
);

module.exports = Comments;
