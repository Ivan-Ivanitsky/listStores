import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({
  data,
  onTogglePriority,
  onToggleNotPriority,
  onDeleteItem,
  width,
}) => {
  const emprySearch = <EmptySearch />;
  const elements = data.map((item, i) => {
    return (
      <EmployeesListItem
        {...item}
        key={i}
        onTogglePriority={() => onTogglePriority(item.id)}
        onToggleNotPriority={() => onToggleNotPriority(item.id)}
        onDeleteItem={() => onDeleteItem(i)}
        width={width}
      />
    );
  });

  return (
    <ul className="app-list list-group">
      {elements.length ? elements : emprySearch}
    </ul>
  );
};

const EmptySearch = () => {
  return (
    <div className="empty">
      <span>Таких торговых точек нет !</span>
    </div>
  );
};

export default EmployeesList;
