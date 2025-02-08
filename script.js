const audioContext = new (window.AudioContext || window.webkitAudioContext)();
let audioBuffer;
fetch("song.mp3")
    .then(response => response.arrayBuffer())
    .then(data => audioContext.decodeAudioData(data))
    .then(buffer => {
        audioBuffer = buffer;
    });


document.addEventListener('DOMContentLoaded', () => {
    const confirmBtn = document.querySelector('.confirm-btn');
    const body = document.body;
    document.addEventListener("click", () => {
    if (audioContext.state === "suspended") {
        audioContext.resume();
    }
    if (audioBuffer) {
        const source = audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContext.destination);
        source.start();
    }
});


    confirmBtn.addEventListener('click', () => {
        // 添加切换类触发动画
        body.classList.add('show-content');
        
        // 移除按钮点击事件
        confirmBtn.style.pointerEvents = 'none';
        
        // 可选：添加音效（需要准备音频文件）
        // const audio = new Audio('audio/click-sound.mp3');
        // audio.play();
    });
})；
