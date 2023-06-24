const Joi = require("joi"); // eslint-disable-line

// const validateUser = (req, res, next) => {
//   const userSchema = Joi.object({
//     firstname: Joi.string().max(255).required(),
//     lastname: Joi.string().max(255).required(),
//     email: Joi.string().email({
//       minDomainSegments: 2,
//       tlds: { allow: ["com", "net", "fr"] },
//     }),
//     city: Joi.string().max(255).required(),
//     language: Joi.string().max(255).required(),
//     password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/),
//   });

//   const { firstname, lastname, email, city, language, password } = req.body;

//   const { error } = userSchema.validate(
//     { firstname, lastname, email, city, language, password },
//     { abortEarly: false }
//   );

//   if (error) {
//     res.status(422).json({ validationErrors: error.details });
//   } else {
//     next();
//   }
// };

const validateProduct = (req, res, next) => {
  const productSchema = Joi.object({
    name: Joi.string().max(255).trim(true).required(),
    image: Joi.string().max(255).trim(true).required(),
    stock: Joi.number().integer().min(0).required(),
    price: Joi.number().min(1).precision(2).required(),
    description: Joi.string().trim(true).required(),
  });

  const { name, image, stock, price, description } = req.body;

  const { error } = productSchema.validate(
    { name, image, stock, price, description },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = { validateProduct };
