const {Categories}= require('../../models');

exports.createTreeStrecture = async(req,res,next)=> {
    try{
        const category = new Categories(req.body);
        const result = await category.save();
        res.json({result});
    }catch(error){
        next(error);
    }
}