const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nanoid = require('nanoid/generate');

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.addUserInfo = functions.auth.user().onCreate(event => {
    const user = event.data;

    var userObject = {
        roles: 'user',
        createdOn: user.metadata.creationTime,
        HoVaTen: user.displayName || null,
        DiaChi: null,
        Phone: user.phoneNumber || null,
        Country: 'Việt Nam',
        FullAddress: null,
        RefForm: null,
        Security: {
            AuthSecret: nanoid('AQWERTYUIPASDFGHJKLZXCVBNM1234567890', 12),
            AuthSecretStatus: false,
            Login: false,
            Withdraws: false,
            PasswordChange: false,
            InfoChange: false,
            SecurityChange: false
        },
        Verifycation: {
            Phone: false,
            Identity: null
        }
    };
    const userAccountRef = db.doc(`Account/${user.uid}`);

    const userWalletObject = {
        available: 0,
        balance: 0,
        investing: 0,
        rates: 0,
    }
    const userWallet = db.doc(`Wallets/${user.uid}`);
    userWallet.set(userWalletObject);

    

    return userAccountRef.set(userObject)
});

exports.addUserDefault = functions.firestore
    .document('users/{userId}')
    .onCreate(event => {
        const userRef = nanoid('AQWERTYUIPASDFGHJKLZXCVBNM1234567890', 6);
        // console.log(event.data);
        // db.doc(`Referrals/${userRef}`)
        //     .set({
        //         user: userId,
        //         // status: false
        //     }, {
        //         merge: true
        //     })
        return event.data.ref.set({
            role: 'user',
            // ref: userRef,
            refId: null
        }, {
            merge: true
        })
    });
// exports.createRefId = functions.firestore
//     .document('users/{userId}')
//     .onUpdate(event => {
//         console.log(event.data.data());
//         const data = event.data.data();
//         if (data.refId !== null) {
//             return db.doc(`Referrals/${data.ref}`).set({
//                 userId: userId,
//             }, {
//                 merge: true
//             })
//         } else
//             return
//         // return event.data.ref.set({
//         //     role: 'user',
//         //     ref: nanoid('AQWERTYUIPASDFGHJKLZXCVBNM1234567890', 6),
//         //     refId: null
//         // }, {
//         //     merge: true
//         // })
//     });


// exports.updateUserDefault = functions.firestore
//     .document('users/{userId}')
//     .onWrite(event => {
//         // event.data.data() == {refId: "Marie"}
//         // const data = event.data.data();
//         // const oldData = event.data.previous.data()
//         // // console.log(data, oldData);
//         // const ref = null

//         // if (oldData.refId !== null) {
//         //     data.refId = oldData.refId
//         // }
//         // const ref = oldData.refId || null

//         return

//     });
// exports.getUserInfo = functions.firestore.document('').on