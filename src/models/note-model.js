(function(exports) {
  var id = 0;
  function generateId() { return id++; }

  function Note(text) {
    this.body = text;
  }
  Note.prototype.id = function() {
      var newId = generateId();
      this.id = function() { return newId; };
      return newId;
  };
  Note.prototype.resetIDs = function(){
      id = 0;
  };

  Note.prototype.readNote = function() {
    return this.body;
  };
  exports.Note = Note;
})(this);
