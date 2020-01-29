'use strict'

const WebpackManifestPlugin = require('webpack-manifest-plugin')

module.exports = config => {
  config.plugins.push(
    new WebpackManifestPlugin({
      fileName: 'asset-manifest.json',
      generate: (seed, files, entrypoints) => {
        const manifestFiles = files.reduce((manifest, file) => {
          manifest[file.name] = file.path
          return manifest
        }, seed)
        const entrypointFiles = entrypoints.main.filter(
          fileName => !fileName.endsWith('.map')
        )

        return {
          files: manifestFiles,
          entrypoints: entrypointFiles,
        }
      },
    })
  )
  return config
}
