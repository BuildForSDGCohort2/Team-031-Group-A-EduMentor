import Joi from "@hapi/joi";

// signup Validation
const signupValidator = (param) => {
  const schema = Joi.object({
    email: Joi.string()
      .min(6)
      .required()
      .email(),
    password: Joi.string()
      .min(8)
      .required(),
  }).options({ abortEarly: false });
  return schema.validate(param);
};

export default signupValidator;
