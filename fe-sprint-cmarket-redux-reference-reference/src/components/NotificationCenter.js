import { useSelector } from "react-redux";
import Toast from "./Toast";

function NofiticationCenter({ getText }) {
  const state = useSelector((state) => state.notificationReducer);

  return (
    <div className="notification-container top-right">
      {state.notifications.map((n) => (
        <Toast
          key={n.uuid}
          text={n.message}
          dismissTime={n.dismissTime}
          getText={getText}
        />
      ))}
    </div>
  );
}

export default NofiticationCenter;
