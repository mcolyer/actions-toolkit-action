## Actions Toolkit

Actions with less docker, just write javascript for your GitHub Actions
workflows.

Utilizes the super helpful https://github.com/JasonEtco/actions-toolkit. See
its documentation for what all the `tools` object can do within an event
handler.

### Installation

1. Copy `.github/main.workflow` into your repository and change `uses = ./` to `uses = mcolyer/actions-toolkit-action`.
1. Copy `.github/actions/*.js` into your repository and modify.
1. See [.github/actions/create.js](.github/actions/create.js) for an example
event handler.


### Testing locally

1. `brew install act`
1. `act <event-name> -e fixtures/<event-name>.json`

### FAQ

#### Which version of node does this use?

11.10.1
