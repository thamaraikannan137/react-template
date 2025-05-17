// Third-party Imports
import styled from '@emotion/styled'

const StyledContentWrapper = styled.div`
  flex-grow: 1;
  min-width: 0;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  transition: margin 0.25s ease-in-out;
  margin-left: 260px;

  @media (max-width: 1199.98px) {
    margin-left: 0;
  }
`

export default StyledContentWrapper 