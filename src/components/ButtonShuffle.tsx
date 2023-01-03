import {FC} from 'react';
import {useStore} from 'store/useStore';
import {useCardsStore} from 'store/useCardsStore';

interface ButtonShuffleProps {
}

const ButtonShuffle: FC<ButtonShuffleProps> = () => {

    const setCards = useCardsStore(state => state.setCards)

    const onClick = () => {
        setCards()
    }

    const resetGroups = useStore(state => state.resetGroups)
    const setStep = useStore(state => state.setStep)
    const setComplete = useStore(state => state.setComplete)
    const resetCards = useCardsStore(state => state.resetCards)

    const onRestart = () => {
        setStep(0)
        setComplete(false)
        resetGroups()
        resetCards()
    }

    return (
        <div className={"buttton_shuffle"}>
            <button onClick={onClick}>Перемешать</button>
            <button className={"reset"} onClick={onRestart}>Играть заново</button>
        </div>
    );
};

export default ButtonShuffle;
