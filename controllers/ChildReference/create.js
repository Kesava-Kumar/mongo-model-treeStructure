const {Children}= require('../../models/childrenTree');

exports.createChild = async(req,res,next)=> {
    try{
        const children = new Children(req.body);
        const result = await children.save();
        res.json({result});
    }catch(error){
        next(error);
    }
}