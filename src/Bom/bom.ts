console.log('bom.ts');

// * über das window-Objekt können wir verschiedenste Informationen
// * zum Browser und der Umgebung bekommen
// * siehe https://developer.mozilla.org/en-US/docs/Web/API/Window?retiredLocale=de

// * window.screen = Eigenschaften des verwendeten Bildschirms
console.log('Aktuelle Bildschirmhöhe in Pixeln', window.screen.height);
console.log('Aktuelle Bildschirmbreite in Pixeln', window.screen.width);

// ? Um responsive Darstellung umzusetzen: Media Queries nutzen
if (window.screen.width < 768) {
  console.log('Du nutzt einen kleinen Bildschirm');
}
// * Verfügbare Bildschirmgröße
console.log('Verfügbare Bildschirmhöhe in Pixeln', window.screen.availHeight);
console.log('Verfügbare Bildschirmbreite in Pixeln', window.screen.availWidth);

// * Farbtiefe = 24bit oder 32bit
console.log('Farbtiefe', window.screen.colorDepth);

console.log('Pixeltiefe', window.screen.pixelDepth);

// ? unterschiedliches Bild anzeigen, je nachdem ob eine hochauflösender Bildschirm
let imageUrl = '';
if (window.screen.colorDepth <= 24) {
  imageUrl = 'https://example.com/low_quality_image.jpg';
} else {
  imageUrl = 'https://example.com/high_quality_image.jpg';
}

// * Browserfenster selbst
// ? verfügbare inner Höhe des aktuellen Browserfensters
console.log('Innere Höhe des Browserfensters', window.innerHeight);
console.log('Innere Breite des Browserfensters', window.innerWidth);

// * Eventlistener hinzufügen, wenn sich die Größe des Fensters ändert
// ? resize Event = Browserfenster wurde vergrößert oder verkleinert
window.addEventListener('resize', () => {
  console.log('Fenstergröße geändert');
  console.log(window.innerWidth);
  console.log(window.innerHeight);
});

// * window.location - Informationen zur aktuellen URL
console.log('Gesamte URL', window.location.href);
console.log('Protokoll', window.location.protocol);
console.log('Hostname', window.location.hostname);
console.log('Port', window.location.port);

// * window.history - Verlauf der Aufrufe
console.log('Länge der History', window.history.length);

// ? ich kann darüber selbst navigieren
// ? durch diesen Aufruf kann ich den Zurück-Button des Browsers selbst anstossen
// ! window.history.back();
// ? ich kann eine eigene kleine Navigation mit vor und zurück-Buttons abbilden
document.getElementById('back-button')?.addEventListener('click', () => {
  window.history.back();
  window.prompt(window.navigator.userAgent);
});
// ? mit forward kann ich den Vorwärts-Button des Browsers simulieren
//window.history.forward();

// * ich kann auch die Info bekommen, welchen Browser der User nutzt
console.log('Browserinfo', window.navigator.userAgent);
if (window.navigator.userAgent.includes('Chrome')) {
  console.log('Wir sind im Chrome Browser und machen deshalb xyz');
}

// * welche Browsersprache ist eingestellt
// ? de-DE
console.log('Aktuelle Sprache des Browsers', window.navigator.language);

if (window.navigator.language.startsWith('de')) {
  // ? verwende die deutschen Spracheinstellungen
}

// * ist der Browser online
console.log('Online', window.navigator.onLine);


//! RECAP
//! boolean if else Abfrage verkürzte Schreibweise

// * Streaming App - alle 90 Minuten fragen, ob die Person noch weiterschaut
// ? wenn nein - Pausieren auf die Konsole
// ? wenn ja - Weiterschauen auf die Konsole
// ? Antwort, ob ja oder nein nach Zufallsprinzip
// ? wenn drei mal hintereinander nein als Antwort kommt - App schließen auf Konsole loggen
function yesOrNo(): boolean {
  // ? wenn Zufallszahl >= 0.5 true sonst false
  const yes = Math.random() >= 0.5;
  return yes;
}
function wakeMeUp() {
  let sleepingCounter = 0;
  const interval = setInterval(() => {
    console.log('Are you still watching?');
    const isStillWatching = yesOrNo();
    console.log(isStillWatching);
    // ? ist schon selbst true oder false

    if (/* Ausdruck, der ausgewertet wird */ true) {
      // * Code, der ausgeführt wird, wenn der Ausdruck true ist
      // * hier springe ich rein, wenn die Bedingung wahr ist
    } else {
      // * Code, der ausgeführt wird, wenn der Ausdruck false ist
      // * hier springe ich rein, wenn die Bedingung nicht wahr ist
    }

    // ? wenn ich es nicht hinschreibe, ist es true
    //if (isStillWatching === true) { kann man alternativ schreiben
    if (isStillWatching) {
      console.log('Continue watching.');
      // ? Zurücksetzen, wenn man einmal wieder wach war
      sleepingCounter = 0;
    } else {
      console.log('Pause the video');
      sleepingCounter++;
      if (sleepingCounter === 3) {
        clearInterval(interval);
        console.log('Closing the app');
      }
    }
    // ? * 1000 um von Millisekunden in Sekunden umzurechnen, * 60 um von Sekunden in Minuten umzurechnen, * 90 für 90 Minuten
    //}, 1000 * 60 * 90);
  }, 1000);
}

// if (isStillWatching === false) {
//     console.log('Pause the video');
//     sleepingCounter++;
//     if (sleepingCounter === 3) {
//       clearInterval(interval);
//       console.log('Closing the app');
//     }
// } else {
//     console.log('Continue watching.');
//     // ? Zurücksetzen, wenn man einmal wieder wach war
//     sleepingCounter = 0;
// }
wakeMeUp();