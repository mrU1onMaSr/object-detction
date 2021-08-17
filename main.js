img = "";
obj=[];
let status = true;
console.log(typeof status);

function preload() {
    img = loadImage("b.jpg");
  }

  function setup() {
    can_vas = createCanvas(600, 500);
    can_vas.position(640, 400);
    OBJD = ml5.objectDetector("cocossd", molded);
    document.getElementById("stat").innerHTML = "Status= Detecting objects";
  }

  function molded() {
    console.log("loaded");
    status = true;
  }

  function gotResults(error, results) {
    if (error) {
      console.log(error);
    }
  
    console.log(results);
    obj = results;
  }

  function draw() {
    image(img, 0, 0, 600, 500);
    console.log("stat =  " + status);
    if (status != "") {
      //console.log("duck");
      OBJD.detect(img, gotResults);
      for (i = 0; i < obj.length; i++) {
        W = obj[i].width;
        H = obj[i].height;
        console.log("yee")
        console.log(obj[i].y +" , "+ obj[i].x+"yee");
        fill("red");
        text(
          obj[i].label + "  " + floor(obj[i].confidence * 100) + "%",
          obj[i].x,
          obj[i].y
        );
        console.log("yu")
        console.log(
          //text(
            obj[i].label + "  " + floor(obj[i].confidence * 100) + "%"
           //, obj[i].x,
            //obj[i].y
         // )
        );
        noFill();
        rect(obj[i].x - 20, obj[i].y - 20, W, H);
  
        document.getElementById("stat").innerHTML = "Status: objects detcted";
        document.getElementById("NO_obj").innerHTML =
          "No. of objects =   " + obj.length;
      }
    }
  }