migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x3n8m9s6gzv5o5c")

  // remove
  collection.schema.removeField("zzlaeeov")

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x3n8m9s6gzv5o5c")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zzlaeeov",
    "name": "source",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "jvlixeqlmjn2tjj",
      "cascadeDelete": false
    }
  }))

  // remove
  collection.schema.removeField("mdutob4i")

  return dao.saveCollection(collection)
})
