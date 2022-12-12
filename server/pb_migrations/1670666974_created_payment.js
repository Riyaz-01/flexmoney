migrate((db) => {
  const collection = new Collection({
    "id": "x3n8m9s6gzv5o5c",
    "created": "2022-12-10 10:09:34.321Z",
    "updated": "2022-12-10 10:09:34.321Z",
    "name": "payment",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qrinyor6",
        "name": "user_id",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "k9uqhtss",
        "name": "amount",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "54rxbd1j",
        "name": "status",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "pending",
            "success"
          ]
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
  const collection = dao.findCollectionByNameOrId("x3n8m9s6gzv5o5c");

  return dao.deleteCollection(collection);
})
