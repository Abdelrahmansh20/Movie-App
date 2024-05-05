
// side Menu

$(".openNav").on("click" ,function(){
    $(".nav-tab").animate({width:'300px',padding:'1.5rem'},50)
    $(".openNav").addClass("d-none");
    $(".closeNav").removeClass("d-none");

})
$(".closeNav").on("click" ,function(){
    $(".nav-tab").animate({width:'0px',padding:'0'},50)
    $(".openNav").removeClass("d-none");
    $(".closeNav").addClass("d-none");
    


})



async function getNowMovie() {
    let response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    let data = await response.json();
    let movies = data.results
    console.log(movies);
    
    displayMovie(movies)
}
getNowMovie()




function displayMovie(arr){
    console.log(arr);

    let cartona =''

    for(var i=0 ;i < arr.length ; i++){
        
        cartona +=  `
        <div class="col-lg-4 col-md-6 col-sm-12 animate__animated animate__fadeIn movie-card">
    <div id="card" class="item overflow-hidden animate__animated  animate__fadeIn">
        <div class="cardImage animate__fadeIn">
            <img src="https://image.tmdb.org/t/p/w185/${arr[i].poster_path}" class="img-fluid imm w-100">
        </div>
        <div class="overlay overflow-hidden animate__fadeIn " >
            <h1 class="animate__animated title ">${arr[i].title}</h1>    
            <p class="animate__animated desc ">${arr[i].overview}</p>
            <p class="animate__animated date "><span class="fst-normal">Release Date<span> :${arr[i].release_date}</span></span></p>
            <h3 class="rate animate__animated ">${arr[i].vote_average}</h3>
            <h3 class="rate animate__animated vote ">${arr[i].vote_average}</h3>
        </div>
    </div>
    </div>
        ` 
        // $('.myRow').html(term);
        // $('.myRow div').addClass("animate__fadeIn");
        // $('.myRow ').mouseenter(cardHoverIn);
        // $('.myRow').mouseleave(cardHoverOut);
        
    }

    document.querySelector(".myRow").innerHTML=cartona
}



async function searchMovie(term) {
    let response = await fetch (`https://api.themoviedb.org/3/search/movie?query=${term}&api_key=a295c2fda0d44898d34830970fce7edc&language=en-US&include_adult=false`);
    let data = await response.json();
    let movies = data.results
    console.log(movies);
        
        displaySearch(movies);
    }
// searchMovie('movie')

let searchInput = document.querySelector("#search")

searchInput.addEventListener("keyup", function (){
    displaySearch(searchInput.value)
}
)

function displaySearch(arr){
    console.log(arr);

    let cartona =''

    for(var i=0 ;i < arr.length ; i++){
        
        
        cartona +=  `
        <div class="col-lg-4 col-md-6 col-sm-12 animate__animated animate__fadeIn movie-card">
    <div class="item overflow-hidden  animate__fadeIn">
        <div class="cardImage animate__fadeIn">
            <img src="https://image.tmdb.org/t/p/w500${arr[i].backdrop_path}" class="img-fluid w-100 animate__animated">
        </div>
        <div class="overlay overflow-hidden animate__fadeIn " >
            <h1 class="animate__animated title">${arr[i].title}</h1>    
            <p class="animate__animated desc ">${arr[i].overview}</p>
            <p class="animate__animated date "><span class="fst-normal">Release Date<span> :${arr[i].release_date}</span></span></p>
            <h3 class="rate animate__animated ">${arr[i].vote_count}</h3>
            <h3 class="rate animate__animated vote ">${arr[i].vote_average}</h3>
        </div>
    </div>
    </div>
        ` 
        
        
    }

    document.querySelector(".myRow").innerHTML=cartona
}

// nav animation

$(".openNav").on("click" ,function(){
    $(".listItems").addClass("animate__backInUp");

})


$(".openNav").on("click" ,function(){
    $(".listItems").addClass("opacityOn");
    $(".listItems").removeClass("opacity-0");

})
$(".closeNav").on("click" ,function(){
    $(".listItems").removeClass("opacityOn");
    $(".listItems").addClass("opacity-0");

})








//up coming
// https://api.themoviedb.org/3/movie/upcoming
//now playing
//https://api.themoviedb.org/3/movie/now_playing
//now popular
//https://api.themoviedb.org/3/movie/popular
//top rated
//https://api.themoviedb.org/3/movie/top_rated





async function getPopularMovie() {
    let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    let data = await response.json();
    let movies = data.results
    console.log(movies);
    
    displayMovie(movies)
}


async function getTopMovie() {
    let response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    let data = await response.json();
    let movies = data.results
    console.log(movies);
    
    displayMovie(movies)
}



async function getTrendingMovie() {
    let response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    let data = await response.json();
    let movies = data.results
    console.log(movies);
    
    displayMovie(movies)
}

async function getUpComingMovie() {
    let response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    let data = await response.json();
    let movies = data.results
    console.log(movies);
    
    displayMovie(movies)
}


let Now = document.querySelector(".Now")
let Popular = document.querySelector(".Popular")
let Top = document.querySelector(".Top")
let Trending = document.querySelector(".Trending")
let Upcoming = document.querySelector(".Upcoming")


$(".Now").on("click" ,function(){
    getNowMovie()
})

$(".Popular").on("click" ,function(){
    getPopularMovie()
})


$(".Top").on("click" ,function(){
    getTopMovie()
})


$(".Trending").on("click" ,function(){
    getTrendingMovie()
})

$(".Upcoming").on("click" ,function(){
    getUpComingMovie()
})

// card animation
$("#card").on("mouseenter" ,function(){
    //$(".title").removeClass("animate__slideOutLeft");
    $(".title").addClass(" animate__bounceInDown");
    //$('.overlay').css({"opacity":"1","visibility":"visible"});
})


// card animation





// contact

function validations()
{
    $('#contact input').on("input",function(){
        $('#contact input').on("input",function(){
            if(checkClassError()) // == true
            {
                $('form button').addClass('animate__shakeX bg-danger buttonFormActive');
                $(`form button`).mouseenter(formButtonValidation);
                $('form button').addClass('animate__shakeX bg-danger buttonFormActive');
                $('form button').css({'cursor':'default','userSelect':'none'});
            }
            else
            {
                $('form button').removeClass('animate__shakeX bg-danger buttonFormActive');
                $(`form button`).css({"marginLeft":"0px"});
                $('form button').off('mouseenter', formButtonValidation);
                $('form button').removeClass('animate__shakeX bg-danger buttonFormActive');
                $('form button').css('cursor','pointer');
            }
            })
        function checkClassError(){
            if($('#contact .error').hasClass('animate__flipInX'))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    })
    $('#contact #name').on("input",function(){
        const regex = /^[a-zA-z\s]{1,36}$/
        const $error =  $('#name').next();
        const $this = $(this);
        if($(this).val() == "")
        {
            hideError($error,$this);
        }
        else if(regex.test($(this).val()))
        {
            hideError($error,$this);
        }
        else
        {
            $error.html("Invalid Name , only Characters allowed");
            ($error,$this);
        }
    })
    $('#contact #email').on("input",function(){
        const regex = /^[a-zA-Z0-9]+@[a-z0-9]+\.[a-z]{3}$/;
        const $error =  $('#email').next();
        const $this = $(this);
        if($(this).val() == "")
        {
            hideError($error,$this);
        }
        else if(regex.test($(this).val()))
        {
            hideError($error,$this);
        }
        else
        {
            $error.html("Invalid Email , try example@domain.com");
            ShowError($error,$this);
        }
    })
    $('#contact #phone').on("input",function(){
        const regex = /^(02)?(01)[0125][0-9]{8}$/;
        const $error =  $('#phone').next();
        const $this = $(this);
        if($(this).val() == "")
        {
            hideError($error,$this);
        }
        else if(regex.test($(this).val()))
        {
            hideError($error,$this);
        }
        else
        {
            $error.html("Invalid Phone Number");
            ShowError($error,$this);
        }
    })
    $('#contact #age').on("input",function(){
        const regex = /^(1[6-9]|[2-9][0-9]|100)$/;
        const $error =  $('#age').next();
        const $this = $(this);
        if($(this).val() == "")
        {
            hideError($error,$this);
        }
        else if(regex.test($(this).val()))
        {
            hideError($error,$this);
        }
        else
        {
            $error.html("Your age must be over 16+");
        ShowError($error,$this);
        }
    })
    $('#contact #password').on("input",function(){
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const $error =  $('#password').next();
        const $this = $(this);
        if($(this).val() == "")
        {
            hideError($error,$this);
        }
        else if(regex.test($(this).val()))
        {
            hideError($error,$this);
        }
        else
        {
        $error.html("password must contain numbers & letters at least 8 character");
        ShowError($error,$this);
        }
    })
    $('#contact #repassword').on("input",function(){
        const $error =  $('#repassword').next();
        const $this = $(this);
        if($(this).val() == "")
        {
            hideError($error,$this);
        }
        else if($(this).val() == $('#password').val())
        {
            hideError($error,$this);
        }
        else
        {
        $error.html("Password not match");
        ShowError($error,$this);
        }
    })
    $('.showPass').click(function(){
        if ($('#password').attr('type') == "text") 
        {
            $('#password').attr('type','password');
            $('.showPass').html('<i data-show="show" class="fa-solid fa-eye-slash"></i>');
        } else {
            $('#password').attr('type','text');
            $('.showPass').html('<i data-show="show" class="fa-solid fa-eye"></i>');
        }
    })
    $('#password').focus(function(){
        $('.showPass').css("opacity",1);
        $('.showPass').css("bottom",10);
    })
    $(document).click(function(e){
        if($(e.target)[0] == $('#password')[0] || $(e.target).attr('data-show') == $('.showPass i').attr('data-show') )
        {
            $('.showPass').css("opacity",1);
            $('.showPass').css("bottom",10);
        }
        else
        {
            $('.showPass').css("opacity",0);
            $('.showPass').css("bottom",-20);
        }
    })
    function hideError($error,$this)
    {
        $this.css("border-bottom-color", "#CED4DA");
        $error.html(null);
        $error.removeClass('animate__animated animate__flipInX');
        $error.addClass('animate__animated animate__fadeOutUp');
    }
    function ShowError($error,$this)
    {
        $this.css("border-bottom-color", "rgb(214, 46, 51)");
        $error.removeClass('animate__animated animate__fadeOutUp');
        $error.addClass('animate__animated animate__flipInX');
    }
    function formButtonValidation(){
        let buttonLocation =  $(`form button`).css("marginLeft")
            if(buttonLocation == "250px")
            {
            $(`form button`).css({"marginLeft":"0px"});
            }
            else
            {
            $(`form button`).css({"marginLeft":"250px"});
            }
    $(`form button`).keydown(function(e){
                if(e.key == "Enter")
            {
            event.preventDefault();
            }
        })
    }
}
validations()