document.addEventListener('DOMContentLoaded', () => {
    const confirmBtn = document.querySelector('.confirm-btn');
    const body = document.body;

    confirmBtn.addEventListener('click', () => {
        // 添加切换类触发动画
        body.classList.add('show-content');
        
    let video = document.getElementById("hiddenVideo");
    video.muted = false; // 解除静音
    video.play(); // 确保播放
        // 移除按钮点击事件
        confirmBtn.style.pointerEvents = 'none';
        
        // 可选：添加音效（需要准备音频文件）
        // const audio = new Audio('audio/click-sound.mp3');
        // audio.play()；
});
})

