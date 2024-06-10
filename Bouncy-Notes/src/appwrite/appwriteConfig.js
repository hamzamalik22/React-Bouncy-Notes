// Appwrite Authentication template by Denis Ivy 
// Used

import conf from "../conf/conf.js";
import { Client, Account, Databases } from "appwrite";

const client = new Client();

client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);


export const databases = new Databases(client);

export const account = new Account(client);

export default client;
