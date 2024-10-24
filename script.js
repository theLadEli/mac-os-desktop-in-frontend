$("#121").click(function(){
    alert("Test")
})

// ------------------------------

$( "#main").sortable({
    // axis: "x",
    connectWith: "#touchbar",
})

$( "#touchbar").sortable({
    // axis: "x",
    connectWith: "#main",
})

// ------------------------------

$("#header-menu").menu({
  position: { my: "left top", at: "left-0 bottom+5"},
})

$(".window").draggable({
    containment: "window",
})

$(".window").resizable();
