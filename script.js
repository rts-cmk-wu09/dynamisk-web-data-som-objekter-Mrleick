let heading = document.querySelector("header");
let footer = document.querySelector("footer");
let body = document.querySelector("body");
let omMig = {
    påklædning: ["Sokker", "bukser", "trøje", "cap", "underbukser", "undertrøje"],
    persondata: {
      cpr: "123456-7890",
      navne: {
        fornavn: "Troels",
        efternavn: "Rasmussen",
      },
      adresse: "Kærsangervej XX",
      postnummer: 4300,
      telefon: "32-32-32-32",
    },
    cevilstand: "fanget!",
    børn: [
      {
        navn: "Freja",
        køn: "Pige",
        vaccineret: true,
        veninder: ["Laura", "Anna", "Leonora"],
      },
      {
        navn: "Carl-Emil",
        køn: "dreng",
        vaccineret: true,
        venner: ["Morris", "August", "Luca"],
      },
    ],
    pensionsalder: undefined,
  };