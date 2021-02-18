const app = window.require('electron').remote;
const os = app.require('os');

export default function getHostRAM(unit) {
  const mem = os.totalmem();
  switch (unit) {
    case 'kb':
      return Math.floor(mem / 1024);
    case 'mb':
      return Math.floor(mem / 1024 / 1024);
    case 'gb':
      return Math.floor(mem * (1e-9));
    default:
      return Math.floor(mem);
  }
}
