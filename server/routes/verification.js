const firebase = require("./../config/firebase");
const admin = require("./../config/admin");


module.exports = (req, res, next) => {
   const token = req.header('Authorization').replace('Bearer', '').trim()
   var user = firebase.auth().currentUser;
   if (user) {
      admin.auth().verifyIdToken(token)
         .then(function (decodedToken) {
            if (decodedToken.uid === user.uid) {
               req.user = user.uid
               return next()
            }
         }).catch(function (error) {
            res.send.json({ message: error });
         });
   } else {
      console.log("There is no current user.");
   }
};