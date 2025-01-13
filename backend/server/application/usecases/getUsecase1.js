const UseCaseInt = require("../interfaces/UseCaseInt");

class GetEntityByParam extends UseCaseInt {
    constructor(repository) {
        super();
        this.repository = repository;
    }

    async execute(param) {
        const data = await this.repository.getByParam(param);
        return data;
    }
}

module.exports = GetEntityByParam;