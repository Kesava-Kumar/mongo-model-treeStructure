const {Categories}= require('../../models');

exports.getParent = async(req,res,next)=>{
    try{
        const id = req.params.id;
        const result = await Categories.findOne({_id:id});
        var parnt = result.parent;
        res.json({parnt})
    }catch(error){
        next(error);
    }
}
