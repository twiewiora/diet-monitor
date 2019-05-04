import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './Layout.css';
import Toolbar from '@material-ui/core/Toolbar';

const Layout = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <AppBar position='static'>
        <Toolbar className='LayoutToolbar'>
          <text>LOGO</text>
          <MenuIcon/>
        </Toolbar>
      </AppBar>
      <Tabs fullWidth={true} value={value} onChange={(_, value) => setValue(value)}>
        <Tab label="Item One" />
        <Tab label="Item Two" />
      </Tabs>

    </div>);
};

export default Layout;