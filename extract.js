import fs from 'fs';
import { METHODS_DATA, COUNTRIES } from './temp_out/methods.js';

const ru = JSON.parse(fs.readFileSync('./src/i18n/locales/ru.json', 'utf-8'));

ru.methodsData = {};
for (const [countryId, methods] of Object.entries(METHODS_DATA)) {
  ru.methodsData[countryId] = {};
  for (const method of methods) {
    ru.methodsData[countryId][method.id] = {
      title: method.title,
      content: method.content
    };
  }
}

fs.writeFileSync('./src/i18n/locales/ru.json', JSON.stringify(ru, null, 2));
console.log('ru.json updated');
