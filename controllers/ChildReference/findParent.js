const {Children}= require('../../models/childrenTree');

exports.getParent = async(req,res,next)=>{
    try{
        const id = req.params.id;
        const result = await Children.findOne({_id:id});
        var parnt = result.parentName;
        res.json({parnt})
    }catch(error){
        next(error);
    }
}
