
const mongose = require('mongoose');
let saleSchema = new mongose.Schema({
    
    name: String,
});

module.exports = mongose.model('sale', saleSchema);