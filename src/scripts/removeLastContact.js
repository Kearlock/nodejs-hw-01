import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    let contacts = await readContacts();
    contacts.pop();
    await writeContacts(contacts);
    console.log(`One contact removed, ${contacts.length} left.`);
    return null;
  } catch (error) {
    console.error('Faled to remove last contact', error);
  }
};

removeLastContact();
