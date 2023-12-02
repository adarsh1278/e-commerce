import conf from "@/conf/config";
import { Client, Account, ID } from 'appwrite';

const appwriteClient = new Client();

appwriteClient.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

const account = new Account(appwriteClient);

class AppwriteService {
    async createUserAccount({ email, password, name }) {
        try {
            const userAccount = await account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async isLoggedIn() {
        try {
            const data = await this.getCurrentUser();
            return Boolean(data);
        } catch (error) {}

        return false;
    }

    async getCurrentUser() {
        try {
            return account.get();
        } catch (error) {
            console.log("getCurrentUser error: " + error);
        }

        return null;
    }

    async logout() {
        try {
            return await account.deleteSession("current");
        } catch (error) {
            console.log("logout error: " + error);
        }
    }
}

const appwriteService = new AppwriteService();

export default appwriteService;
