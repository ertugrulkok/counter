var counters = document.querySelectorAll(".counter");
console.log(counters)

counters.forEach((counter, index, array) => {
  counter.innerText = "0";

  function updateCounter() {
    let target = +counter.getAttribute("data-target"); // + macht es von einem String zu einer Number
    // target = parseInt(target) -> +counter.getAttribute("data-target");
    const zw = +counter.innerText; // gibt den aktualisierten Wert zurück
    console.log(zw);
    // teilt die Gesamtzahl durch 200 Schritte bis zum Ergebnis
    const increment = target /100;

    // solange mein zwischenergebnis kleiner ist als mein Ziel wird der Code ausgeführt
    if (zw < target) {
      counter.innerText = `${Math.ceil(zw + increment)}`;
      setTimeout(updateCounter, 25);
    } else {
      counter.innerText = target;
    }
  }
  updateCounter();
});

// ( select )
// ein element hinten entfernt wird oder ganz vorne entfernt
