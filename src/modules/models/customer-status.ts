// * Enums sollten im Ordner models liegen
enum CustomerStatus {
    Basic,
    Premium,
    VIP
  }
  // ? mit dem default Schlüsselwort sage ich: der Standard-Export aus dieser Datei ist CustomerStatus
  // ? das mache ich meistens, wenn es nur einen Export gibt
  // ? der Vorteil ist, ich muss beim Import keinen gescheiften Klammern tippen und kann direkt einen eigenen Namen vergeben
  export default CustomerStatus;