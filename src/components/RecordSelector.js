import React, { Component } from 'react'
import styled from 'styled-components'

//ToDo: 
//  !@#001) detect scrollbar width - not hard code 17px
//  !@#002) remove thead height from tbody - not hard code 21px

const Table = styled.table`
  width: calc(100% - 17px); /*!@#001*/
  table-layout: fixed;
  border-collapse: collapse;
  cursor: pointer;
  word-wrap: break-word;

  > thead {
    display: block;
    background: black;
    color:#fff;
    /* width: calc(100% - 17px); */
  
    > tr {
      display: block;

      > td {
        padding: 5px;
        /* text-align: left; */
      }
    }
  }

  > tbody {
    display: block;
    width: calc(100% + 17px);
    overflow: auto;
    height: calc(100% - 21px);  /*!@#002*/

    > tr {
      display: block;
      border-collapse: collapse;
      border-bottom: 1px solid black;

      > th {
        /* padding: 5px; */
        /* text-align: left; */
      }
    }

    > tr:hover {
        background: ${props => props.highlightBackground ? props.highlightBackground : 'lightgrey'};
      }
  }
`

class RecordSelector extends Component {
  state={
    current: null
  }

  handleClick = (value, index) => {
    if (this.props.onClick) this.props.onClick(value, index)
    this.setState({current: index})
  }

  render() {
    let { height } = this.props
    let selectdBackground = this.props.selectdBackground ? this.props.selectdBackground : 'grey'
    let highlightBackground = this.props.highlightBackground ? this.props.highlightBackground : 'lightgrey'
    if (height === '100%') height = null
    return (
      <Table highlightBackground={highlightBackground} height={this.props.height}>
        <thead>
          <tr>
            { this.props.columns.map((x, thIndex) =>
              <th key={thIndex} style={{width: x.width ? x.width : '100%'}}>{x.name}</th>
            )}
          </tr>
        </thead>
        <tbody>
          { this.props.data.map((x, trIndex) => 
            <tr key={trIndex} onClick={(() => this.handleClick(x, trIndex))} style={{background: this.state.current === trIndex ? selectdBackground : null}}>
              { this.props.columns.map((col, tdIndex) =>
                tdIndex === this.props.columns.length - 1 ?
                <td key={tdIndex} style={{width: col.width ? col.width : '100%'}}>{x[col.dataIndex]}</td>
                :
                <td key={tdIndex} style={{width: col.width ? col.width : '100%'}}>{x[col.dataIndex]}</td>
              )}
            </tr>
          )}
        </tbody>
      </Table>     
    )
  }
}

export default RecordSelector