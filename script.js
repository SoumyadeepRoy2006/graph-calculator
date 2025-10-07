const xdiv_input = document.querySelector('input[name="x-div"]');
const ydiv_input = document.querySelector('input[name="y-div"]');
const xmax_input = document.querySelector('input[name="x-max"]');
const ymax_input = document.querySelector('input[name="y-max"]');
const xmin_input = document.querySelector('input[name="x-min"]');
const ymin_input = document.querySelector('input[name="y-min"]');
const xvalue_input = document.querySelector('input[name="x-value"]');
const yvalue_input = document.querySelector('input[name="y-value"]');
const x_coordinate = document.getElementById('coordinate-X');
const y_coordinate = document.getElementById('coordinate-Y');
const settings_btn = document.getElementById('settings_button');
const close_btn = document.getElementById('close_button');
const settings = document.getElementById('settings');
const main = document.getElementById('main');

var settings_hidden = false;

function calculate() {
	const xlength = xdiv_input.value;
	const ylength = ydiv_input.value;

	const xmax = xmax_input.value;
	const ymax = ymax_input.value;

   const xmin = xmin_input.value;
	const ymin = ymin_input.value;

   const x = xvalue_input.value;
   const y = yvalue_input.value;
	
   if (xlength && xmax && xmin && x) {
      const xratio = xlength/(xmax-xmin);
      x_coordinate.textContent = (x-xmin) * xratio;      
   }
   else
      x_coordinate.textContent = '';

   if (ylength && ymax && ymin && y) {
      const yratio = xlength/(ymax-ymin);
      y_coordinate.textContent = (y-ymin) * yratio;
   }
   else
      y_coordinate.textContent = '';
}

function toggle_hide(){
   if(settings_hidden) {
      settings.style.display = 'block';
      main.style.display = 'none';
      settings_hidden = false;
   } else {
      settings.style.display = 'none';
      main.style.display = 'flex';
      settings_hidden = true;
   }
}

document.querySelectorAll('#main input').forEach(input => {
   input.addEventListener("input", calculate);
});

document.querySelectorAll('#close_button, #settings_button').forEach(button => {
   button.addEventListener('click', toggle_hide);
});

window.addEventListener('orientationchange', () => {
   if (window.matchMedia("(orientation: portrait)").matches) {
      settings.style.display = 'block';
      main.style.display = 'flex';
   }
   if (window.matchMedia("(orientation: landscape)").matches) {
      if (settings_hidden) {
         settings.style.display = 'none';
         main.style.display = 'flex';
      } else {
         settings.style.display = 'block';
         main.style.display = 'none';
      }
   }
})