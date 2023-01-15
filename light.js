
const button = document.querySelector('button')
const img = document.querySelector('img')

button.addEventListener('click', async () => {
  const res = await fetch('https://dog.ceo/api/breeds/image/random')
  const data = await res.json()
  img.src = data.message
})
//hello