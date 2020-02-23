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
  firebase.analytics();

  var firestore=firebase.firestore();

  const name=document.querySelector('#name');
  const age=document.querySelector('#age');
  const gender=document.querySelector('#gender');
  const email=document.querySelector('#email');
  const password=document.querySelector('#password');

  const save=document.querySelector('#signup');
  const load=document.querySelector('#fetch');

  save.addEventListener("click",function(){

const names=name.value;
const ages=age.value;
const genders=gender.value;
const emails=email.value;
const passwords=password.value;

 docRef=firestore.doc("Profiles/" + emails);

console.log("Profile created!!!");
 docRef.set({
  name:names,
  age:ages,
  gender:genders,
  email:emails,
  password:passwords,

 }).then(function(){
     console.log("status Saved!");
 }).catch(function(error){
 console.log("Got an  error:",error);
 });
  })

  //
  // load.addEventListener("click",function(){
  //   docRefs=firestore.doc("Profiles/avinash@gmail.com");
  //     docRefs.get().then(function(doc){
  //         if(doc && doc.exists){
  //             const mydata=doc.data();
  //             name.innerText=mydata.name;
  //             age.innerText=mydata.age;
  //             gender.innerText=mydata.gender;
  //             email.innerText=mydata.email;
  //             password.innerText=mydata.password;
  //         }
  //     }).catch(function(error){
  //         console.log("Got an  error:",error);
  //     });
  // })
//   getRealTimeUpates=function(){
//     docRef.onSnapshot(function(doc){
//         if(doc && doc.exists){
//             const mydata=doc.data();
//             status.innerText="I love you  "+ mydata.name+" "+mydata.email;
//         }
//     });
//   }
//   getRealTimeUpates();
