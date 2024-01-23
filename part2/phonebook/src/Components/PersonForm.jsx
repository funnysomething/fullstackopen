import Input from './Input'

const PersonForm = ({addName, newName, newNumber, setNewName, setNewNumber}) => {
    return (
        <form onSubmit={addName}>
            <Input onChange={setNewName} text="Name" value={newName} />
            <Input onChange={setNewNumber} text="Number" value={newNumber} />
            <div>
                <button type="submit">Add</button>
            </div>
        </form>)
}

export default PersonForm