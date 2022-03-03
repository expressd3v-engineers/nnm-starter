import styled from "styled-components";

interface Props {
    theme?: any
}

const Container = styled.div<Props>`
  max-width: ${props => props.theme.size.container.maxWidth};
  padding: ${props => props.theme.size.container.padding};
  margin: auto;
`

export default Container