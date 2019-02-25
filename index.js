const { Toolkit } = require('actions-toolkit')
const tools = new Toolkit()

// TODO: Detect if script exists and fails gracefully if it doesn't
const scriptPath = `/.github/actions/${tools.context.event}.js`
require(tools.workspace + scriptPath)(tools)
