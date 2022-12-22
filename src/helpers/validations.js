import Joi from 'joi'

export const requestInformation = Joi.object(
  {
    name: Joi.string().required().regex(/^[a-zA-Z ]+$/).messages({
      "string.empty": `Este campo no puede estar vacio`,
      "any.required": `Los nombres son requeridos`,
      "string.pattern.base": `Los nombres solo pueden contener letras de A-Z`,
    }),
    email: Joi.string().email({ tlds: { allow: false } }).required().messages({
      "string.empty": `Este campo no puede estar vacio`,
      "any.required": `El email es requerido`,
      "string.email": `El email debe tener el formato user@mail.com`,
    }),
    phone: Joi.string().required().max(9).min(9).messages({
      "string.empty": `Este campo no puede estar vacio`,
      "any.required": `El telefono es requerido`,
      "string.max": `El numero solo puede tener 9 digitos como maximo`,
      "string.min": `El numero debe de tener 9 digitos`,
    }),
  }
)

export const requestInformation2 = Joi.object(
  {
    name: Joi.string().required().regex(/^[a-zA-Z ]+$/).messages({
      "string.empty": `Este campo no puede estar vacio`,
      "any.required": `Los nombres son requeridos`,
      "string.pattern.base": `Los nombres solo pueden contener letras de A-Z`,
    }),
    email: Joi.string().email({ tlds: { allow: false } }).required().messages({
      "string.empty": `Este campo no puede estar vacio`,
      "any.required": `El email es requerido`,
      "string.email": `El email debe tener el formato user@mail.com`,
    }),
    phone: Joi.string().required().max(9).min(9).messages({
      "string.empty": `Este campo no puede estar vacio`,
      "any.required": `El telefono es requerido`,
      "string.max": `El numero solo puede tener 9 digitos como maximo`,
      "string.min": `El numero debe de tener 9 digitos`,
    }),
    program: Joi.object().required().messages({
      "object.base": `Debe seleccionar un programa`,
      "any.required": `El programa es requerido`,
    }),
  }
)

export const login = Joi.object(
  {
    email: Joi.string().email({ tlds: { allow: false } }).required().messages({
      "string.empty": `Este campo no puede estar vacio`,
      "any.required": `El email es requerido`,
      "string.email": `El email debe tener el formato user@mail.com`,
    }),
    password: Joi.string().required().messages({
      "string.empty": `Este campo no puede estar vacio`,
      "any.required": `La contraseña es requerida`,
    }),
  }
)

export const signUp = Joi.object({
  userName: Joi.string().required().regex(/^[a-zA-Z ]+$/).messages({
    "string.empty": `Este campo no puede estar vacio`,
    "any.required": `Los nombres son requeridos`,
    "string.pattern.base": `Los nombres solo pueden contener letras de A-Z`,
  }),
  userLastName: Joi.string().required().regex(/^[a-zA-Z ]+$/).messages({
    "string.empty": `Este campo no puede estar vacio`,
    "any.required": `Los apellidos son requeridos`,
    "string.pattern.base": `Los apellidos solo pueden contener letras de A-Z`,
  }),
  userEmail: Joi.string().email({ tlds: { allow: false } }).required().messages({
    "string.empty": `Este campo no puede estar vacio`,
    "any.required": `El email es requerido`,
    "string.email": `El email debe tener el formato user@mail`,
  }),
  userDni: Joi.string().required().regex(/^[0-9]+$/).max(8).min(8).messages({
    "string.empty": `Este campo no puede estar vacio`,
    "any.required": `El DNI es requerido`,
    "string.min": `El DNI debe de tener 8 digitos`,
    "string.max": `El DNI debe de tener solo 8 digitos`,
    "string.pattern.base": `El DNI solo puede contener numeros de 0-9`,
  }),
  userPhone: Joi.string().required().max(9).min(9).messages({
    "string.empty": `Este campo no puede estar vacio`,
    "any.required": `El telefono es requerido`,
    "string.max": `El numero solo puede tener 9 digitos como maximo`,
    "string.min": `El numero debe de tener 9 digitos`,
  }),
  userPassword: Joi.string().min(6).required().messages({
    "string.empty": `Este campo no puede estar vacio`,
    "any.required": `La contraseña es requerida`,
    "string.min": `La contraseña debe tener 6 caracteres como minimo`,
  }),
  userPasswordRetry: Joi.string().min(6).required().valid(Joi.ref('userPassword')).messages({
    "string.empty": `Este campo no puede estar vacio`,
    "any.required": `La contraseña es requerida`,
    "string.min": `La contraseña debe tener 6 caracteres como minimo`,
    "any.only": `Las contraseñas no coinciden`,
  }),
});

