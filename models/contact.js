module.exports = function(sequelize, DataTypes) {
  var Contact = sequelize.define('Contact', {
    contact_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contact_email: DataTypes.STRING,
    contact_phone: DataTypes.STRING,
    prefer_text: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
  return Contact;
};
