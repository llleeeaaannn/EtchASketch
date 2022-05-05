// Defining variables
let divSide = 20;
let tileColor = ''


// Function to create div, add classes and add div to container div
function makeRow() {
  let tileContainer = document.getElementById('tile-container');
  for (i = 0; i < divSide; i++) {
    let addRow = document.createElement('div');
    addRow.setAttribute('id', 'row' + i);
    addRow.classList.add('row');
    tileContainer.appendChild(addRow);
  }
}

makeRow();

function makeTile() {
  for (i = 0; i < divSide; i++) {
    let row = 'row' + i;
    let rowContainer = document.getElementById(row);
    for (x = 0; x < divSide; x++) {
      let addTile = document.createElement('div');
      addTile.setAttribute('id', 'tile' + x);
      addTile.classList.add('tile');
      addTile.addEventListener('mouseover', () => {
        if (tileColor === 'classic-color' || tileColor === '') {
          addTile.style.backgroundColor = '#292929';
        } else if (tileColor === 'colourful-color') {
          let colorfulColors = ['#0062ff', '#ff00f2', '#ff0000', '#00ffee', '#00ff1a', '#eaff00', '#ff6200'];
          let randomColor = Math.floor(Math.random() * colorfulColors.length);
          addTile.style.backgroundColor = colorfulColors[randomColor]
        } else if (tileColor === 'bohs-color') {
          let bohsColors = ['#ff0000', '#000000'];
          let randomColor = Math.floor(Math.random() * bohsColors.length);
          addTile.style.backgroundColor = bohsColors[randomColor]
        }
      })
      rowContainer.appendChild(addTile);
    }
  }
}

makeTile();

function clearRows() {
  for (i = 0; i < divSide; i++) {
    let row = document.getElementById('row' + i);
    row.remove();
  }
}

function clearColor() {
  let tiles = document.querySelectorAll('.tile');
  tiles.forEach(tile => {
    tile.style.backgroundColor = '';
  })
}

function changeColor() {
  let color = event.target.id;
  color = color.slice(3);
  color = color + '-color';
  tileColor = color;
}





function changeSize() {
  let size = event.target.id;
  if (size === 'btnsmall') {
    clearRows();
    divSide = 20;
    makeRow();
    makeTile();
  } else if (size === 'btnmedium') {
    clearRows();
    divSide = 40;
    makeRow();
    makeTile();
  } else if (size === 'btnlarge') {
    clearRows();
    divSide = 80;
    makeRow();
    makeTile();
  }
}


let smallButton = document.getElementById('btnsmall');
let mediumButton = document.getElementById('btnmedium');
let largeButton = document.getElementById('btnlarge');

let classicButton = document.getElementById('btnclassic');
let colourfulButton = document.getElementById('btncolourful');
let bohsButton = document.getElementById('btnbohs');

let clearButton = document.getElementById('btnclear');

function buttonEventListeners() {
  smallButton.addEventListener('click', () => {
    changeSize();
    smallButton.classList.add('clicked');
    mediumButton.classList.remove('clicked');
    largeButton.classList.remove('clicked');
  })

  smallButton.addEventListener('mouseover', () => {
    smallButton.classList.add('hover');
  })

  smallButton.addEventListener('mouseout', () => {
    smallButton.classList.remove('hover');
  })

  mediumButton.addEventListener('click', () => {
    changeSize();
    smallButton.classList.remove('clicked');
    mediumButton.classList.add('clicked');
    largeButton.classList.remove('clicked');
  })

  mediumButton.addEventListener('mouseover', () => {
    mediumButton.classList.add('hover');
  })

  mediumButton.addEventListener('mouseout', () => {
    mediumButton.classList.remove('hover');
  })

  largeButton.addEventListener('click', () => {
    changeSize();
    smallButton.classList.remove('clicked');
    mediumButton.classList.remove('clicked');
    largeButton.classList.add('clicked');
  })

  largeButton.addEventListener('mouseover', () => {
    largeButton.classList.add('hover');
  })

  largeButton.addEventListener('mouseout', () => {
    largeButton.classList.remove('hover');
  })


  classicButton.addEventListener('click', () => {
    changeColor();
    classicButton.classList.add('clicked');
    colourfulButton.classList.remove('clicked');
    bohsButton.classList.remove('clicked');
  })

  classicButton.addEventListener('mouseover', () => {
    classicButton.classList.add('hover');
  })

  classicButton.addEventListener('mouseout', () => {
    classicButton.classList.remove('hover');
  })

  colourfulButton.addEventListener('click', () => {
    changeColor();
    classicButton.classList.remove('clicked');
    colourfulButton.classList.add('clicked');
    bohsButton.classList.remove('clicked');
  })

  colourfulButton.addEventListener('mouseover', () => {
    colourfulButton.classList.add('hover');
  })

  colourfulButton.addEventListener('mouseout', () => {
    colourfulButton.classList.remove('hover');
  })

  bohsButton.addEventListener('click', () => {
    changeColor();
    classicButton.classList.remove('clicked');
    colourfulButton.classList.remove('clicked');
    bohsButton.classList.add('clicked');
  })

  bohsButton.addEventListener('mouseover', () => {
    bohsButton.classList.add('hover');
  })

  bohsButton.addEventListener('mouseout', () => {
    bohsButton.classList.remove('hover');
  })

  clearButton.addEventListener('click', () => {
    clearColor();
  })

  clearButton.addEventListener('mouseover', () => {
    clearButton.classList.add('hover');
  })

  clearButton.addEventListener('mouseout', () => {
    clearButton.classList.remove('hover');
  })
}

buttonEventListeners();
