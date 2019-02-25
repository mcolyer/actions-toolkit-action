const { Toolkit } = require('actions-toolkit')
const tools = new Toolkit()

const scriptPath = `/.github/actions/${tools.context.event}.js`
require(process.env.GITHUB_WORKSPACE+scriptPath)(tools)
