const player = new Plyr('#player');
var listsubbtn = document.querySelectorAll("#sub > option");
for (i = 0; i < listsubbtn.length; i++) {
    listsubbtn.item(i).addEventListener('click', function () {
        player.currentTime = parseInt(this.getAttribute('data-time'));
        console.log(this.getAttribute('data-time'));
        subdiv.scrollTop = listsubbtn.item(i).scrollHeight*(i-2);
    })
};

var video = document.getElementById('player');
var subdiv = document.getElementById('sub');
var isScrolling = false;

video.ontimeupdate = function() {
    for(j = 0; j < listsubbtn.length; j++) {
        if(video.currentTime >= parseInt(listsubbtn.item(j).getAttribute('data-time')) && video.currentTime < parseInt(listsubbtn.item(j+1).getAttribute('data-time'))){
            listsubbtn.item(j).style.backgroundColor = "#95a5a6";
            subdiv.scrollTop = listsubbtn.item(j).scrollHeight*(j-2);
            for(k=0; k < j; k++){
                listsubbtn.item(k).style.backgroundColor = "transparent";
            }
            for(k = j +1 ; k < listsubbtn.length ; k++){
                listsubbtn.item(k).style.backgroundColor = "transparent";
            }
        }
    }
};

subdiv.onscroll = function (e) {
    isScrolling = true;
    console.log(1);
}