(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _RoutesJsx = require('Routes.jsx');

var _RoutesJsx2 = _interopRequireDefault(_RoutesJsx);

_reactDom2['default'].render(_RoutesJsx2['default'], document.getElementById('admin'));

},{"Routes.jsx":2,"react":"react","react-dom":"react-dom"}],2:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _componentsRootJsx = require('components/Root.jsx');

var _componentsRootJsx2 = _interopRequireDefault(_componentsRootJsx);

var _history = require('history');

var history = (0, _history.createHashHistory)({
  queryKey: false
});

var routes = {
  path: '/',
  component: _componentsRootJsx2['default'],
  childRoutes: [
    /*{ path: 'about', component: About },
    { path: 'inbox', component: Inbox }*/
  ]
};

module.exports = _react2['default'].createElement(_reactRouter2['default'], { history: history, routes: routes });

},{"components/Root.jsx":3,"history":"history","react":"react","react-router":"react-router"}],3:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _require = require('material-ui');

var DropDownIcon = _require.DropDownIcon;
var DropDownMenu = _require.DropDownMenu;
var FontIcon = _require.FontIcon;
var RaisedButton = _require.RaisedButton;
var Toolbar = _require.Toolbar;
var ToolbarGroup = _require.ToolbarGroup;
var ToolbarSeparator = _require.ToolbarSeparator;
var ToolbarTitle = _require.ToolbarTitle;
var Styles = _require.Styles;
var Colors = Styles.Colors;
var Spacing = Styles.Spacing;
var Typography = Styles.Typography;

var ThemeManager = Styles.ThemeManager;
var DefaultRawTheme = Styles.LightRawTheme;

var filterOptions = [{ payload: '1', text: 'All Broadcasts' }, { payload: '2', text: 'All Voice' }, { payload: '3', text: 'All Text' }, { payload: '4', text: 'Complete Voice' }, { payload: '5', text: 'Complete Text' }, { payload: '6', text: 'Active Voice' }, { payload: '7', text: 'Active Text' }];
var iconMenuItems = [{ payload: '1', text: 'Download' }, { payload: '2', text: 'More Info' }];

var Root = (function (_React$Component) {
  _inherits(Root, _React$Component);

  function Root() {
    _classCallCheck(this, Root);

    _get(Object.getPrototypeOf(Root.prototype), 'constructor', this).call(this);
  }

  _createClass(Root, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        'static': "/public/",
        muiTheme: ThemeManager.getMuiTheme(DefaultRawTheme)
      });
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        muiTheme: this.state.muiTheme,
        'static': this.state['static']
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          Toolbar,
          null,
          _react2['default'].createElement(
            ToolbarGroup,
            { key: 0, float: 'left' },
            _react2['default'].createElement(DropDownMenu, { menuItems: filterOptions })
          ),
          _react2['default'].createElement(
            ToolbarGroup,
            { key: 1, float: 'right' },
            _react2['default'].createElement(ToolbarTitle, { text: 'Options' }),
            _react2['default'].createElement(FontIcon, { className: 'muidocs-icon-custom-sort' }),
            _react2['default'].createElement(DropDownIcon, { iconClassName: 'muidocs-icon-navigation-expand-more', menuItems: iconMenuItems }),
            _react2['default'].createElement(ToolbarSeparator, null),
            _react2['default'].createElement(RaisedButton, { label: 'Create Broadcast', primary: true })
          )
        ),
        this.props.children || "Welcome to your Inbox"
      );
    }
  }]);

  return Root;
})(_react2['default'].Component);

Root.contextTypes = {
  router: _react2['default'].PropTypes.func
};

Root.childContextTypes = {
  muiTheme: _react2['default'].PropTypes.object,
  router: _react2['default'].PropTypes.func,
  'static': _react2['default'].PropTypes.string.isRequired
};

module.exports = Root;

},{"material-ui":"material-ui","react":"react","react-router":"react-router"}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVm9sdW1lcy93d3cvbnVhL2Fzc2V0cy9hZG0uanN4IiwiL1ZvbHVtZXMvd3d3L251YS9hc3NldHMvYWRtL1JvdXRlcy5qc3giLCIvVm9sdW1lcy93d3cvbnVhL2Fzc2V0cy9hZG0vY29tcG9uZW50cy9Sb290LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7cUJDQWtCLE9BQU87Ozs7d0JBQ0osV0FBVzs7Ozt5QkFDYixZQUFZOzs7O0FBRS9CLHNCQUFTLE1BQU0seUJBQVMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzs7QUNKMUQsWUFBWSxDQUFDOzs7O3FCQUNLLE9BQU87Ozs7MkJBQzRDLGNBQWM7Ozs7aUNBRWxFLHFCQUFxQjs7Ozt1QkFDZ0MsU0FBUzs7QUFDL0UsSUFBSSxPQUFPLEdBQUcsZ0NBQWtCO0FBQzlCLFVBQVEsRUFBRSxLQUFLO0NBQ2hCLENBQUMsQ0FBQzs7QUFFSCxJQUFNLE1BQU0sR0FBRztBQUNiLE1BQUksRUFBRSxHQUFHO0FBQ1QsV0FBUyxnQ0FBTTtBQUNmLGFBQVcsRUFBRTs7O0dBR1o7Q0FDRixDQUFDOztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUksNkRBQVEsT0FBTyxFQUFFLE9BQU8sQUFBQyxFQUFDLE1BQU0sRUFBRSxNQUFNLEFBQUMsR0FBRyxBQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztxQkNuQjlDLE9BQU87Ozs7MkJBQ1ksY0FBYzs7OztlQVkvQyxPQUFPLENBQUMsYUFBYSxDQUFDOztJQVR4QixZQUFZLFlBQVosWUFBWTtJQUNaLFlBQVksWUFBWixZQUFZO0lBQ1osUUFBUSxZQUFSLFFBQVE7SUFDUixZQUFZLFlBQVosWUFBWTtJQUNaLE9BQU8sWUFBUCxPQUFPO0lBQ1AsWUFBWSxZQUFaLFlBQVk7SUFDWixnQkFBZ0IsWUFBaEIsZ0JBQWdCO0lB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UyxDQUFDLElBQUk7QUFDNUIsWUFBUSxtQkFBTSxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVU7Q0FDMUMsQ0FBQzs7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSb3V0ZXMgZnJvbSAnUm91dGVzLmpzeCc7XG5cblJlYWN0RE9NLnJlbmRlcihSb3V0ZXMsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZG1pbicpKTsiLCIndXNlIHN0cmljdCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlciwgeyBSb3V0ZSwgUmVkaXJlY3QsIERlZmF1bHRSb3V0ZSwgTm90Rm91bmRSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCBSb290IGZyb20gJ2NvbXBvbmVudHMvUm9vdC5qc3gnO1xuaW1wb3J0IHsgY3JlYXRlSGlzdG9yeSwgY3JlYXRlSGFzaEhpc3RvcnksIGNyZWF0ZU1lbW9yeUhpc3RvcnkgfSBmcm9tICdoaXN0b3J5J1xubGV0IGhpc3RvcnkgPSBjcmVhdGVIYXNoSGlzdG9yeSh7XG4gIHF1ZXJ5S2V5OiBmYWxzZVxufSk7XG5cbmNvbnN0IHJvdXRlcyA9IHtcbiAgcGF0aDogJy8nLFxuICBjb21wb25lbnQ6IFJvb3QsXG4gIGNoaWxkUm91dGVzOiBbXG4gICAgLyp7IHBhdGg6ICdhYm91dCcsIGNvbXBvbmVudDogQWJvdXQgfSxcbiAgICB7IHBhdGg6ICdpbmJveCcsIGNvbXBvbmVudDogSW5ib3ggfSovXG4gIF1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gKDxSb3V0ZXIgaGlzdG9yeT17aGlzdG9yeX0gcm91dGVzPXtyb3V0ZXN9IC8+KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlciwgeyBSb3V0ZUhhbmRsZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5jb25zdCB7XG4gIERyb3BEb3duSWNvbixcbiAgRHJvcERvd25NZW51LFxuICBGb250SWNvbixcbiAgUmFpc2VkQnV0dG9uLFxuICBUb29sYmFyLFxuICBUb29sYmFyR3JvdXAsXG4gIFRvb2xiYXJTZXBhcmF0b3IsXG4gIFRvb2xiYXJUaXRsZSxcbiAgU3R5bGVzXG59ID0gcmVxdWlyZSgnbWF0ZXJpYWwtdWknKTtcblxuY29uc3QgeyBDb2xvcnMsIFNwYWNpbmcsIFR5cG9ncmFwaHkgfSA9IFN0eWxlcztcbmNvbnN0IFRoZW1lTWFuYWdlciA9IFN0eWxlcy5UaGVtZU1hbmFnZXI7XG5jb25zdCBEZWZhdWx0UmF3VGhlbWUgPSBTdHlsZXMuTGlnaHRSYXdUaGVtZTtcblxubGV0IGZpbHRlck9wdGlvbnMgPSBbXG4gIHsgcGF5bG9hZDogJzEnLCB0ZXh0OiAnQWxsIEJyb2FkY2FzdHMnIH0sXG4gIHsgcGF5bG9hZDogJzInLCB0ZXh0OiAnQWxsIFZvaWNlJyB9LFxuICB7IHBheWxvYWQ6ICczJywgdGV4dDogJ0FsbCBUZXh0JyB9LFxuICB7IHBheWxvYWQ6ICc0JywgdGV4dDogJ0NvbXBsZXRlIFZvaWNlJyB9LFxuICB7IHBheWxvYWQ6ICc1JywgdGV4dDogJ0NvbXBsZXRlIFRleHQnIH0sXG4gIHsgcGF5bG9hZDogJzYnLCB0ZXh0OiAnQWN0aXZlIFZvaWNlJyB9LFxuICB7IHBheWxvYWQ6ICc3JywgdGV4dDogJ0FjdGl2ZSBUZXh0JyB9LFxuXTtcbmxldCBpY29uTWVudUl0ZW1zID0gW1xuICB7IHBheWxvYWQ6ICcxJywgdGV4dDogJ0Rvd25sb2FkJyB9LFxuICB7IHBheWxvYWQ6ICcyJywgdGV4dDogJ01vcmUgSW5mbycgfVxuXTtcblxuY2xhc3MgUm9vdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3RhdGljIDogXCIvcHVibGljL1wiLFxuICAgICAgbXVpVGhlbWU6IFRoZW1lTWFuYWdlci5nZXRNdWlUaGVtZShEZWZhdWx0UmF3VGhlbWUpXG4gICAgfSk7XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG11aVRoZW1lOiB0aGlzLnN0YXRlLm11aVRoZW1lLFxuICAgICAgc3RhdGljIDogdGhpcy5zdGF0ZS5zdGF0aWNcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgIDxUb29sYmFyR3JvdXAga2V5PXswfSBmbG9hdD1cImxlZnRcIj5cbiAgICAgICAgICAgIDxEcm9wRG93bk1lbnUgbWVudUl0ZW1zPXtmaWx0ZXJPcHRpb25zfSAvPlxuICAgICAgICAgIDwvVG9vbGJhckdyb3VwPlxuICAgICAgICAgIDxUb29sYmFyR3JvdXAga2V5PXsxfSBmbG9hdD1cInJpZ2h0XCI+XG4gICAgICAgICAgICA8VG9vbGJhclRpdGxlIHRleHQ9XCJPcHRpb25zXCIgLz5cbiAgICAgICAgICAgIDxGb250SWNvbiBjbGFzc05hbWU9XCJtdWlkb2NzLWljb24tY3VzdG9tLXNvcnRcIiAvPlxuICAgICAgICAgICAgPERyb3BEb3duSWNvbiBpY29uQ2xhc3NOYW1lPVwibXVpZG9jcy1pY29uLW5hdmlnYXRpb24tZXhwYW5kLW1vcmVcIiBtZW51SXRlbXM9e2ljb25NZW51SXRlbXN9IC8+XG4gICAgICAgICAgICA8VG9vbGJhclNlcGFyYXRvci8+XG4gICAgICAgICAgICA8UmFpc2VkQnV0dG9uIGxhYmVsPVwiQ3JlYXRlIEJyb2FkY2FzdFwiIHByaW1hcnk9e3RydWV9IC8+XG4gICAgICAgICAgPC9Ub29sYmFyR3JvdXA+XG4gICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW4gfHwgXCJXZWxjb21lIHRvIHlvdXIgSW5ib3hcIn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUm9vdC5jb250ZXh0VHlwZXMgPSB7XG4gIHJvdXRlcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbn07XG5cblJvb3QuY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICByb3V0ZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBzdGF0aWM6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSb290OyJdfQ==
