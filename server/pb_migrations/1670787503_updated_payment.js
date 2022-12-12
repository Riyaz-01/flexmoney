migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x3n8m9s6gzv5o5c")

  collection.createRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x3n8m9s6gzv5o5c")

  collection.createRule = ""
  collection.updateRule = ""

  return dao.saveCollection(collection)
})
