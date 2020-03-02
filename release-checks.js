'use strict'

// Release checks inspired by np
// https://github.com/sindresorhus/np/blob/master/source/git-util.js

const execa = require('execa')

function init() {
  verifyCurrentBranchIsMaster()
  verifyWorkingTreeIsClean()
  verifyRemoteHistoryIsClean()
  verifyCommitsPushedUpstream()
  console.log('Release checks passed.')
}

function run(command) {
  return execa.commandSync(command)
}

function verifyCommitsPushedUpstream() {
  const { stdout: cherry } = run('git cherry')
  if (cherry) {
    throw new Error(
      'Remote history is behind. Push commits upstream before releasing.'
    )
  }
}

function verifyCurrentBranchIsMaster() {
  const { stdout: branch } = run('git symbolic-ref --short HEAD')
  if (branch !== 'master') {
    throw new Error(
      'Not on the master branch. Move to the master branch first before releasing.'
    )
  }
}

function verifyRemoteHistoryIsClean() {
  const { stdout: historyCount } = run(
    'git rev-list --count --left-only @{u}...HEAD'
  )
  if (historyCount !== '0') {
    throw new Error(
      'Remote history is ahead. Pull changes from remote before releasing.'
    )
  }
}

function verifyWorkingTreeIsClean() {
  const { stdout: status } = run('git status --porcelain')
  if (status) {
    throw new Error(
      'Working tree has uncommitted changes. Commit or remove changes before releasing.'
    )
  }
}

init()
