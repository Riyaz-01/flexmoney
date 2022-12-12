migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i1ogpss1c17sq26")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "35uzphcc",
    "name": "in_time",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": "/(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]/"
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i1ogpss1c17sq26")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "35uzphcc",
    "name": "in_time",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": "/(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]/g"
    }
  }))

  return dao.saveCollection(collection)
})
