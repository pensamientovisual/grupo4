
$(document).ready(function(){

    //$("#contenido").empty();
    //$( "#contenido" ).load( "page1.html" );

    var mujer = document.getElementById('mujer_user')
    var hombre = document.getElementById('hombre_user')
    var click_mujer = false
    var click_hombre = false
    var boton = $("#username_btn")
    var clicked_mujer = false
    var clicked_hombre = false

    
    $("#PDbtnN1").click(function(){
        n_1 = true
        console.log(n_1)
        $("#ilvl2").css("cursor", "url('cursor/cursor_pointer.png'), auto")
        $("#iconlvl2").css("cursor", "url('cursor/cursor_pointer.png'), auto")


        
    });


    $(mujer).click(function(){
        $(mujer).css("transform", "scale(1.1, 1.1)");
        $(hombre).css("transform", "scale(0.9, 0.9)");
        $(mujer).css("transition-duration", "0.5s");
        $(hombre).css("transition-duration", "0.5s");
        click_mujer = true
        click_hombre = true
        clicked_mujer = true
    });
    $(hombre).click(function(){
        $(hombre).css("transform", "scale(1.1, 1.1)");
        $(mujer).css("transform", "scale(0.9, 0.9)");
        $(mujer).css("transition-duration", "0.5s");
        $(hombre).css("transition-duration", "0.5s");
        click_hombre = true
        click_mujer = true
        clicked_hombre = true
    });

    
    $(hombre).hover(function(){
        if (click_mujer == false){
            $(hombre).css("transform", "scale(1.1, 1.1)");
            $(mujer).css("transform", "scale(0.9, 0.9)");
            $(hombre).css("transition-duration", "0.5s");
            $(mujer).css("transition-duration", "0.5s")};}
    


        , function(){
        if (click_mujer == false){
            $(hombre).css("transform", "scale(1, 1)");
            $(mujer).css("transform", "scale(1, 1)");
            $(hombre).css("transition-duration", "0.5s");
            $(mujer).css("transition-duration", "0.5s")};}

    );

    $(mujer).hover(function(){
        if (click_hombre == false){
            $(mujer).css("transform", "scale(1.1, 1.1)");
            $(hombre).css("transform", "scale(0.9, 0.9)");
            $(mujer).css("transition-duration", "0.5s");
            $(hombre).css("transition-duration", "0.5s")};}
    


        , function(){
        if (click_hombre == false){
            $(mujer).css("transform", "scale(1, 1)");
            $(hombre).css("transform", "scale(1, 1)");
            $(mujer).css("transition-duration", "0.5s");
            $(hombre).css("transition-duration", "0.5s")};}

    );

    $(boton).hover(function(){
            $(boton).css("background", "#c03600");
            $(boton).css("border", "0px");
            $(boton).css("color", "white");
            $(boton).css("cursor", "url('cursor/cursor_pointer.png'), auto;");
            $(boton).css("transition-duration", "0.5s")}
            

        , function(){
            $(boton).css("background", "#e1743d");
            $(boton).css("transition-duration", "0.2s")}

    );

});




