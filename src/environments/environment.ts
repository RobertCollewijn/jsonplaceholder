// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  firestore: {
    apiKey: 'AIzaSyBDL9tLfR2XXJVeaT_pcptveB1orxajjzo',
    authDomain: 'my-firestore-bcca8.firebaseapp.com',
    databaseURL: 'https://my-firestore-bcca8.firebaseio.com',
    projectId: 'my-firestore-bcca8',
    storageBucket: 'my-firestore-bcca8.appspot.com',
    messagingSenderId: '169388859976'
  }
};
