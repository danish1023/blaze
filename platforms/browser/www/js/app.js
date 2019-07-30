// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
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

var options = {
  "datePrefix": '__DATE:',
  "fieldValueDelete": "__DELETE",
  "fieldValueServerTimestamp" : "__SERVERTIMESTAMP",
  "persist": true,
  "config" : {}
};
 
if (cordova.platformId === "browser") {
 
  options.config = {
    apiKey: "AIzaSyAzo0k7orQei71dYHG6kSr0hV1ZGR2-yeI",
    authDomain: "localhost",
    projectId: "blazefirestore"
  };
}

Firestore.initialise(options).then(function(db) {
  // Add a second document with a generated ID.
  db.get().collection("users").add({
      name: "Alan",
      email: "alan@xyz.com"
  })
  .then(function(docRef) {
      alert("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      alert("Error adding document: ", error);
  });
});
