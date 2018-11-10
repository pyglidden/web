window.onload=function(){

    document.getElementById('about').style.backgroundColor = 'lightskyblue';
    document.getElementById('details').style.backgroundColor = 'lightskyblue';

    var helicopterImg = new Image();
    helicopterImg.src = "img/helicopter-sprite.png";

    var canvas = document.getElementById("selectorCanvas");
    canvas.width = 1080;
    canvas.height = 1168;
    canvas.getContext("2d").drawImage(helicopterImg,0,0,1080,1168,0,0,1080,1168);

    /*
    document.getElementById('btnQ1A1').addEventListener("click", function(){
        canvas.getContext("2d").drawImage(helicopterImg,0,0,540,292,0,0,540,292);
    });
*/

    var currentWidth = 1080;
    var currentHeigth = 1168;
    var sourceX = 0;
    var sourceY = 0;
    var lowBudget = true;

    document.getElementById('btnQ1A1').addEventListener("click", function(){
        //background-color: green;
        canvas.width = 540;
        sourceX = 0;
        canvas.getContext("2d").drawImage(helicopterImg,sourceX,sourceY,540,1168,0,0,540,1168);
        document.getElementById('Q2').style.display = 'block';
        document.getElementById('btnQ1A1').style.backgroundColor = 'green';
        document.getElementById('btnQ1A2').style.backgroundColor = '#fed136';
    });

    document.getElementById('btnQ1A2').addEventListener("click", function(){
        canvas.width = 540;
        sourceX = 540;
        canvas.getContext("2d").drawImage(helicopterImg,sourceX,sourceY,540,1168,0,0,540,1168);
        document.getElementById('Q2').style.display = 'block';
        document.getElementById('btnQ1A1').style.backgroundColor = '#fed136';
        document.getElementById('btnQ1A2').style.backgroundColor = 'green';
    });

    document.getElementById('btnQ2A1').addEventListener("click", function(){
        lowBudget = true;
        if(canvas.height>584){
            canvas.height = 584;
        }
        sourceY = 0;
        canvas.getContext("2d").drawImage(helicopterImg,sourceX,sourceY,540,1168,0,0,540,1168);
        document.getElementById('Q3').style.display = 'block';
        document.getElementById('btnQ2A1').style.backgroundColor = 'green';
        document.getElementById('btnQ2A2').style.backgroundColor = '#fed136';
    });

    document.getElementById('btnQ2A2').addEventListener("click", function(){
        lowBudget = false;
        if(canvas.height>584){
            canvas.height = 584;
        }
        sourceY = 584;
        canvas.getContext("2d").drawImage(helicopterImg,sourceX,sourceY,540,1168,0,0,540,1168);
        document.getElementById('Q3').style.display = 'block';
        document.getElementById('btnQ2A1').style.backgroundColor = '#fed136';
        document.getElementById('btnQ2A2').style.backgroundColor = 'green';
    });

    document.getElementById('btnQ3A1').addEventListener("click", function(){
        canvas.height = 292;
        sourceY = 584;
        if(lowBudget){
            sourceY = 0;
        }
        canvas.getContext("2d").drawImage(helicopterImg,sourceX,sourceY,540,1168,0,0,540,1168);
        document.getElementById('btnQ3A1').style.backgroundColor = 'green';
        document.getElementById('btnQ3A2').style.backgroundColor = '#fed136';
    });

    document.getElementById('btnQ3A2').addEventListener("click", function(){
        canvas.height = 292;
        sourceY = 876;
        if(lowBudget){
            sourceY = 292;
        }
        canvas.getContext("2d").drawImage(helicopterImg,sourceX,sourceY,540,1168,0,0,540,1168);
        document.getElementById('btnQ3A1').style.backgroundColor = '#fed136';
        document.getElementById('btnQ3A2').style.backgroundColor = 'green';
    });

}