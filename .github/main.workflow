workflow "check_run" {
  on = "check_run"
  resolves = "run"
}
workflow "check_suite" {
  on = "check_suite"
  resolves = "run"
}

workflow "commit_comment" {
  on = "commit_comment"
  resolves = "run"
}

workflow "create" {
  on = "create"
  resolves = "run"
}

workflow "delete" {
  on = "delete"
  resolves = "run"
}

workflow "deployment" {
  on = "deployment"
  resolves = "run"
}

workflow "deployment_status" {
  on = "deployment_status"
  resolves = "run"
}

workflow "fork" {
  on = "fork"
  resolves = "run"
}

workflow "gollum" {
  on = "gollum"
  resolves = "run"
}

workflow "issue_comment" {
  on = "issue_comment"
  resolves = "run"
}

workflow "issues" {
  on = "issues"
  resolves = "run"
}

workflow "label" {
  on = "label"
  resolves = "run"
}

workflow "member" {
  on = "member"
  resolves = "run"
}

workflow "milestone" {
  on = "milestone"
  resolves = "run"
}

workflow "page_build" {
  on = "page_build"
  resolves = "run"
}

workflow "project" {
  on = "project"
  resolves = "run"
}

workflow "project_card" {
  on = "project_card"
  resolves = "run"
}

workflow "project_column" {
  on = "project_column"
  resolves = "run"
}

workflow "public" {
  on = "public"
  resolves = "run"
}

workflow "pull_request" {
  on = "pull_request"
  resolves = "run"
}

workflow "pull_request_review_comment" {
  on = "pull_request_review_comment"
  resolves = "run"
}

workflow "pull_request_review" {
  on = "pull_request_review"
  resolves = "run"
}

workflow "push" {
  on = "push"
  resolves = "run"
}

workflow "repository_dispatch" {
  on = "repository_dispatch"
  resolves = "run"
}

workflow "release" {
  on = "release"
  resolves = "run"
}

workflow "status" {
  on = "status"
  resolves = "run"
}

workflow "watch" {
  on = "watch"
  resolves = "run"
}

action "run" {
  uses = "./"
}
