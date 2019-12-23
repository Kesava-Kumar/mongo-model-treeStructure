const {Children}= require('../../models/childrenTree');

exports.getChildrens = async(req,res,next)=>{
    try{
        const parent = req.params.parent;
        const result = await Children.find({parentName:parent});
        console.log(result);
        res.json({result})
    }catch(error){
        next(error);
    }
}