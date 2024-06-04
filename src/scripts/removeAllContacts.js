import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
    let dbArray = [];
    try {
    await fs.writeFile(PATH_DB, JSON.stringify(dbArray), 'utf8');
    console.log('Дані успішно записані у файл.');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }};

await removeAllContacts();
