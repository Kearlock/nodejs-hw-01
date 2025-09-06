import path from 'node:path';
import { fileURLToPath } from 'node:url';

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);

export const PATH_DB = path.resolve(dirName, '..', 'db', 'db.json');
