$(document).ready(function () {
  let hiddenRow = $(".expandable");
  $(".expand-btn").click(function () {
    hiddenRow.toggleClass("hidden");
    if (hiddenRow.is(":visible")) {
      $(".expand-btn").html("Скрыть");
    } else {
      $(".expand-btn").html("Читать Ещё");
    }
  });
});
$(document).ready(function () {
  let hiddenRow = $(".expandablle");
  $(".qwe-btn").click(function () {
    hiddenRow.toggleClass("hidden");
    if (hiddenRow.is(":visible")) {
      $(".qwe-btn").html("Скрыть");
    } else {
      $(".qwe-btn").html("Посмотреть планеты");
    }
  });
});
$(document).ready(function () {
  $(".black_hole_btn").click(function () {
    const imageSrc = $(this).attr("src");
    $("#modalImage").attr("src", imageSrc);
    $(".modal-canvas").removeClass("hidden");
  });
  $(".modal-close").click(function () {
    $(".modal-canvas").addClass("hidden");
  });
  $(".modal-canvas").click(function (event) {
    if (event.target === this) {
      $(this).addClass("hidden");
    }
  });
});
