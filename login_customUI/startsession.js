let canvas;
let video;
let poseNet;
let poses = [];

var MnoseX = j;
var MnoseY = k;
var Mleyex = l;
var Mleyey = m;
var Mreyex = n;
var Mreyey = o;
var Mlshoulderx = p;
var Mlshouldery = q;
var Mrshoulderx = r;
var Mrshouldery = s;


console.log(j);
console.log(k);
console.log(l);
console.log(m);
console.log(n);
console.log(o);
console.log(p);
console.log(q);
console.log(r);
console.log(s);

// console.log(MnoseX);
// console.log(MnoseY);
// console.log(Mleyex);
// console.log(Mleyey);
// console.log(Mreyex);
// console.log(Mreyey);
// console.log(Mlshoulderx);
// console.log(Mlshouldery);
// console.log(Mrshoulderx);
// console.log(Mrshouldery);


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




function modal(nosex, nosey, leyex, leyey, reyex, reyey, lshoulderx, lshouldery, rshoulderx, rshouldery) {

    console.log(nosex);
    if(Boolean(nosex < MnoseX || nosey<MnoseY)) {
      console.log("Nose Chal Raha hai");
    } else {
      $('#nose').slideToggle();
      console.log( nosex + "Yaha Time Chalu karna hai!"+ MnoseX)
    }

    if(Boolean(leyex < Mleyex || leyey<Mleyey)){
      console.log("Left eye Chal Raha hai");

    } else {
      $('#eye').slideToggle();
      console.log(leyex + "Yaha Time Chalu karna hai!"+ Mleyex)
    }

    if(Boolean(reyex < Mreyex || reyey<Mreyey)){
      console.log("Right eye Chal Raha hai");
    } else {
      $('#eye').slideToggle();
      console.log(reyex + "Yaha Time Chalu karna hai!" + reyey)
    }

    if(Boolean(lshoulderx < Mlshoulderx || lshouldery<Mlshouldery)){
      console.log("Left shoulder Chal Raha hai");
    } else {
      $('#shodler').slideToggle();
      console.log(lshoulderx + "Yaha Time Chalu karna hai!" + lshouldery)
    }

    if(Boolean(rshoulderx < Mrshoulderx || rshouldery<Mlshouldery)){
      console.log(rshoulderx + "right shoul Chal Raha hai"+ rshouldery);
    }
    else {
      $('#sholder').slideToggle('show');
      console.log("Yaha Time Chalu karna hai!")
    }

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
