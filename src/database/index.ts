import {DataSource} from 'typeorm';

import options from '../config/database';

class Database {
  private static instance: DataSource;

  private static getInstance(): DataSource {
    if (!Database.instance) {
      Database.instance = new DataSource(options);
    }
    return Database.instance;
  }

  public static async connect(): Promise<DataSource> {
    if (Database.getInstance().isInitialized) {
      return Promise.resolve(Database.getInstance());
    }
    return Database.getInstance().initialize();
  }
}

export default Database;
