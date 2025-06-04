const cats = [
    { name: 'Tiger', img: 'tiger.png', sound: 'tiger.mp3' },
    { name: 'Schwarz', img: 'black.png', sound: 'black.mp3' },
    { name: 'Weiß', img: 'white.png', sound: 'white.mp3' },
    { name: 'Grau', img: 'gray.png', sound: 'gray.mp3' },
    { name: 'Orange', img: 'orange.png', sound: 'orange.mp3' },
  ];
  
  function sendCat() {
    const cat = cats[Math.floor(Math.random() * cats.length)];
    socket.emit('spawnCat', cat);
  }
  