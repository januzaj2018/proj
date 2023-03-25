var frm = $("#Sheet").get(0);
var doc = frm.contentDocument
  ? frm.contentDocument
  : frm.contentWindow.document;
var bdy = doc.body;
var div = $("#name", bdy).get(0);
$(div).empty();
