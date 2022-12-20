$("#arnb").draggable()
$("#bhol").droppable({
    drop:function () {  
        $("#arnb").hide()
    }
})
