let video = document.getElementById('video');
let webcam = navigator.mediaDevices.getUserMedia();
if (webcam) {
  navigator.mediaDevices
    .getUserMedia({
      video: true,
      audio: true,
    })
    .then(function (Live) {
      video.srcObject = Live;
    })
    .catch(function (error) {
      console.log('error please try agein');
    });
}

let canvas = document.getElementById('canvas');
let takePhoto = document.getElementById('takePhoto');
let context = canvas.getContext('2d');
takePhoto.addEventListener('click', function () {
  context.drawImage(video, 0, 0, 700, 700);
});
