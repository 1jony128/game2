import {FC} from "react";
import {IGroup} from 'models/types';
import Group from 'components/Group';
import {useStore} from 'store/useStore';

const GroupsList: FC = ({}) => {

    const groups = useStore(state => state.groups)

    return (
        <div className={"GroupList"}>
            {groups.map(group =>
                <Group key={group.id} group={group} />
            )}
        </div>
    );
};

export default GroupsList;
