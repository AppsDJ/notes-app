function singleNoteView() {
  var note = new Note("Text");
  var singleNoteView  = new SingleNoteView(note);
  assert.isTrue("Returns note as HTML", singleNoteView.noteAsHTML() === "<ul><li><div>Text</div></li></ul>");
}



singleNoteView();
