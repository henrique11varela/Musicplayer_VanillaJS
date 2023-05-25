function nextChangeMusic() {
    if (shuffleHistory.length > musicList.length * 10) {
        shuffleHistory.shift()
    }
    shuffleHistory.push(currentMusic)
    if (shuffleState) {
        let tempMusic
        do {
            tempMusic = Math.floor(Math.random() * musicList.length)
        } while (tempMusic == currentMusic)
        currentMusic = tempMusic
    } else {
        if (currentMusic == musicList.length - 1) {
            currentMusic = 0
        } else {
            currentMusic++
        }
    }
    updateMusic(currentMusic)
}

function previousChangeMusic() {
    if (shuffleHistory.length > 0) {
        currentMusic = shuffleHistory.pop()
    } else {
        if (currentMusic == 0) {
            currentMusic = musicList.length - 1
        } else {
            currentMusic--
        }
    }
    updateMusic(currentMusic)
}

function updateMusic(index) {
    progressBar.firstElementChild.style.width = '0%'
    audioEl.src = musicList[index].audio
    updateCurrentMusicVisuals()
    if (playState) {
        mImage.classList.remove('paused')
        audioEl.play()
    }
}

function timeConvert(time) {
    const min = Math.floor(time / 60)
    const seg = Math.floor(time % 60)
    
    return `${min < 10 ? ("0" + min) : min}:${seg < 10 ? ("0" + seg) : seg}`
}