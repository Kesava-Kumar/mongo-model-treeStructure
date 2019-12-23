const {Categories}= require('../../models');

exports.getChildrens = async(req,res,next)=>{
    try{
        const parent = req.params.parent;
        const result = await Categories.find({parent:parent});
        console.log(result);
        res.json({result})
    }catch(error){
        next(error);
    }
}