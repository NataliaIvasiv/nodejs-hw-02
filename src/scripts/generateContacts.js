import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

const generateContacts = async (number) => {
  let array = [];

  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    array = JSON.parse(data);

  } catch (err) {
    if (err.code !== 'ENOENT') {
      console.error('Помилка читання файлу:', err);
      return;
    }
  }


  for (let i = 0; i < number; i++) {
    const responce = createFakeContact();
    array.push(responce);
  }



  try {
    await fs.writeFile(PATH_DB, JSON.stringify(array, null, 2), 'utf8');
    console.log('Дані успішно записані у файл.');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
};


generateContacts(5);
