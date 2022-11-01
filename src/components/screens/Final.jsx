import { Button } from '../shared/Button';
import { useResult } from '../../hocs/useResult';

export const Final = () => {
    const {points, result} = useResult();
    return (
        <div>
            Коллеги подготовили чек-лист, который укажет на твои сильные стороны, а также поможет прокачать важные для работы в Axenix навыки.
            {points.map(point => (
                <div key={point.type}>
                    <p>{point.name}</p>
                    <div>
                        {point.points} / {point.max}
                    </div>
                    <div style={{width: '400px', height: '40px', background: 'black'}} />
                    <div style={{width: 400 * point.part + 'px', height: '40px', background: 'red', marginTop: '-40px'}} />
                </div>
            ))}

            <p>
                {result?.text}
            </p>
        </div>
    )
}
