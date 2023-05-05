import {Button} from 'shared/ui/Button/Button';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {counterActions} from 'entities/Counter';
import {getCounterValue} from "../model/selectors/getCounterValue/getCounterValue";

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const { t } = useTranslation();

    const increment = () => {
        dispatch(counterActions.incremented());
    };

    const decrement = () => {
        dispatch(counterActions.decremented());
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button
                onClick={increment}
                data-testid="increment-btn"
            >
                {t('increment')}
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={decrement}
            >
                {t('decrement')}
            </Button>
        </div>
    );
};
