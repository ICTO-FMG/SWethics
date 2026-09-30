const forms = {
  primary: {
    type: 'Primary data',
    title: 'Primary-data ethical review form',
    description: 'Use this form when you will collect any new data yourself. That remains the correct route when your thesis also uses desk research, existing sources, or only one interview.',
    filename: 'ethical-review-primary-data.html'
  },
  secondary: {
    type: 'Secondary data',
    title: 'Secondary-data ethical review form',
    description: 'Use this form when your thesis relies exclusively on material that was already collected or created by others and you will not collect any new data yourself.',
    filename: 'ethical-review-secondary-data.html'
  }
};

const choices = document.querySelectorAll('.choice');
const result = document.querySelector('#result');
const resultType = document.querySelector('#result-type');
const resultTitle = document.querySelector('#result-title');
const resultDescription = document.querySelector('#result-description');
const download = document.querySelector('#download');
const reset = document.querySelector('#reset');
let selectedForm = null;

choices.forEach((choice) => {
  choice.addEventListener('click', () => {
    selectedForm = forms[choice.dataset.answer];
    choices.forEach((item) => item.setAttribute('aria-pressed', item === choice));
    resultType.textContent = selectedForm.type;
    resultTitle.textContent = selectedForm.title;
    resultDescription.textContent = selectedForm.description;
    result.hidden = false;
    result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
});

download.addEventListener('click', () => {
  if (!selectedForm) return;
  const documentContent = `<!doctype html><html lang="en"><head><meta charset="UTF-8"><title>${selectedForm.title}</title><style>body{font:16px Georgia,serif;max-width:760px;margin:50px auto;line-height:1.6;color:#18211f}h1{font:32px Arial,sans-serif}h2{margin-top:32px}label{display:block;margin-top:18px;font:14px Arial,sans-serif}textarea{width:100%;min-height:90px;margin-top:7px;border:1px solid #aaa}p.note{background:#eef3ef;padding:16px}</style></head><body><h1>${selectedForm.title}</h1><p class="note">Complete this questionnaire thoughtfully and discuss your answers with your thesis supervisor before submitting it through Canvas.</p><h2>1. Research purpose and design</h2><label>Briefly describe your research question and methodology.<textarea></textarea></label><h2>2. Data and participants</h2><label>What data will you use, and who is involved? Explain how participants or source materials are selected.<textarea></textarea></label><h2>3. Risks, consent, and privacy</h2><label>Describe foreseeable risks, your consent procedure, data minimisation, storage, and access arrangements.<textarea></textarea></label><h2>4. Ethical reflection</h2><label>Explain any remaining ethical concerns and how you will address them.<textarea></textarea></label></body></html>`;
  const blob = new Blob([documentContent], { type: 'text/html' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = selectedForm.filename;
  link.click();
  URL.revokeObjectURL(link.href);
});

reset.addEventListener('click', () => {
  selectedForm = null;
  choices.forEach((choice) => choice.setAttribute('aria-pressed', 'false'));
  result.hidden = true;
  document.querySelector('.decision').scrollIntoView({ behavior: 'smooth' });
});