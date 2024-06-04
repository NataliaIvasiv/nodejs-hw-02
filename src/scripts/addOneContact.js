import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';




export const addOneContact = async () => {
    let dbArray;

    try {const data = await fs.readFile(PATH_DB);
        dbArray = JSON.parse(data);
    } catch(err) {
if (err.code !== 'ENOENT') {
      console.error('Помилка читання файлу:', err);
      return;
    }
    }

    const contact = createFakeContact();
    dbArray.push(contact);

    try {
    await fs.writeFile(PATH_DB, JSON.stringify(dbArray, null, 2), 'utf8');
    console.log('Дані успішно записані у файл.');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
};

await addOneContact();
