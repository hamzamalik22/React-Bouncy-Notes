// Appwrite Database connectivity & Interaction template by Denis Ivy 
// Used


import conf from "../conf/conf";
import { databases } from "./appwriteConfig";
import { ID } from "appwrite";

const db = {};

const collections = [
  {
    dbId: conf.appwriteDatabaseId,
    id: conf.appwriteCollectionId,
    name: "Task",
  },
];

collections.forEach((col) => {
  db[col.name] = {
    create: (payload, permissions, id = ID.unique()) =>
      databases.createDocument(col.dbId, col.id, id, payload, permissions),
    update: (id, payload, permissions) =>
      databases.updateDocument(col.dbId, col.id, id, payload, permissions),
    delete: (id) => databases.deleteDocument(col.dbId, col.id, id),

    list: (queries = []) => databases.listDocuments(col.dbId, col.id, queries),

    get: (id) => databases.getDocument(col.dbId, col.id, id),
  };
});

export default db;
