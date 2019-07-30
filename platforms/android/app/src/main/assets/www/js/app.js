// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app = new Framework7({
  root: '#app', // App root element
  id: 'io.md.blaze', // App bundle ID
  name: 'Framework7', // App name
  theme: 'md', // Theme detection
  view: {
    animate: true,
    xhrCache: false,
  },
  statusbar: {
    androidTextColor: 'white',
    androidBackgroundColor: '#A9A9A9',
  },
  dialog: {
    title: 'Blaze',
  },
  panel: {
    swipe: 'left',
    swipeOnlyClose: true,
  },
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'Md',
        lastName: 'Danish',
      },
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyAzo0k7orQei71dYHG6kSr0hV1ZGR2-yeI",
  authDomain: "localhost",
  projectId: "blazefirestore"
});

var db = firebase.firestore();

db.enablePersistence();

// db.collection("users").get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//     console.log(doc.data().name);
//   });
// });
