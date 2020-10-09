module.exports = {
    createUser: (username, password) => {
        db.collection("user")
            .add(UserEntity(username, password))
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            }).catch((error) => {
            console.error("Error adding document: ", error);
        });
    }
}
