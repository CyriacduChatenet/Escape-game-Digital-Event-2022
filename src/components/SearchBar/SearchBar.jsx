import './SearchBar.scss';

export const SearchBar = ({state, setState}) => {
    const handleClick = () => {
        // console.log('hello');
    }
    return(
        <div className = 'containerSearch'>
            <div className = 'SearchBar' onClick={() => {setState(true)}}>
                <input type="text"/>
            </div>
            <div className = 'crossDiv' onClick={() => {setState(false)}} style={state === false ? {display:'none'} : {display:'block'}}>

            </div>
        </div>
    )
}