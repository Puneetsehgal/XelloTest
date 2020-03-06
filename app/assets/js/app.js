$(document).ready(function () {
        $(".add-remove-icon").on("click", function () {
                $(this).toggleClass("open");
        })

        $(".tooltip").hover(function(){
                var id = $(this).data("id");
                console.log(id);
                $("#"+id).show();
        }, function(){
                $(".toottip-info").hide(); 
        });
});