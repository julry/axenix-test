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

const sex = {
    Male: 'male',
    Female: 'female'
};

export const characters = [
    {
        id: '1',
        name: 'Алиса',
        sex: sex.Female,
        textBg: colors.orange,
        post: 'стажер\nбизнес-аналитик',
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
        textBg: colors.orange,
        post: 'младший\nразработчик',
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
        post: 'младший\nData Engineer',
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
        textBg: colors.orange,
        post: 'младший\n1С аналитик',
        photo: denis,
        questionsBgs: {
            '1': denisBedroom,
            '2': denisKitchen,
            '3': maleWardrobe
        }
    }
]