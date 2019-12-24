import PropTypes from 'prop-types'
import * as R from 'ramda'
import React from 'react'

import { Box } from './box'
import { Markdown } from './markdown'
import { PortfolioList } from './portfolio-list'
import * as Table from './data-table'

const mapIndexed = R.addIndex(R.map)

/**
 * @typedef {Object} TableRow
 * @property {string} label - Row label.
 */

/**
 * @typedef {Object} TableColumn
 * @property {string} [label] - Label of link.
 * @property {string} [url] - Link url.
 * @property {string|number} [value] - Single value
 */

/**
 * @typedef {Object} Table
 * @property {string} name - Table name.
 * @property {Array.<TableRow>} rows - List of table rows.
 * @property {string.<TableColumn>} columns - List of table columns.
 */

/**
 * @typedef {Object} ProjectSpecification
 * @property {string} label - Label of specification.
 * @property {string} content - Markdown content.
 */

/**
 * @typedef {Object} ProjectImage
 * @property {string} alt - Alternate text for an image, if the image cannot be displayed.
 * @property {string} url - Image url.
 */

/**
 * @typedef {Object} Project
 * @property {string} key - Route identifier.
 * @property {string} description - Project description.
 * @property {string} name - Project name.
 * @property {Array.<ProjectImage>} images - List of project images.
 * @property {Array.<ProjectSpecification>} specification - List of project specifications.
 * @property {Array.<Table>} tables - List of project data tables.
 */

/**
 * Branch component that maps single or multiple items to table data.
 * @param {Object} props - React props.
 * @param {TableColumn} props.column
 */
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

/**
 * @param {Object} props - React props.
 * @param {Project.name} props.name
 * @param {Project.description} props.description
 * @param {Project.images} props.images
 * @param {Project.specification} props.specification
 * @param {Project.tables} props.specification
 */
export function PortfolioProjectLayout(props) {
  return (
    <Box py={['0px', 8, 8, 8]} px={['0px', 7, 8, 8]}>
      <Box fontSize={[7, 8]} fontWeight="bold">
        {props.name}
      </Box>
      <Box pt={1} fontSize={5}>
        {props.description}
      </Box>
      {mapIndexed(
        (image, index) => (
          <Box mt={1} key={`${props.name}-image-${image.url}-${index}`}>
            {R.not(image.url) ? (
              <Box bg="rgba(0, 0, 0, 0.05)" width="100%" height="300px" />
            ) : (
              <img alt={image.alt} src={image.url} />
            )}
          </Box>
        ),
        props.images
      )}

      <Table.Name>Specification</Table.Name>
      <Box my={2}>
        <PortfolioList
          items={mapIndexed(
            (item, index) => ({
              label: item.label,
              content: [
                <Markdown
                  key={`${props.name}-markdown-${index}`}
                  markdown={item.content}
                />,
              ],
            }),
            props.specification
          )}
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
  specification: PropTypes.array,
  tables: PropTypes.array,
}
