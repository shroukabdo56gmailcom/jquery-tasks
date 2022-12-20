$.ajax({
  method: "GET",
  url: "../js/rockbands.json",
  dataType: "json",
  success: function (res) {
    var myObj;

    for (let i in res) {
      $("#sec1").append("<option>" + i + "</option>");
    }

    $("#sec1").on("change", function () {
      myObj = res[$(this).val()];
      $("#sec2").empty();
      for (const key in myObj) {
        $("#sec2").append(
          "<option>" + myObj[key].name + "</option>"
        );
      }
      $("#sec2").on("change",function () { 
        var select=document.querySelector("#sec2")
       window.open(myObj[select.selectedIndex].value," ");

       })
    });
  },
});

