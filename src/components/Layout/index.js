import React, { memo } from 'react'

import TopNavigation from 'components/TopNavigation'
import LeftNavigation from 'components/LeftNavigation'
import Container from 'components/Container'

function Layout ({ children }) {
  return <>
    <TopNavigation/>
    <LeftNavigation/>
    <Container>
      {children}
    </Container>
  </>
}

export default memo(Layout)
