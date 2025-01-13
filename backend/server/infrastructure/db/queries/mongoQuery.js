const db = require('..');

// Generic get all documents from a collection
const getAll = async (collectionName) => {
    try {
        const collection = db.collection(collectionName);
        const result = await collection.find({}).toArray();
        return result;
    } catch (error) {
        throw new Error(`Error fetching all documents from ${collectionName}: ${error.message}`);
    }
};

// Generic get document by ID
const getById = async (collectionName, id) => {
    try {
        const collection = db.collection(collectionName);
        const result = await collection.findOne({ _id: id });
        return result;
    } catch (error) {
        throw new Error(`Error fetching document by ID from ${collectionName}: ${error.message}`);
    }
};

// Generic insert document
const insert = async (collectionName, document) => {
    try {
        const collection = db.collection(collectionName);
        const result = await collection.insertOne(document);
        return result;
    } catch (error) {
        throw new Error(`Error inserting document into ${collectionName}: ${error.message}`);
    }
};

module.exports = {
    getAll,
    getById,
    insert
};
