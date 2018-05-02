import showdown from 'showdown'

showdown.setFlavor('github')

export default (options = {}) => {
  const compiler = new showdown.Converter(options)
  return (markdown = '') => compiler.makeHtml(markdown)
}
