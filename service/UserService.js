const {db} = require('../db');
const {UserEntity} = require('../entity/User');

module.exports = {
    createUser: async (username, password) => {
        let returnObj = {
            success: true
        };
        await db.collection("user")
            .add(UserEntity(username, password))
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            }).catch((error) => {
                returnObj.success = false;
                console.error("Error adding document: ", error);
            });
        return returnObj;
    }
}
