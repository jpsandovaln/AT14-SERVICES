"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userProfileProvider_1 = require("./provider/userProfileProvider");
class ProfileController {
    constructor(req) {
        this.request = req;
        this.userProfileProvider = new userProfileProvider_1.UserProfileProvider();
    }
    getUserProfile() {
        let queryParam;
        if (this.request && this.request.query) {
            queryParam = this.request.query.name;
        }
        else {
            queryParam = this.request.queryStringParameters.name;
        }
        return this.userProfileProvider.fetchUserProfile(queryParam);
    }
}
exports.ProfileController = ProfileController;
//# sourceMappingURL=profileController.js.map