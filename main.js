const core = require('@actions/core')
const parser = require('action-input-parser')
const fs = require('fs')

core.setCommandEcho(true)

try {
  const dirA = core.getInput('dirA')
  const dirB = core.getInput('dirB')

  const dirAConfigFile = fs.readFileSync(`${dirA}/package.json`)
  const dirAConfig = JSON.parse(dirAConfigFile)

  const dirBConfigFile = fs.readFileSync(`${dirB}/package.json`)
  const dirBConfig = JSON.parse(dirBConfigFile)

  const packages = parser.getInput('packages', { type: 'array' }) || []

  packages.forEach((package) => {
    if (
      !dirAConfig.dependencies[package] ||
      !dirBConfig.dependencies[package]
    ) {
      core.info('package does not exist in one of the dependencies ' + package)
      return
    }
    const packageA = dirAConfig.dependencies[package]
    const packageB = dirBConfig.dependencies[package]

    if (packageA !== packageB) {
      throw new Error(
        `Package Versions do not match for package ${package}. ${dirA}: ${pacakgeA}, ${dirB}: ${pacakgeB}`
      )
    }
  })
} catch (e) {
  core.setFailed(e.message)
}
