import PropTypes from 'prop-types'
import * as R from 'ramda'
import React from 'react'

import { Box } from './box'
import { Markdown } from './markdown'
import { PortfolioList } from './portfolio-list'
import * as Table from './data-table'

const mapIndexed = R.addIndex(R.map)

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

function TableData(props) {
  if (R.is(Array, props.column)) {
    return (
      <Table.Data>
        {mapIndexed(
          (data, index) =>
            data.url ? (
              <a href={data.url} key={index}>
                <Table.LinkStyle>{data.label}</Table.LinkStyle>
              </a>
            ) : (
              <React.Fragment key={index}>{data.value}</React.Fragment>
            ),
          props.column
        )}
      </Table.Data>
    )
  } else {
    return (
      <Table.Data>
        {props.column.url ? (
          <a href={props.column.url}>
            <Table.LinkStyle>{props.column.label}</Table.LinkStyle>
          </a>
        ) : (
          props.column.value
        )}
      </Table.Data>
    )
  }
}

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

      <Table.Name>Specification</Table.Name>
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

      {mapIndexed(
        (data, index) => (
          <React.Fragment key={`${props.name}-${data.name}-table-${index}`}>
            <Table.Name>{data.name}</Table.Name>
            <Table.Table>
              <Table.Header>
                <Table.Row>
                  {mapIndexed(
                    (row, index) => (
                      <Table.Heading
                        key={`${props.name}-${data.name}-row-${index}`}
                        colspan="2"
                      >
                        <Box textAlign="left">{row.label}</Box>
                      </Table.Heading>
                    ),
                    data.rows
                  )}
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  {mapIndexed(
                    (column, index) => (
                      <TableData
                        key={`${props.name}-${data.name}-column-${index}`}
                        column={column}
                      />
                    ),
                    data.columns
                  )}
                </Table.Row>
              </Table.Body>
            </Table.Table>
          </React.Fragment>
        ),
        props.tables
      )}
    </Box>
  )
}

PortfolioProjectLayout.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string,
  images: PropTypes.object,
  tables: PropTypes.array,
}
