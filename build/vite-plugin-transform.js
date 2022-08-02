let env

const transformIndexHtml = code => {
  switch (env) {
    case 'test':
      return code.replace(/__INDEX__/, '/example/main.js')
    default:
      return code.replace(/__INDEX__/, '/src/main.js')
  }
}

const viteTransformPlugin = () => {
	const demoIndexTransFormPlugin = {
		name: 'demo-transform',
		enforce: 'pre',
		config(_, { mode }) {
			env = mode
		},
		transform(code, id) {
			if (id.endsWith('.html')) {
				return { code: transformIndexHtml(code), map: null }
			}
		},
		transformIndexHtml
	}

	return demoIndexTransFormPlugin
}

export default viteTransformPlugin