// * Drei Personen machen Hausaufgaben - ich bin die Hausaufgabenbetreuung
// * Die Personen brauchen unterschiedlich lang
// * Erst wenn alle fertig sind, darf ich nach Hause gehen -> ich will auf die letzte Person warten

// ? Das Promise wird in einer Funktion erzeugt, dann können wir es einfach wiederverwenden
function doHomework(name: string, timeInMilliseconds: number): Promise<string> {
    // ? ein Promise zurückgeben
    console.log(`${name} is starting with homework`);
    return new Promise((resolve, reject) => {
      // ? wenn keine Dauer angegeben wurde, wollen wir direkt abbrechen
      if (timeInMilliseconds === 0) {
        reject('Homework duration must bei greater than 0');
      }
      setTimeout(() => {
        resolve(`${name} has finished homework`);
      }, timeInMilliseconds);
    });
  }
  const aliceHomework = doHomework('Alice', 3000);
  const bobHomework = doHomework('Bob', 5000);
  const steveHomework = doHomework('Steve', 4000);
  const wrongHomework = doHomework('Unknown', 0);
  
  // * mit Promise all kann ich auf die Erfüllung mehrerer Promises warten
  // * Promise.all nehme ich nur, wenn die Logik darauf beruht, dass alle Promises erfüllt sind
  // * d. h. ich will mitbekommen, wenn alle von den Promises fertig sind
  // * wir verlieren die echte Asynchronität, weil wir auf den letzten Promise warten - hier nach 5 Sekunden
  Promise.all([aliceHomework, bobHomework, steveHomework])
    // Promise.all([aliceHomework, bobHomework, steveHomework, wrongHomework])
    // ? hier lande ich, wenn alle drei Promises erfolgreich resolved wurden (bis auch der letzte fertig ist)
    // ? in results stehen die drei Ergebnisse der drei Promises genau in der Reihenfolge, wie wir sie in Promise.all reingegeben haben
    // ! die Reihenfolge in results hat nicht mit der Dauer zu tun
    .then((results: [string, string, string]) => {
      // ? im 1. results-Element steht das Ergebnis von aliceHomework -> was dort bei resolve zurückgegeben wurde
      const resultAlice = results[0];
      // ? im 2. results-Element steht das Ergebnis von bobHomework -> was dort bei resolve zurückgegeben wurde
      const resultBob = results[1];
      // ? im 3. results-Element steht das Ergebnis von steveHomework -> was dort bei resolve zurückgegeben wurde
      const resultSteve = results[2];
      console.log({ resultAlice });
      console.log({ resultBob });
      console.log({ resultSteve });
      // ? Kurzschreibweise
      // results.forEach((result: string) => {
      //   console.log(result);
      // });
    })
    // ? hier lande ich, wenn mindestens eines der Promises rejected wurde
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log('Alles ist beendet');
    });
  
  // * Langversion - sich an alle Promises einzeln hängen
  // aliceHomework
  //   .then((finishedText: string) => {
  //     console.log(finishedText);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  
  // bobHomework
  //   .then((finishedText: string) => {
  //     console.log(finishedText);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  
  // steveHomework
  //   .then((finishedText: string) => {
  //     console.log(finishedText);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  
  // ! dieser Code wird direkt ausgeführt - so schaffe ich es nicht am Ende etwas auszugeben
  // ! console.log('Everyone is finished');