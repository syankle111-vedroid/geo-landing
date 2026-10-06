export const METHODS_DATA = {
    'russia': [
        {
            id: 'psb-psb',
            title: 'Псб-псб',
            content: `
        <span class="highlight">Transactional limits:</span><br/>
        min TX amount in - 100₽ / max TX amount in - 5.000₽<br/>
        min TX amount out- 10.000₽ / max TX amount out - 150.000₽<br/>
        <span class="highlight">Fee:</span><br/>
        Currency - USD $ / Fee in% - 13% / Fee out% - 2% / Settlement fee - 0%<br/>
        <span class="highlight">Settlement:</span><br/>
        Settlement period - T+0<br/>
        Settlement limit - no limit<br/>
        <span class="highlight">Currency exchange source:</span><br/>
        PayIN: Rapira top 1
      `
        },
        {
            id: 'monobank-alfalfa',
            title: 'Монобанк/Внутрибанк (Альфа-Альфа)',
            content: `
        <span class="highlight">Transactional limits:</span><br/>
        min TX amount in - 5.000₽ / max TX amount in - 250.000₽<br/>
        min TX amount out- 10.000₽ / max TX amount out - 150.000₽<br/>
        <span class="highlight">Fee:</span><br/>
        Currency - USD $ / Fee in% - 12% / Fee out% - 2%<br/>
        <span class="highlight">Settlement:</span><br/>
        Settlement (USDT/netting)<br/>
        Settlement fee - 0%<br/>
        Settlement period - T+0<br/>
        Settlement limit - no limit<br/>
        <span class="highlight">Currency exchange source:</span><br/>
        PayIN: Rapira Топ 1 красный стакан
      `
        },
        {
            id: 'nspk-qr-rub',
            title: 'НСПК QR RUB',
            content: `
        <span class="highlight">Ресурсы и инфраструктура:</span><br/>
        Реквизиты, напрямую от банка без блокировок и с возможностью увеличения. Объем: от 25 млн до 150 млн RUB в сутки с возможностью увеличения<br/>
        <span class="highlight">Ставки и лимиты:</span><br/>
        STD(от 15 депозита, без появления реквизитов в плат,щите):<br/>
        Pay-in: 1000 – 3000 RUB<br/>
        (изменение мин/макс. чека после проведения тестов, так же после тестов можем добавить FTD) → 14%<br/>
        Pay-out 2: 10.000-150.000 (в 1 чек) - 3%<br/>
        <span class="highlight">Settlement:</span><br/>
        Валюта: USDT<br/>
        Периодичность: Т+0<br/>
        Settlement fee: 0<br/>
        <span class="highlight">Currency exchange source:</span><br/>
        Pay IN: rapira top 1 red
      `
        },
        {
            id: 'white-triangle',
            title: 'Белый треугольник',
            content: `
        СБП + Карты Р2Р<br/>
        <span class="highlight">Transactional limits:</span><br/>
        min TX amount in - 5.000₽ / max TX amount in - 200.000₽<br/>
        <span class="highlight">Fee:</span><br/>
        Fee currency - USD $<br/>
        Fee in% - 10.5%<br/>
        <span class="highlight">Settlement:</span><br/>
        Settlement fee - 0%<br/>
        Settlement period - T+0<br/>
        Settlement limit - no limit<br/>
        <span class="highlight">Currency exchange source:</span><br/>
        PayIN: Rapira + 10
      `
        }
    ],
    'kazakhstan': [
        {
            id: 'kaz-main',
            title: 'Банковские карты / Мобильный',
            content: `
        <span class="highlight">Ставка Pay In:</span> 9%<br/>
        <span class="highlight">Курс:</span> xe.com USD/KZT+5%<br/>
        <span class="highlight">Методы работы:</span> номер карты, номер телефона<br/>
        <span class="highlight">Мин. сумма:</span> 20000 kzt
      `
        }
    ],
    'mexico': [
        {
            id: 'mex-visa-mc',
            title: 'Visa/MasterCard | Ecom',
            content: `
        MDR Incoming: 13,5%<br/>
        <span class="highlight">Trx fee:</span><br/>
        Successful: 0.40 EUR<br/>
        Declined: 0.20 EUR<br/>
        CHB Fee: 40 EUR / Refund Fee: 15 EUR<br/>
        <span class="highlight">Settlement:</span><br/>
        500K+ — T+1<br/>
        200K–500K — T+2<br/>
        до 200K — T+3<br/>
        Готовы принимать неограниченные объёмы трафика
      `
        },
        {
            id: 'mex-bank-transfer',
            title: 'Bank Transfer (SPEI, OPM)',
            content: `
        FTD+STD<br/>
        <span class="highlight">Pay IN:</span> 6.5% + 5 MXN<br/>
        <span class="highlight">Pay OUT:</span> 2.5% + 5 MXN<br/>
        <span class="highlight">Cycle:</span> T+0<br/>
        <span class="highlight">Limits:</span> Min 20 / Max 20 000<br/>
        <span class="highlight">Settlement:</span> 0%<br/>
        <span class="highlight">Settlement Exchange:</span> XE + 1-2%
      `
        }
    ],
    'chile': [
        {
            id: 'chl-bank-transfer',
            title: 'Bank Transfer',
            content: `
        FTD+STD<br/>
        <span class="highlight">Pay IN:</span> 10%<br/>
        <span class="highlight">Pay OUT:</span> 6.5%<br/>
        <span class="highlight">Cycle:</span> T+0<br/>
        <span class="highlight">Limits:</span> Min 1000 / Max 8 000 000<br/>
        <span class="highlight">Settlement:</span> 1%<br/>
        <span class="highlight">Settlement exchange:</span> XE + 1-2%
      `
        }
    ],
    'azerbaijan': [
        {
            id: 'aze-p2p',
            title: 'На приём (P2P)',
            content: `
        Процессинговая валюта: AZN | Тип трафика: STD | Баланс: usdt<br/>
        <span class="highlight">Тариф:</span><br/>
        Пополнение: Pay in - 10%<br/>
        Вывод: Payout - 3.5%, USDT - 0% + комиссия сети, Т+0<br/>
        <span class="highlight">Курс конвертации:</span> Fix rate - 1.75<br/>
        <span class="highlight">Лимиты за транзакцию:</span><br/>
        Пополнение: от 5 AZN до 3500 AZN за 1 чек<br/>
        Вывод: от 20 AZN до 3500 AZN за 1 чек<br/>
        <span class="highlight">Дополнительные условия:</span><br/>
        Метод интеграции: API/H2H | Категории: Gambling, Betting | Интервал: 24/7
      `
        },
        {
            id: 'aze-ecom',
            title: 'AZN (Quasi E-com)',
            content: `
        Процессинговая валюта: AZN | Тип трафика: STD | Баланс: usdt<br/>
        <span class="highlight">Тариф:</span><br/>
        Пополнение: Pay in - 11.5%<br/>
        Вывод: Payout - 3.5%, USDT - 0% + комиссия сети, Т+0<br/>
        <span class="highlight">Курс конвертации:</span> Fix rate - 1.75<br/>
        <span class="highlight">Лимиты за транзакцию:</span><br/>
        Пополнение: от 30 AZN до 3000 AZN за 1 чек<br/>
        Вывод: от 40 AZN до 3000 AZN за 1 чек<br/>
        <span class="highlight">Дополнительные условия:</span><br/>
        Метод интеграции: API/H2H | Категории: Gambling, Betting | Интервал: 24/7
      `
        }
    ],
    'uzbekistan': [
        {
            id: 'uzb-p2p',
            title: 'P2P',
            content: `
        Процессинговая валюта: UZS | Баланс: USDT<br/>
        Тип трафика: STD (FTD — только после 2 недель работы на STD и предварительного согласования)<br/>
        <span class="highlight">Тариф:</span><br/>
        Пополнение: Pay in - 7%<br/>
        Вывод: Payout - 3.5%, USDT - 0% + ком. сети, Т+0<br/>
        <span class="highlight">Курс конвертации:</span> Вход ЦБ + 5.5% / Выход ЦБ + 4.5%<br/>
        <span class="highlight">Лимиты за транзакцию:</span><br/>
        Пополнение: от 30 000 UZS до 10 000 000 UZS<br/>
        Вывод: от 30 000 UZS до 10 000 000 UZS<br/>
        <span class="highlight">Дополнительные условия:</span><br/>
        Метод интеграции: API / H2H | Разрешённые категории: Gambling, Betting
      `
        }
    ],
    'kyrgyzstan': [
        {
            id: 'kgz-p2p',
            title: '(P2P) DeepLink',
            content: `
        Процессинговая валюта: KGS | Баланс: USDT | IPS: P2P<br/>
        Доступные банки: М-Банк, Бакай, KICB (по QR), O!bank, Demirbank, MegaPay<br/>
        Тип трафика: STD (FTD — по согласованию)<br/>
        <span class="highlight">Тариф:</span><br/>
        Пополнение: Pay in - 8.5%<br/>
        Вывод: Payout - 4%, USDT - 0% + ком. сети, Т+0<br/>
        <span class="highlight">Курс конвертации:</span> Bybit, Buy, min 100 000 KGS, avg 1-3<br/>
        <span class="highlight">Лимиты за транзакцию:</span><br/>
        Пополнение / Вывод: от 300 до 200 000 KGS<br/>
        <span class="highlight">Дополнительные условия:</span><br/>
        Метод интеграции: API | Разрешённые категории: Gambling, Betting
      `
        }
    ],
    'tajikistan': [
        {
            id: 'tjk-c2c',
            title: 'TJS (C2C / номер телефона)',
            content: `
        Процессинговая валюта: TJS | Тип трафика: FTD/STD | Баланс: USDT<br/>
        <span class="highlight">Тариф:</span><br/>
        Пополнение: Pay in - 8.5%<br/>
        Вывод: Payout - 2%, USDT - 0% + ком. сети, Т+0<br/>
        <span class="highlight">Лимиты за транзакцию:</span><br/>
        Пополнение / Вывод: от 50 TJS до 10000 TJS<br/>
        <span class="highlight">Дополнительные условия:</span><br/>
        Метод интеграции: API | Разрешённые категории: Gambling, Betting
      `
        }
    ],
    'armenia': [
        {
            id: 'arm-c2c',
            title: 'AMD С2С',
            content: `
        Процессинговая валюта: AMD | Тип трафика: STD (FTD по согласованию) | Баланс: USDT<br/>
        <span class="highlight">Тариф (Пополнение):</span><br/>
        FTD: С2С - 11.5% | E-wallets (fastshift) - 11.5%<br/>
        STD: С2С - 9% | E-wallets (fastshift) - 9.5%<br/>
        <span class="highlight">Тариф (Вывод):</span> С2С - 3% | E-wallets - 3.5%<br/>
        <span class="highlight">Settlement:</span> USDT - 0,5% + комиссия сети, Т+0<br/>
        <span class="highlight">Pay-out курс конвертации:</span> AMD/USDT Bybit, Sell, 5th position<br/>
        <span class="highlight">Лимиты:</span> от 2 000 AMD до 250 000 AMD<br/>
        <span class="highlight">Дополнительные условия:</span><br/>
        Интеграция: API/H2H | Холд/роллинг: нет | Категории: Гамбет<br/>
        Под FTD трафик нужен новый счет.
      `
        }
    ],
    'argentina': [
        {
            id: 'arg-p2p',
            title: 'Mercado Pago P2P',
            content: `
        Method: ARS<br/>
        <span class="highlight">Payin:</span> 5%<br/>
        <span class="highlight">Payout:</span> 1.5%<br/>
        <span class="highlight">Settlement:</span> 0%<br/>
        <span class="highlight">Exchange rate:</span> Bybit P2P<br/>
        <span class="highlight">Payin min/max:</span> 5000 - 1 000 000
      `
        }
    ],
    'south-korea': [
        {
            id: 'kor-trusted',
            title: 'Korea Fenito (Trusted)',
            content: `
        Method: Bank transfer<br/>
        <span class="highlight">FEES:</span><br/>
        • Pay-in: 10%<br/>
        • Pay-out: 3.5%<br/>
        • Settlement: 8%; T+0; Google<br/>
        <span class="highlight">LIMITS:</span><br/>
        • Pay-in/out: 30 000–3 000 000<br/>
        <span class="highlight">Details:</span><br/>
        Balance: USDT | Refund: 1:1 | Traffic type: Trusted<br/>
        <span class="highlight">Pay In:</span> HTX buy from 120,000 3 position<br/>
        <span class="highlight">Pay out:</span> HTX sell from 2,000,000 2-3 position
      `
        },
        {
            id: 'kor-ftd',
            title: 'Korea Fenito (FTD)',
            content: `
        Method: Bank transfer<br/>
        <span class="highlight">FEES:</span><br/>
        • Pay-in: 11.5%<br/>
        • Pay-out: 3.5%<br/>
        • Settlement: 8%; T+0; Google<br/>
        <span class="highlight">LIMITS:</span><br/>
        • Pay-in/out: 30 000–3 000 000<br/>
        <span class="highlight">Details:</span><br/>
        Balance: USDT | Refund: 1:1 | Traffic type: FTD
      `
        },
        {
            id: 'kor-std',
            title: 'Korea Fenito STD',
            content: `
        Method: Kakao QR<br/>
        <span class="highlight">FEES:</span><br/>
        • Pay-in: 11.5%<br/>
        • Pay-out: 3.5%<br/>
        • Settlement: 8%; T+0; Google<br/>
        <span class="highlight">LIMITS:</span><br/>
        • Pay-in: 30 000–1 500 000<br/>
        • Pay-out: 30 000–3 000 000<br/>
        <span class="highlight">Details:</span> Balance: USDT
      `
        }
    ],
    'india': [
        {
            id: 'ind-upi',
            title: 'UPI Bank / E-wallet transfer',
            content: `
        <span class="highlight">Pay IN:</span> 10%<br/>
        <span class="highlight">Pay OUT:</span> 5% + 10 INR<br/>
        <span class="highlight">Cycle:</span> T+0<br/>
        <span class="highlight">Limits:</span> Min 100 / Max 50 000<br/>
        <span class="highlight">Settlement:</span> 0%<br/>
        <span class="highlight">Settlement exchange:</span> Floating rate ≈ 105 INR/USDT
      `
        },
        {
            id: 'ind-mixed',
            title: 'UPI, QR, Mixed',
            content: `
        Доп. инфо: Paytm, PhonePe<br/>
        <span class="highlight">Pay IN:</span> 10%<br/>
        <span class="highlight">Pay OUT:</span> 5%<br/>
        <span class="highlight">Cycle:</span> T+0<br/>
        <span class="highlight">Limits:</span> Min 300 / Max 50 000<br/>
        <span class="highlight">Settlement:</span> 0%<br/>
        <span class="highlight">Settlement exchange:</span> Offline market
      `
        }
    ],
    'turkey': [
        {
            id: 'tur-bank',
            title: 'Bank Transfer',
            content: `
        Type of traffic: FTD/STD | Currency: TRY<br/>
        <span class="highlight">PayIn:</span> 6,4%<br/>
        min TX - 100 TRY / max TX - 100.000 TRY<br/>
        <span class="highlight">PayOut:</span> 1,1%<br/>
        min TX - 500 TRY / max TX - 100.000 TRY<br/>
        <span class="highlight">Settlement:</span> USDT 0%, T+0, xe.com +3% TRY/USD
      `
        }
    ],
    'bangladesh': [
        {
            id: 'bgd-p2p',
            title: 'P2P',
            content: `
        <span class="highlight">PayIn:</span> 9 %<br/>
        <span class="highlight">Payout:</span> 2 %<br/>
        <span class="highlight">Limits payIN/OUT:</span> Min 500 taka / Max 50k taka<br/>
        <span class="highlight">Settle:</span> T+0 + 5 USDT<br/>
        <span class="highlight">Exchange rate:</span> Binance + 1,5%
      `
        }
    ],
    'south-africa': [
        {
            id: 'zaf-eft',
            title: 'EFT',
            content: `
        <span class="highlight">Payin:</span> 8%<br/>
        <span class="highlight">Payout:</span> 2.5%<br/>
        <span class="highlight">Cycle:</span> T+0<br/>
        <span class="highlight">Limits:</span> Min ZAR 150 / Max ZAR 1 500 000
      `
        }
    ],
    'nigeria': [
        {
            id: 'nga-mpesa',
            title: 'Mpesa',
            content: `
        <span class="highlight">Payin:</span> 8%<br/>
        <span class="highlight">Payout:</span> 2.5%<br/>
        <span class="highlight">Limits:</span> Min 1500 NGN / Max 1 500 000 NGN
      `
        }
    ],
    'vietnam': [
        {
            id: 'vnm-momo',
            title: 'Electronic wallet MOMO',
            content: `
        <span class="highlight">Pay-in:</span> 8,5%<br/>
        <span class="highlight">Pay-out:</span> 4%<br/>
        <span class="highlight">Cycle:</span> t+0<br/>
        <span class="highlight">Limits:</span> Min 20,000 / Max 50,000,000<br/>
        <span class="highlight">Settlements:</span> 1%<br/>
        <span class="highlight">Settlement rate:</span> Binance, P2P (VND), Bank Transfer, Sell, 1-5th position
      `
        }
    ],
    'uae': [
        {
            id: 'uae-p2p',
            title: 'Multi Banks (Mashreq and others)',
            content: `
        Type: P2P | Traffic Type: FTD / STD | Vertical: iGaming<br/>
        <span class="highlight">Commission:</span> IN 12% / OUT 5%<br/>
        <span class="highlight">Limits:</span> IN 100 - 10,000 AED / OUT 100 - 10,000 AED<br/>
        <span class="highlight">Settlement:</span> T+0 | Fee: 0% / +8 USDT при settlement менее 3,000 USDT<br/>
        <span class="highlight">Exchange Rate:</span> Binance, green glass, approved merchant, middle 5–10 orders, 3,800<br/>
        <span class="highlight">Working Time:</span> 24/7
      `
        }
    ],
    'bahrain': [
        {
            id: 'bhr-p2p',
            title: 'Benefit Pay',
            content: `
        Type: P2P | Traffic Type: FTD / STD | Vertical: iGaming<br/>
        <span class="highlight">Commission:</span> IN 12% / OUT 4.5%<br/>
        <span class="highlight">Limits:</span> IN 2 - 1,000 BHD / OUT 2 - 1,000 BHD<br/>
        <span class="highlight">Settlement:</span> T+0 | Fee: 0% / +8 USDT при settlement менее 3,000 USDT<br/>
        <span class="highlight">Exchange Rate:</span> Binance, green glass, approved merchant, middle 5–10 orders<br/>
        <span class="highlight">Working Time:</span> 24/7
      `
        }
    ],
    'saudi-arabia': [
        {
            id: 'sau-p2p',
            title: 'BARQ',
            content: `
        Type: P2P | Traffic Type: FTD / STD | Vertical: iGaming<br/>
        <span class="highlight">Commission:</span> IN 12% / OUT 4.5%<br/>
        <span class="highlight">Limits:</span> IN 5 - 3,000 SAR / OUT 5 - 3,000 SAR<br/>
        <span class="highlight">Settlement:</span> T+0 | Fee: 0% / +8 USDT при settlement менее 3,000 USDT<br/>
        <span class="highlight">Exchange Rate:</span> Binance, green glass, approved merchant, middle 5–10 orders<br/>
        <span class="highlight">Working Time:</span> 24/7
      `
        }
    ],
    'china': [
        {
            id: 'chn-alipay-wechat',
            title: 'Alipay, WeChat',
            content: `
        <span class="highlight">Pay IN:</span> 7.5%<br/>
        Min: 100 CNY / Max: 100,000 CNY<br/>
        <span class="highlight">Pay OUT:</span> 2%<br/>
        Min: 1000 CNY / Max: 100,000 CNY<br/>
        <span class="highlight">Settlement:</span> 0%
      `
        }
    ],
    'mongolia': [
        {
            id: 'mng-banks',
            title: 'Khan Bank, Capitron Bank, State Bank',
            content: `
        <span class="highlight">Pay-In:</span><br/>
        • Базовая ставка: 11%<br/>
        • Лимиты: 5000 - 4000000 MNT<br/>
        <span class="highlight">Pay-Out:</span><br/>
        • Базовая ставка: 4.5%<br/>
        • Лимиты: 5000 - 4000000 MNT<br/>
        <span class="highlight">Settlement exchange:</span> Binance (ср.зн. 1-10 строчки)
      `
        }
    ],
    'colombia': [
        {
            id: 'col-pse',
            title: 'Bank transfer PSE',
            content: `
        <span class="highlight">Pay IN:</span> 9.5%<br/>
        <span class="highlight">Pay OUT:</span> 5%<br/>
        <span class="highlight">Cycle:</span> T+1<br/>
        <span class="highlight">Limits:</span> Min 10 000 / Max 5 000 000<br/>
        <span class="highlight">Settlement:</span> 3.6%<br/>
        <span class="highlight">Settlement exchange:</span> xe
      `
        }
    ],
    'venezuela': [
        {
            id: 'ven-p2p',
            title: 'P2P Bank Transfer',
            content: `
        <span class="highlight">Pay IN:</span> 10%<br/>
        <span class="highlight">Pay OUT:</span> 5%<br/>
        <span class="highlight">Cycle:</span> T+0<br/>
        <span class="highlight">Limits:</span> Min 5000 / Max 300 000<br/>
        <span class="highlight">Settlement:</span> 0%<br/>
        <span class="highlight">Settlement exchange:</span> xe.com
      `
        }
    ],
    'brazil': [
        {
            id: 'bra-pix',
            title: 'PIX',
            content: `
        <span class="highlight">Pay IN:</span> 5.5%<br/>
        <span class="highlight">Pay OUT:</span> 1.5%<br/>
        <span class="highlight">Cycle:</span> t+0<br/>
        <span class="highlight">Limits:</span> Min 10 / Max 99 999<br/>
        <span class="highlight">Settlement:</span> 2%<br/>
        <span class="highlight">Settlement exchange:</span> Binance C2C
      `
        }
    ],
    'peru': [
        {
            id: 'per-bank',
            title: 'Bank Transfer',
            content: `
        <span class="highlight">Pay IN:</span> 9%<br/>
        <span class="highlight">Pay OUT:</span> 3.5%<br/>
        <span class="highlight">Cycle:</span> t+0<br/>
        <span class="highlight">Limits:</span> Min 10 / Max 40 000<br/>
        <span class="highlight">Settlement:</span> 0%<br/>
        <span class="highlight">Settlement exchange:</span> Binance
      `
        }
    ]
};
const BASE_COUNTRIES = [
    { id: 'russia', title: 'Россия', code: 'RUSSIA', bgText: 'RUS', color: '#1B4B8F', flag: '/img/flag/russia.png', president: '/img/prezident/russia.png', region: 'СНГ' },
    { id: 'kazakhstan', title: 'Казахстан', code: 'KAZAKHSTAN', bgText: 'KAZ', color: '#0C7E95', flag: '/img/flag/kazakhstan.png', president: '/img/prezident/kazakhstan.png', region: 'СНГ' },
    { id: 'mexico', title: 'Мексика', code: 'MEXICO', bgText: 'MEX', color: '#0B7A3B', flag: '/img/flag/mexico.png', president: '/img/prezident/mexico.png', region: 'Америка' },
    { id: 'chile', title: 'Чили', code: 'CHILE', bgText: 'CHL', color: '#B92B39', flag: '/img/flag/chile.png', president: '/img/prezident/chile.png', region: 'Америка' },
    { id: 'azerbaijan', title: 'Азербайджан', code: 'AZERBAIJAN', bgText: 'AZE', color: '#0C7A7A', flag: '/img/flag/azerbaijan.png', president: '/img/prezident/azerbaijan.png', region: 'СНГ' },
    { id: 'uzbekistan', title: 'Узбекистан', code: 'UZBEKISTAN', bgText: 'UZB', color: '#1A6FB0', flag: '/img/flag/uzbekistan.png', president: '/img/prezident/uzbekistan.png', region: 'СНГ' },
    { id: 'kyrgyzstan', title: 'Киргизия', code: 'KYRGYZSTAN', bgText: 'KGZ', color: '#C1121F', flag: '/img/flag/kyrgyzstan.png', president: '/img/prezident/kyrgyzstan.png', region: 'СНГ' },
    { id: 'tajikistan', title: 'Таджикистан', code: 'TAJIKISTAN', bgText: 'TJK', color: '#B41722', flag: '/img/flag/tajikistan.png', president: '/img/prezident/tajikistan.png', region: 'СНГ' },
    { id: 'armenia', title: 'Армения', code: 'ARMENIA', bgText: 'ARM', color: '#1B4B8F', flag: '/img/flag/armenia.png', president: '/img/prezident/armenia.png', region: 'СНГ' },
    { id: 'argentina', title: 'Аргентина', code: 'ARGENTINA', bgText: 'ARG', color: '#2870B0', flag: '/img/flag/argentina.png', president: '/img/prezident/argentina.png', region: 'Америка' },
    { id: 'south-korea', title: 'Южная Корея', code: 'SOUTH KOREA', bgText: 'KOR', color: '#2A4B7C', flag: '/img/flag/south-korea.png', president: '/img/prezident/south-korea.png', region: 'Азия' },
    { id: 'india', title: 'Индия', code: 'INDIA', bgText: 'IND', color: '#B85C2A', flag: '/img/flag/india.png', president: '/img/prezident/india.png', region: 'Азия' },
    { id: 'turkey', title: 'Турция', code: 'TÜRKIYE', bgText: 'TUR', color: '#C82A36', flag: '/img/flag/turkey.png', president: '/img/prezident/turkey.png', region: 'Азия' },
    { id: 'bangladesh', title: 'Бангладеш', code: 'BANGLADESH', bgText: 'BGD', color: '#0B6E43', flag: '/img/flag/bangladesh.png', president: '/img/prezident/bangladesh.png', region: 'Азия' },
    { id: 'south-africa', title: 'ЮАР', code: 'SOUTH AFRICA', bgText: 'ZAF', color: '#0E8A54', flag: '/img/flag/south-africa.png', president: '/img/prezident/south-africa.png', region: 'Африка' },
    { id: 'nigeria', title: 'Нигерия', code: 'NIGERIA', bgText: 'NGA', color: '#0B7A3B', flag: '/img/flag/nigeria.png', president: '/img/prezident/nigeria.png', region: 'Африка' },
    { id: 'vietnam', title: 'Вьетнам', code: 'VIETNAM', bgText: 'VNM', color: '#B41722', flag: '/img/flag/vietnam.png', president: '/img/prezident/vietnam.png', region: 'Азия' },
    { id: 'uae', title: 'ОАЭ', code: 'UAE', bgText: 'UAE', color: '#0E7A3C', flag: '/img/flag/uae.png', president: '/img/prezident/uae.png', region: 'Азия' },
    { id: 'bahrain', title: 'Бахрейн', code: 'BAHRAIN', bgText: 'BHR', color: '#B4232F', flag: '/img/flag/bahrain.png', president: '/img/prezident/bahrain.png', region: 'Азия' },
    { id: 'saudi-arabia', title: 'Саудовская Аравия', code: 'SAUDI ARABIA', bgText: 'SAU', color: '#0B6E3F', flag: '/img/flag/saudi-arabia.png', president: '/img/prezident/saudi-arabia.png', region: 'Азия' },
    { id: 'china', title: 'Китай', code: 'CHINA', bgText: 'CHN', color: '#C1121F', flag: '/img/flag/china.png', president: '/img/prezident/china.png', region: 'Азия' },
    { id: 'mongolia', title: 'Монголия', code: 'MONGOLIA', bgText: 'MNG', color: '#B23A3A', flag: '/img/flag/mongolia.png', president: '/img/prezident/mongolia.png', region: 'Азия' },
    { id: 'colombia', title: 'Колумбия', code: 'COLOMBIA', bgText: 'COL', color: '#17458F', flag: '/img/flag/colombia.png', president: '/img/prezident/colombia.png', region: 'Америка' },
    { id: 'venezuela', title: 'Венесуэла', code: 'VENEZUELA', bgText: 'VEN', color: '#17357A', flag: '/img/flag/venezuela.png', president: '/img/prezident/venezuela.png', region: 'Америка' },
    { id: 'brazil', title: 'Бразилия', code: 'BRAZIL', bgText: 'BRA', color: '#0B7A3B', flag: '/img/flag/brazil.png', president: '/img/prezident/brazil.png', region: 'Америка' },
    { id: 'peru', title: 'Перу', code: 'PERU', bgText: 'PER', color: '#B4232F', flag: '/img/flag/peru.png', president: '/img/prezident/peru.png', region: 'Америка' }
];
export const COUNTRIES = BASE_COUNTRIES.map(c => ({
    ...c,
    methods: METHODS_DATA[c.id] || []
}));
