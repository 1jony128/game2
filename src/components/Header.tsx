import {Dispatch, FC, SetStateAction} from 'react';
import ButtonShuffle from 'components/ButtonShuffle';
import {Icouple} from 'data/couple';
import SelectGamers from 'components/SelectGamers';
import {IGroup} from 'models/types';
import GroupsList from 'components/GroupsList';

interface HeaderProps {
    cards: Icouple[]
    setCards: Dispatch<SetStateAction<Icouple[]>>
    groups: IGroup[]
    step: number
}

const Header: FC<HeaderProps> = ({setCards, cards, groups, step}) => {
    return (
        <div className={"Header"}>
            <GroupsList step={step} groups={groups}/>
        </div>
    );
};

export default Header;
