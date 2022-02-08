import * as C from './style'
import { useState, KeyboardEvent } from 'react';

type AddAreaProps = {
    onAdd: (taskName:string) => void
}

const AddArea = ({onAdd}:AddAreaProps) => {

    const [inputText, setInputText] = useState('');

    const handleKeyUp = (event:KeyboardEvent) => {
        if(event.code === 'Enter' && inputText.trim().length > 0){
            onAdd(inputText)
            setInputText('')
        }
    }

    return(
        <C.Container>
            <div className="image">+</div>
            <input
                type="text"
                placeholder='Adcione uma tarefa'
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />                        
        </C.Container>
    )
}

export default AddArea