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