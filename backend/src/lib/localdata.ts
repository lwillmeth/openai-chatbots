import { seedFiles } from "./seeds";

/**
 * Simple in-memory data store for development/testing.
 * This is NOT persistent and will reset when the server restarts.
 */

export interface BusinessContextRecord {
  apiKey: string;
  name: string;
  context: object;
}

type DataStore = Record<string, BusinessContextRecord>;

class LocalData {
  private static store: DataStore = {};

  // Call loadSeeds when the class is first loaded
  private static _initialized = (() => {
    LocalData.loadSeeds();
    return true;
  })();

  private static loadSeeds() {
    console.debug(`Loading ${seedFiles.length} seed files..`);

    for (const seed of seedFiles) {
      try {
        console.debug(`Loading seed file: ${seed?.name}`);
        // Validate required fields
        if (!seed?.apiKey || !seed?.name) {
          console.warn(`Seed file is missing required 'apiKey' or 'name'. Skipping.`);
          continue;
        }
        // context is everything except apiKey
        const { apiKey, ...context } = seed;
        this.store[apiKey] = {
          apiKey,
          name: seed.name,
          context,
        };
      } catch (err) {
        console.warn(`Failed to load seed file:`, err);
      }
    }
  }

  static get(key: string): BusinessContextRecord | undefined {
    return this.store[key];
  }

  static set(key: string, value: BusinessContextRecord): void {
    this.store[key] = value;
  }

  static delete(key: string): void {
    delete this.store[key];
  }

  static clear(): void {
    this.store = {};
  }

  static getAll(): DataStore {
    return { ...this.store };
  }
}

export default LocalData;