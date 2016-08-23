$(document).ready(function(){
  for (var i = 0; i < 1044; i++) {
    var cir = $('<p></p>')
    $('.circles').append(cir);
  }
  for (var i = 0; i < 3; i++) {
    var tear = $('<div></div>').attr('class', 'teardrop')
    $('.tears').append(tear);
  }
})
