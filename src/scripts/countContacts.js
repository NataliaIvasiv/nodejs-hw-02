import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
let dbArray;

    try {const data = await fs.readFile(PATH_DB);
        dbArray = JSON.parse(data);
        return dbArray.length;
    } catch(err) {
if (err.code !== 'ENOENT') {
      console.error('Помилка читання файлу:', err);
      return [];
    }
    }
};

console.log(await countContacts());
