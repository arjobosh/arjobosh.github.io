// upon open/refresh
var squares = 16;
var btn_clicked = 0;
var color;
const selection = document.querySelector('#color-select');
const set_squares_btn = document.querySelector('#set-squares');
const reset_btn = document.querySelector('#reset');

set_pen_color();  // initial pen color
setup_grid(squares);

// grid setup
function setup_grid(num_squares) {
  const grid = document.querySelector('#grid');

  var total_squares = num_squares * num_squares;
  var grid_width = screen.width * 0.3;
  var cell_size = (grid_width / num_squares).toString();
  var temp = '';

  // delete children if button was used to set new cell size
  if(btn_clicked){
    while(grid.firstChild){
      grid.removeChild(grid.firstChild);
    }
  }

  // cell size string setup for grid
  for(i = 0; i < num_squares; i++){
    temp += cell_size + 'px ';
  }

  grid.style.display = 'grid';
  grid.style.width = grid_width.toString() + 'px';
  grid.style.margin = 'auto';
  grid.style.justifyContent = 'center';
  grid.style.gridTemplateColumns = temp;
  grid.style.gridTemplateRows = temp;

  // cell style
  var cell;
  for(i = 0; i < total_squares; i++){
    cell = document.createElement('div');
    cell.className = 'cell';
    cell.style.height = cell_size + 'px';
    cell.style.width = cell_size + 'px';
    cell.style.backgroundColor = 'white';
    cell.style.borderStyle = 'solid';
    cell.style.borderWidth = '1px';
    cell.style.borderColor = 'black';
    grid.appendChild(cell);
  }

  // set color selected from drop down
  var cells = document.querySelectorAll('.cell');
  for(i = 0; i < cells.length; i++){
    cells[i].addEventListener('mouseover', function() {
      this.style.backgroundColor = get_pen_color();
    });
  }
  return;
}

// reset button function
reset_btn.onclick = function() {
  var cells = document.querySelectorAll('.cell');
  clear_canvas(cells);
};

// set squares button
set_squares_btn.onclick = function () {
  var size = prompt('enter pixel size', '16');
  btn_clicked = 1;
  setup_grid(size);
};

// select drop down
selection.onchange = function () {
  set_pen_color();
};

function clear_canvas(cell_set) {
  for(i = 0; i < cell_set.length; i++){
    cell_set[i].style.backgroundColor = 'white';
  }
}

function get_pen_color() {
  return color;
}

function set_pen_color() {
  if(selection.value !== '')
    color = selection.value;
}
