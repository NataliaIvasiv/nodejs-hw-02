import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        let contacts = JSON.parse(data);

        const delRandomContacts = contacts.filter(contact => Math.random() >= 0.5);

        await fs.writeFile(PATH_DB, JSON.stringify(delRandomContacts, null, 2), 'utf8');
        console.log('Видалення контактів з ймовірністю 50%.');

    } catch (err) {
        console.error('Помилка обробки файлу:', err);
    }
};

await thanos();
