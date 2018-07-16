import * as React from 'react'
import styled, { css } from 'react-emotion'
import { Docs, Link } from 'docz'
import { Github } from 'react-feather'

import { Container, Logo } from '@components/ui'

const Wrapper = styled('div')`
  height: 80px;
  width: 100%;
  background-image: linear-gradient(to right, #ff6e7f, #bfe9ff);

  ${Container.toString()} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
`

const LogoLink = styled(Link)`
  height: 30px;
`

const Menu = styled('div')`
  display: flex;
`

const linkStyle = (p: any) => css`
  color: ${p.theme.colors.main};
  opacity: 0.5;
  transition: opacity 0.2s;
  font-size: 15px;
  font-weight: 400;

  &.active,
  &:visited,
  &:hover {
    color: ${p.theme.colors.main};
    opacity: 1;
  }
`

const MenuLink = styled(Link)`
  ${linkStyle};
  margin: 0 10px;
`

const IconLink = styled('a')`
  ${linkStyle};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 20px;

  svg {
    stroke: ${p => p.theme.colors.main};
  }
`

export const isActive = (route: string) => (match: any, location: any) =>
  (match && match.url === location.pathname) ||
  (location.pathname.startsWith(route) && route !== '/')

export const Topbar = () => (
  <Wrapper>
    <Container>
      <LogoLink to="/">
        <Logo height={30} />
      </LogoLink>
      <Docs>
        {({ docs: allDocs }) => {
          const docs = allDocs.filter(doc => !doc.parent)

          return (
            <Menu>
              {docs.map(doc => (
                <MenuLink
                  key={doc.id}
                  to={doc.route}
                  isActive={isActive(doc.route)}
                >
                  {doc.name}
                </MenuLink>
              ))}
              <IconLink
                href="https://github.com/nicejade/docz-web-app"
                target="_blank"
              >
                <Github width={30} />
              </IconLink>
            </Menu>
          )
        }}
      </Docs>
    </Container>
  </Wrapper>
)
