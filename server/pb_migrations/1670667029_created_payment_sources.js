migrate((db) => {
  const collection = new Collection({
    "id": "jvlixeqlmjn2tjj",
    "created": "2022-12-10 10:10:29.320Z",
    "updated": "2022-12-10 10:10:29.320Z",
    "name": "payment_sources",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jnuv0qa9",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("jvlixeqlmjn2tjj");

  return dao.deleteCollection(collection);
})
