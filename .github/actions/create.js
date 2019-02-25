// Triggered when repository, branch, or tag is created.
//
// Event properties:
//   ref_type - the type of objection that was created one of
//     `repository`, `branch`, or `tag`
//   ref - The git ref (or `null` if only a repository was created).
//   master_branch - The name of the repository's default branch (usually `master`).
//   description - The repository's current description.
//
module.exports = exports = function(tools) {
  tools.log.success(tools.context.payload.ref_type)
}
