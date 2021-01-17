import { fireStore } from "../../fire";

export class UserData {
  static setUserData(userData) {
    fireStore.collection("users").doc(userData.userEmail).set({
      firstName: userData.firstName,
      lastName: userData.lastName,
      userEmail: userData.userEmail,
      dateRegisration: userData.dateRegisration,
      datePayment: userData.datePayment,
      userPlan: userData.userPlan,
    });
  }

  static getUserData(email) {
    let docRef = fireStore.collection("users").doc(email);

    docRef
      .get()
      .then(function (doc) {
        if (doc.exists) {
          console.log("Document data:", doc.data().firstName);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }

  // REALTIME DATABASE
  // static writeUserData(userData) {
  //   fire
  //     .database()
  //     .ref("users/" + userData.userEmail.toString().replace(/\./g, "%"))
  //     .set({
  //       firstName: userData.firstName,
  //       lastName: userData.lastName,
  //       userEmail: userData.userEmail,
  //       cardNumber: userData.cardNumber,
  //       cardDate: userData.cardDate,
  //       cardCVV: userData.cardCVV,
  //       dateRegisration: userData.dateRegisration,
  //       datePayment: userData.datePayment,
  //       userPlan: userData.userPlan,
  //     });
  // }
  // static getUserData(email) {
  //   let userId = firebase.auth().currentUser.uid;
  //   return firebase
  //     .database()
  //     .ref("/users/" + userId)
  //     .once("value")
  //     .then((snapshot) => {
  //       let username =
  //         (snapshot.val() && snapshot.val().username) || "Anonymous";
  //     });
  // }
}
