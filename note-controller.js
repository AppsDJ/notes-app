(function(exports) {
  function noteController(notelist) {
    this._list = notelist;
  };

  noteController.prototype.setUpNoteListView = function () {
    this._noteListView = new noteListView(this._list);
  };

  noteController.prototype.HTMLToApp = function () {
    var element = document.getElementById("app");
    element.innerHTML = this._noteListView.toHTML();
  };
  exports.noteController = noteController;
})(this);
