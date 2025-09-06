import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const data = await readContacts();
    console.log(data, `\n Total ${data.length}.`);
    return data;
  } catch {
    (error) => console.error(error.message);
  }
};

await getAllContacts();
