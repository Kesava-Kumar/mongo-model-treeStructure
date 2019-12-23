const mongoose =require('mongoose');

const TreeSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    type:{
        type: String,
        require:true
    },
    parent: {
        // type: Schema.Types.ObjectId,
        // ref: 'Node'
        type: String,
        require: true
      }
    //   children: [{
    //     // type: Schema.Types.ObjectId,
    //     // ref: 'Node'
    //     type: Array,
    //     require:true
    //   }],
    //   ancestors: [{
    //     // type: Schema.Types.ObjectId,
    //     // ref: 'Node'
    //     type: Array,
    //     require: true
    //   }]
})

const Categories = mongoose.model('Categories', TreeSchema);
module.exports = Categories;