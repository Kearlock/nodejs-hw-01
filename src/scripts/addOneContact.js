import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    let contacts = await readContacts();
    contacts.push(createFakeContact());

    await writeContacts(contacts);
    console.log(`One contact added, ${contacts.length} total.`);
  } catch (error) {
    console.error('Faled to add a contact', error);
  }
};

addOneContact();
