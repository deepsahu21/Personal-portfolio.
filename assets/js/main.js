const tabs = Array.from(document.querySelectorAll('.tab-controls button'));
const panels = Array.from(document.querySelectorAll('.panel'));

const activateTab = (tab) => {
  const targetId = tab.getAttribute('data-panel');

  tabs.forEach((btn) => {
    const isActive = btn === tab;
    btn.setAttribute('aria-selected', isActive);
    btn.setAttribute('tabindex', isActive ? '0' : '-1');
  });

  panels.forEach((panel) => {
    const isTarget = panel.id === targetId;
    panel.setAttribute('aria-hidden', !isTarget);
  });
};

tabs.forEach((tab) => {
  tab.addEventListener('click', () => activateTab(tab));

  tab.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
      return;
    }

    const currentIndex = tabs.indexOf(tab);
    const offset = event.key === 'ArrowRight' ? 1 : -1;
    const nextIndex = (currentIndex + offset + tabs.length) % tabs.length;
    const nextTab = tabs[nextIndex];

    nextTab.focus();
    activateTab(nextTab);
    event.preventDefault();
  });
});
