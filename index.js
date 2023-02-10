document.querySelector("h1").innerHTML = `
${overskrift.titel}
`;





document.querySelector(".person").innerHTML = `
<p>Fornavn: ${omMig.persondata.navne.fornavn}</p>
<p>Efternavn: ${omMig.persondata.navne.efternavn}</p>
<p>Adresse: ${omMig.persondata.adresse}</p>
`;