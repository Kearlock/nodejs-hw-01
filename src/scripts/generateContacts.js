import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    let contacts = await readContacts();
    for (let i = 1; i <= number; i++) {
      contacts.push(createFakeContact());
    }
    await writeContacts(contacts);
    console.log(`${number} contact(s) added, ${contacts.length} total.`);
  } catch (error) {
    console.error('Faled to generate contacts', error);
  }
};

generateContacts(5);
