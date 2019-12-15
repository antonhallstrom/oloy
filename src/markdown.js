import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import * as t from './theme'
import showdown from 'showdown'
import showdownHighlight from 'showdown-highlight'

export const githubGistTheme = css`
  h1 {
    font-size: ${t.theme.fontSizes[6]}px;
  }

  h2 {
    font-size: ${t.theme.fontSizes[5]}px;
  }

  h3 {
    font-size: ${t.theme.fontSizes[4]}px;
  }

  h4 {
    font-size: ${t.theme.fontSizes[3]}px;
  }

  h5 {
    font-size: ${t.theme.fontSizes[3]}px;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    line-height: 1.5;
  }

  b,
  strong {
    font-weight: bold;
  }

  p {
    font-weight: normal;
  }

  .hljs {
    display: block;
    overflow-x: auto;
    padding: 1rem;
    border-radius: 5px;
    color: #abb2bf;
    background: #282c34;
    font-family: monospace;
  }
  .hljs-comment,
  .hljs-quote {
    color: #5c6370;
    font-style: italic;
  }
  .hljs-doctag,
  .hljs-keyword,
  .hljs-formula {
    color: #c678dd;
  }
  .hljs-section,
  .hljs-name,
  .hljs-selector-tag,
  .hljs-deletion,
  .hljs-subst {
    color: #e06c75;
  }
  .hljs-literal {
    color: #56b6c2;
  }
  .hljs-string,
  .hljs-regexp,
  .hljs-addition,
  .hljs-attribute,
  .hljs-meta-string {
    color: #98c379;
  }
  .hljs-built_in,
  .hljs-class .hljs-title {
    color: #e6c07b;
  }
  .hljs-attr,
  .hljs-variable,
  .hljs-template-variable,
  .hljs-type,
  .hljs-selector-class,
  .hljs-selector-attr,
  .hljs-selector-pseudo,
  .hljs-number {
    color: #d19a66;
  }
  .hljs-symbol,
  .hljs-bullet,
  .hljs-link,
  .hljs-meta,
  .hljs-selector-id,
  .hljs-title {
    color: #61aeee;
  }
  .hljs-emphasis {
    font-style: italic;
  }
  .hljs-strong {
    font-weight: bold;
  }
  .hljs-link {
    text-decoration: underline;
  }
`

const HtmlContent = styled.div`
  ${githubGistTheme}
`

export function Markdown(props) {
  const converter = new showdown.Converter({ extensions: [showdownHighlight] })
  converter.setFlavor('github')
  const html = converter.makeHtml(props.markdown)
  return <HtmlContent dangerouslySetInnerHTML={{ __html: html }} />
}

Markdown.propTypes = {
  markdown: PropTypes.string,
}
