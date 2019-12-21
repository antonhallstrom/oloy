import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

import { Box } from './box'
import { Markdown } from './markdown'
import { PortfolioList } from './portfolio-list'
import * as Table from './data-table'

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

export function PortfolioProjectLayout(props) {
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
        <PortfolioList
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
      <Table.Table>
        <Table.Header>
          <Table.Row>
            <Table.Heading colspan="2">Source code</Table.Heading>
            <Table.Heading colspan="2">In action</Table.Heading>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Data>
              <a href="https://github.com/antonhallstrom/numbers">
                <Table.LinkStyle>Numbers</Table.LinkStyle>
              </a>
            </Table.Data>
            <Table.Data>
              <Link to="/">
                <Table.LinkStyle>Project name</Table.LinkStyle>
              </Link>
            </Table.Data>
          </Table.Row>
        </Table.Body>
      </Table.Table>

      <Box fontSize={6} pt={3}>
        Manifest
      </Box>
      <Table.Table>
        <Table.Header>
          <Table.Row>
            <Table.Heading colspan="2">Language</Table.Heading>
            <Table.Heading colspan="2">Size</Table.Heading>
            <Table.Heading colspan="2">Time spent</Table.Heading>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Data>Javascript</Table.Data>
            <Table.Data>5kb</Table.Data>
            <Table.Data>1 hour</Table.Data>
          </Table.Row>
        </Table.Body>
      </Table.Table>

      <Box fontSize={6} pt={3}>
        Sources
      </Box>
      <Table.Table>
        <Table.Header>
          <Table.Row>
            <Table.Heading colspan="2">Idea</Table.Heading>
            <Table.Heading colspan="2">Concept</Table.Heading>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Data>
              <a href="https://github.com/karan/Projects">
                <Table.LinkStyle>karan</Table.LinkStyle>
              </a>
            </Table.Data>
            <Table.Data>
              <Box display="grid" gridGap={0}>
                <a href="https://en.wikipedia.org/wiki/Hindley%E2%80%93Milner_type_system">
                  <Table.LinkStyle>Milner type system</Table.LinkStyle>
                </a>
                <a href="https://en.wikipedia.org/wiki/Hindley%E2%80%93Milner_type_system">
                  <Table.LinkStyle>Pi</Table.LinkStyle>
                </a>
              </Box>
            </Table.Data>
          </Table.Row>
        </Table.Body>
      </Table.Table>
    </Box>
  )
}

PortfolioProjectLayout.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string,
  specification: PropTypes.string,
  retrospective: PropTypes.string,
  imgUrl: PropTypes.string,
  videoUrl: PropTypes.string,
  projectUrl: PropTypes.string,
}
