const board = document.getElementById('board')
// const colors = ['red', 'blue', 'green', 'yellow', 'purple']
const SQUARES_NUMBER = 1000

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    board.append(square)

    square.addEventListener('mouseover', setColor)

    square.addEventListener('mouseleave', removeColor)
    
}

function setColor(event) {
    const el = event.target
    const color = getRandomColor()
    el.style.backgroundColor = color
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
    const el = event.target
    el.style.backgroundColor = '#1d1d1d'
    el.style.boxShadow = `0 0 2px #000`
}

// function randColor() {
//    const idx = Math.floor(Math.random() * colors.length)
//    return colors[idx]
// }

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
      for (let i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      console.log(color)
    return color;
}