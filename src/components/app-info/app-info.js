import "./app-info.css";

const AppInfo = ({ points, priority, notPriority }) => {
  return (
    <div className="app-info">
      <h1>Учет торговых точек компании Телетай</h1>
      <h2>Общее число торговых точек: {points}</h2>
      <h3>Приоритетные: {priority}</h3>
      <h4>Не продают: {notPriority}</h4>
    </div>
  );
};

export default AppInfo;
