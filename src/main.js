(() => {
  function runSequenceMemoryScript() {
    alert('Unimplemented');
  }

  function runChimpTestScript() {
    alert('Unimplemented');
  }

  function runAimTrainerScript() {
    alert('Unimplemented');
  }

  function runTypingScript() {
    const container = document.getElementsByClassName('letters')[0];

    const events = Array.from(container.children).map(
      (child) =>
        new KeyboardEvent('keydown', {
          key: child.textContent,
          bubbles: true,
        }),
    );

    for (const event of events) {
      container.dispatchEvent(event);
    }
  }

  function runVerbalMemoryScript() {
    alert('Unimplemented');
  }

  function runNumberMemoryScript() {
    alert('Unimplemented');
  }

  function runVisualMemoryScript() {
    alert('Unimplemented');
  }

  function runReactionTimeScript() {
    alert('Unimplemented');
  }

  /** @type {Map<string, { main: () => void, cleanup: () => void }>} */
  const scriptMap = new Map();

  scriptMap.set('Run Sequence Memory Script', runSequenceMemoryScript);
  scriptMap.set('Run Chimp Test Script', runChimpTestScript);
  scriptMap.set('Run Aim Trainer Script', runAimTrainerScript);
  scriptMap.set('Run Typing Script', runTypingScript);
  scriptMap.set('Run Verbal Memory Script', runVerbalMemoryScript);
  scriptMap.set('Run Number Memory Script', runNumberMemoryScript);
  scriptMap.set('Run Visual Memory Script', runVisualMemoryScript);
  scriptMap.set('Run Reaction Time Script', runReactionTimeScript);

  document.getElementById('inhuman-script-container')?.remove();

  document.body.appendChild(
    (() => {
      const container = document.createElement('div');
      container.id = 'inhuman-script-container';
      container.style.position = 'fixed';
      container.style.bottom = '8px';
      container.style.left = '8px';
      container.style.display = 'flex';
      container.style.flexDirection = 'column';
      container.style.gap = '8px';
      container.style.padding = '8px';
      container.style.background = 'rgba(255, 255, 255, 0.25)';
      container.style.borderRadius = '8px';
      container.style.boxShadow = `
        0px 3px 3px -2px rgba(0,0,0,0.2),
        0px 3px 4px 0px rgba(0,0,0,0.14),
        0px 1px 8px 0px rgba(0,0,0,0.12)`;
      container.style.backdropFilter = 'blur(3px)';
      container.style.zIndex = '9999';

      return container;
    })(),
  );

  for (const [scriptName, scriptFunction] of scriptMap.entries()) {
    const button = document.createElement('button');
    button.style.padding = '4px';
    button.style.background = 'rgba(255, 255, 255, 0.75)';
    button.style.borderRadius = '4px';
    button.style.border = 'none';
    button.style.boxShadow = `
      inset 0 2px 0 -1px rgba(255, 255, 255, 0.75),
      0px 3px 3px -2px rgba(0,0,0,0.2),
      0px 3px 4px 0px rgba(0,0,0,0.14),
      0px 1px 8px 0px rgba(0,0,0,0.12)`;
    button.style.fontFamily = 'Roboto, sans-serif';
    button.textContent = scriptName;
    button.onclick = scriptFunction;

    document.getElementById('inhuman-script-container').appendChild(button);
  }
})();
