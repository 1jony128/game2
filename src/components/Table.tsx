import {FC, useEffect, useState} from 'react';
import {bibles, Icouple} from 'data/couple';
import Card from 'components/Card';
import {useStore} from 'store/useStore';
import {useCardsStore} from 'store/useCardsStore';

interface TableProps {
}

const Table: FC<TableProps> = () => {

    const groups = useStore(state => state.groups)
    const step = useStore(state => state.step)
    const setStep = useStore(state => state.setStep)
    const cards = useCardsStore(state => state.cards)
    const addScore = useStore(state => state.addScore)
    const completeCard = useCardsStore(state => state.completeCard)
    const hideCards = useCardsStore(state => state.hideCards)

    const [selectBible, setSelectBible] = useState<any>("")

    const isOverlap = (cards: Icouple[]) => {
        const onComplete  = cards.filter(item => !item.complete)
        const isTwo = onComplete.filter(item => item.show)
        if(isTwo.length === 2){

            if(isTwo[0].group_id === isTwo[1].group_id){
                addScore()
                console.log(isTwo[0])
                const sel = bibles.find(item => item.value === isTwo[0].group_id)
              if(sel){
                setSelectBible(sel.text)
              }
                completeCard(isTwo[0].group_id)
            } else {
                const steps = () => {
                    if(step === groups.length - 1){
                        return 0
                    }
                    return step + 1
                }

                setStep(steps())
                hideCards()
            }
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            isOverlap(cards)
        }, 1500)

        return () => {
            clearTimeout(timer)
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cards])

  const onClose = () => {
    setSelectBible("")
  }

    return (
        <div className={"table"}>
          {selectBible && <div className={'bible'} onClick={onClose}>{selectBible}</div>}
            {
                cards.map((item, index) => (
                    <Card
                        cards={cards}
                        key={item.id}
                        card={item}
                        numberCard={index + 1}
                    />
                ))
            }
        </div>
    );
};

export default Table;
