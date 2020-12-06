const app = window.require('electron').remote;
const { spawn } = app.require('child_process');

/**
 * Launches the game 
 * @param {string} javaPath Java path
 * @param {string} jarPath Game jar path
 * @param {string} ramMin Minimum RAM for JVM
 * @param {string} ramMax Maximum RAM for JVM
 */
export default function launchMinecraft({
  javaPath, jarPath, ramMin, ramMax,
}) {
  // Launch minecraft with arguments, and return the process
  const args = [
    `-Xms${ramMin}G`,
    `-Xmx${ramMax}G`,

  ];
}
