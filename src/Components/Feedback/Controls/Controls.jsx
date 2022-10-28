export const Controls = ({options, onLeaveFeedback}) => {
    // console.log(options);
    return(
        <div>
            {options.map(elem => {
                return <button onClick={onLeaveFeedback} type="button" name={elem} key={elem}>{elem}</button>
            })}
        </div>
    )
} 