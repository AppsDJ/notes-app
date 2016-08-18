var list = new noteList();
var controller = new noteController(list);
controller._list.addNote("My favourite drink: seltzer");
controller._list.addNote("My favourite food: burger");
controller.setUpNoteListView();
controller.HTMLToApp();
