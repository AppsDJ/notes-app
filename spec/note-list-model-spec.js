function createNotesList() {
  var list = new noteList()
  list.addNote("I love ruby");
  assert.isTrue("Creates notelist", list.readNotes()[0].readNote() === "I love ruby");
}

createNotesList();
