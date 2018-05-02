const PLUGIN_NAME = 'line-numbers'
const NEW_LINE_EXP = /\n(?!$)/g

export default function (Prism) {
  if (typeof document === 'undefined') {
    return
  }
  function getStyles (element) {
    if (!element) {
      return null
    }
    return window.getComputedStyle ? getComputedStyle(element) : element.currentStyle || null
  }

  const _resizeElement = element => {
    console.log('hello')
    const codeStyles = getStyles(element)
    const whiteSpace = codeStyles['white-space']

    if (whiteSpace === 'pre-wrap' || whiteSpace === 'pre-line') {
      const codeElement = element.querySelector('code')
      const lineNumbersWrapper = element.querySelector('.line-numbers-rows')
      let lineNumberSizer = element.querySelector('.line-numbers-sizer')
      const codeLines = codeElement.textContent.split(NEW_LINE_EXP)

      if (!lineNumberSizer) {
        lineNumberSizer = document.createElement('span')
        lineNumberSizer.className = 'line-numbers-sizer'

        codeElement.appendChild(lineNumberSizer)
      }

      lineNumberSizer.style.display = 'block'

      codeLines.forEach((line, lineNumber) => {
        lineNumberSizer.textContent = line || '\n'
        const lineSize = lineNumberSizer.getBoundingClientRect().height
        lineNumbersWrapper.children[lineNumber].style.height = `${lineSize}px`
      })

      lineNumberSizer.textContent = ''
      lineNumberSizer.style.display = 'none'
    }
  }

  window.addEventListener('resize', () => {
    Array.prototype.forEach.call(document.querySelectorAll(`pre.${PLUGIN_NAME}`), _resizeElement)
  })

  Prism.hooks.add('complete', env => {
    console.log('complete')
    if (!env.code) {
      return
    }

    // works only for <code> wrapped inside <pre> (not inline)
    const pre = env.element.parentNode
    const clsReg = /\s*\bline-numbers\b\s*/
    if (
      !pre ||
      !/pre/i.test(pre.nodeName) ||
      // Abort only if nor the <pre> nor the <code> have the class
      (!clsReg.test(pre.className) && !clsReg.test(env.element.className))
    ) {
      return
    }

    if (env.element.querySelector('.line-numbers-rows')) {
      // Abort if line numbers already exists
      return
    }

    if (clsReg.test(env.element.className)) {
      // Remove the class 'line-numbers' from the <code>
      env.element.className = env.element.className.replace(clsReg, ' ')
    }
    if (!clsReg.test(pre.className)) {
      // Add the class 'line-numbers' to the <pre>
      pre.className += ' line-numbers'
    }

    const match = env.code.match(NEW_LINE_EXP)
    const linesNum = match ? match.length + 1 : 1

    let lines = new Array(linesNum + 1)
    lines = lines.join('<span></span>')

    const lineNumbersWrapper = document.createElement('span')
    lineNumbersWrapper.setAttribute('aria-hidden', 'true')
    lineNumbersWrapper.className = 'line-numbers-rows'
    lineNumbersWrapper.innerHTML = lines

    if (pre.hasAttribute('data-start')) {
      pre.style.counterReset = `linenumber ${parseInt(pre.getAttribute('data-start'), 10) - 1}`
    }

    env.element.appendChild(lineNumbersWrapper)

    _resizeElement(pre)

    Prism.hooks.run('line-numbers', env)
  })

  Prism.hooks.add('line-numbers', env => {
    env.plugins = env.plugins || {}
    env.plugins.lineNumbers = true
  })

  /**
   * Global exports
   */
  Prism.plugins.lineNumbers = {
    getLine (element, number) {
      if (element.tagName !== 'PRE' || !element.classList.contains(PLUGIN_NAME)) {
        return
      }

      const lineNumberRows = element.querySelector('.line-numbers-rows')
      const lineNumberStart = parseInt(element.getAttribute('data-start'), 10) || 1
      const lineNumberEnd = lineNumberStart + (lineNumberRows.children.length - 1)

      if (number < lineNumberStart) {
        number = lineNumberStart
      }
      if (number > lineNumberEnd) {
        number = lineNumberEnd
      }

      const lineIndex = number - lineNumberStart

      return lineNumberRows.children[lineIndex]
    },
  }
}
