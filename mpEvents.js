//!Audio element
audioEl.onended = function () {
    if (repeatState === 0) {
        mImage.classList.add('paused')
    }
    else if (repeatState === 1) {
        nextChangeMusic()
    } else {
        audioEl.currentTime = 0
        audioEl.play()
    }
}

audioEl.onloadedmetadata = function() {
    durTimeEl.textContent = timeConvert(audioEl.duration)
}

audioEl.ontimeupdate = function () {
    updateProgressBarVisuals(progressBar.firstElementChild, (audioEl.currentTime / audioEl.duration))
    currTimeEl.textContent = timeConvert(audioEl.currentTime)
}

audioEl.onvolumechange = function () {
    updateProgressBarVisuals(volumeBar.firstElementChild, audioEl.volume**(1/2.2)) //the **(1/2.2) here is to solve the loudness perception problem
}

//!Shuffle
shuffleBtn.onclick = function() {
    shuffleState = !shuffleState
    if (shuffleState) {
        this.classList.add('active')
    } else {
        this.classList.remove('active')
    }
}

//!Repeats
repeatBtn.onclick = function () {
    if (repeatState === 0) {
        repeatState = 1
        this.classList.add('active')
    } else {
        repeatState = 2
        toggleHidden([this, repeat1Btn])
        this.classList.remove('active')
    }
}

repeat1Btn.onclick = function () {
    repeatState = 0
    toggleHidden([this, repeatBtn])
}

//!Progress bar
progressBar.onmousedown = function (event) {
    audioEl.currentTime = audioEl.duration * (event.offsetX / this.offsetWidth)
    this.onmousemove = function (event) {
        audioEl.currentTime = audioEl.duration * (event.offsetX / this.offsetWidth)
    }
}

//!Volume bar
volumeBar.onmousedown = function (event) {
    audioEl.volume = event.offsetX / this.offsetWidth
    this.onmousemove = function (event) {
        audioEl.volume = (event.offsetX / this.offsetWidth)**2.2 //the **2.2 here is to solve the loudness perception problem
    }
}

document.body.onmouseup = function () {
    volumeBar.onmousemove = ""
    progressBar.onmousemove = ""
}

//!Play/Pause button
playBtn.onclick = function () {
    playState = true
    audioEl.play()
    toggleHidden([pauseBtn, playBtn])
    mImage.classList.remove('paused')
}

pauseBtn.onclick = function () {
    playState = false
    audioEl.pause()
    toggleHidden([pauseBtn, playBtn])
    mImage.classList.add('paused')
}

//!Mute/Unmute button
muteBtn.onclick = function () {
    audioEl.muted = true
    toggleHidden([muteBtn, unmuteBtn])
}

unmuteBtn.onclick = function () {
    audioEl.muted = false
    toggleHidden([muteBtn, unmuteBtn])
}

//!Previous/Next button
nextBtn.onclick = nextChangeMusic

prevBtn.onclick = previousChangeMusic