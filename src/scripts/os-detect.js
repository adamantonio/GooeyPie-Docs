/**
 * Automatically selects the OS-specific tab in Starlight docs
 */
function setOSTab() {
  const userAgent = navigator.userAgent.toLowerCase();
  
  const isMac = userAgent.includes('mac');
  const isWin = userAgent.includes('win');
  // Check for linux but exclude android
  const isLinux = userAgent.includes('linux') && !userAgent.includes('android');
  
  let targetOS = null;
  if (isMac) targetOS = 'macOS';
  else if (isWin) targetOS = 'Windows';
  else if (isLinux) targetOS = 'Linux';

  if (!targetOS) return;

  const tabs = document.querySelectorAll('starlight-tabs [role="tab"]');
  
  tabs.forEach(tab => {
    if (tab.textContent.trim() === targetOS && tab.getAttribute('aria-selected') !== 'true') {
      tab.click();
    }
  });
}

setOSTab();
document.addEventListener('astro:after-swap', setOSTab);
