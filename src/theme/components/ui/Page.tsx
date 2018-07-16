import * as React from 'react'
import { Fragment, SFC } from 'react'
import { PageProps } from 'docz'
import styled from 'react-emotion'

import { Container } from './Container'
import { Sidebar } from '@components/shared'

interface WrapperProps {
  padding: boolean
}

const Wrapper = styled<WrapperProps, 'div'>('div')`
  flex: 1;
  overflow-y: auto;

  ${Container.toString()} {
    display: flex;
    padding: ${p => (p.padding ? 50 : 0)}px 0;
  }
`

const Document = styled('div')`
  width: 100%;
  padding: 40px 0;
`

const FullpageDcument = styled('div')`
  min-height: 100%;
  width: 60%;
  max-width: 960px;
  margin: auto;
`

export const Page: SFC<PageProps> = ({ children, doc, ...props }) => {
  const { parent, sidebar, fullpage } = doc
  const showSidebar = Boolean(parent || sidebar)

  return (
    <Wrapper padding={!showSidebar}>
      {fullpage ? (
        <FullpageDcument>{children}</FullpageDcument>
      ) : (
        <Container>
          {showSidebar ? (
            <Fragment>
              <Sidebar parent={parent || doc.name} active={props.match.url} />
              <Document>{children}</Document>
            </Fragment>
          ) : (
            children
          )}
        </Container>
      )}
    </Wrapper>
  )
}
