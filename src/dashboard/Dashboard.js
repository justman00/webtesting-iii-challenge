import React from "react";
import { connect } from "react-redux";
import Display from "../display/Display";
import Controls from "../controls/Controls";

class Dashboard extends React.Component {
  state = {
    locked: false,
    closed: false
  };

  render() {
    const { closed, locked } = this.props;

    return (
      <>
        <Display locked={locked} closed={closed} />
        <Controls
          locked={locked}
          closed={closed}
          toggleLocked={this.toggleLocked}
          toggleClosed={this.toggleClosed}
        />
      </>
    );
  }

  toggleLocked = () => {
    this.props.dispatch({ type: "toggleLocked" });
  };

  toggleClosed = () => {
    this.props.dispatch({ type: "toggleClosed" });
  };
}

export default connect(({ closed, locked }) => ({ closed, locked }))(Dashboard);
