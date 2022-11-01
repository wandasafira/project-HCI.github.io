$("document").ready(function() {
    var itemSlider = $(".item-slider")
    itemSlider.each(function() {
        $(this).hide()
    })

    let count = 0;
    $(itemSlider[count]).show()

    $("#next").click(function(){
        $(itemSlider[count]).hide()
        if(count+1 >= itemSlider.length){
            count = 0;
        }
        else{
            count++;
        }
        $(itemSlider[count]).show()
    })

    $("#prev").click(function(){
        $(itemSlider[count]).hide()
        if(count-1 < 0){
            count = itemSlider.length-1;
        }
        else{
            count--;
        }
        $(itemSlider[count]).show()
    })
})