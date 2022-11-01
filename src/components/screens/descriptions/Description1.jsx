import { Button } from '../../shared/Button';
import { useProgress } from '../../../hooks/useProgress';

export const Description1 = () => {
    const {next} = useProgress();
    return (
        <div>
            <p>
                Наставник предложил тебе обсудить проект во время прогулки по офису: почему бы не совместить приятное с полезным?
            </p>
            <Button onClick={next}>dalee</Button>
        </div>
    )
}