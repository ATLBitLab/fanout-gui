import { lndStartFlags } from "./constants";

export default function Start() {
  const startLnd = async () => {
    try {
      window.electronAPI.startLnd(lndStartFlags);
    } catch (error) {
      console.error(error);
    }
  };

  const getInfo = async () => {
    try {
      const result = await window.electronAPI.getInfo();
      console.log(result);
    } catch (error) {
      console.error("error getting info.....", error);
    }
  };
  return (
    <div>
      <button onClick={startLnd}>Start Lnd </button>
      <button onClick={getInfo}>Get Info</button>
    </div>
  );
}
