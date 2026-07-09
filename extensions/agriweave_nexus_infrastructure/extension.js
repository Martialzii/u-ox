const path = require('path');
const fs = require('fs');

function activate(context) {
  const root = path.resolve(__dirname, '..', '..');
  const releaseFile = path.join(root, 'outputs', 'agriweave_nexus_infrastructure', 'user_needs_record.md');

  if (fs.existsSync(releaseFile)) {
    console.log('AgriWeave Nexus Infrastructure release file found at:', releaseFile);
  }
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
