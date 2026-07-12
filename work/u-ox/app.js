import { buildProjectSuggestion } from './src/generator.js';

const promptInput = document.getElementById('prompt');
const styleSelect = document.getElementById('style');
const generateButton = document.getElementById('generate');
const historyList = document.getElementById('historyList');
const conceptTitle = document.getElementById('conceptTitle');
const conceptSubtitle = document.getElementById('conceptSubtitle');
const conceptSummary = document.getElementById('conceptSummary');
const featureList = document.getElementById('featureList');
const accentDot = document.getElementById('accentDot');
const chip = document.getElementById('chip');
const projectValueInput = document.getElementById('projectValue');
const subscriptionAmountDisplay = document.getElementById('subscriptionAmount');
const payPalLink = document.getElementById('paypalLink');

const STORAGE_KEY = 'u-ox-history';

function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveHistory(history) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

function renderHistory(history) {
  historyList.innerHTML = '';
  if (!history.length) {
    historyList.innerHTML = '<li>No ideas yet. Generate your first concept.</li>';
    return;
  }

  history.slice(0, 5).forEach((entry) => {
    const li = document.createElement('li');
    li.textContent = entry;
    historyList.appendChild(li);
  });
}

function renderConcept(suggestion) {
  conceptTitle.textContent = suggestion.title;
  conceptSubtitle.textContent = suggestion.subtitle;
  conceptSummary.textContent = suggestion.summary;
  featureList.innerHTML = '';
  suggestion.features.forEach((feature) => {
    const item = document.createElement('div');
    item.className = 'feature-item';
    item.textContent = feature;
    featureList.appendChild(item);
  });
  accentDot.style.background = suggestion.accent;
  chip.textContent = suggestion.styleLabel;
  subscriptionAmountDisplay.textContent = `$${suggestion.subscriptionAmount}/month`;
  payPalLink.href = `https://www.paypal.com/paypalme/cyrussifa?amount=${suggestion.subscriptionAmount}`;
  payPalLink.textContent = `Subscribe for $${suggestion.subscriptionAmount}/month`;
}

function handleGenerate() {
  const suggestion = buildProjectSuggestion(promptInput.value, styleSelect.value, projectValueInput.value);
  renderConcept(suggestion);

  const history = loadHistory();
  history.unshift(promptInput.value || 'Fresh concept');
  const trimmed = history.slice(0, 6);
  saveHistory(trimmed);
  renderHistory(trimmed);
}

generateButton.addEventListener('click', handleGenerate);

renderHistory(loadHistory());
handleGenerate();
