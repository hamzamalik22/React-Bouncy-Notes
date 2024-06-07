import conf from "../conf/conf.js";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createTask({task, priority, userId}){
    try {
        let id;
        return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            id = ID.unique,
            {
                task,
                priority,
            }
        )
    } catch (error) {
        console.log("Appwrite service :: getCurrentUser :: error", error);
    }
  }

  async deleteTask(id){
    try {
        return await this.databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            id,
        )
        return true
    } catch (error) {
        console.log("Appwrite service :: getCurrentUser :: error", error);
        return false
    }

  }

  async getTasks(){
    try {
        return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
        )
    } catch (error) {
        console.log("Appwrite service :: getCurrentUser :: error", error);
        return false
    }
  }


}

const service = new Service();

export default service;
