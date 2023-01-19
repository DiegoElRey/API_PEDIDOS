const {schema, model} = require('mongoose');

const order_schema = new schema 
({
     order_user:
     {
        type: String,
        require: true
     },
     order_product:
     {
        type: Number,
        require: true
     },
     order_price_unit:
     {
        type: Number,
        require: true
     },
     order_amount:
     {
        type: Number,
        require: true
     },
     order_subtotal:
     {
        type: Number,
        require: true
     },
     order_total:
     {
        type: Number,
        require: true
     },
     order_iva:
     {
        type: Number,
        require: true
     },
},{
    timestamps: true
});

module.exports = model('order', order_schema)