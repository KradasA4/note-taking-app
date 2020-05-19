import React, {useEffect} from 'react';
import NoteForm from '../components/NoteForm';
import NotesDisplay from '../components/NotesDisplay';
import { connect } from 'react-redux';
import * as actionTypes from '../store/constants';
import * as actionCreators from '../store/actions';

const Notes = (props) => {
  return(
    <div>
      <h1>Note-taking App</h1>
      <NoteForm 
        inputTitle={props.inputTitle} 
        inputContent={props.inputContent}
        onTitleChange={props.onTitleChange}
        onContentChange={props.onContentChange}
        onAddNote={props.onAddNote}

        onAddNoteThenClearInput={props.onAddNoteThenClearInput}
        />
      <hr/>
      <NotesDisplay props={props} 
        activeNotes={props.activeNotes}
        deletedNotes={props.deletedNotes}
        currentNotes={props.currentNotes}
        onDeleteNote={props.onDeleteNote}
        onSelectActive={props.onSelectActive}
        onSelectDeleted={props.onSelectDeleted}
      />
    </div>
  )
}

const mapStateToProps = state => ({
    inputTitle: state.inputs.inputTitle,
    inputContent: state.inputs.inputContent,
    activeNotes: state.notes.activeNotes,
    deletedNotes: state.notes.deletedNotes,
    currentNotes: state.notes.currentNotes
})

const mapDispatchToProps = dispatch => {
  return {
    onTitleChange: (title) => dispatch(actionCreators.titleChange(title)),
    onContentChange: (content) => dispatch(actionCreators.contentChange(content)),
    onAddNote: (title, content, event) => dispatch(actionCreators.addNote(title, content, event)),
    onDeleteNote: (id) => dispatch(actionCreators.deleteNote(id)),
    onSelectActive: () => dispatch(actionCreators.selectActive()),
    onSelectDeleted: () => dispatch(actionCreators.selectDeleted()),

    onAddNoteThenClearInput: (title, content, event) => dispatch(actionCreators.addNoteThenClearInput(title, content, event))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);