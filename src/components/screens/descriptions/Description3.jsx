import { useProgress } from '../../../hooks/useProgress';
import { Button } from '../../shared/Button';

export const Description3 = () => {
    const {next} = useProgress();

    return (
        <div>
            <p>
                По дороге обратно в отдел ты столкнулся с СЕО. Он остановил взгляд на твоем спортивном костюме\твоих шортах – что бы это могло означать? Может, он начал мысленно разрабатывать гайд по дресс-коду? :)
            </p>
            <Button onClick={next}>dalee</Button>
        </div>
    )
}