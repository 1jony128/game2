import React, {useEffect} from 'react';
import './App.css';
import Table from 'components/Table';
import Header from 'components/Header';
import ButtonShuffle from 'components/ButtonShuffle';
import SelectGamers from 'components/SelectGamers';
import CompeleteBlock from 'components/CompeleteBlock';
import {useStore} from 'store/useStore';
import {useCardsStore} from 'store/useCardsStore';

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
    const groups = useStore(state => state.groups)
    const setComplete = useStore(state => state.setComplete)
    const setCards = useCardsStore(state => state.setCards)
    const cards = useCardsStore(state => state.cards)
    const complete = useStore(state => state.complete)


    useEffect(() => {
        const comp = cards.filter(item => item.complete)
        if(comp.length === cards.length){
            setComplete(true)
        }
    }, [cards, setComplete])


    useEffect(() => {
        setCards()
    }, [setCards])

  return (
    <div className="App">
        {
            groups.length ?
               <>
                   <Header />
                   <Table />
                   <ButtonShuffle />
               </>
                :
                <SelectGamers />
        }
        {
            complete && <CompeleteBlock />
        }

    </div>
  );
}

export default App;









































