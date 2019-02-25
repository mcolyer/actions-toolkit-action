workflow "run push" {
  on = "push"
  resolves = "run file"
}

action "run file" {
  uses = "./"
}
