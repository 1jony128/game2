import create from 'zustand'
import {useState} from 'react';
import {couples, Icouple} from 'data/couple';
import {IGroup} from 'models/types';
import {shuffle} from 'helpers/shuffle';
import { devtools, persist } from 'zustand/middleware'

interface IStore {
    cards: Icouple[],
    setCards: () => void,
    showCard: (id: number) => void,
    resetCards: () => void,
    completeCard: (id: number) => void
    hideCards: () => void
}


export const useCardsStore = create<IStore>()(
    devtools(
        (set) => ({
            cards: couples,
            resetCards: () => set((state) => ({ cards: [
                    ...shuffle(state.cards.map(item => {
                        item.show = false
                        item.complete  = false
                        return item
                    }))
                ] })),
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
