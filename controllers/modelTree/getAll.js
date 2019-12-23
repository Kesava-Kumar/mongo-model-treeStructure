const {Categories}= require('../../models');

exports.get = async(req,res,next)=>{
    try{
        const result = await Categories.find({});
        console.log(result);
        res.json({result})
    }catch(error){
        next(error);
    }
}