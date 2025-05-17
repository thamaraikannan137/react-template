// Third-party Imports
import styled from '@emotion/styled'

const StyledNavbar = styled.div`
  position: sticky;
  top: 0;
  z-index: 1100;
  backdrop-filter: blur(6px);
  background-color: var(--mui-palette-background-paper);
  transition: box-shadow 0.25s ease-in-out, background-color 0.25s ease-in-out;

  &.navbar-scrolled {
    box-shadow: var(--mui-customShadows-sm);
  }

  .navbar-content-container {
    padding-inline: 1.5rem;
    min-height: 64px;
  }
`

export default StyledNavbar 