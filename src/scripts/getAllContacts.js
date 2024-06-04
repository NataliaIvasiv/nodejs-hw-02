import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
let dbArray;

    try {const data = await fs.readFile(PATH_DB);
        dbArray = JSON.parse(data);
        console.log(dbArray);
        return dbArray;
    } catch(err) {
if (err.code !== 'ENOENT') {
      console.error('Помилка читання файлу:', err);
      return [];
    }
    }
};

console.log(await getAllContacts());
