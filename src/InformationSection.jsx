import { InformationElement } from './InformationElement'

export const InformationSection = (props) => {
    const buttonClick = () => {
        props.onClickGetCharacter(props.data)
    }
    
    return(
        <div>
            <h1 className='header'>{props.headerName}</h1>

            {props.data.map((dataElement,index) =>{
                return(
                    <InformationElement key = {index} information = {dataElement}/>
                
                )
            })}
            <button onClick={buttonClick}>Click Me</button>
        </div>
    )
}

// export default info_section