const { getAllRecords } = require("../../infrastructure/db/queries/genericQueries");
const UseCaseInt = require("../interfaces/UseCaseInt");

class GetRecords extends UseCaseInt {
    constructor(EntityClass, entityName) {
        super();
        this.EntityClass = EntityClass;
        this.entityName = entityName;
    }

    async execute() {
        const rows = await getAllRecords(this.entityName);
        return rows.map((record) => new this.EntityClass(record));
    }
}

module.exports = GetRecords;
