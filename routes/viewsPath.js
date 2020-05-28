const path = require('path');

const ViewsPath = (filename) => path.join(__dirname, '..', 'views', filename);

module.exports = ViewsPath;