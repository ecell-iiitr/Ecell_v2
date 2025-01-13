

class controller2 {
    static async method1(req,res){
        try{
           
       }
        catch(err){
            res.status(500).json({error: err.message});
        }
    }
}

module.exports = controller2;