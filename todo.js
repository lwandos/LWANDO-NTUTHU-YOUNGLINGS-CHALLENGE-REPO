  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC7ZTcKeARi29FchqQWKZfOFb6iXONygBA",
    authDomain: "todo-task-e1327.firebaseapp.com",
    projectId: "todo-task-e1327",
    storageBucket: "todo-task-e1327.appspot.com",
    messagingSenderId: "175246841802",
    appId: "1:175246841802:web:ac7cd56122e2cdcdf22133"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


 function add_task(){
     console.log("add_task")
 }


  function task_done(){
      console.log("task_done");
  }

  function task_edit(){
    console.log("task_edit");
}

function task_delete(){
    console.log("task_delete");
}