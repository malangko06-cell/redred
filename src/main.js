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
    <button class="play-sound" type="button" hidden>Play sound</button>
  </main>
`

const audio = new Audio(`${import.meta.env.BASE_URL}${choice.sound}`)
audio.preload = 'auto'

audio.play().catch(() => {
  const playButton = document.querySelector('.play-sound')

  if (!playButton) {
    return
  }

  playButton.hidden = false
  playButton.addEventListener(
    'click',
    () => {
      audio.play()
      playButton.hidden = true
    },
    { once: true },
  )
})
