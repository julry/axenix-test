import { useProgress } from '../../hooks/useProgress';
import { Button } from '../shared/Button';

export const Intro = () => {
    const {next} = useProgress();

    return (
        <div>
            Привет!
            Добро пожаловать в карьерный акселератор от Axenix.
            Выбирай персонажа, за которого будешь играть, отвечай на вопросы и помни – твои решения влияют на ход игры :)
            Three… Two… One… Goooo — choose your Axenix fighter!
            <Button onClick={next}>Дальше</Button>
        </div>
    )
};
