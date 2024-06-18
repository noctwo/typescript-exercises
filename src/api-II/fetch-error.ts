console.log('fetch-errors');

// * wir nutzen die httpstat.us API, um Fehler zu bekommen
// ? diese API gibt uns absichtlich einen Fehler zurück, damit wir das Testen können

// ? wir legen uns ein Array mit gängigen HTTP-Status-Codes an
// ? alles mit 200 ist erfolgreich, die anderen sind fehlerhaft
// ? http-status siehe https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
const statusCodes = [200, 201, 400, 401, 403, 404, 405, 500, 502, 503];

// ? wir gehen alle Status-Codes aus dem Array durch und machen dafür einen fetch-Aufruf
// ? der echte Aufruf sieht dann z. B. so aus https://httpstat.us/404 -> gibt den Error 404 - Not found zurück
statusCodes.forEach((statusCode: number) => {
  fetch(`https://httpstat.us/${statusCode}`)
    // ? im ersten then wie immer die Response
    // ? um sich die Eigenschaften des Interfaces Response in der TypeScript-Sprachdefinition anzusehen, kann ich auf Response Rechtsklicken
    // ? und "Go to definition" aufrufen
    .then((response: Response) => {
      // ? um den Status auszugeben kann ich status und statusText aus der Response nutzen
      // ? wenn ich einen Fehler bekomme, will ich an der Stelle abbrechen und einen Fehler werfen
      if (!response.ok) {
        // ? kein statuscode, der mit 200 beginnt
        // ! fetch landet nicht automatisch bei Status-Codes > 400 im catch, wir müssen selbst den Fehler werfen
        throw Error(`Error ${response.status} ${response.statusText}`);
      }
      // ? hier kein echtes JSON oder sinnvolle Daten in der Antwort
      // ? wir geben selbst den Status als number weiter
      // ? ansonsten würde wir, wie immer, response.json() machen
      return response.status;
    })
    .then((status: number) => {
      console.log('Successful: ', status);
    })
    .catch((error) => {
      console.error(`Could not get data: ${error}`);
    });
});