function showMore () {
  var bars = document.getElementsByClassName("stacked-bar");
  for(var i=0; i<bars.length; i++) {
    bars[i].style.height="10%"
  };
  document.getElementById("chartContainer").style.top="15%";
  document.getElementById("greyWrapper").style.height="72%";
  document.getElementById("moreData").style.display="none";
  document.getElementById("weeklyViewingStats").style.display="block";
  document.getElementById("lessData").style.display="block";
}

function showLess () {
  var bars = document.getElementsByClassName("stacked-bar");
  for(var i=0; i<bars.length; i++) {
    bars[i].style.height="20%";
  }
  document.getElementById("chartContainer").style.top="20%";
  document.getElementById("greyWrapper").style.height="50%";
  document.getElementById("lessData").style.display="none";
  document.getElementById("weeklyViewingStats").style.display="none";
  document.getElementById("moreData").style.display="block";
}
