import React, { useReducer, useState } from 'react'
import {Sub} from '../types'

interface FormState{
    inputValues:Sub
}

interface FormProps{
    onNewSub: (newSub: Sub) => void
}

const INITIAL_STATE = {
        nick:'',
        subMonths: 0,
        avatar: '',
        description: ''
}

type FormReducerAction = {
    type: 'change_value'
    payload: {
        inputName:string,
        inputValue:string
    }
} | {
    type: 'clear'
}

const formReducer = (state:FormState['inputValues'],action: FormReducerAction) => {
    switch(action.type){
        case 'change_value':
            const {inputName , inputValue} = action.payload
            return{
                ...state,
                [inputName] : inputValue
            }
        case 'clear' :
            return INITIAL_STATE
    }
}

const Form = ({onNewSub}: FormProps) => {
    const [inputValue, setinputValue] = useState<FormState['inputValues']>(INITIAL_STATE)
    const [inputValues, dispatch] = useReducer(formReducer, INITIAL_STATE)




    const handleSubmit =  (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onNewSub(inputValue)
        handleClear()
    }

    const handleChange = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target
        dispatch({
            type: 'change_value',
            payload: {
                inputName: name,
                inputValue: value
            }
        })
        setinputValue({
            ...inputValue,
            [event.target.name] : event.target.value
        })
    }

    const handleClear = () => {
        dispatch({type: 'clear'})
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={inputValue.nick} type="text" name="nick" placeholder='Nick' />
            <input onChange={handleChange} value={inputValue.subMonths} type="text" name="subMonths" placeholder='subMonths' />
            <input onChange={handleChange} value={inputValue.avatar} type="text" name=    "avatar" placeholder='Avatar' />
            <textarea onChange={handleChange} value={inputValue.description} name="description" placeholder='description'>

            </textarea>
            <button onClick={handleClear} type="button">Clear the form</button>
            <button type="submit">Save new sub!</button>
        </form>
    </div>
  )
}

export default Form