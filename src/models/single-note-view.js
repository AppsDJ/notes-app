(function (exports){
  function SingleNoteView(note){
    this._note = note;
  }
  SingleNoteView.prototype = {
    noteAsHTML: function() {
     return "<ul><li><div>" + this._note.readNote() + "</div></li></ul>";
    },
  };
  exports.SingleNoteView = SingleNoteView;
})(this);
