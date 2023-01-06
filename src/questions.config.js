import { AnswerType } from './answerTypes.config';
import {
    axenixFirst,
    axenixOffice, axenixOffice10,
    axenixOffice11,
    axenixOffice2, axenixOffice3, axenixOffice4, axenixOffice9,
    bus,
    hall,
    kirill,
    square
} from './constants/images';

export const questions = [
    {
        id: '1',
        text: 'Утро понедельника. Наступил твой первый рабочий день в Axenix',
        question: 'Я проснусь:',
        noCharacterText: true,
        characterQuestion: true,
        isShort: true,
        textBlockStyles:`
            position: static;
            margin-top: 27.8vh;
        `,
        answers: [
            {
                id: '1',
                text: 'В 6:00',
                type: {
                    negative: [],
                    positive: []
                },
            },
            {
                id: '2',
                text: 'В 7:00',
                type: {
                    negative: [],
                    positive: []
                },
            },
            {
                id: '3',
                text: 'В 8:30',
                type: {
                    negative: [],
                    positive: []
                },
            },
        ]
    },
    {
        id: '2',
        text: 'Первый день стажировки - важное событие',
        question: 'Чем займешься за завтраком?',
        answers: [
            {
                id: '1',
                text: 'Почитаю последние новости о консалтинге, чтобы сразу поделиться в чате с новыми коллегами',
                type: {
                    positive: [AnswerType.communication],
                    negative: []
                },
            },
            {
                id: '2',
                text: 'Повторю информацию о компании и корпоративной культуре, чтобы не ударить в грязь лицом перед боссом',
                type: {
                    positive: [AnswerType.career],
                    negative: []
                },
            },
            {
                id: '3',
                text: 'Посмотрю любимый сериал, чтобы расслабиться и настроиться на рабочий день',
                type: {
                    positive: [AnswerType.caring],
                    negative: []
                },
            },
            {
                id: '4',
                text: 'Буду есть под музыку и гладить своего кота - животные отлично помогают снять стресс :)',
                type: {
                    positive: [AnswerType.caring],
                    negative: []
                },
            },
        ],
    },
    {
        id: '3',
        text: 'Самое время выбрать рабочий лук',
        question: 'В чем планируешь покорять карьерные вершины сегодня?',
        noCharacterText: true,
        answers: [
            {
                id: '1',
                text: 'Отдам предпочтение джинсам и клетчатой рубашке: просто, стильно и комфортно',
                type: {
                    positive: [],
                    negative: []
                },
            },
            {
                id: '2',
                text: 'Выберу брючный костюм: несмотря на то, что в компании нет строгого дресс-кода, я хочу выглядеть презентабельно',
                type: {
                    positive: [],
                    negative: []
                },
            },
            {
                id: '3',
                text: 'Остановлюсь на худи и спортивных штанах - если в офисе нет строгого дресс-кода, то для чего носить некомфортные вещи? :)',
                type: {
                    positive: [],
                    negative: []
                },
            },
            {
                id: '4',
                text: 'Эх, может пойти в пижаме.. или шортах!',
                type: {
                    positive: [],
                    negative: []
                },
            },
        ],
    },
    {
        id: '4-1',
        text: 'Ты встал в 6:00, не рассчитал время и приехал на 40 минут раньше',
        question: 'Что будешь делать?',
        image: square,
        answers: [
            {
                id: '1',
                text: 'Свяжусь с ментором и спрошу, не сможет ли он встретиться раньше. А вдруг мне повезет :)',
                type: {
                    positive: [AnswerType.communication],
                    negative: []
                },
            },
            {
                id: '2',
                text: 'Не хочу навязываться и просить о переносе встрече. Посижу в кофейне с видом на Павелецкую площадь и полистаю карьерную группу Axenix в Телеграмме',
                type: {
                    positive: [AnswerType.career],
                    negative: []
                },
            },
            {
                id: '3',
                text: 'Отлично, успею прогуляться по Павелецкой плазе и присмотреть симпатичные места для кофе-брейков :)',
                type: {
                    positive: [AnswerType.caring],
                    negative: []
                },
            },
        ],
    },
    {
        id: '4-2',
        text: 'Ты встал в 7:00, отлично рассчитал время и приехал вовремя!',
        question: 'Твой наставник уже ждет в холле. Волнуешься?',
        image: hall,
        answers: [
            {
                id: '1',
                text: 'Нисколько! Я уверен в себе и знаю, что отлично справлюсь :)',
                type: {
                    positive: [AnswerType.career],
                    negative: []
                },
            },
            {
                id: '2',
                text: 'Немного нервничаю, но знаю, что я хорошо адаптируюсь и смогу справиться с волнением',
                type: {
                    positive: [AnswerType.flexibility],
                    negative: []
                },
            },
            {
                id: '3',
                text: 'Ужасно нервничаю! А вдруг все окажется не так, как я себе представлял?',
                type: {
                    positive: [],
                    negative: []
                },
            },
        ],
    },{
        id: '4-3',
        text: 'Ты встал в 8:30, не рассчитал время и опаздываешь на встречу с ментором на 20 минут',
        question: 'Что будешь делать?',
        image: bus,
        answers: [
            {
                id: '1',
                text: 'Ничего страшного! Проверю, есть ли другой маршрут, чтобы добраться быстрее. Если нет - свяжусь с ментором, предупрежу его и извинюсь.',
                type: {
                    positive: [AnswerType.flexibility],
                    negative: []
                },
            },
            {
                id: '2',
                text: 'Потрачу последние карманные деньги на такси. Опоздание не скрасит первое впечатление :(',
                type: {
                    positive: [],
                    negative: []
                },
            },
            {
                id: '3',
                text: 'Ну а кто не опаздывает? Со всеми случается, меня подождут!',
                type: {
                    positive: [],
                    negative: [AnswerType.communication]
                },
            },
        ],
    },
    {
        id: '5',
        text: 'Кирилл из HR-команды встретил тебя в холле на первом этаже.\nСначала вам предстоит подписать документы.',
        text2: 'По пути в отдел он рассказал, \n' +
            'как будет проходить адаптация, \n' +
            'а также добавил тебя в рабочие чаты. Отличное время, \n' +
            'чтобы задать Кириллу \n' +
            'вопросы о компании.',
        question: 'Что спросишь?',
        image: axenixFirst,
        anotherCharacter: kirill,
        answers: [
            {
                id: '1',
                text: 'Поинтересуюсь традициями команды, в которой мне предстоит работать, а также узнаю про все классные кофейни неподалеку',
                type: {
                    positive: [AnswerType.communication],
                    negative: []
                },
            },
            {
                id: '2',
                text: 'Хочу узнать больше об организации рабочих процессов и моих перспективах в компаниия',
                type: {
                    positive: [AnswerType.career],
                    negative: []
                },
            },
            {
                id: '3',
                text: 'Попрошу у Кирилла все его соцсети, чтобы можно было задавать вопросы по ходу адаптации',
                type: {
                    positive: [AnswerType.flexibility],
                    negative: []
                },
            },
            {
                id: '4',
                text: 'Спрошу, подарят ли мне мерч! Нет, ну а что, для меня это важно :)',
                type: {
                    positive: [],
                    negative: []
                },
            },
        ],
    },
    {
        id: '6',
        text: 'После технической части Кирилл рассказал тебе и другим стажерам о плюшках работы в компании: PrimeZone, промокоды на курсы английского, спортивное сообщество, корпоративный спортзал и персональный карьерный наставник на протяжении всего трека. ',
        question: 'Что откликается тебе больше всего?',
        image: axenixOffice,
        anotherCharacter: kirill,
        noCharacterText: true,
        answers: [
            {
                id: '1',
                text: 'Однозначно курсы английского! Сразу же запишусь, постоянное развитие - залог успешной карьеры, ведь все так быстро меняется',
                type: {
                    positive: [AnswerType.flexibility],
                    negative: []
                },
            },
            {
                id: '2',
                text: 'Спортивное сообщество! Отличный способ сохранить work-life balance, пообщаться с коллегами и избежать выгорания',
                type: {
                    positive: [AnswerType.caring],
                    negative: []
                },
            },
            {
                id: '3',
                text: 'Все и сразу! Для того, чтобы добиться успеха, нужно быть активным',
                type: {
                    positive: [AnswerType.career],
                    negative: []
                },
            },
        ],
    },
    {
        id: '7',
        text: 'Пришло время узнать коллег поближе! Ты вместе с другими стажерами отправляешься на знакомство с проектной командой',
        question: 'Вас просят рассказать о себе - как поступишь?',
        image: axenixOffice2,
        answers: [
            {
                id: '1',
                text: 'Вызовусь первым и обязательно поделюсь забавными историями из сферы консалтинга, чтобы взбодрить других ребят',
                type: {
                    positive: [AnswerType.leadership],
                    negative: []
                },
            },
            {
                id: '2',
                text: 'Предпочту сначала послушать кого-то другого, не хочу показаться выскочкой',
                type: {
                    positive: [],
                    negative: []
                },
            },
            {
                id: '3',
                text: 'Попрошу коллег задать мне наводящие вопросы! Чтобы точно поделиться тем, что будет им интересно :)',
                type: {
                    positive: [AnswerType.flexibility, AnswerType.leadership],
                    negative: []
                },
            },
            {
                id: '4',
                text: 'Пропущу других ребят вперед и буду тянуть время, чтобы вообще не рассказывать о себе. В такие моменты я чувствую себя слишком неловко..',
                type: {
                    positive: [],
                    negative: [AnswerType.communication]
                },
            },
        ],
    },
    {
        id: '8-1',
        text: 'После встречи ты приступаешь к первой рабочей задаче: нужно составить вопросы по кейсу для интервью с заказчиком. Однако сфера управления жизненным циклом заказов тебе пока не слишком знакома – ты сомневаешься, какие блоки работы стоит обсудить с клиентом?',
        question: 'Что будешь делать?',
        image: axenixOffice3,
        answers: [
            {
                id: '1',
                text: 'Задам вопрос своему наставнику - просить помощи у опытных коллег не стыдно!',
                type: {
                    positive: [AnswerType.communication],
                    negative: []
                },
            },
            {
                id: '2',
                text: 'Постараюсь нагуглить ответы самостоятельно - не хочу, чтобы меня считали непрофессионалом',
                type: {
                    positive: [],
                    negative: [AnswerType.communication]
                },
            },
            {
                id: '3',
                text: 'Не хочу идти к наставнику, вдруг он сочтет меня ненаходчивым. Попрошу помощи у других коллег!',
                type: {
                    positive: [AnswerType.flexibility, AnswerType.communication],
                    negative: []
                },
            },
            {
                id: '4',
                text: 'Спрошу и у гугла, и у коллег, и у наставника - в работе все средства хороши!',
                type: {
                    positive: [AnswerType.communication, AnswerType.career],
                    negative: [AnswerType.caring]
                },
            }
        ],
    },
    {
        id: '8-2',
        text: 'После встречи ты приступаешь к первой рабочей задаче: нужно провести анализ программного кода, чтобы оценить его читаемость и производительность. Однако ты пока не знаком с требованиями к ПО на e-commerce площадках',
        question: 'Что будешь делать?',
        image: axenixOffice3,
        answers: [
            {
                id: '1',
                text: 'Задам вопрос своему наставнику - просить помощи у опытных коллег не стыдно!',
                type: {
                    positive: [AnswerType.communication],
                    negative: []
                },
            },
            {
                id: '2',
                text: 'Постараюсь нагуглить ответы самостоятельно - не хочу, чтобы меня считали непрофессионалом',
                type: {
                    positive: [],
                    negative: [AnswerType.communication]
                },
            },
            {
                id: '3',
                text: 'Не хочу идти к наставнику, вдруг он сочтет меня ненаходчивым. Попрошу помощи у других коллег!',
                type: {
                    positive: [AnswerType.flexibility, AnswerType.communication],
                    negative: []
                },
            },
            {
                id: '4',
                text: 'Спрошу и у гугла, и у коллег, и у наставника - в работе все средства хороши!',
                type: {
                    positive: [AnswerType.communication, AnswerType.career],
                    negative: []
                },
            }
        ],
    },
    {
        id: '8-3',
        text: 'После встречи ты приступаешь к первой рабочей задаче: нужно проанализировать причины расхождений данных в витринах корпоративного хранилища. Однако ты пока не знаком с эталонами и требованиями',
        question: 'Что будешь делать?',
        image: axenixOffice3,
        answers: [
            {
                id: '1',
                text: 'Задам вопрос своему наставнику - просить помощи у опытных коллег не стыдно!',
                type: {
                    positive: [AnswerType.communication],
                    negative: []
                },
            },
            {
                id: '2',
                text: 'Постараюсь нагуглить ответы самостоятельно - не хочу, чтобы меня считали непрофессионалом',
                type: {
                    positive: [],
                    negative: [AnswerType.communication]
                },
            },
            {
                id: '3',
                text: 'Не хочу идти к наставнику, вдруг он сочтет меня ненаходчивым. Попрошу помощи у других коллег!',
                type: {
                    positive: [AnswerType.flexibility, AnswerType.communication],
                    negative: []
                },
            },
            {
                id: '4',
                text: 'Спрошу и у гугла, и у коллег, и у наставника - в работе все средства хороши!',
                type: {
                    positive: [AnswerType.communication, AnswerType.career],
                    negative: []
                },
            }
        ],
    },
    {
        id: '8-4',
        text: 'После встречи ты приступаешь к первой рабочей задаче: нужно написать инструкцию для скоринга кредитных заявок по типовому функционалу. Однако ты пока не знаешь, как проверить корректность настроек системы.',
        question: 'Что будешь делать?',
        image: axenixOffice3,
        answers: [
            {
                id: '1',
                text: 'Задам вопрос своему наставнику - просить помощи у опытных коллег не стыдно!',
                type: {
                    positive: [AnswerType.communication],
                    negative: []
                },
            },
            {
                id: '2',
                text: 'Постараюсь нагуглить ответы самостоятельно - не хочу, чтобы меня считали непрофессионалом',
                type: {
                    positive: [],
                    negative: [AnswerType.communication]
                },
            },
            {
                id: '3',
                text: 'Не хочу идти к наставнику, вдруг он сочтет меня ненаходчивым. Попрошу помощи у других коллег!',
                type: {
                    positive: [AnswerType.flexibility, AnswerType.communication],
                    negative: []
                },
            },
            {
                id: '4',
                text: 'Спрошу и у гугла, и у коллег, и у наставника - в работе все средства хороши!',
                type: {
                    positive: [AnswerType.communication, AnswerType.career],
                    negative: []
                },
            }
        ],
    },
    {
        id: '9',
        text: 'Ты смог справиться с задачей быстрее, осталось свободное время',
        question: 'Что будешь делать?',
        image: axenixOffice4,
        answers: [
            {
                id: '1',
                text: 'Попрошу у ментора еще задачку: не умею сидеть без дела',
                type: {
                    positive: [],
                    negative: []
                }
            },
            {
                id: '2',
                text: 'Потрачу оставшееся время на экскурсию по офису',
                type: {
                    positive: [],
                    negative: []
                }
            },
            {
                id: '3',
                text: 'Обсужу полученные результаты с коллегами и попрошу их поделиться экспертизой',
                type: {
                    positive: [],
                    negative: []
                }
            },
            {
                id: '4',
                text: 'Займусь оформлением своего рабочего пространства',
                type: {
                    positive: [],
                    negative: []
                }
            }
        ],
    },
    {
        id: '10',
        text: 'Сказал на собеседовании, что ты стрессоустойчивый? Самое время пройти проверку на честность :)',
        question: 'Коллега критикует твою работу, как отреагируешь?',
        image: axenixOffice9,
        answers: [
            {
                id: '1',
                text: 'Прислушаюсь и внесу корректировки в проект. Круто, что ментор помогает мне развиваться и учиться новому',
                type: {
                    positive: [AnswerType.flexibility],
                    negative: []
                }
            },
            {
                id: '2',
                text: 'Буду отстаивать свое мнение. Я уверен в результатах и не вижу причин корректировать план',
                type: {
                    positive: [],
                    negative: [AnswerType.flexibility]
                }
            },
            {
                id: '3',
                text: 'Я понимаю, что ментор опытнее меня и может дать советы по улучшению, но в некоторых решениях я уверен на 100%. Приведу аргументы и попрошу обсудить мои идеи более подробно',
                type: {
                    positive: [AnswerType.flexibility, AnswerType.leadership],
                    negative: []
                }
            },
        ],
    },
    {
        id: '11',
        text: 'Рабочий день подходит к концу. Коллеги предлагают тебе присоединиться к вечерней тренировке перед корпоративной игрой в квиз, которая традиционно проходит каждые полгода',
        question: 'Пойдешь?',
        image: axenixOffice10,
        answers: [
            {
                id: '1',
                text: 'Да, конечно! Нужно завести друзей и узнать больше о команде',
                type: {
                    positive: [AnswerType.communication],
                    negative: []
                }
            },
            {
                id: '2',
                text: 'Предпочту поехать домой, чтобы еще раз просмотреть задачи по текущему проекту и провести работу над ошибками',
                type: {
                    positive: [AnswerType.career],
                    negative: []
                }
            },
            {
                id: '3',
                text: 'Отличное предложение, но я слишком устал :( Пообещаю коллегам присоединиться к ним в пятницу на посиделки с пиццей и поеду домой восстанавливать силы!',
                type: {
                    positive: [AnswerType.caring],
                    negative: []
                }
            },
        ],
    },
    {
        id: '12',
        text: 'Приятный бонус к концу дня - подарочный мерч! Тебе достались термокружка, стикеры на ноут и планер.',
        question: 'Пойдешь?',
        image: axenixOffice11,
        answers: [
            {
                id: '1',
                text: 'Класс! Отправлю фото стартерпака в командный чат и напишу, как я рад быть частью Axenix!',
                type: {
                    positive: [AnswerType.communication],
                    negative: []
                }
            },
            {
                id: '2',
                text: 'Поблагодарю ментора за подарок, но фото скину только маме :)',
                type: {
                    positive: [],
                    negative: []
                }
            },
            {
                id: '3',
                text: 'Выложу фото в свои соцсети - пусть все знают, что я теперь работаю в Axenix!',
                type: {
                    positive: [],
                    negative: []
                }
            },
            {
                id: '4',
                text: 'В этот же вечер заполню планер на ближайшие пару недель. Отличная вещь для карьерного старта!',
                type: {
                    positive: [AnswerType.career],
                    negative: []
                }
            },
        ],
    },
];