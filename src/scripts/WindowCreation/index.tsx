import { useState, useEffect } from 'react';
import { WebviewWindow } from '@tauri-apps/api/webviewWindow';
import { getCurrentWindow } from '@tauri-apps/api/window';

export const WindowCreation = () => {
  const [windows, setWindows] = useState([]);
  const [currentWindow, setCurrentWindow] = useState(null);

  useEffect(() => {
    const initializeWindow = async () => {
      try {
        const window = await getCurrentWindow();
        setCurrentWindow(window);
      } catch (error) {
        console.error('Error getting current window:', error);
      }
    };

    // Call initializeWindow to get the current window when the component mounts
    initializeWindow();
  }, []);

  const createWindow = () => {
    setWindows((prevState) => {
      const newWindowMeta = {
        id: `w${Date.now()}`,
        color: '#000000',
        alpha: 'FF',
      };

      const webview = new WebviewWindow(newWindowMeta.id, {
        url: '../colors.html',
        decorations: false,
        center: true,
        resizable: true,
        transparent: true,
        shadow: false,
      });

      return [...prevState, newWindowMeta];
    });
  };

  const removeWindow = (event) => {
    const windowId = event.target.id;
    setWindows((prevState) => {
      const webview = new WebviewWindow(windowId);

      try {
        webview.close();
      } catch (error) {
        console.error(`Failed to close window: ${windowId}`, error);
      }

      return prevState.filter((window) => window.id !== windowId);
    });
  };

  return (
    <div style={{ backgroundColor: `#00000000`, padding: '20px' }}>
      {currentWindow && (
        <p className="text-white">Hello, current window is ready!</p>
      )}
      {windows.map((colorWindow) => (
        <div
          key={colorWindow.id}
          className="color-container flex items-center justify-between rounded-md bg-gray-800 p-4"
          style={{
            backgroundColor: `${colorWindow.color}${colorWindow.alpha}`,
            minHeight: '80px',
          }}
        >
          <button
            id={colorWindow.id}
            className="rounded border border-red-500 px-2 py-1 text-red-500"
            onClick={removeWindow}
          >
            X
          </button>
        </div>
      ))}
      <button
        className="flat mt-4 rounded bg-blue-500 px-4 py-2 text-white"
        onClick={createWindow}
      >
        Create
      </button>
    </div>
  );
};
