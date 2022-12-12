migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i1ogpss1c17sq26")

  // remove
  collection.schema.removeField("prphtgbn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "li0rm04s",
    "name": "fee",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": 500,
      "max": 500
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i1ogpss1c17sq26")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "prphtgbn",
    "name": "field",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("li0rm04s")

  return dao.saveCollection(collection)
})
