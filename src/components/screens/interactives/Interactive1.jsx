import { Button } from '../../shared/Button';
import { useProgress } from '../../../hooks/useProgress';

export const Interactive1 = () => {
    const {next} = useProgress();
    return (
        <div>
            tut budet igra
            <Button onClick={next}>dalee</Button>
        </div>
    );
};