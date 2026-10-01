const translations = {
  en: {
    languageLabel: 'Language', eyebrow: 'Social sciences · thesis workflow', institution: 'Ethical review form retrieval', heroKicker: '01 / Choose your route', pageTitle: 'Start with the data you will use.', intro: 'Use this short check to retrieve the ethical review form that matches your thesis. The distinction is about where the data comes from, not how much data you collect.', guidanceLabel: 'Data type definitions', primaryHeading: 'Primary data', primaryDefinition: 'Data you collect or produce yourself for this thesis. This includes interviews, surveys, observations, experiments, usability tests, or any other direct contact with participants. Answer yes even if you also do desk research, collect only one interview, or use a small sample.', secondaryHeading: 'Secondary data', secondaryDefinition: 'Material that was already collected or created by someone else and that you reuse for your thesis, such as public datasets, archives, policy documents, media coverage, or published research. Choose this route only when you will not collect any new data yourself.', decisionKicker: '02 / One question', decisionTitle: 'Will you collect any new data yourself?', helper: 'Think about the complete thesis project, including a single interview or a small pilot. Existing sources can still be part of a primary-data thesis.', choiceLabel: 'Choose your data type', primaryChoice: 'Yes, I will collect new data', primaryChoiceDetail: 'Retrieve the primary-data form ↗', secondaryChoice: 'No, I will only use existing material', secondaryChoiceDetail: 'Retrieve the secondary-data form ↗', resultKicker: '03 / Your form', ready: 'Ready to download', download: 'Download form', reset: 'Start over', nextStep: 'After downloading, complete every section carefully, discuss your approach with your supervisor, and submit the completed form through the designated Canvas assignment.', footerTitle: 'SW thesis ethics', footerContact: 'Questions? Contact your thesis supervisor.', generatedNote: 'Complete this questionnaire thoughtfully and discuss your answers with your thesis supervisor before submitting it through Canvas.', generatedSections: ['Research purpose and design', 'Data and participants', 'Risks, consent, and privacy', 'Ethical reflection'], generatedPrompts: ['Briefly describe your research question and methodology.', 'What data will you use, and who is involved? Explain how participants or source materials are selected.', 'Describe foreseeable risks, your consent procedure, data minimisation, storage, and access arrangements.', 'Explain any remaining ethical concerns and how you will address them.']
  },
  nl: {
    languageLabel: 'Taal', eyebrow: 'Sociale wetenschappen · scriptietraject', institution: 'Ethische beoordelingsformulieren', heroKicker: '01 / Kies je route', pageTitle: 'Begin met de data die je gebruikt.', intro: 'Gebruik deze korte check om het ethische beoordelingsformulier voor jouw scriptie te vinden. Het verschil gaat over de herkomst van de data, niet over de hoeveelheid die je verzamelt.', guidanceLabel: 'Definities van datatypes', primaryHeading: 'Primaire data', primaryDefinition: 'Data die je voor deze scriptie zelf verzamelt of maakt. Dit omvat interviews, enquêtes, observaties, experimenten, gebruikerstests en elk ander direct contact met deelnemers. Antwoord ja, ook als je daarnaast bureauonderzoek doet, slechts één interview afneemt of een kleine steekproef gebruikt.', secondaryHeading: 'Secundaire data', secondaryDefinition: 'Materiaal dat al door iemand anders is verzameld of gemaakt en dat je hergebruikt voor je scriptie, zoals openbare datasets, archieven, beleidsdocumenten, mediaberichtgeving of gepubliceerd onderzoek. Kies deze route alleen als je zelf geen nieuwe data verzamelt.', decisionKicker: '02 / Eén vraag', decisionTitle: 'Ga je zelf nieuwe data verzamelen?', helper: 'Denk aan het volledige scriptieproject, inclusief één interview of een kleine pilot. Bestaande bronnen kunnen nog steeds onderdeel zijn van een scriptie met primaire data.', choiceLabel: 'Kies je datatype', primaryChoice: 'Ja, ik ga nieuwe data verzamelen', primaryChoiceDetail: 'Open het formulier voor primaire data ↗', secondaryChoice: 'Nee, ik gebruik alleen bestaand materiaal', secondaryChoiceDetail: 'Open het formulier voor secundaire data ↗', resultKicker: '03 / Jouw formulier', ready: 'Klaar om te downloaden', download: 'Formulier downloaden', reset: 'Opnieuw beginnen', nextStep: 'Vul na het downloaden elke sectie zorgvuldig in, bespreek je aanpak met je scriptiebegeleider en dien het ingevulde formulier in via de aangewezen Canvas-opdracht.', footerTitle: 'SW scriptie-ethiek', footerContact: 'Vragen? Neem contact op met je scriptiebegeleider.', generatedNote: 'Vul deze vragenlijst zorgvuldig in en bespreek je antwoorden met je scriptiebegeleider voordat je het formulier via Canvas indient.', generatedSections: ['Onderzoeksdoel en onderzoeksopzet', 'Data en deelnemers', 'Risico’s, toestemming en privacy', 'Ethische reflectie'], generatedPrompts: ['Beschrijf kort je onderzoeksvraag en methodologie.', 'Welke data ga je gebruiken en wie zijn erbij betrokken? Leg uit hoe deelnemers of bronnen worden geselecteerd.', 'Beschrijf voorzienbare risico’s, je toestemmingsprocedure, dataminimalisatie, opslag en toegangsbeheer.', 'Leg uit welke ethische aandachtspunten er nog zijn en hoe je daarmee omgaat.']
  }
};

translations.en.nextStep = 'After downloading, complete every section carefully and submit the completed form through the designated Canvas assignment.';
translations.nl.nextStep = 'Vul na het downloaden elke sectie zorgvuldig in en dien het ingevulde formulier in via de aangewezen Canvas-opdracht.';

const forms = {
  primary: {
    type: { en: 'Primary data', nl: 'Primaire data' },
    title: { en: 'Primary-data ethical review form', nl: 'Ethisch beoordelingsformulier voor primaire data' },
    description: { en: 'Use this form when you will collect any new data yourself. That remains the correct route when your thesis also uses desk research, existing sources, or only one interview.', nl: 'Gebruik dit formulier als je zelf nieuwe data gaat verzamelen. Dit blijft de juiste route als je scriptie ook bureauonderzoek, bestaande bronnen of slechts één interview bevat.' },
    filename: 'Ethical review form A - Primary (and secondary) data.pdf',
    submission: {
      en: 'This is Form A. Submit it to “Form A - Ethical review submission - primary data” in Canvas. Submitting to the wrong assignment will delay the instructors’ response.',
      nl: 'Dit is formulier A. Dien het in bij “Form A - Ethical review submission - primary data” in Canvas. Indien je het bij de verkeerde opdracht indient, duurt het langer voordat je een reactie van de docenten krijgt.'
    }
  },
  secondary: {
    type: { en: 'Secondary data', nl: 'Secundaire data' },
    title: { en: 'Secondary-data ethical review form', nl: 'Ethisch beoordelingsformulier voor secundaire data' },
    description: { en: 'Use this form when your thesis relies exclusively on material that was already collected or created by others and you will not collect any new data yourself.', nl: 'Gebruik dit formulier als je scriptie uitsluitend steunt op materiaal dat al door anderen is verzameld of gemaakt en je zelf geen nieuwe data gaat verzamelen.' },
    filename: 'Ethical review form B - Secondary data only.pdf',
    submission: {
      en: 'This is Form B. Submit it to “Form B - Ethical review submission - secondary data” in Canvas. Submitting to the wrong assignment will delay the instructors’ response.',
      nl: 'Dit is formulier B. Dien het in bij “Form B - Ethical review submission - secondary data” in Canvas. Indien je het bij de verkeerde opdracht indient, duurt het langer voordat je een reactie van de docenten krijgt.'
    }
  }
};

let language = localStorage.getItem('swethics-language') || 'en';
const languageButtons = document.querySelectorAll('.language-button');
const choices = document.querySelectorAll('.choice');
const result = document.querySelector('#result');
const resultType = document.querySelector('#result-type');
const resultTitle = document.querySelector('#result-title');
const resultDescription = document.querySelector('#result-description');
const submissionInstruction = document.querySelector('#submission-instruction');
const download = document.querySelector('#download');
const reset = document.querySelector('#reset');
let selectedForm = null;

function showResult(form) {
  resultType.textContent = form.type[language];
  resultTitle.textContent = form.title[language];
  resultDescription.textContent = form.description[language];
  submissionInstruction.textContent = form.submission[language];
}

function applyLanguage() {
  const copy = translations[language];
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = copy[element.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    element.setAttribute('aria-label', copy[element.dataset.i18nAriaLabel]);
  });
  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === language;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', isActive);
  });
  if (selectedForm) showResult(selectedForm);
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    language = button.dataset.language;
    localStorage.setItem('swethics-language', language);
    applyLanguage();
  });
});

choices.forEach((choice) => {
  choice.addEventListener('click', () => {
    selectedForm = forms[choice.dataset.answer];
    choices.forEach((item) => item.setAttribute('aria-pressed', item === choice));
    showResult(selectedForm);
    download.href = selectedForm.filename;
    result.hidden = false;
    result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
});

reset.addEventListener('click', () => {
  selectedForm = null;
  choices.forEach((choice) => choice.setAttribute('aria-pressed', 'false'));
  result.hidden = true;
  document.querySelector('.decision').scrollIntoView({ behavior: 'smooth' });
});

applyLanguage();