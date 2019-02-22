import { Layout } from 'antd'
import styled from 'styled-components'

const { Content, Footer } = Layout

export const AppLayout = styled(Layout)`
  height: 100%;
`
export const AppContent = styled(Content)`
  height: 100%;
  padding: 20px 20px 0 20px;
`

export const AppDiv = styled.div`
  height: 100%;
  /* background: ${props => props.background ? props.background : '#fff'}; */
  /* padding: 0 10px 0 10px; */
  margin: 10px;
  overflow: auto;
  /* border: 1px solid black; */
  display: ${props => props.grid ? 'grid' : props.display ? props.display : 'flex'};
  flex-direction: column; 
  justify-content: ${props => props.justify ? props.justify : null};
  grid-template-columns: ${props => props.grid ? props.grid : null};
`

export const Div = styled.div`
  height: calc(100% - 20px);
  background: ${props => props.background ? props.background : '#fff'};
  padding: 10px;
  margin: 10px;
  /* overflow: auto; */
  /* border: 1px solid black; */
  display: ${props => props.grid ? 'grid' : props.display ? props.display : 'flex'};
  flex-direction: column; 
  justify-content: ${props => props.justify ? props.justify : null};
  grid-template-columns: ${props => props.grid ? props.grid : null};
`

export const AppFooter = styled(Footer)`
  text-align: center;
`
