// localStorage.js

const APP_KEY = "installedApps";

export const getInstalledApps = () => {
  const stored = localStorage.getItem(APP_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const installApp = (id) => {
  const current = getInstalledApps();
  if (!current.includes(id)) {
    current.push(id);
    localStorage.setItem(APP_KEY, JSON.stringify(current));
  }
};

export const uninstallApp = (id) => {
  const current = getInstalledApps();
  const filtered = current.filter(appId => appId !== id);
  localStorage.setItem(APP_KEY, JSON.stringify(filtered));
};

export const isAppInstalled = (id) => {
  return getInstalledApps().includes(id);
};
