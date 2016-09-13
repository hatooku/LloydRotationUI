import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ActionHome from 'material-ui/svg-icons/action/home';
import { grey50 } from 'material-ui/styles/colors';
import { Link } from 'react-router'

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const RightMenu = () => (
  <IconMenu
    iconButtonElement={
        
      <IconButton><MoreVertIcon color={grey50}/></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Search" />
    <MenuItem primaryText="Logout" href="lloyd/logout"/>
  </IconMenu>
)

const Header = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    handleClick(e) {
        e.preventDefault();
        this.context.router.push('/');
        window.scrollTo(0, 0);
    },
    render() {
        return (
            <AppBar
                title={<span style={styles.title}>Lloyd Rotation</span>}
                onTitleTouchTap={this.handleClick}
                iconElementLeft={
                    <IconButton onTouchTap={this.handleClick}>
                        <img width="24px" src={require("../static/images/doubleL.png")}/>
                    </IconButton>
                }
                iconElementRight={<RightMenu />}
            />
        );
    }
});

export default Header;