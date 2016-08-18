function noteControllerwithList() {
  var list = new noteList();
  var controller = new noteController(list);
  assert.isTrue("Controller contains a list", controller._list === list);
}

function noteControllerHTML() {
  var list = new noteList();
  var controller = new noteController(list);
  var appDiv = document.createElement('div', {id: "app"});
  document.getElementById = function() {
    return appDiv;
  };
  controller._list.addNote("My favourite drink: seltzer");
  controller.setUpNoteListView();
  controller.HTMLToApp();
  assert.isTrue("Controller outputs to app", document.getElementById('app').innerHTML === '<ul><li><div><a href="#0">My favourite drink: </a></div></li></ul>');
}

noteControllerwithList();
noteControllerHTML();
