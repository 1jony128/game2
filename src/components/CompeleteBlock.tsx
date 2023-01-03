import {FC, useEffect, useState} from 'react';
import {useStore} from 'store/useStore';
import {useCardsStore} from 'store/useCardsStore';

interface CompeleteBlockProps {

}

const CompeleteBlock: FC<CompeleteBlockProps> = () => {

    const groups = useStore(state => state.groups)
    const resetGroups = useStore(state => state.resetGroups)
    const setStep = useStore(state => state.setStep)
    const setComplete = useStore(state => state.setComplete)
    const resetCards = useCardsStore(state => state.resetCards)

    const [compele, setComlete] = useState<string>("")

    const onRestart = () => {
        setStep(0)
        setComplete(false)
        resetGroups()
        resetCards()
    }

    useEffect(() => {
        const arr = [...groups.map(item => item.score)]
        const max = Math.max.apply(null, arr)
        groups.forEach(item => {
            if(item.score === max){
                setComlete(item.name)
            }
        })
        console.log(max)

    }, [groups])
    return (
        <div className={'CompeleteBlock'}>
            <div className="content">
                <div className={"key"}>Победила команда:</div>
                <div className={"value"}>{compele}</div>
                <div className={"buttton_shuffle"}>
                    <button onClick={onRestart}>Играть снова!</button>
                </div>

            </div>
        </div>
    );
};

export default CompeleteBlock;
