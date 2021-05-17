var loadFile = function(event){
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
    document.getElementById("label").style.visibility='hidden';
    document.getElementById("file").style.visibility='hidden';
}

function addnew(){
    var chq = document.getElementById('newadd').value;
    if(chq == 2){
        document.getElementById('job3').style.display='block';
        document.getElementById('select').style.visibility='hidden';
    }
}   