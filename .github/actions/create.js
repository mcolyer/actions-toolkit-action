// Triggered when repository, branch, or tag is created.
//
// Event properties:
//   ref_type - the type of objection that was created one of `branch`, or `tag`
//   ref - The git ref (or `null` if only a repository was created).
//   master_branch - The name of the repository's default branch (usually `master`).
//   description - The repository's current description.
//

function handleNewTag(tools) {
  tools.log.info(`New tag created: ${tools.context.payload.ref}`)

  if (tools.context.payload.ref.match(/v[0-9]+\.[0-9]+\.[0-9]+/)) {
    tools.exit.success("Valid version")
  } else {
    tools.exit.failure("Invalid version, please use a version like v1.0.0.")
  }
}

function handleNewBranch(tools) {
  tools.log.info(`New branch created: ${tools.context.payload.ref}`)

  if (tools.context.payload.ref.includes("/")) {
    tools.exit.success("Valid branch name")
  } else {
    tools.exit.failure("Invalid branch name, please add a prefix (ie <prefix>/branch)")
  }
}

module.exports = exports = function(tools) {
  switch (tools.context.payload.ref_type) {
    case "tag":
      handleNewTag(tools)
      break;
    case "branch":
      handleNewBranch(tools)
  }
}
