function kassenRechner(preis, bargeld) {
    const wechselgeld = bargeld - preis; // Berechnet das Wechselgeld
    if (wechselgeld < 0) {
        return `Die Kunden müssen noch ${preis - bargeld} Euro zahlen`; // Wenn das Wechselgeld negativ ist, zeigt an, wie viel mehr bezahlt werden muss
    }

    const münzen = [
        { name: '20 Euro', wert: 2000 },
        { name: '10 Euro', wert: 1000 },
        { name: '5 Euro', wert: 500 },
        { name: '2 Euro', wert: 200 },
        { name: '1 Euro', wert: 100 },
        { name: '0.5 Euro', wert: 50 },
        { name: '0.2 Euro', wert: 20 },
        { name: '0.1 Euro', wert: 10 },
        { name: '0.05 Euro', wert: 5 },
        { name: '0.01 Euro', wert: 1 },
    ];

    const wechselgeldDetails = ["Die Zahlung war erfolgreich"];
    let centWechselgeld = wechselgeld * 100; // Wechselgeld in Cent umrechnen
    let gesamtWechselgeld = 0; // Gesamtsumme des Wechselgelds

    for (const münze of münzen) {
        if (centWechselgeld >= münze.wert) {
            const anzahl = Math.floor(centWechselgeld / münze.wert); // Anzahl der Münzen/Scheine berechnen
            wechselgeldDetails.push(`${anzahl} x ${münze.name}`); // Details der Münzen/Scheine zur Liste hinzufügen
            centWechselgeld -= anzahl * münze.wert; // Restbetrag berechnen
            gesamtWechselgeld += anzahl * münze.wert; // Gesamtsumme des Wechselgelds berechnen
        }
    }

    if (centWechselgeld > 0) {
        return 'Kein Wechselgeld verfügbar'; // Falls es nicht möglich ist, das gesamte Wechselgeld auszuzahlen
    }

    wechselgeldDetails.push(`Gesamtsumme des Wechselgelds: ${(gesamtWechselgeld / 100).toFixed(2)} Euro`); // Gesamtsumme des Wechselgelds hinzufügen
    return wechselgeldDetails;
}

function zeigeWechselgeld() {
    const preis = parseFloat(document.getElementById('preis').value);
    const bargeld = parseFloat(document.getElementById('bargeld').value);
    const details = kassenRechner(preis, bargeld);
    
    const wechselgeldDetailsDiv = document.getElementById('wechselgeld-details');
    wechselgeldDetailsDiv.innerHTML = ''; // Alte Ergebnisse löschen

    if (typeof details === 'string') {
        wechselgeldDetailsDiv.innerText = details;
    } else {
        details.forEach(detail => {
            const p = document.createElement('p');
            p.innerText = detail;
            wechselgeldDetailsDiv.appendChild(p);
        });
    }
}








// function kassenRechner(preis, bargeld) {
//     const wechselgeld = bargeld - preis; // Berechnet das Wechselgeld
//     if (wechselgeld < 0) {
//         return `Die Kunden müssen noch ${preis - bargeld} Euro zahlen`; // Wenn das Wechselgeld negativ ist, zeigt an, wie viel mehr bezahlt werden muss
//     }

//     const münzen = [
//         { name: '20 Euro', wert: 2000 },
//         { name: '10 Euro', wert: 1000 },
//         { name: '5 Euro', wert: 500 },
//         { name: '2 Euro', wert: 200 },
//         { name: '1 Euro', wert: 100 },
//         { name: '0.5 Euro', wert: 50 },
//         { name: '0.2 Euro', wert: 20 },
//         { name: '0.1 Euro', wert: 10 },
//         { name: '0.05 Euro', wert: 5 },
//         { name: '0.01 Euro', wert: 1 },
//     ];

//     const wechselgeldDetails = ["Die Zahlung war erfolgreich"];
//     let centWechselgeld = wechselgeld * 100; // Wechselgeld in Cent umrechnen
//     let gesamtWechselgeld = 0; // Gesamtsumme des Wechselgelds

//     for (const münze of münzen) {
//         if (centWechselgeld >= münze.wert) {
//             const anzahl = Math.floor(centWechselgeld / münze.wert); // Anzahl der Münzen/Scheine berechnen
//             wechselgeldDetails.push({ [münze.name]: anzahl }); // Details der Münzen/Scheine zur Liste hinzufügen
//             centWechselgeld -= anzahl * münze.wert; // Restbetrag berechnen
//             gesamtWechselgeld += anzahl * münze.wert; // Gesamtsumme des Wechselgelds berechnen
//         }
//     }

//     if (centWechselgeld > 0) {
//         return 'Kein Wechselgeld verfügbar'; // Falls es nicht möglich ist, das gesamte Wechselgeld auszuzahlen
//     }

//     wechselgeldDetails.push(`Gesamtsumme des Wechselgelds: ${(gesamtWechselgeld / 100).toFixed(2)} Euro`); // Gesamtsumme des Wechselgelds hinzufügen
//     return wechselgeldDetails;
// }

// console.log(kassenRechner(4, 3)); // Kunde soll 1 Euro mehr zahlen
// console.log(kassenRechner(6, 6)); // Zahlung erfolgreich, kein Wechselgeld nötig
// console.log(kassenRechner(6.37, 50)); 
// console.log(kassenRechner(4, 100)); // Details des Wechselgelds und Gesamtsumme anzeigen

