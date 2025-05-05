const starsEl = document.getElementById('stars');

// Array zur Speicherung der Stern-Objekte
const stars = [];

for (let i = 0; i < 30; i++) {
  // Definiert jedes Herz als JavaScript-Objekt
  let starObject = {
    radius: 0.05,
    color: 'orange',
    position: {
      x: (Math.random() - 0.5) * 3,
      y: Math.random() * 2,
      z: (Math.random() - 0.5) * 3
    }
  };

  // Speichert das Objekt im Array
  stars.push(starObject);

  // Erstellt das a-sphere-Element
  const star = document.createElement('a-sphere');
  star.setAttribute('radius', starObject.radius);
  star.setAttribute('color', starObject.color);
  star.setAttribute(
    'position',
    `${starObject.position.x} ${starObject.position.y} ${starObject.position.z}`
  );

  // Fügt das Element zur Szene hinzu
  starsEl.appendChild(star);
}
