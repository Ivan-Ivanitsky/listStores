import { Component } from "react";
import Button from "react-bootstrap/Button";
import "./app-filter.css";

class AppFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        {
          name: "allPoints",
          lable: "Все торговые точки",
          variant: "outline-success",
        },
        {
          name: "priority",
          lable: "Приоритетные",
          variant: "outline-primary",
        },
        {
          name: "notPriority",
          lable: "Не продают",
          variant: "outline-warning",
        },
      ],
    };
  }

  render() {
    return (
      <div className="btn-group">
        <Buttons buttons={this.state.buttons} fn={this.props} />
      </div>
    );
  }
}

const Buttons = (props) => {
  const { buttons, fn } = props;
  const filterBtn = (e) => {
    fn.filterPoints(e.target.name);
  };
  return buttons.map((item, i) => {
    return (
      <Button
        variant={item.variant}
        name={item.name}
        size="lg"
        type="button"
        className="button"
        key={i}
        onClick={(e) => filterBtn(e)}
      >
        {item.lable}
      </Button>
    );
  });
};

export default AppFilter;
