import {FC} from "react";
import {IGroup} from 'models/types';
import Group from 'components/Group';

interface GroupsProps {
    groups: IGroup[]
    step: number
}

const GroupsList: FC<GroupsProps> = ({groups, step}) => {

    console.log(groups)
    return (
        <div className={"GroupList"}>
            {groups.map(group =>
                <Group key={group.id} group={group} step={step}/>
            )}
        </div>
    );
};

export default GroupsList;
