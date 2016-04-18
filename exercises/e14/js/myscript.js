$(function() {

       $topIndex = 0;

       $( ".ui-draggable" ).draggable().css({"position":"absolute","top":"0px" });;

        $(".ui-draggable").click(function(){
            $topIndex=$topIndex+1;
            $(this).css("z-index",$topIndex);
        });

   });


        $(function(){
          $.okvideo({ source: 'https://www.youtube.com/watch?v=OCowsu0mQto',
                    volume: 70})
        });


        //The dollar sign, $, is the symbol that indicates the code is referencing jQuery. The $ object selects elements that needs to perform particular actions.
