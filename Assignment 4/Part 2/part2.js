// === Part 1: DOM Elements ===
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// === Part 2: Image Data ===
const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const imageAlts = {
  'pic1.jpg': 'Closeup of a blue human eye',
  'pic2.jpg': 'Rock that looks like a wave',
  'pic3.jpg': 'Purple and white pansies',
  'pic4.jpg': 'Section of wall from a pharaoh\'s tomb',
  'pic5.jpg': 'Large moth on a leaf'
};

// === Part 3: Create Thumbnails ===
for (const filename of imageFilenames) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', filename); // Because images are in the same folder
    newImage.setAttribute('alt', imageAlts[filename]);
    thumbBar.appendChild(newImage);
  
   // === Part 4: Thumbnail Click Event ===
  newImage.addEventListener('click', () => {
    displayedImage.src = newImage.src;
    displayedImage.alt = newImage.alt;
  });
}

// === Part 5: Darken/Lighten Toggle Button ===
btn.addEventListener('click', () => {
    const currentClass = btn.getAttribute('class');
  
    if (currentClass === 'dark') {
      btn.setAttribute('class', 'light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    } else {
      btn.setAttribute('class', 'dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
    }
  });