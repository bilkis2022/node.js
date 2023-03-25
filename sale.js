
const mongose = require('mongoose');
let saleSchema = new mongose.Schema({
    
    name: {
        type: String,
        required: true
    },
    industry: String,
});

module.exports = mongose.model('Sale', saleSchema);