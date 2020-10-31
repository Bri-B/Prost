module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('customer', {
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    user_name: {
      type: DataTypes.STRING,
    },
    id_facebook: {
      type: DataTypes.STRING,
    },
    id_google: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone_number: {
      type: DataTypes.STRING,
    },
    gender_type: {
      type: DataTypes.STRING
    },
    profile_image: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    },
    zip: {
      type: DataTypes.STRING
    },
  }, {
    freezeTableName: true,
  });
  return Customer;
};

// Customer.create({
//   first_name: first,
//   last_name: last,
//   user_name: username,
//   id_google: gId,
//   email,
//   phone_number: number,
//   gender_type: gender,
//   profile_image: image,
// })

