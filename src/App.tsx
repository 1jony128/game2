import React, {useEffect, useState} from 'react';
import './App.css';
import Table from 'components/Table';
import Header from 'components/Header';
import {couples} from 'data/couple';
import {shuffle} from 'helpers/shuffle';
import {IGroup} from 'models/types';
import ButtonShuffle from 'components/ButtonShuffle';
import SelectGamers from 'components/SelectGamers';
import CompeleteBlock from 'components/CompeleteBlock';

// const init = [
//     {
//         score: 0,
//         name: "Вифлеемская звезда",
//         id: 1
//     },
//     {
//         score: 0,
//         name: "Евреи",
//         id: 2
//     },
//     {
//         score: 0,
//         name: "Книжный свиток",
//         id: 3
//     }
// ]

function App() {
    const [cards, setCards] = useState(couples)
    const [groups, setGroups] = useState<IGroup[]>([])
    const [step, setStep] = useState(1)
    const [complete, setComplete] = useState(false)

    const onRestart = () => {
        setStep(1)
        setComplete(false)
        setGroups(prev => {
            return [...prev.map(item => {
                item.score = 0
                return item
            })]

        })
        setCards(prevState => ([
            ...shuffle(prevState.map(item => {
                item.show = false
                item.complete  = false
                return item
            }))
        ]))
    }


    useEffect(() => {
        const comp = cards.filter(item => item.complete)
        if(comp.length === cards.length){
            setComplete(true)
        }
    }, [cards])


    useEffect(() => {
        setCards(prevState => ([
            ...shuffle(prevState)
        ]))
    }, [])

  return (
    <div className="App">
        {
            groups.length ?
               <>
                   <Header
                       cards={cards}
                       setCards={setCards}
                       groups={groups}
                       step={step}
                   />
                   <Table
                       cards={cards}
                       setCards={setCards}
                       step={step}
                       setStep={setStep}
                       setGroups={setGroups}
                   />
                   <ButtonShuffle cards={cards} setCards={setCards}/>
               </>
                :
                <SelectGamers setGroups={setGroups} />
        }
        {
            complete && <CompeleteBlock groups={groups} onRestart={onRestart}/>
        }

    </div>
  );
}

export default App;
