import { useProgress } from '../../hooks/useProgress';
import { Button } from '../shared/Button';

export const Prefinal = () => {
    const {next} = useProgress();
    return (
       <div>
           Это был продуктивный день, самое время узнать результаты работы!
           Собрали для тебя обратную связь, here we go
           <Button onClick={next}>dalee</Button>
       </div>
    )
}
