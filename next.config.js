module.exports = {
    webpack: config => {
        config.node = {
            fs: 'empty',
            tls: 'empty',
            net: 'empty'
        }

        return config
    },
    env: {
        ROOT: __dirname,
      }
}