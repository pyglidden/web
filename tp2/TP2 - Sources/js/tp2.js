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
        //filter: blur(1px) grayscale(75%);
        document.getElementById('selectorCanvas').style.filter = 'none';
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
        document.getElementById('selectorCanvas').style.filter = 'none';
    });

    document.getElementById('btnD1').addEventListener("click", function(){
        document.getElementById('detailsText').textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut lacinia ex. Nam semper nisl nec turpis feugiat varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc a molestie turpis. Proin nec hendrerit risus. Etiam sagittis eleifend pretium. Proin lacinia ipsum eget lacus volutpat malesuada. Integer eu aliquet mauris, eu commodo nibh. Pellentesque non vulputate dui. Aenean sed mollis neque, sed eleifend mauris. Nullam nunc lectus, euismod eget blandit sit amet, maximus id ex.';
        document.getElementById('detailPic').src = 'img/carousel/airbus-civil-small.jpg';
    });

    document.getElementById('btnD2').addEventListener("click", function(){
        document.getElementById('detailsText').textContent = 'Nam at quam a libero posuere mollis nec non leo. Suspendisse eu ipsum sagittis, fringilla sem sed, accumsan sem. Vivamus varius dolor at faucibus mollis. Nulla facilisi. Aliquam vitae eleifend enim. Aliquam eleifend at dui suscipit elementum. Donec facilisis ipsum justo, vulputate semper nisi molestie hendrerit. Nullam consectetur laoreet eleifend. Duis vitae consequat neque. Sed viverra porttitor enim, ac mattis mauris fringilla quis. Aliquam viverra augue tortor, porta tincidunt orci luctus vel. Proin id augue suscipit, pharetra velit sit amet, luctus sem. In lectus orci, laoreet sit amet eros nec, cursus varius libero Donec commodo, enim sit amet semper semper, mauris elit faucibus quam, ac faucibus risus erat quis massa. Nullam nec euismod justo, sit amet pellentesque arcu. Aliquam lectus neque, vestibulum sed pretium accumsan, condimentum fermentum est. Etiam eget erat sagittis ex dictum cursus. Proin in ultrices orci. Donec tellus lectus, aliquam nec ullamcorper in, euismod auctor libero. Sed at varius metus. Curabitur convallis, dui ac interdum cursus, lorem nisi sagittis libero, eu tempus libero risus nec justo.';
        document.getElementById('detailPic').src = 'img/carousel/airbus-civil-Heavy.jpg';
    });

    document.getElementById('btnD3').addEventListener("click", function(){
        document.getElementById('detailsText').textContent = 'Sed ullamcorper laoreet sodales. Aliquam commodo, risus ut efficitur viverra, quam metus bibendum lectus, et ornare tortor nibh quis augue. Vivamus scelerisque quam vitae neque blandit, non rhoncus justo elementum. In orci odio, fermentum ac placerat vel, vulputate at mauris. Donec in hendrerit augue. Sed iaculis porta malesuada. Phasellus non justo ante. Curabitur quis blandit mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer porttitor vel lacus id eleifend. Duis sit amet scelerisque turpis. Morbi convallis lacus vel scelerisque hendrerit.';
        document.getElementById('detailPic').src = 'img/carousel/airbus-military-small.jpg';
    });

    document.getElementById('btnD4').addEventListener("click", function(){
        document.getElementById('detailsText').textContent = 'Sed condimentum gravida nisi vel varius. Etiam eu auctor ante. Donec egestas, sapien et eleifend sagittis, libero lacus vestibulum lacus, a viverra neque nunc at sem. Nullam vel nunc convallis, pharetra tellus at, eleifend purus. Phasellus a convallis diam. Praesent maximus mattis mollis. Ut consectetur rhoncus justo vitae lacinia. Sed blandit odio interdum ultricies interdum. Aliquam erat volutpat. Praesent rhoncus euismod accumsan. Mauris erat lorem, pharetra et ipsum in, volutpat pretium massa.';
        document.getElementById('detailPic').src = 'img/carousel/airbus-military-Heavy.jpg';
    });

}