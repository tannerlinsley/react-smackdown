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
  },
  webpack: {
		extra: {
			module: {
				rules: [
					{
						test: /\.md$/,
						use: [
              { loader: 'raw-loader' }
            ]
					}
				]
			}
		}
	}
}
