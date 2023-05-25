//audio player
const audio_player = document.querySelector('.audio-player')
// audio element
const audioEl = document.querySelector('audio')
// control elements
const playBtn = audio_player.querySelector('#btPlay')
const pauseBtn = audio_player.querySelector('#btPause')
const prevBtn = audio_player.querySelector('#btPrevious')
const nextBtn = audio_player.querySelector('#btNext')
const shuffleBtn = audio_player.querySelector('#btShuffle')
const repeatBtn = audio_player.querySelector('#btRepeat')
const repeat1Btn = audio_player.querySelector('#btRepeat1')
//volume
const volumeBar = audio_player.querySelector('#soundVolumeContainer')
const muteBtn = audio_player.querySelector('#btSoundOff')
const unmuteBtn = audio_player.querySelector('#btSoundOn')
// display elements
const mName = audio_player.querySelector('.audio-info>h1')
const mAuthor = audio_player.querySelector('.audio-info>p')
const mImage = audio_player.querySelector('#imgAudio')
const fav = document.querySelector('#fav')
//timers
const progressBar = audio_player.querySelector('#trackProgressContainer')
const timersEl = audio_player.querySelector('.timers')
const currTimeEl = timersEl.querySelector('#curr')
const durTimeEl = timersEl.querySelector('#dur')