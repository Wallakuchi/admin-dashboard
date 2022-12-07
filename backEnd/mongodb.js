const MongoClient = require("mongodb").MongoClient;
var ObjectId = require("mongodb").ObjectId;

class Database {
  _db = null;
  _dbo = null;

  async connect(dbUrl, dbName) {
    this._db = await MongoClient.connect(dbUrl);
    this._dbo = this._db.db(dbName);
    console.log(`Db connected successfully: ${dbName}`);
  }

  disconnect() {
    if (this._db) {
      this._db.close();
    }
    console.log("DB disconnected");
  }

  async selectTable(tableName) {
    const tableExists = await this._dbo
      .listCollections({ name: tableName })
      .toArray();

    if (tableExists.length === 0) {
      await this._dbo.createCollection(tableName);
      console.log(`Collection created successfully: ${tableName}`);
    }

    return await this._dbo.collection(tableName);
  }

  async selectOne(table, filters, columns) {
    const selection = columns ? { projection: columns } : undefined;
    return await table.findOne(filters, selection);
  }

  async selectMany(table, filters, columns) {
    const selection = columns ? { projection: columns } : undefined;
    return await table.find(filters, selection).toArray();
  }

  async insertOne(table, dataObject) {
    const insertData = await table.insertOne(dataObject);
    return { _id: insertData.insertedId, ...dataObject };
  }

  async insertMany(table, dataArray) {
    return await table.insertMany(dataArray);
  }

  async deleteOne(table, id) {
    const deleted = await table.deleteOne({ _id: new ObjectId(id) });
    return deleted.deletedCount;
  }

  async updateRecord(table, id, dataObject) {
    return await table.updateOne(
      { _id: new ObjectId(id) },
      { $set: dataObject }
    );
  }
}

module.exports = Database;
