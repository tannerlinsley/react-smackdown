import styled from 'styled-components'

const hljsThemes = {
  light: '.hljs{display:block;overflow-x:auto;padding:0.5em;color:#383a42;background:#fafafa}.hljs-comment,.hljs-quote{color:#a0a1a7;font-style:italic}.hljs-doctag,.hljs-keyword,.hljs-formula{color:#a626a4}.hljs-section,.hljs-name,.hljs-selector-tag,.hljs-deletion,.hljs-subst{color:#e45649}.hljs-literal{color:#0184bb}.hljs-string,.hljs-regexp,.hljs-addition,.hljs-attribute,.hljs-meta-string{color:#50a14f}.hljs-built_in,.hljs-class .hljs-title{color:#c18401}.hljs-attr,.hljs-variable,.hljs-template-variable,.hljs-type,.hljs-selector-class,.hljs-selector-attr,.hljs-selector-pseudo,.hljs-number{color:#986801}.hljs-symbol,.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-title{color:#4078f2}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:bold}.hljs-link{text-decoration:underline}',
  dark: '.hljs{display:block;overflow-x:auto;padding:.5em;color:#abb2bf;background:#282c34}.hljs-comment,.hljs-quote{color:#5c6370;font-style:italic}.hljs-doctag,.hljs-formula,.hljs-keyword{color:#c678dd}.hljs-deletion,.hljs-name,.hljs-section,.hljs-selector-tag,.hljs-subst{color:#e06c75}.hljs-literal{color:#56b6c2}.hljs-addition,.hljs-attribute,.hljs-meta-string,.hljs-regexp,.hljs-string{color:#98c379}.hljs-built_in,.hljs-class .hljs-title{color:#e6c07b}.hljs-attr,.hljs-number,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-pseudo,.hljs-template-variable,.hljs-type,.hljs-variable{color:#d19a66}.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-symbol,.hljs-title{color:#61aeee}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.hljs-link{text-decoration:underline}'
};

export default styled.div`
  ${props => hljsThemes[props.theme]}

  ul {
    list-style: disc;
    padding-left: 2rem;
  }

  img {
    max-width: 100%;
  }

  blockquote {
    border-left: 3px solid #b6b3da;
    padding-left: 1rem;
    font-style: italic;
  }

  pre, code {
    font-family: monospace;
  }

  code {
    border-radius: 4px;
    padding: 0 .25rem;
    background: #F4F5F6;
    display: inline;
    line-height: 1.5;
    word-break: break-all;
  }

  pre code {
    font-size: 1.1rem;
    display: inline-block;
    color: #343240;
    border: none;
    word-break: break-all;
    white-space: pre-wrap;
    width: 100%;
  }

  pre {
    display: flex;
    border-radius: 4px;
    font-family: Roboto Mono, monospace;
    border-radius: 3px;
    line-height: 19px;
  }

  table {
    display: block;
    width: 100%;
    overflow: auto;
  }

  table th {
    font-weight: bold;
  }

  table th,
  table td {
    padding: 6px 13px;
    border: 1px solid #ddd;
  }

  table tr {
    background-color: #fff;
    border-top: 1px solid #ccc;
  }

  table tr:nth-child(2n) {
    background-color: #f8f8f8;
  }

  svg {
    height: 18px;
    width: 18px;
    margin-right: .5rem;
    margin-bottom: 2px;
  }

  hr {
    border-bottom-color: #eee;
    height: .25em;
    padding: 0;
    margin: 24px 0;
    background-color: #e7e7e7;
    border: 0;
  }

  .hljs {
    flex: 1 1 auto;
    padding: 1rem;
  }
`
