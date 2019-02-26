
events = [
"check_run",
"check_suite",
"commit_comment",
"create",
"delete",
"deployment",
"deployment_status",
"fork",
"gollum",
"issue_comment",
"issues",
"label",
"member",
"milestone",
"page_build",
"project",
"project_card",
"project_column",
"public",
"pull_request",
"pull_request_review_comment",
"pull_request_review",
"push",
"repository_dispatch",
"release",
"status",
"watch"]

events.forEach(function(event) {
  console.log(
  `workflow "${event}" {
  on = "${event}"
  resolves = "${event}"
}
action "${event}" {
  uses = "mcolyer/actions-toolkit-action@1.0.0"
}

  `
  )
})
