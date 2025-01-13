
const GeminiApi = require("../../infrastructure/geminiai/geminiService");

class controller1{

    static async method1(req,res){
        try{

        

        }
        catch(err){
            res.status(500).json({error: err.message});
        }
    }

    
    static async method2(req,res){
        try{
            
        
        }
        catch(err){
            res.status(500).json({error: err.message});
        }
    }
}

module.exports = controller1;