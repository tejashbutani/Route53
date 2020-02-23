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
var nm,ag,ge,em,nx,ny,lex,ley,rex,rey,lsx,lsy,rsx,rsy;


loads.addEventListener("click",function(){
  var emv = email.value;
  var psv = password.value;

  docRefs=firestore.doc("Profiles/"+ emv);
    docRefs.get().then(function(doc){
        if(doc && doc.exists){
            const mydata=doc.data();
            nm = mydata.name;
            ag = mydata.age;
            ge = mydata.gender;
            em = mydata.email;
if (psv==mydata.password) {
  console.log("user logged in");
}else{
  console.log("Wrong Password");
}
        }else{
          console.log("not exist");
        }
    }).catch(function(error){
        console.log("Got an  error:",error);
    });

docReft=firestore.doc("Threshold/"+ emv);
    docReft.get().then(function(doc){
        if(doc && doc.exists){
            const mydatat=doc.data();
            nx =mydatat.nosexmodes;
            ny = mydatat.noseymodes;
            lex = mydatat.leyexmodes;
            ley = mydatat.leyeymodes;
            rex = mydatat.reyexmodes;
            rey = mydatat.reyeymodes;
            lsx = mydatat.lshoulderxmodes;
            lsy = mydatat.lshoulderymodes;
            rsx = mydatat.rshoulderxmodes;
            rsy = mydatat.rshoulderymodes;
            sendValues();
            window.open("dashboard.html");
        }else{
          console.log("not exist");
        }
    }).catch(function(error){
        console.log("Got an  error:",error);
    });
    function sendValues()
    {
      localStorage.setItem("named",nm);
      localStorage.setItem("aged",ag);
      localStorage.setItem("genderd",ge);
      localStorage.setItem("emaild",em);
      localStorage.setItem("nx",nx);
      localStorage.setItem("ny",ny);
      localStorage.setItem("lex",lex);
      localStorage.setItem("ley",ley);
      localStorage.setItem("rex",rex);
      localStorage.setItem("rey",rey);
      localStorage.setItem("lsx",lsx);
      localStorage.setItem("lsy",lsy);
      localStorage.setItem("rsx",rsx);
      localStorage.setItem("rsy",rsy);
    return false;
    }
})
