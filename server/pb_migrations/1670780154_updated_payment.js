migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x3n8m9s6gzv5o5c")

  collection.listRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x3n8m9s6gzv5o5c")

  collection.listRule = "id=user_id"

  return dao.saveCollection(collection)
})
