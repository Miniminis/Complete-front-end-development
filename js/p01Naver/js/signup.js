$(document).ready(function(){
    
    //5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.
    var idchk = /^[a-z0-9_-]{5,21}$/;
    //8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.
    var pwValChk = /^[a-zA-z0-9~`!@#$%^&*()-_+=]{8,17}$/;
    //태어난 년도 4자리를 정확하게 입력하세요.
    var byearChk;
    //생년월일을 다시 확인해주세요.
    var bmonthChk;
    //태어난 일(날짜) 2자리를 정확하게 입력하세요.
    var bdayChk;
    //이메일 주소를 다시 확인해주세요.
    var emailChk;
    //형식에 맞지 않는 번호입니다.
    var phnumChk;
    
    
    
    //form - 가입하기버튼 클릭시 
    $("#content").submit(function(){
        
        //id
        
        //pw
        
        //pwchk
        
        //username
        
        //bdate 
        
        //gender
        
        //email
        
        //phnum
        
    });
    
    
    /*focusin - border color change*/
    $("input").focusin(function(){
        $(this).parent().css({border: "1px solid #08A600"});
    });
    
    /*focus out - border color change*/
    $('input').focusout(function(){       
        $(this).parent().css({border: "1px solid #DADADA"});
    });
    
    /*각 항목 focusout때 마다 유효성검사*/
    /*유효성검사- 아이디*/
    $('#id').focusout(function(){
        
        if($(this).val()<1) {
            $('#idAlert').html('필수 정보입니다.').css({color: "red"});
        } else if(idchk.test($(this).val()) == false) {
            $('#idAlert').html('5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.').css({color: "red"});
        } else {
            $('#idAlert').html('멋진 아이디네요!').css({color: " #08A600"});
        }  
    });
    
    /*유효성검사 - 비밀번호*/
    $('#pw').focusout(function(){
        
        if($(this).val()<1) {
            $('#pwAlert').html('필수 정보입니다.').css({color: "red"});
        } else if(pwValChk.test($(this).val())== false){
            $('#pwAlert').html('8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.').css({color: "red"});
            //$('#content tr:nth-child(5) input').html('사용불가').css({color: "red"});
        } else {
            //$('#content tr:nth-child(5) input').html('안전').css({color: "#08A600"});
        }
        
    });
    
    /*유효성 - 비밀번호 확인 */
    $('#pwchk').focusout(function(){
        
        if($(this).val()<1) {
            $('#pwchkAlert').html('필수 정보입니다.').css({color: "red"});
        } else if($(this).val() != $('#pw').val()){
            $('#pwchkAlert').html('비밀번호가 일치하지 않습니다.').css({color: "red"});
        };
        
        
    });
    
    /*유효성검사 - 이름*/
    $('#username').focusout(function(){
        if($(this).val()<1) {
            $('#nameAlert').html('필수 정보입니다.').css({color: "red"});
        }
    });
    
    /*유효성검사 - 연도*/
    $('#byear').focusout(function(){
        if($(this).val()<1) {
            $('#bdateAlert').html('태어난 년도 4자리를 정확하게 입력하세요.').css({color: "red"});
        }
    });
    
    /*유효성검사 - 달*/
    $('#bmonth').focusout(function(){
        if($(this).val()<1) {
            $('#bdateAlert').html('생년월일을 다시 확인해주세요.').css({color: "red"});
        }
    });
    
    /*유효성검사 - 날짜*/
    $('#bday').focusout(function(){
        if($(this).val()<1) {
            $('#bdateAlert').html('태어난 일(날짜) 2자리를 정확하게 입력하세요.').css({color: "red"});
        }
    });
    
    /*유효성검사 - 성별*/
    $('#gender').focusout(function(){
        if($(this).val()<1) {
            $('#genderAlert').html('태어난 일(날짜) 2자리를 정확하게 입력하세요.').css({color: "red"});
        }
    });
    
    /*유효성검사 - 이메일*/
    /*$('#email').focusout(function(){
        if($(this).val()<1) {
            $('#genderAlert').html('태어난 일(날짜) 2자리를 정확하게 입력하세요.').css({color: "red"});
        }
    });*/
    
    /*유효성검사 - 전화번호*/
    $('#phnum2').focusout(function(){
        if($(this).val()<1) {
            $('#phnumAlert').html('필수 정보입니다.').css({color: "red"});
        }
    });
    
    /*유효성검사 - 인증번호 클릭시 - 전화번호*/
    /*$('#veriNum').click(function(){
        if() {
           $('#phnumAlert').html('형식에 맞지 않는 번호입니다.').css({color: "red"});
        }
    });*/
    
    /*유효성검사 - 전화번호 인증번호*/
    $('#phnum3').focusout(function(){
        if($(this).val()<1) {
            $('#phnumAlert').html('인증이 필요합니다.').css({color: "red"});
        }
    });
    
});