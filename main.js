/* =====================================================
   DESIGN SYSTEM - JavaScript
   Gestion du thème, couleurs dynamiques et interactions
   ===================================================== */

// ===== VARIABLES GLOBALES =====

const themeToggle = document.getElementById('theme-toggle');
const primaryColorPicker = document.getElementById('primary-color');
const secondaryColorPicker = document.getElementById('secondary-color');
const accentColorPicker = document.getElementById('accent-color');
const brandButtons = document.querySelectorAll('.brand-btn');

// Présets de marques
const BRAND_PRESETS = {
  tech: {
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    accent: '#06b6d4',
    name: 'Tech Vibrant'
  },
  minimal: {
    primary: '#000000',
    secondary: '#444444',
    accent: '#ffffff',
    name: 'Minimal'
  },
  warm: {
    primary: '#d97706',
    secondary: '#f59e0b',
    accent: '#fbbf24',
    name: 'Warm'
  }
};

// ===== INITIALISATION =====

function init() {
  loadTheme();
  setupEventListeners();
  restoreColors();
}

// ===== GESTION DU THÈME (DARK/LIGHT MODE) =====

function loadTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);
  themeToggle.checked = savedTheme === 'dark';
}

function setTheme(theme) {
  const html = document.documentElement;
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  // Notification visuelle
  console.log(`🌙 Thème changé à: ${theme.toUpperCase()}`);
}

// ===== GESTION DES COULEURS DYNAMIQUES =====

function updateColor(cssVariable, hexColor) {
  const root = document.documentElement;

  // Mettre à jour la couleur primaire
  if (cssVariable === '--color-primary') {
    root.style.setProperty(cssVariable, hexColor);
    root.style.setProperty('--color-primary-dark', darkenColor(hexColor, 20));
    root.style.setProperty('--color-primary-light', lightenColor(hexColor, 40));
  }
  // Mettre à jour la couleur secondaire
  else if (cssVariable === '--color-secondary') {
    root.style.setProperty(cssVariable, hexColor);
    root.style.setProperty('--color-secondary-dark', darkenColor(hexColor, 20));
    root.style.setProperty('--color-secondary-light', lightenColor(hexColor, 40));
  }
  // Mettre à jour la couleur d'accent
  else if (cssVariable === '--color-accent') {
    root.style.setProperty(cssVariable, hexColor);
    root.style.setProperty('--color-accent-dark', darkenColor(hexColor, 20));
    root.style.setProperty('--color-accent-light', lightenColor(hexColor, 40));
  }

  // Sauvegarder dans localStorage
  saveColors();
}

function saveColors() {
  const colors = {
    primary: primaryColorPicker.value,
    secondary: secondaryColorPicker.value,
    accent: accentColorPicker.value
  };
  localStorage.setItem('colors', JSON.stringify(colors));
}

function restoreColors() {
  const savedColors = localStorage.getItem('colors');
  if (savedColors) {
    const colors = JSON.parse(savedColors);
    primaryColorPicker.value = colors.primary;
    secondaryColorPicker.value = colors.secondary;
    accentColorPicker.value = colors.accent;

    updateColor('--color-primary', colors.primary);
    updateColor('--color-secondary', colors.secondary);
    updateColor('--color-accent', colors.accent);
  }
}

// ===== UTILITAIRES DE COULEUR =====

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function lightenColor(hex, percent) {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;

  const r = Math.round(rgb.r + (255 - rgb.r) * (percent / 100));
  const g = Math.round(rgb.g + (255 - rgb.g) * (percent / 100));
  const b = Math.round(rgb.b + (255 - rgb.b) * (percent / 100));

  return rgbToHex(r, g, b);
}

function darkenColor(hex, percent) {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;

  const r = Math.round(rgb.r * (1 - percent / 100));
  const g = Math.round(rgb.g * (1 - percent / 100));
  const b = Math.round(rgb.b * (1 - percent / 100));

  return rgbToHex(r, g, b);
}

// ===== SÉLECTEUR DE MARQUE =====

function applyBrand(brandKey) {
  const brand = BRAND_PRESETS[brandKey];
  if (!brand) return;

  // Mettre à jour les color pickers
  primaryColorPicker.value = brand.primary;
  secondaryColorPicker.value = brand.secondary;
  accentColorPicker.value = brand.accent;

  // Mettre à jour les couleurs CSS
  updateColor('--color-primary', brand.primary);
  updateColor('--color-secondary', brand.secondary);
  updateColor('--color-accent', brand.accent);

  // Mettre à jour les boutons actifs
  brandButtons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.brand === brandKey) {
      btn.classList.add('active');
    }
  });

  console.log(`🎨 Marque appliquée: ${brand.name}`);
}

// ===== MODAL FUNCTIONS =====

function openModal() {
  const modal = document.getElementById('modal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Fermer le modal au clic sur le backdrop
document.addEventListener('DOMContentLoaded', () => {
  const modalBackdrop = document.getElementById('modal');
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });
});

// Fermer avec Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// ===== EVENT LISTENERS =====

function setupEventListeners() {
  // Toggle thème sombre
  themeToggle.addEventListener('change', () => {
    setTheme(themeToggle.checked ? 'dark' : 'light');
  });

  // Color pickers
  primaryColorPicker.addEventListener('input', (e) => {
    updateColor('--color-primary', e.target.value);
  });

  secondaryColorPicker.addEventListener('input', (e) => {
    updateColor('--color-secondary', e.target.value);
  });

  accentColorPicker.addEventListener('input', (e) => {
    updateColor('--color-accent', e.target.value);
  });

  // Brand buttons
  brandButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      applyBrand(btn.dataset.brand);
    });
  });
}

// ===== DÉMARRAGE =====

document.addEventListener('DOMContentLoaded', init);

// ===== CONSOLE MESSAGES =====

console.log('%c🎨 Design System Loaded', 'color: #3b82f6; font-size: 16px; font-weight: bold;');
console.log('%cTry applying brands or changing colors in real-time!', 'color: #8b5cf6; font-size: 12px;');
