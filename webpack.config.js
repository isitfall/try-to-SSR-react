const clientConfig = require('./webpack.config.dev')
const serverConfig = require('./webpack.server.dev')
const developmentConfig  = [ serverConfig, clientConfig]

module.exports = process.env.NODE_ENV === 'development'
    ? developmentConfig
    : require('./webpack.config.prod')

