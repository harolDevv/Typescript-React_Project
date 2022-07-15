import {Sub} from '../types'
interface Props{
    subs: Array<Sub>
} 

const List = ({subs} : Props) => {
    const renderList = (): JSX.Element[] => {
        return subs.map( e => {
            return(
            <li key={e.nick}>
                <img src={e.avatar} alt={`Avatar for ${e.nick}`} />
                <h4>{e.nick}(<small>{e.subMonths}</small>)</h4>
                <p>{e.description?.substring(0,100)}</p>
            </li>
            )
        })
    }

    return (
    <ul>
        {renderList()}
    </ul>
    )
}

export default List