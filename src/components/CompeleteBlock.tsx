import {FC, useEffect, useState} from 'react';
import {IGroup} from 'models/types';

interface CompeleteBlockProps {
    groups: IGroup[]
    onRestart: () => void
}

const CompeleteBlock: FC<CompeleteBlockProps> = ({groups, onRestart}) => {

    const [compele, setComlete] = useState<string>("")

    useEffect(() => {
        const arr = [...groups.map(item => item.score)]
        const max = Math.max.apply(null, arr)
        groups.forEach(item => {
            if(item.score === max){
                setComlete(item.name)
            }
        })
        console.log(max)

    }, [groups])
    return (
        <div className={'CompeleteBlock'}>
            <div className="content">
                <div className={"key"}>Победила команда:</div>
                <div className={"value"}>{compele}</div>
                <div className={"buttton_shuffle"}>
                    <button onClick={onRestart}>Играть снова!</button>
                </div>

            </div>
        </div>
    );
};

export default CompeleteBlock;
