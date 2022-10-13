import { Component } from "react";
import "./employees-add-form.css";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          code: "",
          address: "",
          number: "",
        },
      ],
      empty: null,
    };
  }

  setInputValue = (e) => {
    const name = e.target.name;
    this.setState(({ data }) => ({
      data: Object.values(data).map((item) => {
        if (name) {
          item[name] = e.target.value;
        }
        return item;
      }),
    }));
  };

  clearInput = () => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        item.code = "";
        item.address = "";
        item.number = "";
        return item;
      }),
    }));
  };

  onSubmit = (e) => {
    const [{ code, address, number }] = this.state.data;
    e.preventDefault();
    if (!code || !address || !number) {
      this.setState((empty) => ({ empty: (empty = "Заполните всю форму !") }));
    } else {
      this.props.addItems(code, address, number);
      this.setState((empty) => ({ empty: (empty = null) }));
      this.clearInput();
    }
  };

  getId() {
    return Math.random();
  }

  render() {
    const { empty } = this.state;
    const [{ code, address, number }] = this.state.data;
    const errorInp = <ErrorInp empty={this.state.empty} />;
    return (
      <div className="app-add-form">
        {empty ? errorInp : ""}
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Код торговой точки"
            name="code"
            onChange={this.setInputValue}
            value={code}
          />
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Адресс"
            name="address"
            onChange={this.setInputValue}
            value={address}
          />

          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Телефон"
            name="number"
            onChange={this.setInputValue}
            value={number}
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

const ErrorInp = ({ empty }) => {
  return (
    <div>
      <span style={{ color: "rgb(212 79 79" }}>{empty}</span>
    </div>
  );
};

export default EmployeesAddForm;
