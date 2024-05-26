navigator.mediaDevices.getUserMedia({ video: true/*{ width: 1280, height: 720 }*/ })
    .then(stream => {
        const video = document.createElement('video');
        video.srcObject = stream;
        video.play();
        document.querySelector('.modal-body').appendChild(video);
    })
    .catch(error => {
        console.error('Erro ao acessar a webcam:', error);
    });
