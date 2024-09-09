/* eslint-disable import/no-anonymous-default-export */
export default {
    // Сторінка не знайдена
    not_found: {
        title: 'Сторінку не знайдено',
        description: 'Сторінка, яку ви шукаєте, не існує.',
        back_to_home: 'Повернутися на головну',
    },
    // Сторінка помилки
    error: {
        title: 'Щось пішло не так!',
    },
    // Переклади для головної сторінки
    landing: {
        hero: {
            title: 'Ми допомагаємо вашому бренду',
            title_highlight: 'Рости',
            description:
                'У Viuumi ми забезпечуємо видимість для кожного бренду, що продає продукти чи надає послуги. Маркетинг та реклама ще ніколи не були такими простими!',
            join_waitlist: 'Приєднатися до списку очікування',
            watch_video: 'Дивитися відео',
        },
        service: {
            title: 'Послуги',
            description: 'Що ми пропонуємо вам як',
            description_highlight: 'Бренду',
            sub_description:
                'Це деякі з основних функцій, які ми запропонуємо вашій компанії з нашим програмним забезпеченням, яке скоро буде випущено',
            tab: {
                brand: 'Бренди',
                users: 'Учасники',
            },
            brands: [
                {
                    title: 'Брендова реклама/адвертисмент',
                    body: 'У Viuumi, брендова реклама і адвертисмент є нашою основною послугою. Ми забезпечуємо видимість вашому бренду',
                },
                {
                    title: 'Ріст продукції та аналіз',
                    body: 'З нашим програмним забезпеченням для бізнесів ви можете аналізувати виконання кожного продукту, що сприяє прийняттю рішень',
                },
                {
                    title: 'Ефективна реклама за низькі кошти',
                    body: 'За знижені ліцензійні та послугові кошти ми пропонуємо вам спеціальні, світові та ефективні рекламні інструменти',
                },
                {
                    title: 'Підключення до амбасадорів',
                    body: 'У Viuumi ми підключаємо вас до спеціалізованих амбасадорів бренду та промоутерів для зростання вашої компанії',
                },
            ],
            users: [
                {
                    title: 'Оголошення про знижки',
                    body: 'З Viuumi ви ніколи не пропустите жодних знижок чи розпродажів від ваших улюблених брендів та підприємств',
                },
                {
                    title: 'Діліться та заробляйте',
                    body: 'Ми надаємо вам можливість стати амбасадором бренду для ваших улюблених марок і заробляти на цьому',
                },
                {
                    title: 'Інформація про продукт та рейтинг',
                    body: 'Ми надаємо вам детальну, прозору інформацію та розуміння ваших улюблених продуктів чи брендів',
                },
                {
                    title: 'Безготівкові покупки, оплата балами',
                    body: 'На Viuumi ви можете здійснювати покупки за допомогою балів, накопичених в результаті вашої участі. Покупка за бали.',
                },
            ],
        },
        comment: {
            title: 'Коментарі',
            description: 'Що люди думають про нас!',
            sub_description:
                'Нижче наведені деякі коментарі, які ми отримали від потенційних клієнтів, брендів та індивідуальних користувачів наших послуг.',
            content: [
                {
                    quote: 'Послуга хороша і я рекомендую',
                    body: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
                    name: 'Heim, Marina-Kayla',
                    position: 'Вице-президент, Volkswagen GmbH, Німеччина',
                },
            ],
        },
        team: {
            title: 'Команда',
            description: 'Наші керівники',
            sub_description:
                'Як стартап ми швидко зростаємо свій склад, нижче наведені наші чинні керівники проекту',
            content: [
                {
                    name: 'Chidiebere, Kingsley',
                    position: 'Засновник, CEO',
                },
                {
                    name: 'Renneberg, Andre',
                    position: 'Бізнес-адміністратор',
                },
            ],
        },
        release: {
            title: 'РОЗМІСТ',
            description: 'Наша дата виходу',
            sub_description_01:
                'Ми зараз розробляємо своє програмне забезпечення.',
            sub_description_02: 'Коли ви',
            sub_description_03:
                'Зареєструєтеся зі своїм адресом електронної пошти',
            sub_description_04:
                'ми зможемо повідомити вас про те, коли наше програмне забезпечення буде доступне на всіх платформах!',
        },
        nav: {
            home: 'Головна',
            service: 'Послуги',
            comments: 'Коментарі',
            teams: 'Команда',
            release_date: 'Дата виходу',
            sign_up: 'Зареєструватися',
        },
        footer: {
            copyright: `© ${new Date().getFullYear()}, Viuumi, LLC. All Rights Reserved.`,
            phone_number: '+4915730696999',
            email: 'viuumi@gmail.com',
            address: 'Sieben Bauern, Minden, NRW, Німеччина',
        },
        timer: {
            days: 'ДНІ',
            hours: 'ГОРОДИНИ',
            minutes: 'ХВИЛИНИ',
        },
        form: {
            sign_up_now: 'Зареєструватися зараз',
            enter_email_address: 'Введіть адресу електронної пошти',
            enter_your_email_address: 'Введіть свій адрес електронної пошти',
            enter_your_name: "Введіть своє ім'я",
            name: "Ім'я",
            email_address: 'Адреса електронної пошти',
        },
    },
};
