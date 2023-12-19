noseX=0;
noseY=0;

function setup()
{
   canvas=createCanvas(500, 400);
   canvas.position(480, 200);
   video = createCapture(VIDEO);
   video.size(300, 300);
   video.hide();
   poseNet=ml5.poseNet(video, modelLoaded);
   poseNet.on("pose", gotPoses);
    }
    
    function modelLoaded() {
      console.log('PoseNet está inicializado');
    }

    function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX=results[0].pose.nose.x-50;
    noseY=results[0].pose.nose.y-150;
  }
}

function preload() 
{
  //filtro=loadImage("https://i.postimg.cc/K8zwpW15/orejitas.png");
  filtro=loadImage("https://i.postimg.cc/NGysTdMz/casco-kuromi.png");
}

function draw() 
{
   image(video, 0, 0, 500, 400);
   image(filtro, noseX, noseY, 300, 300);
}

function take_snapshot(){    
  save('myFilterImage.png');
}
