const Input = ({ onChange, value, text }) => {
    return (
        <div>
            {text}: <input
                onChange={(event) => {
                    console.log(event.target.value)
                    onChange(event.target.value)
                }}
                value={value || ''}
            />
        </div>
    )
}

export default Input