import React from 'react';
import Router, { RouteHandler } from 'react-router';

const {
  DropDownIcon,
  DropDownMenu,
  FontIcon,
  RaisedButton,
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle,
  Styles
} = require('material-ui');

const { Colors, Spacing, Typography } = Styles;
const ThemeManager = Styles.ThemeManager;
const DefaultRawTheme = Styles.LightRawTheme;

let filterOptions = [
  { payload: '1', text: 'All Broadcasts' },
  { payload: '2', text: 'All Voice' },
  { payload: '3', text: 'All Text' },
  { payload: '4', text: 'Complete Voice' },
  { payload: '5', text: 'Complete Text' },
  { payload: '6', text: 'Active Voice' },
  { payload: '7', text: 'Active Text' },
];
let iconMenuItems = [
  { payload: '1', text: 'Download' },
  { payload: '2', text: 'More Info' }
];

class Root extends React.Component {
  constructor(){
    super();
  }

  componentWillMount(){
    this.setState({
      static : "/public/",
      muiTheme: ThemeManager.getMuiTheme(DefaultRawTheme)
    });
  }

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
      static : this.state.static
    };
  }

  render(){
    return (
      <div>
        <Toolbar>
          <ToolbarGroup key={0} float="left">
            <DropDownMenu menuItems={filterOptions} />
          </ToolbarGroup>
          <ToolbarGroup key={1} float="right">
            <ToolbarTitle text="Options" />
            <FontIcon className="muidocs-icon-custom-sort" />
            <DropDownIcon iconClassName="muidocs-icon-navigation-expand-more" menuItems={iconMenuItems} />
            <ToolbarSeparator/>
            <RaisedButton label="Create Broadcast" primary={true} />
          </ToolbarGroup>
        </Toolbar>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    );
  }
}

Root.contextTypes = {
  router: React.PropTypes.func
};

Root.childContextTypes = {
  muiTheme: React.PropTypes.object,
  router: React.PropTypes.func,
  static: React.PropTypes.string.isRequired
};

module.exports = Root;