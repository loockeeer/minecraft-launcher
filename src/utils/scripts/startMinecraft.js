/* eslint-disable no-unused-vars */
const app = window.require('electron').remote;
const { Client } = app.require('minecraft-launcher-core');

/**
 * Launches the game
 * @param {string} javaPath Java path
 * @param {string} ramMin Minimum RAM for JVM
 * @param {string} ramMax Maximum RAM for JVM
 * @param {string} userProfile Game jar path
 * @param {{type: string, number: number}} version
 * @param {string} forgePath Forge installer jar path
 * @param {string} gamePath Game path
 */
export default function startMinecraft({
  userProfile, ramMin, ramMax, version, javaPath, forgePath, gamePath,
}) {
  const options = {
    clientPackage: null,
    authorization: userProfile,
    root: gamePath,
    version,
    memory: {
      min: `${ramMin}G`,
      max: `${ramMax}G`,
    },
    javaPath,
    forge: forgePath,
  };
  const launcher = new Client();
  return () => {
    launcher.launch(options);
    return launcher;
  };
}
