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

document.body.className = choice.theme
document.body.innerHTML = `
  <main class="stage" aria-live="polite">
    <p>${choice.message}</p>
  </main>
`
