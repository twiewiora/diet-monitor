import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './Layout.css';
import Toolbar from '@material-ui/core/Toolbar';
import MealsView from '../MealsView/MealsView';
import StatsView from '../StatsView/StatsView';

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
        <Tab label={<div className="TabHeader">Posiłki</div>}  />
        <Tab label={<div className="TabHeader">Statystyki</div>} />
      </Tabs>
      {value === 0? <MealsView />: null}
      {value === 1? <StatsView/>: null}
    </div>);
};

export default Layout;