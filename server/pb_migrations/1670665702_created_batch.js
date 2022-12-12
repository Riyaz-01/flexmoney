migrate((db) => {
  const collection = new Collection({
    "id": "i1ogpss1c17sq26",
    "created": "2022-12-10 09:48:22.662Z",
    "updated": "2022-12-10 09:48:22.662Z",
    "name": "batch",
    "type": "base",
    "system": false,
    "schema": [
      {
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
  const collection = dao.findCollectionByNameOrId("i1ogpss1c17sq26");

  return dao.deleteCollection(collection);
})
