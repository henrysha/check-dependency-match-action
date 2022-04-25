const core = require('@actions/core')

try {
  const dirA = core.getInput('dirA')
  const dirB = core.getInput('dirB')

  const dirAConfig = require(`${dirA}/package.json`)
  const dirBConfig = require(`${dirB}/package.json`)

  const packages = core.getInput('packages') || []

  packages.forEach((package) => {
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
