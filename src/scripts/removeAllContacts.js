import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    writeContacts([]);
    return null;
  } catch (error) {
    console.error('Faled to clear the contacts!', error);
  }
};

removeAllContacts();
