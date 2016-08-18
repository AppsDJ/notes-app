(function(exports) {
  function noteList() {
    this._list = []
  }
  noteList.prototype.readNotes = function () {
    return this._list
  };

  noteList.prototype.addNote = function(note) {
    var newNote = new Note(note)
    this._list.push(newNote)
  }

  exports.noteList = noteList
})(this)
