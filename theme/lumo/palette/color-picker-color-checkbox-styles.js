const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `
<dom-module id="color-checkbox-styles" theme-for="color-checkbox">
  <template>
    <style>
      :host([checked]) {
        pointer-events: none;
      }

      [part="checkbox"] {
        border: 2px solid transparent;
        box-sizing: border-box;
      }

      [part="checkbox"],
      [part="color-backdrop"] {
        width: var(--lumo-size-m);
        height: var(--lumo-size-m);
        margin: var(--lumo-space-xs) 0;
      }

      [part="checkbox"].show-border {
        border-color: var(--lumo-contrast-20pct);
      }

      [part="checkbox"]::after {
        border-width: 0.375em 0 0 0.375em;
        top: calc(1.65em - 2px);
        left: calc(0.95em - 2px);
        color: inherit;
        border-color: currentColor;
      }

      :host([checked]) [part="checkbox"]::after {
        width: 1.25em;
        height: 2.125em;
      }

      label {
        position: relative;
      }

      [part="color-backdrop"] {
        position: absolute;
        top: 0;
        left: 0;
        border-radius: var(--lumo-border-radius);
        line-height: 1.2;

        @apply --color-picker-alpha-checkerboard-background-style;
      }

      :host([active]) [part="color-backdrop"] {
        transform: scale(0.9);
        transition-duration: 0.05s;
      }

      :host([active][checked]) [part="color-backdrop"] {
        transform: scale(1.1);
      }

      :host([active]:not([checked])) [part="checkbox"]::before {
        opacity: 0.6;
      }

      :host([disabled]) [part="checkbox"],
      :host([disabled]) [part="color-backdrop"] {
        opacity: 0.2;
      }

      :host([theme~="small"]) [part="checkbox"],
      :host([theme~="small"]) [part="color-backdrop"] {
        width: var(--lumo-size-s);
        height: var(--lumo-size-s);
      }

      :host([theme~="small"]) [part="checkbox"]::after {
        top: 1.2em;
        left: 0.7em;
      }

      :host([theme~="small"][checked]) [part="checkbox"]::after {
        width: 0.9375em;
        height: 1.59375em;
      }
    </style>
  </template>
</dom-module>
`;
document.head.appendChild($_documentContainer.content);
