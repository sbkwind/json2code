import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = path.normalize(path.dirname(fileURLToPath(import.meta.url)));

export const RNTemplates = path.join(__dirname, '../../templates/react-native');
export const common = path.join(__dirname, '../../templates/common');
