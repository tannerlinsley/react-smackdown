module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactSmackdown',
      externals: {
        react: 'React'
      }
    }
  }
}
