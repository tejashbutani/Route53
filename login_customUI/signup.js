let canvas;
let video;
let poseNet;
let poses = [];
let nosexlist = [], noseylist = [], leyexlist = [], leyeylist = [], reyexlist = [], reyeylist = [], lshoulderxlist = [], lshoulderylist = [], rshoulderxlist = [], rshoulderylist = [];




//Your web app's Firebase configuration
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




function setup() {
  canvas = createCanvas(640, 480);
  //canvas.margin(100);
  video = createCapture(VIDEO);
  video.size(width, height);

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function (results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
select('#status').html('Model Loaded');
}

function draw() {
  image(video, 0, 0, width, height);

  // We can call both functions to draw all keypoints and the skeletons
  drawKeypoints();
  drawSkeleton();
}



// A function to draw ellipses over the detected keypoints
function drawKeypoints() {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i++) {
    // For each pose detected, loop through all the keypoints
    let pose = poses[i].pose;
    //console.log(pose);
    for (let j = 0; j < pose.keypoints.length; j++) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      let keypoint = pose.keypoints[j];
      // console.log(keypoint);
      modal(pose.keypoints[0].position.x, pose.keypoints[0].position.y, pose.keypoints[1].position.x, pose.keypoints[1].position.y, pose.keypoints[2].position.x, pose.keypoints[2].position.y, pose.keypoints[5].position.x, pose.keypoints[5].position.y, pose.keypoints[6].position.x, pose.keypoints[6].position.y);

      // Only draw an ellipse is the pose probability is bigger than 0.2
      if (keypoint.score > 0.2) {
        fill(255, 0, 0);
        noStroke();
        ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
      }
    }
  }
}
function SimpleMode(arr) {
  var mode = 0;
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < i; j++) {
      if (arr[j] === arr[i]) {
        mode = arr[j];
        count++;
      }
    }
  }
  return mode;
}



function modal(nosex, nosey, leyex, leyey, reyex, reyey, lshoulderx, lshouldery, rshoulderx, rshouldery) {



    nosexlist.push(nosex);
    noseylist.push(nosey);

    leyexlist.push(leyex);
    leyeylist.push(leyey);

    reyexlist.push(reyex);
    reyeylist.push(reyey);

    lshoulderxlist.push(lshoulderx);
    lshoulderylist.push(lshouldery);

    rshoulderxlist.push(rshoulderx);
    rshoulderylist.push(rshouldery)



}

function clearTime10(){
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);


    var nosexmode = SimpleMode(nosexlist);
    var noseymode = SimpleMode(noseylist);
    var leyexmode = SimpleMode(leyexlist);
    var leyeymode = SimpleMode(leyeylist);
    var reyexmode = SimpleMode(reyexlist);
    var reyeymode = SimpleMode(reyeylist);
    var lshoulderxmode = SimpleMode(lshoulderxlist);
    var lshoulderymode = SimpleMode(lshoulderylist);
    var rshoulderxmode = SimpleMode(rshoulderxlist);
    var rshoulderymode = SimpleMode(rshoulderylist);
    var nm,ag,ge,em,nx,ny,lex,ley,rex,rey,lsx,lsy,rsx,rsy;


    // $("#result").append('NOSE X - ' + nosexmode + '<br>');
    // $("#result").append('NOSE Y -' + noseymode + '<br>');
    //  $("#result").append('LEFT EYE X -' + leyexmode + '<br>');
    //  $("#result").append('LEFT EYE Y -' + leyeymode + '<br>');
    //  $("#result").append('RIGHT EYE X - ' + reyexmode + '<br>');
    //  $("#result").append('RIGHT EYE Y - ' + reyeymode + '<br>');
    //  $("#result").append('LEFT SHOULDER X - ' + lshoulderxmode + '<br>');
    //  $("#result").append('LEFT SHOULDER Y - ' + lshoulderymode + '<br>');
    //  $("#result").append('RIGHT SHOULDER X - ' + rshoulderxmode + '<br>');
    //  $("#result").append('RIGHT SHOULDER Y - ' + rshoulderymode + '<br>');
    docRefp=firestore.doc("Profiles/" + d);
    docRefp.set({
      name:a,
      age:b,
      gender:c,
      email:d,
      password:e,
     }).then(function(){
         console.log("status Saved!");
         nm = a;
         ag =b;
         ge = c;
         em = d;
     }).catch(function(error){
     console.log("Got an  error:",error);
     });



      docRef=firestore.doc("Threshold/" + d);
      docRef.set({
        nosexmodes:nosexmode,
        noseymodes:noseymode,
        leyexmodes:leyexmode,
        leyeymodes:leyeymode,
        reyexmodes:reyexmode,
        reyeymodes:reyeymode,
        lshoulderxmodes:lshoulderxmode,
        lshoulderymodes:lshoulderymode,
        rshoulderxmodes:rshoulderxmode,
        rshoulderymodes:rshoulderymode,
       }).then(function(){
           console.log("status Saved!");
           nx =nosexmode;
           ny = noseymode;
           lex = leyexmode;
           ley = leyeymode;
           rex = reyexmode;
           rey = reyeymodes;
           lsx = lshoulderxmode;
           lsy = lshoulderymode;
           rsx = rshoulderxmode;
           rsy = rshoulderymode;
           opendash();
       }).catch(function(error){
       console.log("Got an  error:",error);
       });


}
setTimeout(clearTime10,10000);

function opendash() {
  window.open("dashboard.html");
}
var nm,ag,ge,em,nx,ny,lex,ley,rex,rey,lsx,lsy,rsx,rsy;
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

// A function to draw the skeletons
function drawSkeleton() {
  // Loop through all the skeletons detected
  for (let i = 0; i < poses.length; i++) {
    let skeleton = poses[i].skeleton;
    // For every skeleton, loop through all body connections
    for (let j = 0; j < skeleton.length; j++) {
      let partA = skeleton[j][0];
      let partB = skeleton[j][1];
      stroke(255, 0, 0);
      line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
    }
  }
}
