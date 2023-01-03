import {FC} from 'react';

import GroupsList from 'components/GroupsList';

const Header: FC = ({}) => {
    return (
        <div className={"Header"}>
            <GroupsList />
        </div>
    );
};

export default Header;
