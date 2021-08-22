var db = require('../db')

module.exports = function deleteItem(store, data, cb) {

  store.getTable(data.TableName, function(err, table) {
    if (err) return cb(err)

    if ((err = db.validateKey(data.Key, table)) != null) return cb(err)

    var itemDb = store.getItemDb(data.TableName), key = db.createKey(data.Key, table)

    db.deleteItem(store, data, table, itemDb, key, cb)
  })
}
