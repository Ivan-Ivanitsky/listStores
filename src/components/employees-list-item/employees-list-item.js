import "./employees-list-item.css";

const EmployeesListItem = (props) => {
  const {
    code,
    address,
    number,
    onTogglePriority,
    like,
    onToggleNotPriority,
    fall,
    onDeleteItem,
    width,
  } = props;
  let classNames = "list-group-item d-flex justify-content-between";
  let classActive = "";

  const titleName = {
    codeTitle: "Код  точки:",
    addressTitle: "Адресс точки:",
    numberTitle: "Номер точки:",
    menuTitle: "Выбрать действие:",
  };

  if (like) {
    classNames += " like";
  }
  if (fall) {
    classNames += " fall";
    classActive += "active";
  }

  return (
    <li id="list-group" className={classNames}>
      <div className="list-group__wrapp-item">
        {width ? titleName.codeTitle : ""}
        <span className="list-group-item-label" onClick={onTogglePriority}>
          {code}
        </span>
      </div>
      <div className="list-group__wrapp-item">
        {width ? titleName.addressTitle : ""}
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={address}
        />
      </div>
      <div className="list-group__wrapp-item">
        {width ? titleName.numberTitle : ""}
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={number}
        />
      </div>
      <div className="btn-menu d-flex justify-content-center align-items-center">
        {width ? titleName.menuTitle : ""}
        <div className="btn-menu__wrapp">
          <button
            type="button"
            className="btn-sad btn-sm"
            onClick={onToggleNotPriority}
          >
            <i className={`fas fa-frown ${classActive}`}></i>
          </button>

          <button
            type="button"
            className="btn-trash btn-sm "
            onClick={onDeleteItem}
          >
            <i className="fas fa-trash"></i>
          </button>
          <i className="far fa-smile " onClick={onTogglePriority}></i>
        </div>
      </div>
    </li>
  );
};

export default EmployeesListItem;
