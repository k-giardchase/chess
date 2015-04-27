var chess = function(queen, target) {
  if((queen[0] === target[0]) || (queen[1] === target[1]) || ((Math.abs(queen[0] - target[0])) === (Math.abs(queen[1] - target[1])))) {
      return true;
  } else {
      return false;
  }
};

$(document).ready(function() {
  $("#chessboard").submit(function(event) {

    var queen_x = parseInt($('input#queen_x').val());
    var queen_y = parseInt($('input#queen_y').val());
    var target_x = parseInt($('input#target_x').val());
    var target_y = parseInt($('input#target_y').val());

    var queen = [queen_x, queen_y];
    var target = [target_x, target_y];

    var result = chess(queen, target);

    $(".not").empty();

    if (!result) {
        $(".not").text("not");
    }

    $("#result").show();
    event.preventDefault();
  });
});
