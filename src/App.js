import React, { Component } from 'react';
import { Layout, Menu } from 'antd'
import { AppLayout, AppContent, AppDiv, AppFooter, Div } from './components/styles'
import RecordSelector from './components/RecordSelector'
import './App.css'

const { Header } = Layout

const columns = [
  { name: 'Id', width: '100px', dataIndex: 'id' },
  { name: 'Name', width: '100px', dataIndex: 'name' },
  { name: 'Age', width: '100px', dataIndex: 'age' },
  { name: 'Year', width: '100px', dataIndex: 'year' },
  { name: 'Country', width: '100px', dataIndex: 'country' },
]

// const columns = [
//   { name: 'Id', width: '10%', dataIndex: 'id' },
//   { name: 'Name', width: '25%', dataIndex: 'name' },
//   { name: 'Age', width: '25%', dataIndex: 'age' },
//   { name: 'Year', width: '15%', dataIndex: 'year' },
//   { name: 'Country', width: '25%', dataIndex: 'country' },
// ]


const data = [
  { id: 1, name: 'name', age: '43', country: 'australia', year: 2019 },
  { id: 2, name: 'name', age: '43', country: 'australia', year: 2019 },
  { id: 3, name: 'name', age: '43', country: 'australia', year: 2019 },
  { id: 4, name: 'name', age: '43', country: 'australia', year: 2019 },
  { id: 5, name: 'name', age: '43', country: 'australia', year: 2019 },
  { id: 6, name: 'name', age: '43', country: 'australia', year: 2019 },
  { id: 7, name: 'name', age: '43', country: 'australia', year: 2019 },
  { id: 8, name: 'name', age: '43', country: 'australia', year: 2019 },
  { id: 9, name: 'name', age: '43', country: 'australia', year: 2019 },
  { id: 10, name: 'name', age: '43', country: 'australia', year: 2019 },
  { id: 11, name: 'name', age: '43', country: 'australia', year: 2019 },
  { id: 12, name: 'name', age: '43', country: 'australia', year: 2019 },
  { id: 13, name: 'name', age: '43', country: 'australia', year: 2019 },
  { id: 14, name: 'name', age: '43', country: 'australia', year: 2019 },
  { id: 15, name: 'name', age: '43', country: 'australia', year: 2019 },
  { id: 16, name: 'name', age: '43', country: 'australia', year: 2019 },
  { id: 17, name: 'name', age: '43', country: 'australia', year: 2019 },
  { id: 18, name: 'really big name', age: '43', country: 'australia', year: 2019 },
  { id: 19, name: 'name', age: '43', country: 'australia', year: 2019 },
  { id: 20, name: 'name', age: '43', country: 'australia', year: 2019 },
  { id: 21, name: 'name', age: '43', country: 'australia', year: 2019 },
  { id: 22, name: 'name', age: '43', country: 'australia', year: 2019 },
  { id: 23, name: 'name', age: '43', country: 'australia', year: 2019 },
  { id: 24, name: 'name', age: '43', country: 'australia', year: 2019 },
  { id: 25, name: 'name', age: '43', country: 'australia', year: 2019 },
  { id: 26, name: 'name', age: '43', country: 'australia', year: 2019 },
  { id: 27, name: 'name', age: '43', country: 'australia', year: 2019 },
  { id: 28, name: 'name', age: '43', country: 'australia', year: 2019 },
  { id: 29, name: 'name', age: '43', country: 'australia', year: 2019 },
  { id: 30, name: 'name', age: '43', country: 'australia', year: 2019 },
  { id: 31, name: 'name', age: '43', country: 'australia', year: 2019 },
  { id: 32, name: 'name', age: '43', country: 'australia', year: 2019 },
  { id: 33, name: 'name', age: '43', country: 'australia', year: 2019 },
  { id: 34, name: 'name', age: '43', country: 'australia', year: 2019 },
  { id: 35, name: 'name', age: '43', country: 'australia', year: 2019 },
  { id: 36, name: 'name', age: '43', country: 'australia', year: 2019 },
  { id: 37, name: 'name', age: '43', country: 'australia', year: 2019 },
  { id: 38, name: 'name', age: '43', country: 'australia', year: 2019 },
  { id: 39, name: 'name', age: '43', country: 'australia', year: 2019 },
]

class App extends Component {
  state={
    id: 0
  }
  render() {
    return (
      <AppLayout className='layout'>
          <Header>
            <div className='logo' />
            <Menu
              theme='dark'
              mode='horizontal'
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key='1'>nav 1</Menu.Item>
              <Menu.Item key='2'>nav 2</Menu.Item>
              <Menu.Item key='3'>nav 3</Menu.Item>
            </Menu>
          </Header>
          <AppContent>
            <AppDiv grid='25% 75%' background=''>
              <Div>
                <RecordSelector
                  height='100%'
                  data={data}
                  columns={columns}
                  onClick={(value, index) => this.setState({id: value.id})}
                 />
                {/* <h1>List</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p> */}
              </Div>
              <Div justify='space-between'>
                <h1>Content({this.state.id})</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              </Div>
            </AppDiv>
            {/* <AppDiv>
              <h1>Content</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              <AppDiv grid='50% 50%'>
                <AppDiv justify='space-between'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                  <p>At the bottom</p>
                </AppDiv>
                <AppDiv>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </AppDiv>
              </AppDiv>
            </AppDiv> */}
          </AppContent>
          <AppFooter>
            Lance Mustard ©2019 Created by using React, Ant Design & styled-components
          </AppFooter>
        </AppLayout>
    )
  }
}

export default App;
