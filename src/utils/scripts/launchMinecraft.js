const app = window.require('electron').remote;
const { spawn } = app.require('child_process');

export default function launchMinecraft({javaPath, jarPath, ramMin, ramMax}) {
    // Launch minecraft with arguments, and return the process
    const args = [
        "-Xms"+ramMin+"G",
        "-Xmx"+ramMax+"G",
        
    ]
}