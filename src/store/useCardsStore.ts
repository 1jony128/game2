import create from 'zustand'
import {couples, Icouple} from 'data/couple';
import {shuffle} from 'helpers/shuffle';
import { devtools } from 'zustand/middleware'

interface IStore {
    cards: Icouple[],
    setCards: () => void,
    setCards2: (cards: Icouple[]) => void,
    showCard: (id: number) => void,
    resetCards: () => void,
    completeCard: (id: number) => void
  completeCard2: (id:number) => void
    hideCards: () => void
}

const setter  = () => {
    return (state: IStore) => ({ cards: [
            ...shuffle(state.cards.map(item => {
                item.show = false
                item.complete  = false
                return item
            }))
        ] })
}


export const useCardsStore = create<IStore>()(
    devtools(
        (set) => ({
            cards: couples,
            resetCards: () => set(setter(),false, "cards/resetCard"),
            setCards2: (cards) => set((state) => ({ cards: [
                  ...shuffle(cards)] }),
              false,
              'cards/setCards'),
            setCards: () => set((state) => ({ cards: [
                        ...shuffle(state.cards)] }),
                false,
                'cards/setCards'),
            showCard: (id: number) => set((state) => ({ cards: [...state.cards.map(item => {
                        if(item.id === id){
                            item.show = true
                        }
                        return item
                    })] }),
                false,
                'cards/showCard'),
            completeCard: (id: number) => set((state) => ({ cards: [...state.cards.map(item => {
                        if(item.group_id === id){
                            item.complete = true
                        } else if(!item.complete){
                            item.show = false
                        }
                        return item
                    })] }),
                false,
                'cards/completeCard'),
          completeCard2: (id: number) => set((state) => ({ cards: [...state.cards.map(item => {
                if(item.id === id){
                  item.complete = true
                } else if(!item.complete){
                  item.show = false
                }
                return item
              })] }),
            false,
            'cards/completeCard2'),
            hideCards: () => set((state) => ({ cards: [...state.cards.map(item => {
                        if(!item.complete){
                            item.show = false
                        }
                        return item
                    })] }),
                false,
                'cards/hideCards')
        }), { name: "cards" }
    )
)
