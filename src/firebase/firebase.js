import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: 'https://expensify-e5aac-default-rtdb.firebaseio.com',
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};


firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };


/*database.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
})*/

/*database.ref()
    .once('value')
    .then((snapshot) => {
        const val = snapshot.val();
        console.log(val);
    }).catch((e) => {
        console.log('Error fetching data', e);
    });*/

/*database.ref().set({
    name: 'Joy Adeoye',
    age: 23,
    stressLevel: 6,
    job: {
        title: 'Software developer',
        company: 'Google'
    },
    isSingle: false,
    location: {
        city: 'Lagos',
        country: 'Nigeria'
    }
}).then(() => {
    console.log('Data is saved');
}).catch((e) => {
    console.log('This failed:', e);
});

database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
});

//database.ref('isSingle')
  //  .remove()
    //.then(() => {
      //  console.log('Data was removed');
    //}).catch((e) => {
      //  console.log('Did not remove data', e)
    //});*/