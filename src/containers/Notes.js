import React from 'react';
import { connect } from 'react-redux';

const Notes = () => {
  return(
    <div>
      <h1>Note-taking App</h1>
      <label htmlFor="note-title">Title: </label>
      <input type="text" id="note-title" />
      <br/>
      <label htmlFor="note-content">Content</label>
      <textarea name="note-content" id="note-content" cols="30" rows="10"></textarea>
    </div>
  )
}

const mapStateToProps = state => ({
    notes: state.notes
})

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Notes);