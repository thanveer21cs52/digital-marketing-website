/**
 * Utility to load website data with localStorage overrides
 */
export const getWebsiteData = <T>(key: string, defaultData: T): T => {
  const overrides = localStorage.getItem(`website_override_${key}`);
  if (overrides) {
    try {
      return { ...defaultData, ...JSON.parse(overrides) };
    } catch (e) {
      console.error(`Error parsing overrides for ${key}`, e);
      return defaultData;
    }
  }
  return defaultData;
};

export const saveWebsiteOverride = (key: string, data: any) => {
  localStorage.setItem(`website_override_${key}`, JSON.stringify(data));
  // Dispatch event to notify other components
  window.dispatchEvent(new Event('websiteDataUpdated'));
};
