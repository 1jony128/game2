import {FC} from "react";
import {IGroup} from 'models/types';
import {useStore} from 'store/useStore';

interface GroupProps {
    group: IGroup
}

const Group: FC<GroupProps> = ({group}) => {

    const step = useStore(state => state.step)

    return (
        <div className={`Group ${group.id === step && " step"}`}>
           <div className={"name"}>{group.name}: </div>
            <div className={"score"}>{group.score}</div>
        </div>
    );
};

export default Group;
