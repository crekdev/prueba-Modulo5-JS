const iife = (() => {
  const animalsArray = []

  async function obtenerDataJson(nombre) {
    try {
        const response = await fetch("animales.json")
        const data = await response.json()
        const animalData = data.animales.find(animal => animal.name === nombre);
        return animalData
  
    } catch (error) {
        console.error('Error al obtener la imagen:', error)
    }
  }

  function addAnimal(animal) {
    animalsArray.push(animal)
  }

  function cardsAnimal(animales, id) {
    let cartas = animales.map(animal => {
      return `
      <div class="card my-2">
        <img src="./assets/imgs/${animal.Img}" alt="${animal.Nombre}" class="card-img-top">
        <div class="card-body text-center">
          <h5 class="card-title">${animal.Nombre}</h5>
          <audio controls style="max-width: 100%">
            <source src="./assets/sounds/${animal.Sonido}" type="audio/mpeg">
            Reproducir sonido
          </audio>
        </div>
      </div>
      `
    }).join('')

    document.getElementById(id).innerHTML = cartas
  }

  // Función para devolver el formulario en un estado inicial
  let limpiar = () => {
    if (document.getElementById('preview').querySelector('img')){
      document.getElementById('preview').innerHTML = ''
    }
    document.getElementById('animal').value = document.getElementById('animal').defaultValue
    document.getElementById('edad').value = document.getElementById('edad').defaultValue
    document.getElementById('comentarios').value = document.getElementById('comentarios').defaultValue
  }

  return {
    obtenerDataJson,
    cardsAnimal,
    addAnimal,
    animalsArray,
    limpiar
  }
})()

export { iife }