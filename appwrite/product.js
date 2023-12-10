import conf from '../conf/config.js';
import { Client, Databases, ID ,Query} from 'appwrite';

class ProductService {
    constructor() {
        this.client = new Client();
        this.database = new Databases(this.client);

        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
    }

    async createProductDocument(productName, productDescription ,userId) {
        try {
            const databaseId = conf.appwriteDatabaseId;
            const collectionId = conf.appwriteCollectionId;

            const documentId = ID.unique();
            const documentData = {
                productName,
                productDescription,
                userId
            };

            const result = await this.database.createDocument(databaseId, collectionId, documentId, documentData);

            console.log('Product document created:', result);
            return result;
        } catch (error) {
            console.error('Error creating product document:', error);
            throw error;
        }
    }
    async listUserDocuments(userId) {
        try {
            const databaseId = conf.appwriteDatabaseId;
            const collectionId = conf.appwriteCollectionId;

            // Fetch all documents in the collection for the specified user ID
            console.log("nice bitch")
            const documents = await this.database.listDocuments([databaseId], [collectionId] , [Query.equal("userId", userId)]);

            console.log('User\'s documents retrieved:', documents);
            return documents;
        } catch (error) {
            console.error('Error retrieving user\'s documents:', error);
            throw error;
        }
    }
}


const productService = new ProductService();

export { productService };
