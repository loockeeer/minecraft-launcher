const app = window.require('electron').remote;
const os = app.require('os');

export default function getHostRAM(unit) {
  const mem = os.totalmem();
  switch (unit) {
    case 'kb':
      return mem / 1024;
    case 'mb':
      return mem / 1024 / 1024;
    case 'gb':
      return mem * (1e-9);
    default:
      return mem;
  }
}
