import {Dispatch, FC, SetStateAction, useEffect} from 'react';
import {Icouple} from 'data/couple';
import Card from 'components/Card';
import {IGroup} from 'models/types';

interface TableProps {
    cards: Icouple[]
    setCards: React.Dispatch<React.SetStateAction<Icouple[]>>
    step: number
    setStep: Dispatch<SetStateAction<number>>
    setGroups: Dispatch<SetStateAction<IGroup[]>>
    group: IGroup[]
}

const Table: FC<TableProps> = ({
    setCards,
    cards,
    step,
    setStep,
    setGroups,
    group,
}) => {



    const isOverlap = (cards: Icouple[]) => {
        console.log("render")
        const onComplete  = cards.filter(item => !item.complete)
        const isTwo = onComplete.filter(item => item.show)
        if(isTwo.length === 2){

            if(isTwo[0].group_id === isTwo[1].group_id){
                setGroups(prevState => {
                    console.log(prevState)
                    return [...prevState.map(item => {
                        if(item.id === step){
                            item.score = item.score + 1
                        }
                        return item
                    })]
                })


                setCards(prevState => {
                   return [...prevState.map(item => {
                       if(item.group_id === isTwo[0].group_id){
                           item.complete = true
                       } else if(!item.complete){
                           item.show = false
                       }
                       return item
                   })]
                })
            } else {
                setStep(prev => {
                    if(prev === group.length - 1){
                        return 0
                    }
                    return prev + 1
                })
                console.log("группы не совпали")
                setCards([...cards.map(item => {
                    if(!item.complete){
                        item.show = false
                    }
                    return item
                })])
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

    return (
        <div className={"table"}>
            {
                cards.map((item, index) => (
                    <Card
                        cards={cards}
                        key={item.id}
                        card={item}
                        setCards={setCards}
                        numberCard={index + 1}
                    />
                ))
            }
        </div>
    );
};

export default Table;
