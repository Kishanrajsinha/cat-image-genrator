function genratCat(){
    var image = document.createElement('img');
    var div = document.getElementById("cont3");
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=smaller";
    div.appendChild(image);
}