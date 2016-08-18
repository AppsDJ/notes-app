function createsANote() {
  var note = new Note("My favourite language is Ruby");
  assert.isTrue("creates a note", note.readNote() === "My favourite language is Ruby");
}

function uniqueIdForEachNote() {
  var note = new Note();
  var note_two = new Note();
  assert.isTrue("first note has id 0", note.id() === 2);
  assert.isTrue("the second note has id 1 ", note_two.id() === 3);
}

function resetsTheIds() {
  var note = new Note();
  note.resetIDs();
  var note_two = new Note();
  assert.isTrue("note after reset has id 0 ", note_two.id() === 0);
}

createsANote();
// uniqueIdForEachNote();
resetsTheIds();
