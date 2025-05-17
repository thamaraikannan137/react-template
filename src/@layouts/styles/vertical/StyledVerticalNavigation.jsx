// Third-party Imports
import styled from '@emotion/styled'

const StyledVerticalNavigation = styled.div`
  position: fixed;
  z-index: 1200;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--mui-palette-background-paper);
  transition: all 0.25s ease-in-out;
  box-shadow: var(--mui-customShadows-sm);
  width: ${({ width }) => width}px;
  left: 0;
  top: 0;

  &.nav-collapsed {
    width: ${({ theme }) => theme.spacing(20)};
  }

  @media (max-width: 1199.98px) {
    transform: translateX(-100%);
    transition: transform 0.25s ease-in-out;

    &.nav-visible {
      transform: translateX(0);
    }
  }

  .nav-header {
    padding: ${({ theme }) => theme.spacing(2)};
    border-bottom: 1px solid var(--mui-palette-divider);
  }

  .nav-content {
    flex-grow: 1;
    overflow-y: auto;
    padding-top: ${({ theme }) => theme.spacing(2)};
  }
`

export default StyledVerticalNavigation 