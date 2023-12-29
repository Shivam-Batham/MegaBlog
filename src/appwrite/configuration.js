import conf from "../config/config";
import { Client,ID ,Databases,Storage,Query} from "appwrite"; 

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases =  new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    // create post
    async createPost({title,slug,content,featuredImage,status,userId}){
         
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        }catch(error){
            throw error;
        }
    }

    // update post
    async updatePost({title,slug,content,featuredImage,status}){
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    
                }
            )
        }catch(error){
            throw error;
        }
    }
    // delete post 
    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        }catch(error){
            console.log(`Appwrite Service :: DeletePost Error`,error);
            return false;
            
        }
    }
    // get post
    async getPost(slug){
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        }catch(error){
            console.log(`Appwrite Service :: getPost Error`,error);
            return false;
        }
    }

    // list active docs
    async getPosts(queries = [Query.equal("status","active")]){
        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        }catch(error){
            console.log(`Appwrite Service :: getPosts Error`,error);
            return false;
        }

    }

    // file upload
    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )           
        }catch(error){
            console.log(`Appwrite Service :: uploadFile Error`,error);
            return false;
        }
    }
    // delete file
    async deleteFile(fileId){
        try{
             await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        }catch(error){
            console.log(`Appwrite Service :: uploadFile Error`,error);
            return false;
        }
    }
    // file preview
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service();
export default service;