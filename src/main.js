import './style.css'

const choices = [
  {
    message: "that's red",
    theme: 'red',
  },
  {
    message: "that's green",
    theme: 'green',
  },
]

const choice = choices[Math.floor(Math.random() * choices.length)]
const shouldPlayRedSound = choice.theme === 'red'

document.body.className = choice.theme
document.body.innerHTML = `
  <main class="stage" aria-live="polite">
    <p>${choice.message}</p>
    ${shouldPlayRedSound ? '<button class="play-sound" type="button" hidden>Play sound</button>' : ''}
  </main>
`

if (shouldPlayRedSound) {
  const audio = new Audio(`${import.meta.env.BASE_URL}red.m4a`)
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
}
