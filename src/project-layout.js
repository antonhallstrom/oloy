import PropTypes from 'prop-types'
import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Box } from './box'
import styled from '@emotion/styled'
import css from '@styled-system/css'

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
    borderLeftColor: 'tableHeadingBorderColor',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: 'tableHeadingBorderColor',
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
    borderBottomColor: 'tableHeadingBorderColor',
  })}
`

const TableData = styled.td`
  ${css({
    color: 'tableColor',
    p: 1,
    borderLeftWidth: '1px',
    borderLeftStyle: 'solid',
    borderLeftColor: 'tableHeadingBorderColor',
    borderRightWidth: '1px',
    borderRightStyle: 'solid',
    borderRightColor: 'tableHeadingBorderColor',
  })}
`

const LinkStyle = styled.div`
  font-weight: bold;
  text-decoration: underline;
  ${css({
    color: 'tableColor',
  })}
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
      <img alt={props.description} src={props.imgUrl} />

      <Box fontSize={6} pt={3}>
        Specification
      </Box>

      <Box>{props.specification}</Box>

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

// Project

// Project title

// description

// spec

// source code

// plan

// screenshot

// Data table

// programming language

// Screenshots.
// Video clip.
// Link to repo.

// run instance of project.

// First glance

// Resources

// Retrospective

// portfolio/project_name, gives url to project.

// if mobile enable iframe and replace with link to running app.
// heroku platform cloud.
