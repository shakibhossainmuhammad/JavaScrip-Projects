function lightBtn(match) {
  let title = document.getElementById('title');
  let pic;
  for (var i = 1; i <= 5; i++) {
    if (match == 0) {
      pic = 'pic_bulboff.gif';
      title.innerHTML = 'Light Off';
    } else {
      pic = 'pic_bulbon.gif';
      title.innerHTML = 'Light On';
    }

    let light = document.getElementById('light' + i);
    light.src = pic;
  }
}
