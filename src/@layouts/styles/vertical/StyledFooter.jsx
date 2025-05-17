// Third-party Imports
import styled from '@emotion/styled'

const StyledFooter = styled.footer`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 56px;
  background-color: var(--mui-palette-background-paper);
  transition: padding 0.25s ease-in-out;

  .footer-content-container {
    width: 100%;
    padding-inline: 1.5rem;
  }

  &.footer-fixed {
    position: sticky;
    bottom: 0;
    z-index: 1100;
    box-shadow: var(--mui-customShadows-sm);
  }

  &.footer-detached {
    margin: 1.5rem;
    border-radius: 6px;
    position: sticky;
    bottom: 1.5rem;
    z-index: 1100;
  }
`

export default StyledFooter 