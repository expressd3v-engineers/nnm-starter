import styled from "styled-components";

interface Props {
    theme?: any
}

const PageWrap = styled.div<Props>`
  min-height: calc(100vh - ${props => props.theme.header.height});
`

export default PageWrap