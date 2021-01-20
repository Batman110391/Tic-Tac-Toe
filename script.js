const Matrix = [];
var turn = 0;

$(document).ready(function () {

    generateMatrix();

    HelpX();

    $(".cell").click(function () { 

        var x = $(this).attr('data-X');
        var y = $(this).attr('data-Y');

        if ($(this).hasClass('x') || $(this).hasClass('o')){
            alert("You have already used this box !! ");
        }else{
            showMoving(this, x, y);
        }

        if(turn >= 5 && turn <9)
            controlWin(this);

        if(turn == 9){
            $('#win-title').html("Tie result");
            $('.container-message').css('display', 'block');
        }

    });

});

function generateMatrix(){

    for (let i = 0; i<3; i++){
        Matrix[i] = [];
        for (let j = 0; j<3; j++){
            Matrix[i][j] = 0;
        }
    }
}

function showMoving(ele, x, y){
    if(turn % 2 == 0){
        $(ele).addClass("x");
        turn+=1;
        Matrix[x][y] = "x";
        HelpO();
    }else{
        $(ele).addClass("o");
        turn+= 1;
        Matrix[x][y] = "o";
        HelpX();
    }
}

function HelpX(){
    $('.cell').mouseenter(function () { 
        $('.cell').removeClass("xA");
        $('.cell').removeClass("oA");
        $(this).addClass("xA");
    });

    $('.cell').mouseleave(function () { 
        $('.cell').removeClass("xA");
        $('.cell').removeClass("oA");
    });
}

function HelpO(){
    $('.cell').mouseenter(function () { 
        $('.cell').removeClass("xA");
        $('.cell').removeClass("oA");
        $(this).addClass("oA");
    });

    $('.cell').mouseleave(function () { 
        $('.cell').removeClass("xA");
        $('.cell').removeClass("oA");
    });
}

function controlWin(ele){



    var lastClass = $(ele).attr('class').split(' ').pop();

    var y = 0;
    for(let x = 0; x<3; x++){
        if(Matrix[x][y] == lastClass && Matrix[x][y+1] == lastClass && Matrix[x][y+2] == lastClass){
            $('#win-title').html(lastClass.toUpperCase() +" WON !!");
            $('.container-message').css('display', 'block');
            return;
        }
    }

    for(let x = 0; x<3; x++){
        if(Matrix[y][x] == lastClass && Matrix[y+1][x] == lastClass && Matrix[y+2][x] == lastClass){
            $('#win-title').html(lastClass.toUpperCase()+" WON !!");
            $('.container-message').css('display', 'block');
            return;
        }  
    }


    if(Matrix[y][y] == lastClass && Matrix[y+1][y+1] == lastClass && Matrix[y+2][y+2] == lastClass){
        $('#win-title').html(lastClass.toUpperCase()+" WON !!");
        $('.container-message').css('display', 'block');
        return;
    }  

    if(Matrix[y][y+2] == lastClass && Matrix[y+1][y+1] == lastClass && Matrix[y+2][y] == lastClass){
        $('#win-title').html(lastClass.toUpperCase()+" WON !!");
        $('.container-message').css('display', 'block');
        return;
    }  

}

function restart() {
    $('.container-message').css('display', 'none');
    turn = 0;
    $('.cell').removeClass("xA");
    $('.cell').removeClass("oA");
    $('.cell').removeClass("x");
    $('.cell').removeClass("o");

    generateMatrix();

    HelpX();
}