/**
 *
 * Checkbox
 *
 */

import React from 'react';

class Radio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      size: event.target.value
    });
    this.props.handleChangeSubmit(event.target.name,event.target.value);
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <label>
              <input
                name="sorting"
                type="radio"
                value="Mới nhất"
                checked={this.state.size === "Newest First"}
                onChange={this.handleChange}
              />
              Mới nhất
            </label>
          </li>

          <li>
            <label>
              <input
                name="sorting"
                type="radio"
                value="Giá cao đến thấp "
                checked={this.state.size === "Price High to Low"}
                onChange={this.handleChange}
              />
              Giá cao đến thấp
            </label>
          </li>

          <li>
            <label>
              <input
                name="sorting"
                type="radio"
                value="Price Low to High"
                checked={this.state.size === "Price Low to High"}
                onChange={this.handleChange}
              />
              Giá thấp đến cao
            </label>
          </li>
        </ul>
      </div>
    );
  }
}

export default Radio;
