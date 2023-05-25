// !globals
let currentMusic = 0
let playState = false
let repeatState = 0
let shuffleState = false
const shuffleHistory = []

//! RUN ON START
updateMusic(currentMusic)
volumeBar.firstElementChild.style.width = '100%'
