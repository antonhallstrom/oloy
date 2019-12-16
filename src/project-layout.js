import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from './box'
import styled from '@emotion/styled'
import css from '@styled-system/css'
import { Markdown } from './markdown'
import { List } from './list'

const Table = styled.table`
  width: 100%;
  ${css({
    my: 2,
    color: 'tableColor',
  })}
`

const TableHeader = styled.thead`
  font-weight: 500;
  ${css({
    bg: 'tableHeaderBackground',
  })}
`

const TableRow = styled.tr`
  text-align: left;
  ${css({
    p: 0,
    borderLeftWidth: '1px',
    borderLeftStyle: 'solid',
    borderLeftColor: 'tableRowBorderColor',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: 'tableRowBorderColor',
  })}
`

const TableHeading = styled.th`
  font-weight: bold;
  ${css({
    p: 1,
    borderRightWidth: '1px',
    borderRightStyle: 'solid',
    borderRightColor: 'tableHeadingBorderColor',
  })}
`

const TableBody = styled.tbody`
  ${css({
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'tableBodyBorderColor',
  })}
`

const TableData = styled.td`
  ${css({
    color: 'tableColor',
    p: 1,
    borderLeftWidth: '1px',
    borderLeftStyle: 'solid',
    borderLeftColor: 'tableDataBorderColor',
    borderRightWidth: '1px',
    borderRightStyle: 'solid',
    borderRightColor: 'tableDataBorderColor',
  })}
`

const LinkStyle = styled.div`
  font-weight: bold;
  text-decoration: underline;
  ${css({
    color: 'tableColor',
  })}
`

// Feature
// Rule (as of Gherkin 6)
// Example (or Scenario)
// Given, When, Then, And, But (steps)
// Background
// Scenario Outline (or Scenario Template)
// Examples

const gherkinSpec = `
  **Feature**: Multiple site support
  &nbsp;&nbsp;Only blog owners can post to a blog, except administrators,
  &nbsp;&nbsp;who can post to all blogs.
  &nbsp;
  **Background**: Given a global administrator named "Greg"
  &nbsp;&nbsp;And a blog named "Greg's anti-tax rants"
  &nbsp;&nbsp;And a customer named "Dr. Bill"
  &nbsp;&nbsp;And a blog named "Expensive Therapy" owned by "Dr. Bill"
  &nbsp;
  **Scenario**: Dr. Bill posts to his own blog
  &nbsp;&nbsp;Given I am logged in as Dr. Bill
  &nbsp;&nbsp;When I try to post to "Expensive Therapy"
  &nbsp;&nbsp;Then I should see "Your article was published."
  &nbsp;
  **Scenario**: Dr. Bill tries to post to somebody else's blog, and fails
  &nbsp;&nbsp;Given I am logged in as Dr. Bill
  &nbsp;&nbsp;When I try to post to "Greg's anti-tax rants"
  &nbsp;&nbsp;Then I should see "Hey! That's not your blog!"
  &nbsp;
  **Scenario**: Greg posts to a client's blog
  &nbsp;&nbsp;Given I am logged in as Greg
  &nbsp;&nbsp;When I try to post to "Expensive Therapy"
  &nbsp;&nbsp;Then I should see "Your article was published."
`

export function ProjectLayout(props) {
  return (
    <Box py={['0px', 8, 8, 8]} px={['0px', 7, 8, 8]}>
      <Box fontSize={[7, 8]} fontWeight="bold">
        {props.name}
      </Box>
      <Box pt={1} fontSize={5}>
        {props.description}
      </Box>
      {/* <img alt={props.description} src={props.imgUrl} /> */}
      <Box mt={1}>
        <Box bg="rgba(0, 0, 0, 0.05)" width="100%" height="300px" />
      </Box>

      <Box fontSize={6} pt={3}>
        Specification
      </Box>
      <Box my={2}>
        <List
          items={[
            {
              label: 'Tools',
              content: [<Markdown key="markdown" markdown={gherkinSpec} />],
            },
            {
              label: 'Features',
              content: [<Markdown key="markdown" markdown={gherkinSpec} />],
            },
          ]}
        />
      </Box>

      <Box fontSize={6} pt={3}>
        View
      </Box>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeading colspan="2">Source code</TableHeading>
            <TableHeading colspan="2">In action</TableHeading>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableData>
              <a href="https://github.com/antonhallstrom/numbers">
                <LinkStyle>Numbers</LinkStyle>
              </a>
            </TableData>
            <TableData>
              <Link to="/">
                <LinkStyle>Project name</LinkStyle>
              </Link>
            </TableData>
          </TableRow>
        </TableBody>
      </Table>

      <Box fontSize={6} pt={3}>
        Manifest
      </Box>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeading colspan="2">Language</TableHeading>
            <TableHeading colspan="2">Size</TableHeading>
            <TableHeading colspan="2">Time spent</TableHeading>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableData>Javascript</TableData>
            <TableData>5kb</TableData>
            <TableData>1 hour</TableData>
          </TableRow>
        </TableBody>
      </Table>

      <Box fontSize={6} pt={3}>
        Sources
      </Box>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeading colspan="2">Idea</TableHeading>
            <TableHeading colspan="2">Concept</TableHeading>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableData>
              <a href="https://github.com/karan/Projects">
                <LinkStyle>karan</LinkStyle>
              </a>
            </TableData>
            <TableData>
              <Box display="grid" gridGap={0}>
                <a href="https://en.wikipedia.org/wiki/Hindley%E2%80%93Milner_type_system">
                  <LinkStyle>Milner type system</LinkStyle>
                </a>
                <a href="https://en.wikipedia.org/wiki/Hindley%E2%80%93Milner_type_system">
                  <LinkStyle>Pi</LinkStyle>
                </a>
              </Box>
            </TableData>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  )
}

ProjectLayout.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string,
  specification: PropTypes.string,
  retrospective: PropTypes.string,
  imgUrl: PropTypes.string,
  videoUrl: PropTypes.string,
  projectUrl: PropTypes.string,
}
