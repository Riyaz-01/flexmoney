migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i1ogpss1c17sq26")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i1ogpss1c17sq26")

  collection.listRule = null

  return dao.saveCollection(collection)
})
