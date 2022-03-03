import {createGlobalStyle} from "styled-components";

interface Props {
    theme?: any
}

const GlobalStyles = createGlobalStyle<Props>`
  body {
    margin: 0;
    width: 100%;
    height: 100vh;
    font-family: ${props => props.theme.font.main};
  }

  h1, h2, h3, h4, h5, h6, p, span, li, a, div, input, label, button, header, footer {
    font-family: ${props => props.theme.font.main};
  }

  .ant-layout {
    background: ${props => props.theme.colors.bg};
  }
  
  .ant-layout-header {
    background: ${props => props.theme.header.bg};
    height: ${props => props.theme.header.height};
    padding: ${props => props.theme.header.padding};
    color: ${props => props.theme.header.color};
    box-shadow: ${props => props.theme.header.boxShadow};
    border-bottom: ${props => props.theme.header.border};
    line-height: 1;
    display: flex;
    align-items: center;
  }
  
  .ant-layout-footer{
    background: ${props => props.theme.footer.bg};
    padding: ${props => props.theme.footer.padding};
    border-top: ${props => props.theme.footer.border};
    color: ${props => props.theme.footer.color};
  }
  
`

export default GlobalStyles