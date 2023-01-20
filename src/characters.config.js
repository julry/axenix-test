import { colors } from './constants/colors';
import {
    alice,
    aliceBedroom,
    aliceKitchen,
    andrew,
    andrewBedroom, andrewKitchen,
    denis, denisBedroom, denisKitchen,
    femaleWardrobe, maleWardrobe,
    pauline, paulineBedroom, paulineKitchen
} from './constants/images';

export const sex = {
    Male: 'male',
    Female: 'female'
};

export const characters = [
    {
        id: '1',
        name: 'Алиса',
        sex: sex.Female,
        textBg: colors.orange,
        textColor: 'black',
        post: 'стажер\nбизнес-аналитик',
        height: '66.71%',
        width: '50.1333vw',
        photo: alice,
        questionsBgs: {
            '1': aliceBedroom,
            '2': aliceKitchen,
            '3': femaleWardrobe
        }
    },
    {
        id: '2',
        name: 'Андрей',
        sex: sex.Male,
        textBg: colors.gray,
        textColor: 'white',
        post: 'младший\nразработчик',
        height: '68.9%',
        width: '50.1333vw',
        photo: andrew,
        questionsBgs: {
            '1': andrewBedroom,
            '2': andrewKitchen,
            '3': maleWardrobe
        }
    },
    {
        id: '3',
        name: 'Полина',
        sex: sex.Female,
        textBg: colors.orange,
        textColor: 'black',
        post: 'младший\nData Engineer',
        height: '65.66%',
        width: '55.46vw',
        photo: pauline,
        questionsBgs: {
            '1': paulineBedroom,
            '2': paulineKitchen,
            '3': femaleWardrobe
        }
    },
    {
        id: '4',
        name: 'Денис',
        sex: sex.Male,
        textBg: colors.gray,
        textColor: 'white',
        post: 'младший\n1С аналитик',
        height: '69.56%',
        width: '57.3333vw',
        photo: denis,
        questionsBgs: {
            '1': denisBedroom,
            '2': denisKitchen,
            '3': maleWardrobe
        }
    }
]