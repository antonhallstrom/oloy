import React from 'react'

import { BackLayer } from './back-layer'
import { Box } from '../box'
import { Content } from '../content'
import { FrontLayer } from './front-layer'
import { Subheader } from '../subheader'

export function Backdrop() {
  const [expand, setExpand] = React.useState(true)

  return (
    <Box width="100%" bg="backLayerBackground">
      <BackLayer expand={expand} onExpand={() => setExpand(true)} />
      <FrontLayer expand={!expand} onExpand={() => setExpand(false)}>
        <Subheader />
        {!expand && <Content />}
      </FrontLayer>
    </Box>
  )
}
