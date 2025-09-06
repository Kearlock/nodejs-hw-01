import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    let contacts = await readContacts();
    return contacts.length;
  } catch (error) {
    console.error('Faled to count the contacts', error);
  }
};

console.log(await countContacts());
