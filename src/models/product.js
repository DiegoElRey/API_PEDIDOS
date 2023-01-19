const {schema, model} = require('mongoose');

const product_schema = new schema 
({
     product_description:
     {
        type: String,
        require: true
     },
     product_price:
     {
        type: Number,
        require: true
     },
},{
    timestamps: true
});

module.exports = model('product', product_schema)