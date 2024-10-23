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