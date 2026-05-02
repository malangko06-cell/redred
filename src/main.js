import './style.css'

const choices = [
  {
    message: "that's red",
    theme: 'red',
    sound: 'red.m4a',
  },
  {
    message: "that's green",
    theme: 'green',
    sound: 'green.m4a',
  },
]

const choice = choices[Math.floor(Math.random() * choices.length)]

document.body.className = choice.theme
document.body.innerHTML = `
  <main class="stage" aria-live="polite">
    <p>${choice.message}</p>
    <button class="play-sound" type="button" hidden>Tap to play</button>
  </main>
`

const audio = new Audio(`${import.meta.env.BASE_URL}${choice.sound}`)
audio.autoplay = true
audio.preload = 'auto'
audio.playsInline = true

const unlockSound = () => {
  const playButton = document.querySelector('.play-sound')

  if (!playButton) {
    return
  }

  playButton.hidden = false

  const playFromGesture = () => {
    audio.play()
    playButton.hidden = true
    document.removeEventListener('pointerdown', playFromGesture)
  }

  playButton.addEventListener('click', playFromGesture, { once: true })
  document.addEventListener('pointerdown', playFromGesture, { once: true })
}

audio.play().catch(unlockSound)
