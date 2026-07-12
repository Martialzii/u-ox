const STYLE_MAP = {
  lumen: {
    label: 'Lumen',
    accent: '#5ed4ff',
    subtitle: 'A bright, focused workflow'
  },
  aurora: {
    label: 'Aurora',
    accent: '#8f7cff',
    subtitle: 'A radiant, cinematic experience'
  },
  echo: {
    label: 'Echo',
    accent: '#3ed598',
    subtitle: 'A calm, reflective product'
  }
};

function cleanPrompt(value) {
  return value.trim() || 'a useful, modern digital experience';
}

function titleFromPrompt(value) {
  const words = cleanPrompt(value).split(/\s+/).slice(0, 4).join(' ');
  return words.charAt(0).toUpperCase() + words.slice(1);
}

export function calculateSubscriptionAmount(projectValue) {
  const value = Number(projectValue) || 0;
  return Math.max(10, Math.round(value / 1000));
}

export function buildProjectSuggestion(prompt, styleKey, projectValue = 10000) {
  const style = STYLE_MAP[styleKey] || STYLE_MAP.lumen;
  const promptText = cleanPrompt(prompt);
  const title = `U-OX • ${titleFromPrompt(promptText)}`;
  const features = [
    `${promptText} with a simple first-run flow`,
    'One-screen overview with clear next actions',
    'Roles, guidance, and quick actions built in'
  ];
  const subscriptionAmount = calculateSubscriptionAmount(projectValue);

  return {
    title,
    subtitle: style.subtitle,
    summary: `This concept turns "${promptText}" into a grounded experience with calm structure, strong hierarchy, and clear momentum.`,
    features,
    accent: style.accent,
    styleLabel: style.label,
    subscriptionAmount,
    subscriptionMessage: `Suggested monthly subscription: $${subscriptionAmount} for a project valued at $${Number(projectValue).toLocaleString()}`
  };
}
