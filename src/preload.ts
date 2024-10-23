// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  startLnd: (args: any) => ipcRenderer.invoke("lnd-start", args),

  getInfo: () => ipcRenderer.invoke("getInfo"),
  // Add more functions as needed
});
