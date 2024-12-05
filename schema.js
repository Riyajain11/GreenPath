const Joi = require('joi');
 
module.exports.farmersSchema = Joi.object({
    listing: Joi.object({
        name:Joi.string().required(),
        city: Joi.string().required(),
        state:Joi.string().required(), 
        items: Joi.string().required(), 
        image:Joi.string().allow("" , null),
        price: Joi.number().required().min(0),
    }).required()
});