import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Note.css'
import ApiService from '../api-service'

//this is crashing instead of refreshing
const handleDeleteNote = noteId => {
  ApiService.deleteNote(noteId)
  .then(this.props.handleUpdateAll())
}

export default function Note(props) {
  return (
    <div className='Note'>
      <h2 className='Note__title'>
        <Link to={`/note/${props.id}`}>
          {props.name}
        </Link>
      </h2>
      <button onClick = {() => handleDeleteNote(props.id)} className='Note__delete' type='button'>
        <FontAwesomeIcon icon='trash-alt' />
        {' '}
        remove
      </button>
      <div className='Note__dates'>
        <div className='Note__dates-modified'>
          Modified
          {' '}
          <span className='Date'>
            {format(props.modified, 'Do MMM YYYY')}
          </span>
        </div>
      </div>
    </div>
  )
}
