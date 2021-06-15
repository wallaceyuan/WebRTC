// "use strict";
// const mediaStreamContrains = { video: true };
// const localVideo = document.querySelector("video");
// function gotLocalMediaStream(mediaStream) {
//   localVideo.srcObject = mediaStream;
// }
// function handleLocalMediaStreamError(error) {
//   console.log("navigator.getUserMedia error: ", error);
// }
// navigator.mediaDevices
//   .getUserMedia(mediaStreamContrains)
//   .then(gotLocalMediaStream)
//   .catch(handleLocalMediaStreamError);

const mediaStreamContrains = { video: true };

if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
  console.log("enumerateDevices() not supported.");
  // return;
}

// List cameras and microphones.

// navigator.mediaDevices.getUserMedia(mediaStreamContrains)
navigator.mediaDevices.enumerateDevices()
  .then(function (devices) {
    devices.forEach(function (device) {
      console.log(device);
      console.log(
        device.kind + ": " + device.label + " id = " + device.deviceId
      );
    });
  })
  .catch(function (err) {
    console.log(err.name + ": " + err.message);
  });
