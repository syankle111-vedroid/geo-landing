const fs = require('fs');

const ru = JSON.parse(fs.readFileSync('./src/i18n/locales/ru.json', 'utf-8'));
const en = JSON.parse(fs.readFileSync('./src/i18n/locales/en.json', 'utf-8'));

const dictionary = {
  'Псб-псб': 'PSB-PSB',
  'Монобанк/Внутрибанк (Альфа-Альфа)': 'Monobank/Internal (Alfa-Alfa)',
  'НСПК QR RUB': 'NSPK QR RUB',
  'Белый треугольник': 'White Triangle',
  'Банковские карты / Мобильный': 'Bank Cards / Mobile',
  'На приём (P2P)': 'Pay In (P2P)',
  'Процессинговая валюта': 'Processing currency',
  'Тип трафика': 'Traffic type',
  'Баланс': 'Balance',
  'Тариф': 'Tariff',
  'Пополнение': 'Pay In',
  'Вывод': 'Pay Out',
  'комиссия сети': 'network fee',
  'Курс конвертации': 'Conversion rate',
  'Лимиты за транзакцию': 'Transaction limits',
  'от': 'from',
  'до': 'up to',
  'за 1 чек': 'per tx',
  'Ставка Pay In': 'Pay In Rate',
  'Курс': 'Rate',
  'Методы работы': 'Methods',
  'номер карты': 'card number',
  'номер телефона': 'phone number',
  'Мин. сумма': 'Min amount',
  'Реквизиты, напрямую от банка без блокировок и с возможностью увеличения. Объем: от 25 млн до 150 млн RUB в сутки с возможностью увеличения': 'Details, directly from bank without blocks and with increase possibility. Volume: 25M to 150M RUB per day with increase possibility',
  'Ставки и лимиты': 'Rates and limits',
  'от 15 депозита, без появления реквизитов в плат,щите': 'from 15 deposit, without details appearing in payment gate',
  'изменение мин/макс. чека после проведения тестов, так же после тестов можем добавить': 'min/max tx change after tests, also after tests we can add',
  'в 1 чек': 'in 1 tx',
  'Валюта': 'Currency',
  'Периодичность': 'Frequency',
  'Карты Р2Р': 'Cards P2P',
  'Ресурсы и инфраструктура': 'Resources and infrastructure'
};

function translateText(text) {
  let translated = text;
  for (const [ruTerm, enTerm] of Object.entries(dictionary)) {
    const regex = new RegExp(ruTerm, 'gi');
    translated = translated.replace(regex, enTerm);
  }
  return translated;
}

const enMethodsData = {};
for (const [countryId, methods] of Object.entries(ru.methodsData || {})) {
  enMethodsData[countryId] = {};
  for (const [methodId, method] of Object.entries(methods)) {
    enMethodsData[countryId][methodId] = {
      title: translateText(method.title),
      content: translateText(method.content)
    };
  }
}

en.methodsData = enMethodsData;

fs.writeFileSync('./src/i18n/locales/en.json', JSON.stringify(en, null, 2));
console.log('en.json methods translated');
