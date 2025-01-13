class repository2{

    async getUsecase1(){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    async getUsecase1(method){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }
}

module.exports = repository2;