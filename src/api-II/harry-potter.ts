import { IHead, IHogwartsHouse, ITrait } from './contracts/IHogwartsHouse';
import { ISpell } from './contracts/ISpell';

console.log('harry-potter.ts');

// * Immer am Anfang, wenn ich Schnittstellen aufrufe und mehrere Endpunkte/Ressourcen/Routen habe, die URLs festlegen
// * BaseURL ist die Basis-URL ohne die Routen
const BASE_URL = 'https://wizard-world-api.herokuapp.com';
const HOUSES_URL = `${BASE_URL}/Houses`;
const SPELLS_URL = `${BASE_URL}/Spells`;
const WIZARDS_URL = `${BASE_URL}/Wizards`;

// * Elemente holen
const wizardLink = document.getElementById('nav-wizards');
const housesLink = document.getElementById('nav-houses');
const spellsLink = document.getElementById('nav-spells');
const contentDiv = document.getElementById('content');

// * Event-Listener für die Nav-Items
wizardLink?.addEventListener('click', () => {
  console.log('Wizards clicked');
});

housesLink?.addEventListener('click', () => {
  console.log('Houses clicked');
  // ? wir geben die URL mit und einen String zum unterscheiden, was wir gerade abholen (Houses, Wizards oder Spells)
  // ? wie die Elemente dargestellt werden sollen
  fetchAndDisplay(HOUSES_URL, 'Houses');
});

spellsLink?.addEventListener('click', () => {
  console.log('Spells clicked');
  fetchAndDisplay(SPELLS_URL, 'Spells');
});

// * eine Funktion für alle drei Routen, die jeweils die Daten von der Schnittstelle holt und auch darstellt
// ? wir wollen doppelten Code vermeiden, daher haben wir diese Funktion angelegt
function fetchAndDisplay(url: string, routeName: string) {
  fetch(url)
    // ? der Code im ersten then ist immer gleich
    // ? wir schauen, ob die Response ok ist und werfen ansonsten einen Fehler, den wir im catch auffangen
    .then((response: Response) => {
      if (!response.ok) {
        throw Error(`${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    // ? hier in data können einmal Wizards, Spells oder Houses drinstecken, deshalb data so allgemein ohne Datentyp
    // ? wir verzichten bewusst auf den Datentyp, damit wir die Funktion so flexibel wie möglich halten können
    .then((data) => {
      if (contentDiv) {
        // ? den routeNamen geben wir oben im EventHandler mit in die Funktion
        if (routeName === 'Houses') {
          // ? mit as kann ich sagen: data ist ein Array von IHogwartsHouses
          const houses = data as IHogwartsHouse[];
          contentDiv.innerHTML = createHouseList(houses);
        } else if (routeName === 'Spells') {
          // ? mit as kann ich sagen: data ist ein Array von ISpell
          const spells = data as ISpell[];
          contentDiv.innerHTML = createSpellsList(spells);
        }
      }
    })
    .catch((error: Error) => {
      console.error(error);
    });
}

// * Erzeuge eine unordered list mit houses mit einem List-Eintrag pro house mit dessen Eigenschaften
function createHouseList(houses: IHogwartsHouse[]): string {
  // * Alternative Art, um die HTML-Elemente zu erzeugen - statt mit createElement und appendChild
  // ? wir bauen das HTML direkt als einen langen String zusammen, wir schreiben so, als wären wir in der HTML-Datei
  // ? Ähnliches passiert dann auch in React
  const listElementsOfHouses = houses.map((house: IHogwartsHouse) => {
    return `<li>
      <p>Id: ${house.id}</p>
      <p>Name: ${house.name}</p>
      <p>House Colours: ${house.houseColours}</p>
      <p>Founder: ${house.founder}</p>
      <p>Animal: ${house.animal}</p>
      <p>Element: ${house.element}</p>
      <p>Ghost: ${house.ghost}</p>
      <p>CommonRoom: ${house.commonRoom}</p>
      <p>Heads: ${house.heads.map((head: IHead) => `${head.firstName} ${head.lastName}`).join(', ')}</p>
      <p>Traits: ${house.traits.map((trait: ITrait) => trait.name).join(', ')}</p>
      </li>`;
  });
  // ? hier würde ohne das join(', ') in Zeile 74 die einzelnen Element mit Komma und ohne Leerzeichen zusammengefügt
  // ? schaut euch gerne mal an, wie es ohne join aussieht, indem ihr den Code oben jeweils durch das hier ersetzt:
  //   <p>Heads: ${house.heads.map((head: IHead) => `${head.firstName} ${head.lastName}`)}</p>
  //   <p>Traits: ${house.traits.map((trait: ITrait) => trait.name)}</p>
  // ? die List-Elemente für die Houses stecken in einem mit map erzeugten Array - ich will einen langen String daraus machen
  // ? daher join um einen langen String daraus zu machen - es soll kein Komma dazwischen sein
  return `<ul>${listElementsOfHouses.join('')}</ul>`;
}

// * Erzeuge eine unordered list mit spells mit einem List-Eintrag pro spell mit dessen Eigenschaften
function createSpellsList(spells: ISpell[]): string {
  // ? erst alle einzelnen Listenelemente für die Spells mit map erzeugen
  const listElementsOfSpells = spells.map((spell: ISpell) => {
    return `<li>
        <p>Id: ${spell.id}</p>
        <p>Name: ${spell.name}</p>
        <p>Incantation: ${spell.incantation}</p>
        <p>Effect: ${spell.effect}</p>
        <p>Type: ${spell.type}</p>
        </li>`;
  });
  return `<ul>${listElementsOfSpells.join('')}</ul>`;
}