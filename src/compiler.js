import showdown from 'showdown'

showdown.setFlavor('github')
const compiler = new showdown.Converter()

export default compiler
