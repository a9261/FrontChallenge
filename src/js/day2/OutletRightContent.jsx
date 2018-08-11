import React, { Component } from 'react';

export default class OutletRightContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInitDone: false,
    };
  }

  componentDidMount() {
    this.setState({
      isInitDone: true,
    });
  }

  render() {
    const { isInitDone } = this.state;
    const { children } = this.props;
    return (
      <div>
        {isInitDone
          ? children
          : <div>加载中...</div>
                }
      </div>
    );
  }
}
