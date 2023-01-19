const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const user_schema = mongoose.Schema({
     user_name:{
        type: String,
        require: true
     },
     user_mail:{
        type: String,
        require: true
     },
     user_password:{
        type: String,
        require: true
     }
});
user_schema.methods.encryp_password = async user_password => {
   const salt = await bcrypt.genSalt(10)
   return await bcrypt.hash(user_password, salt);
}
user_schema.methods.match_password = async function(user_password){
   return await bcrypt.compare(user_password, this.user_password);
}
module.exports = mongoose.model('user', user_schema);