import React from "react";
import PropTypes from "prop-types";
import "./tooltip.css";
import { Link } from 'react-router-dom'

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      typing: false
    };
  }
//   componentDidMount() {
//     fetch("https://api.github.com/users/" + this.props.gitUsername)
//       .then(response => response.json())
//       .then(data => {
//         this.setState({ data });

//       });
//   }

  render() {
    // let { data } = this.state;
    // let {username} = this.props.gitUsername;
    return (
      <div>tooltip</div>
    );
  }
}
Tooltip.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.

//   gitUsername: PropTypes.string.isRequired
};
Tooltip.defaultProps = {

//   gitUsername: null
};
export default Tooltip;