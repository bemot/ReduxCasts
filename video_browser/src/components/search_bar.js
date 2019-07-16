// import Component as variable from React
// it was - import React from "react"
// very important technic
// it is equal declaration - const Component = React.Component;
// state - most confusing element of React
// state is plain javascript object is used to record and React
// to user events.
// Each class based component has state object
// if component changed it immediately rerenders.
// operator "state" initialize the state object
//
// import React, { Component } from "react";
// we receive oll functionality from facebook Componen 
// by declaring the class - SearchBar
import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;

