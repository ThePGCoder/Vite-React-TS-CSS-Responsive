import { useState } from "react";

const useDrawer = () => {
  const [visible, setVisible] = useState(false);
  function toggle() {
    setVisible(!visible);
  }
  return { toggle, visible };
};

export default useDrawer;