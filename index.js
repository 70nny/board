const board = document.querySelector('#board'),
      colors = ['#d1515d', '#3c264f', '#1f7fd2', '#79ac19', '#0789ff', '#ff622b', '#b1660c', '#9d2653'],
      squareNumber = 600;

for(let i = 0; i < squareNumber; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    
    square.addEventListener('mouseover',() => setcolor(square))
    square.addEventListener('mouseleave',() => removeColor(square))

    board.append(square)
}

function setcolor (element) {
    let color = colors[getRandomColor()]
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor (element) {
    element.style.backgroundColor = '#222'
    element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor () {
    let index = Math.floor(Math.random() * colors.length)
    return index;

}