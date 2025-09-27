import NodeCache from 'node-cache';
import settingsService from './settingsService';

const cache = new NodeCache({ stdTTL: 60 });

export async function getCachedSettings() {
  const cached = cache.get('settings');
  if (cached) return cached;
  const settings = await settingsService.getSettings();
  cache.set('settings', settings);
  return settings;
}

export function invalidateSettingsCache() {
  cache.del('settings');
}
