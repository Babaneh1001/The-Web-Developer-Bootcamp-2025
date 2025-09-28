const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const spans = document.querySelectorAll('span');

// make a rainbow text with the spans

// use a for loop 

for (let span = 0; span < spans.length; span++) {
  spans[span].style.color = colors[span];
}

// classList.add
// classList.remove
// classList.toggle
// classList.contains

const uls = document.querySelectorAll('li');

for (let i = 0; i < uls.length; i++) {
  if (uls[i].classList.contains('highlight')) {
    uls[i].classList.remove('highlight')
  } else {
    uls[i].classList.add('highlight')
  }
}

