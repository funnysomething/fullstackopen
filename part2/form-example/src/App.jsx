import {useState} from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState(
    'a new note...'
  )
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length+1
    }
    console.log(noteObject.important)
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = event => {
    console.log(event.target.value);
    setNewNote(event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.filter((note) => {
          if (!showAll){
            return note.important
          } else {
            return true
          }
        }).map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <button onClick={() => setShowAll(!showAll)}>{showAll ? "Show Important Only":"Show All"}</button>
      <p></p>
      <form onSubmit={addNote}> 
          <input value={newNote}
          onChange={handleNoteChange}/>
          <button type="submit" onClick={() => addNote(newNote)}>Save</button>
      </form>
    </div>
  )
}

export default App