//Working with JSX syntax
let sally = 'Sally Smith';
let mark = 'Mark Martin';
let holly = 'Holly Unlikely';
let mona = 'Mona valunj';
let Joe = 'Joe Jible';
let aaron = 'Arron valunj';
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'blue',
    'fontSize': '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, sally), /*#__PURE__*/React.createElement("li", null, mark), /*#__PURE__*/React.createElement("li", null, holly), /*#__PURE__*/React.createElement("li", null, mona.toUpperCase()), /*#__PURE__*/React.createElement("li", null, Joe.toUpperCase()), /*#__PURE__*/React.createElement("li", null, aaron));
ReactDOM.render(element, document.getElementById('content'));