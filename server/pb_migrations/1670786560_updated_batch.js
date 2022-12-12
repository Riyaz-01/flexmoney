migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i1ogpss1c17sq26")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i1ogpss1c17sq26")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
