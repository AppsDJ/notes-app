(function(exports) {
  function noteListView(notelist) {
    this._list = notelist;
  }
  noteListView.prototype.toHTML = function() {
    if (!this._list.readNotes().length) {
      return null;
    } else {
    var HTMLstring = "<ul>";
    this._list.readNotes().forEach(function(note) {
      var noteText = note.readNote();
      var shortened = noteText.substring(0,20);
      HTMLstring += "<li><div>" +"<a href='#" +  note.id() + "'>" + shortened +  "</a>" + "</div></li>";
    });

     return HTMLstring += "</ul>";
  }
  };

  exports.noteListView = noteListView;
})(this);
