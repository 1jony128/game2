import {Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import {IGroup} from 'models/types';

interface SelectGamersProps {
    setGroups: Dispatch<SetStateAction<IGroup[]>>
}

const SelectGamers: FC<SelectGamersProps> = ({ setGroups }) => {
    const [count, setCount] = useState<number>(1);
    const [inputs, setInputs] = useState<number[]>([])
    const [values, setValues] = useState<IGroup[]>([])

    useEffect(() => {
            const arr = []
            for(let i = 0; i < count; i++){
                arr.push(i)
            }
            setInputs(arr)
    },[count])

    const onAddGroup = (value: string, id: number) => {
        const clone = [...values]
        clone[id] = {
            name: value,
            id: id,
            score: 0
        }
        setValues(clone)
    }

    const onSubmit = () => {
        setGroups(values)
    }

    return (
        <div className={"SelectGamers"}>
            <h2>Введите количество команд</h2>
            <div className={"counter"}>
                <button onClick={() => setCount(prevState => prevState + 1)}>+</button>
                <span>{count}</span>
                <button onClick={() => setCount(prevState => prevState - 1)}>-</button>
            </div>

            {inputs && inputs?.length > 0 && <h2>Введите названия команд</h2>}
            {inputs && inputs.map(item => {
                return (
                    <div className={"input_wrapper"}>
                        <input
                            onChange={(e) => onAddGroup(e.target.value, item)}
                            id={`input_${item}`}
                            className={"input_select"}
                            type="text"
                        />
                    </div>

                )
            })}
            {values && values?.length > 0 && <button className={"submit_selectGames"} onClick={onSubmit}>Начать игру!</button>}
        </div>
    );
};

export default SelectGamers;
