function toggleHidden(elements) {
    if (Array.isArray(elements)) {
        elements.forEach(function(el) {
            el.classList.toggle('hidden')
        })
    }
    else {
        elements.classList.toggle('hidden')
    }
}

function updateCurrentMusicVisuals() {
    mName.textContent = musicList[currentMusic].title
    mAuthor.textContent = musicList[currentMusic].artist
    mImage.style.backgroundImage = `url(${musicList[currentMusic].img})`
    document.title = `${musicList[currentMusic].title} by ${musicList[currentMusic].artist}`
    fav.href = musicList[currentMusic].img
}

function updateProgressBarVisuals(overlay, percentage) {
    overlay.style.width = `${percentage * 100}%`
}