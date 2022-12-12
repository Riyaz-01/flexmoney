migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x3n8m9s6gzv5o5c")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mdutob4i",
    "name": "source",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "upi",
        "card",
        "UPI",
        "CARD"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x3n8m9s6gzv5o5c")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mdutob4i",
    "name": "source",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "upi",
        "card"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
