import create from 'zustand'
import {IGroup} from 'models/types';
import { devtools} from 'zustand/middleware'

interface IStore {
    groups: IGroup[],
    setGroups: (groups: IGroup[])  => void,
    resetGroups: ()  => void,
    complete: boolean,
    setComplete: (complete: boolean)  => void,
    step: number,
    setStep: (step: number) => void,
    addScore: () => void
}


export const useStore = create<IStore>()(
    devtools(
        (set) => ({
            groups: [],
            setGroups: (groups: IGroup[]) => set(() => ({ groups: groups.map(item => {
                    item.score = 0
                    return item
                }) }),
                false,
                'groups/setGroups'),
            resetGroups: () => set((state) => ({ groups: state.groups.map(item => {
                    item.score = 0
                    return item
                }) }),
                false,
                'groups/resetGroups'),
            addScore: () => set((state) => ({ groups: [...state.groups.map(item => {
                    if(item.id === state.step){
                        item.score = item.score + 1
                    }
                    return item
                })] }),
                false,
                'groups/addScore'),
            complete: false,
            setComplete: (complete: boolean) => set(() => ({ complete: complete })),
            step: 0,
            setStep: (step) => set((state) => ({ step: step }),
                false,
                'step/setStep'),
        }), { name: "groups" }
    )
)
