window.addEventListener('DOMContentLoaded', () => {
  
  //Referenzen auf die Getränkekarte, den Button und den Sound
  const karte = document.getElementById('karte');
  const menuButton = document.getElementById('menuButton');
  const sound = document.getElementById('jazzSound');

  let karteOffen = false;

  // Menü-Button öffnet/schließt Karte + steuert Musik
  menuButton.addEventListener('click', () => {
    karteOffen = !karteOffen;
    karte.setAttribute('visible', karteOffen);

    const neuerText = karteOffen ? 'close cocktail card' : 'open cocktail card';
    menuButton.setAttribute('text', 'value: ' + neuerText + '; color: white; align: center');

  // Musik startet/stoppt, wenn die Karte geöffnet/geschlossen wird
    if (karteOffen) {
      sound.currentTime = 0;
      sound.play();
    } else {
      sound.pause();
      sound.currentTime = 0;
    }
  });

  // Drink-Tafeln
  const tafeln = [
    { buttonId: 'btn1', tafelnId: 'tafel1', offen: false },
    { buttonId: 'btn2', tafelnId: 'tafel2', offen: false },
    { buttonId: 'btn3', tafelnId: 'tafel3', offen: false }
  ];

  // Für jedes Button-Tafel-Paar: Wenn der Button geklickt wird → Sichtbarkeit der Tafel wechseln (an/aus)
  tafeln.forEach(pair => {
    const btn = document.getElementById(pair.buttonId);
    const tfl = document.getElementById(pair.tafelnId);

    btn.addEventListener('click', () => {
      pair.offen = !pair.offen;
      tfl.setAttribute('visible', pair.offen);
    });
  });
});


  