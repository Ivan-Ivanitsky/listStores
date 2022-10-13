import { Component } from "react";
import "./search-panel.css";

class SearchPanel extends Component {
  state = {
    trem: "",
  };

  inputSearch = (e) => {
    const trem = e.target.value;
    this.setState({ trem: trem });
    this.props.onSearch({ trem });
  };

  render() {
    return (
      <input
        onChange={this.inputSearch}
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
      />
    );
  }
}

export default SearchPanel;
