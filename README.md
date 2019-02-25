## Actions Toolkit

Actions with less docker, just write javascript for your GitHub Actions
workflow.

Utilizes the fantastic https://github.com/JasonEtco/actions-toolkit, see
their documentation for what all the `tools` object can do within an
event handler.

### Installation

1. Copy `./.github/main.workflow` into your repository and change `uses = mcolyer/actions-toolkit-action`.
1. Copy `./.github/actions/*.js` into your repository and modify.
1. See `./.github/actions/create.js` for an example event handler.

### FAQ

#### Which version of node does this use?

11.10.1
