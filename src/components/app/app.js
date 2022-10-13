import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          code: "Д000168",
          address: "Можайский вал 10",
          number: "89856660607",
          fall: false,
          like: false,
          id: 1,
        },
        {
          code: "Д000669",
          address: "Салярьево",
          number: "89777721077",
          fall: false,
          like: false,
          id: 2,
        },
        {
          code: "Д000008",
          address: "Малыгина 7",
          number: "89207568486",
          fall: false,
          like: false,
          id: 3,
        },
      ],
      trem: "",
      filter: "allPoints",
      widthScreen: window.innerWidth <= 576 ? window.innerWidth : "",
    };
  }

  setLocalStorage = (data) => {
    console.log(data);
    localStorage.setItem("data", JSON.stringify(data));
  };

  addItems = (code, address, number) => {
    const arrayData = {
      code: code,
      address: address,
      number: number,
      fall: false,
      like: false,
      id: Math.random(),
    };

    this.setState(({ data }) => {
      const newArrData = [...data, arrayData];
      this.setLocalStorage(newArrData);
      return {
        data: newArrData,
      };
    });
  };

  setId() {
    this.setState(({ id }) => ({ id: (id = Math.random()) }));
  }

  onTogglePriority = (index) => {
    this.setState(({ data }) => {
      const newArrayData = data.map((item) => {
        if (index === item.id)
          return { ...item, like: !item.like, fall: false };
        return item;
      });
      this.setLocalStorage(newArrayData);
      return {
        data: newArrayData,
      };
    });
  };

  onToggleNotPriority = (index) => {
    this.setState(({ data }) => {
      const newArrayData = data.map((item) => {
        if (index === item.id)
          return { ...item, fall: !item.fall, like: false };
        return item;
      });
      this.setLocalStorage(newArrayData);
      return {
        data: newArrayData,
      };
    });
  };

  onDeleteItem = (id) => {
    const { data } = this.state;
    const res = window.confirm(`are you shure delete: ${data[id].code}`);
    if (res) {
      this.setState(({ data }) => {
        const newArrayData = data.filter((item, index) => id !== index);
        this.setLocalStorage(newArrayData);
        return {
          data: newArrayData,
        };
      });
    }
  };

  search = ({ trem }) => {
    this.setState({ trem });
  };

  onLoadSearch = (item, trem) => {
    return item.filter((item) => {
      if (trem.length === 0) {
        return item;
      }
      return item.code.indexOf(trem) > -1;
    });
  };

  filterPoints = (filter) => {
    this.setState({ filter });
  };

  upLoadFilter = (filter, data) => {
    switch (filter) {
      case "priority":
        return data.filter((item) => item.like);
      case "notPriority":
        return data.filter((item) => item.fall);
      default:
        return data;
    }
  };

  resize = () => {
    const widthScreen = window.innerWidth;
    if (widthScreen <= 576) {
      this.setState({ widthScreen });
    } else {
      this.setState({ widthScreen: "" });
    }
  };

  changeWidth = () => {
    window.addEventListener("resize", this.resize);
  };

  getLocalStorage = (oldData) => {
    let newData = JSON.parse(localStorage.getItem("data"));
    window.addEventListener("DOMContentLoaded", () => {
      this.setState(({ data }) => ({ data: newData ? newData : oldData }));
    });
  };

  render() {
    const { data, trem, filter, widthScreen } = this.state;
    this.getLocalStorage(data);
    this.changeWidth();
    const allPoints = data.length;
    const allPriority = data.filter((item) => item.like).length;
    const notPriority = data.filter((item) => item.fall).length;
    const searchData = this.onLoadSearch(data, trem);
    const filterData = this.upLoadFilter(filter, searchData);
    return (
      <div className="app">
        <AppInfo
          points={allPoints}
          priority={allPriority}
          notPriority={notPriority}
        />
        <div className="search-panel">
          <SearchPanel onSearch={this.search} />
          <AppFilter filterPoints={this.filterPoints} />
        </div>

        <EmployeesList
          data={filterData}
          width={widthScreen}
          onTogglePriority={this.onTogglePriority}
          onToggleNotPriority={this.onToggleNotPriority}
          onDeleteItem={this.onDeleteItem}
        />
        <EmployeesAddForm addItems={this.addItems} />
      </div>
    );
  }
}

export default App;
