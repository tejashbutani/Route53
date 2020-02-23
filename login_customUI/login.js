// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDBqxnpm_6w893UDjd-pOZXBg0M9Jrdlr4",
  authDomain: "poseitive-001.firebaseapp.com",
  databaseURL: "https://poseitive-001.firebaseio.com",
  projectId: "poseitive-001",
  storageBucket: "poseitive-001.appspot.com",
  messagingSenderId: "618050276936",
  appId: "1:618050276936:web:a379e146ce74537b98127d",
  measurementId: "G-7K0M23MSRV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var firestore=firebase.firestore();

var loads=document.querySelector('#loadu');
const email= document.querySelector("#email");
const password = document.querySelector("#password");


loads.addEventListener("click",function(){
  var emv = email.value;
  var psv = password.value;

  docRefs=firestore.doc("Profiles/"+ emv);
    docRefs.get().then(function(doc){
        if(doc && doc.exists){
            const mydata=doc.data();
if (psv==mydata.password) {
  console.log("user logged in");
}else{
  console.log("Wrong Password");
}

            // console.log(mydata.email);
            //   console.log(mydata.password);
        }else{
          console.log("not exist");
        }
    }).catch(function(error){
        console.log("Got an  error:",error);
    });
})
