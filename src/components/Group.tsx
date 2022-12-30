import {FC} from "react";
import {IGroup} from 'models/types';

interface GroupProps {
    group: IGroup
    step: number
}

const Group: FC<GroupProps> = ({group, step}) => {
    return (
        <div className={"Group " + `${group.id === step && " step"}`}>
           <div className={"name"}>{group.name}: </div>
            <div className={"score"}>{group.score}</div>
        </div>
    );
};

export default Group;
