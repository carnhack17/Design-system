# 🎨 Design System - Professional UI Kit

Un système de design complet, professionnel et scalable, inspiré par **Stripe**. Parfait pour votre portfolio !

## 📋 Caractéristiques

### ✨ Fonctionnalités principales

- **Design Tokens complets** - Variables CSS pour couleurs, typographie, spacing, shadows
- **Responsive Design** - Utilise `clamp()` pour une typographie fluide
- **Dark Mode intégré** - Toggle en temps réel avec persistance localStorage
- **Couleurs dynamiques** - Modifiez les couleurs en direct
- **Multi-brand support** - 3 thèmes pré-configurés (Tech, Minimal, Warm)
- **Composants réutilisables** - Buttons, Cards, Forms, Badges, Alerts, Modal, Navbar
- **Grid system 12 colonnes** - Flexible et responsive
- **Code propre et commenté** - Prêt pour GitHub et entretien futur

## 📁 Structure des fichiers

```
.
├── design-system.css    # Styles, design tokens et composants
├── index.html           # Page de démonstration interactive
├── main.js              # Logique (thème, couleurs dynamiques)
└── README.md            # Documentation
```

## 🚀 Démarrage rapide

1. **Ouvrez le fichier** :
   ```bash
   # Simplement ouvrir index.html dans un navigateur
   open index.html  # macOS
   # ou clic droit > Ouvrir avec navigateur
   ```

2. **Explorez les composants** : Scrollez pour voir tous les composants et tokens

3. **Testez le mode sombre** : Toggle en haut à gauche dans le panneau de contrôle

4. **Changez les couleurs** : Utilisez les color pickers pour personnaliser en temps réel

5. **Appliquez des thèmes** : Cliquez sur les boutons Tech, Minimal ou Warm

## 🎨 Design Tokens

### Couleurs
```css
/* Primaires */
--color-primary: #3b82f6       /* Bleu */
--color-secondary: #8b5cf6     /* Violet */
--color-accent: #06b6d4        /* Cyan */

/* Sémantiques */
--color-success: #10b981
--color-warning: #f59e0b
--color-danger: #ef4444
--color-info: #3b82f6
```

### Typographie responsive
```css
--font-size-xs: clamp(0.75rem, 1vw, 0.875rem)
--font-size-sm: clamp(0.875rem, 1.2vw, 1rem)
--font-size-base: clamp(1rem, 1.5vw, 1.125rem)
--font-size-lg: clamp(1.125rem, 1.8vw, 1.25rem)
--font-size-xl: clamp(1.25rem, 2vw, 1.5rem)
--font-size-2xl: clamp(1.5rem, 2.5vw, 2rem)
--font-size-3xl: clamp(2rem, 3.5vw, 2.5rem)
```

### Spacing (8px base)
```css
--space-xs: 4px
--space-sm: 8px
--space-md: 16px
--space-lg: 24px
--space-xl: 32px
--space-2xl: 48px
--space-3xl: 64px
```

### Border Radius
```css
--radius-sm: 4px
--radius-md: 8px
--radius-lg: 12px
--radius-xl: 16px
--radius-full: 9999px
```

### Shadows
```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05)
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1)
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1)
```

## 🧩 Composants disponibles

### Boutons
```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-ghost">Ghost</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-success">Success</button>

<!-- Tailles -->
<button class="btn btn-primary btn-sm">Petit</button>
<button class="btn btn-primary btn-lg">Grand</button>
<button class="btn btn-primary btn-block">Largeur complète</button>
```

### Cards
```html
<div class="card">
  <div class="card-image"></div>
  <div class="card-title">Titre</div>
  <div class="card-content">Contenu</div>
</div>

<div class="card card-elevated">Avec plus d'ombre</div>
```

### Formulaires
```html
<div class="form-group">
  <label for="email">Email</label>
  <input type="email" id="email" placeholder="hello@example.com">
  <div class="form-helper">Texte d'aide optionnel</div>
</div>

<textarea placeholder="Message..."></textarea>
<select>
  <option>Option 1</option>
</select>
```

### Badges
```html
<span class="badge badge-primary">Primary</span>
<span class="badge badge-secondary">Secondary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-danger">Danger</span>
```

### Alerts
```html
<div class="alert alert-info">Info message</div>
<div class="alert alert-success">Success message</div>
<div class="alert alert-warning">Warning message</div>
<div class="alert alert-danger">Danger message</div>
```

### Navbar
```html
<nav class="navbar">
  <div class="navbar-brand">Brand</div>
  <ul class="navbar-menu">
    <li class="navbar-item"><a href="#">Link</a></li>
  </ul>
</nav>
```

### Modal
```html
<div class="modal-backdrop">
  <div class="modal">
    <div class="modal-header">
      <h2 class="modal-title">Titre</h2>
      <button class="modal-close">✕</button>
    </div>
    <div class="modal-body">Contenu</div>
    <div class="modal-footer">
      <button class="btn btn-ghost">Annuler</button>
      <button class="btn btn-primary">Confirmer</button>
    </div>
  </div>
</div>
```

## 🌈 Thèmes pré-configurés

Le système supporte 3 thèmes prêts à l'emploi :

### 1. Tech Vibrant (Défaut)
- **Primaire** : #3b82f6 (Bleu vif)
- **Secondaire** : #8b5cf6 (Violet)
- **Accent** : #06b6d4 (Cyan)
- 🎯 Moderne, professionnel, tech-forward

### 2. Minimal
- **Primaire** : #000000 (Noir)
- **Secondaire** : #444444 (Gris)
- **Accent** : #ffffff (Blanc)
- ⚪ Épuré, intemporel, premium

### 3. Warm
- **Primaire** : #d97706 (Orange)
- **Secondaire** : #f59e0b (Orange clair)
- **Accent** : #fbbf24 (Jaune)
- 🔥 Chaleureux, accueillant, créatif

## 🎛️ Personnalisation avancée

### Changer les couleurs en CSS
```css
:root {
  --color-primary: #votre-couleur;
  --color-secondary: #votre-couleur;
  --color-accent: #votre-couleur;
}
```

### Ajouter une nouvelle variante de bouton
```css
.btn-custom {
  background-color: var(--color-accent);
  color: var(--color-white);
}

.btn-custom:hover {
  background-color: var(--color-accent-dark);
}
```

### Modifier le breakpoint responsive
Les media queries pour responsive sont définies en commentaires mais vous pouvez les adapter :
```css
@media (max-width: 768px) {
  /* Mobile styles */
}

@media (min-width: 1024px) {
  /* Desktop styles */
}
```

## 📱 Responsive Design

Le système est **100% responsive** :
- **Mobile** : < 640px
- **Tablet** : 640px - 1024px
- **Desktop** : > 1024px

Utilise des **CSS media queries** et des **breakpoints logiques** :
```css
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

## 🌙 Dark Mode

Le dark mode est complètement intégré :

```javascript
// Dans main.js
setTheme('dark');  // Changer en dark mode
setTheme('light'); // Changer en light mode
```

Les styles changent automatiquement grâce à :
```css
:root[data-theme="dark"] {
  --bg-primary: #0f172a;
  --text-primary: #f1f5f9;
  /* ... */
}
```

## 🔧 Maintenance et extension

### Ajouter un nouveau composant
1. Créez les styles CSS dans `design-system.css`
2. Utilisez les variables CSS pour la cohérence
3. Testez dans `index.html`
4. Documentez dans le README

### Exemple : Ajouter une tag input
```css
.tag {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-md);
  background-color: var(--color-primary-light);
  color: var(--color-primary);
  border-radius: var(--radius-full);
}
```

## 🎯 Utilisations

Ce design system est parfait pour :
- ✅ Portfolio personnel
- ✅ Startups et SaaS
- ✅ Applications web
- ✅ Dashboards
- ✅ Landing pages
- ✅ Systèmes de design d'entreprise

## 📊 Performance

- **Pas de dépendances** - HTML/CSS/JS pur
- **Léger** - ~50KB de CSS
- **Optimisé** - Pas de repaint inutiles
- **Accessible** - Contraste, focus states, sémantique

## 🚀 Prochaines étapes

### Pour votre portfolio :
1. ✅ Déployez sur GitHub Pages
2. ✅ Ajoutez un lien vers le repo
3. ✅ Créez un figma pour les assets
4. ✅ Documentez vos décisions de design

### Exemple structure GitHub :
```
design-system/
├── css/
│   └── design-system.css
├── js/
│   └── main.js
├── index.html
├── README.md
└── .gitignore
```

## 📚 Ressources similaires

- [Stripe Design](https://stripe.com)
- [Tailwind CSS](https://tailwindcss.com) - Inspiration
- [Ant Design](https://ant.design) - Composants
- [Material Design](https://material.io) - Principes

## 📝 Licence

Libre d'utilisation pour votre portfolio. Créez quelque chose d'incroyable ! 🚀

---

**Créé avec 💙 pour votre portfolio**

Questions ? Testez directement dans `index.html` !
