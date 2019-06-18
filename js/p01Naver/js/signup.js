$(document).ready(function(){
    //프로그램 시작 시 --> 생년월일의 월 반목문 실행
    bmonthSpan();

    //form - 가입하기버튼 클릭시 
    $("#content").submit(function(){
        
    });
    
    
    /*focusin - border color change*/
    $("input").focusin(function(){
        $(this).parent().css({border: "1px solid #08A600"});
    });
    $('select').focusin(function(){
        $(this).parent().css({border: "1px solid #08A600"});
    });
    
    /*focus out - border color change*/
    $('input').focusout(function(){       
        $(this).parent().css({border: "1px solid #DADADA"});
    });
    $('select').focusout(function(){
        $(this).parent().css({border: "1px solid #DADADA"});
    });
    
    
    /*각 항목 focusout때 마다 유효성검사*/    
    /*유효성검사- 아이디*/
    $('#id').focusout(function(){
        //5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.
        var regID = /^[a-z0-9_-]{5,21}$/;
        
        if($(this).val().length <1) {
            $('#idAlert').html('필수 정보입니다.').css({color: "red"});
        } else if(regID.test($(this).val()) == false) {
            $('#idAlert').html('5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.').css({color: "red"});
        } else {
            $('#idAlert').html('멋진 아이디네요!').css({color: " #08A600"});
        }  
    });
    
    /*유효성검사 - 비밀번호*/
    $('#pw').focusout(function(){
        
        //8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.
        var regPW = /^[a-zA-z0-9~`!@#$%^&*()-_+=]{8,17}$/;
        
        if($(this).val().length <1) {
            $('#pwAlert').html('필수 정보입니다.').css({color: "red"});
        } else if(regPW.test($(this).val()) == false){
            $('#pwAlert').html('8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.').css({color: "red"});
            $(this).next().css({color: "red"});
        } else {
            $('#pwAlert').html('');
            $(this).next().css({color: "#08A600"});
        } 
    });
    
    /*유효성 - 비밀번호 확인 */
    $('#pwchk').focusout(function(){
        
        if($(this).val().length <1) {
            $('#pwchkAlert').html('필수 정보입니다.').css({color: "red"});
        } else if($(this).val() != $('#pw').val()){
            $('#pwchkAlert').html('비밀번호가 일치하지 않습니다.').css({color: "red"});
        } else {
            $(this).next().css({color: "#08A600"});
        }
    });
    
    /*유효성검사 - 이름*/
    $('#username').focusout(function(){
        
        //한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)
        var regName =/^[가-힣a-zA-z]+$/;
        
        if($(this).val().length <1) {
            $('#nameAlert').html('필수 정보입니다.').css({color: "red"});
        } else if(!regName.test($(this).val())) {
            $('#nameAlert').html('한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)').css({color: "red"});
        } else {
            $('#nameAlert').html('');
        }
    });
    
    /*유효성검사 - 연도*/
    $('#byear').focusout(function(){
        
        if($(this).val().length <4) {
            $('#bdateAlert').html('태어난 년도 4자리를 정확하게 입력하세요.').css({color: "red"});
        } else if($(this).val().length == 4) {
            $('#bdateAlert').html('태어난 일(날짜) 2자리를 정확하게 입력하세요.').css({color: "red"});
        } else {
            $(this).val($(this).val().substr(0, 4)); //년도: 4자리 이상이면 입력 불가
        }
    });
    
    /*유효성검사 - 달 & 날짜: 연도와 날짜까지 입력되고 포커스가 아웃될때 월에 대한 경고메시지 표시됨*/
    $('#bday').focusout(function(){
        var today = new Date(); //오늘날짜
        var tYear = today.getFullYear();
        var tMonth = today.getMonth()+1;
        var tDate = today.getDate();

        if($(this).val().length <2) {
            $('#bdateAlert').html('태어난 일(날짜) 2자리를 정확하게 입력하세요.').css({color: "red"});
        } else if ($(this).val().length >2) {
            $(this).val($(this).val().substr(0, 2)); //날짜: 2자리 이상 입력 불가
        } else if($('#bmonth').children().val() == 'mDefault') { //월 미선택시 오류
            $('#bdateAlert').html('생년월일을 다시 확인해주세요.').css({color: "red"});
        } else if(($('#byear').val() <1920) && ($('#bmonth').children().val() <7) && ($('#bday').val() <20)) { 
            $('#bdateAlert').html('정말이세요?').css({color: "red"}); // : 1919년 6월 19일 이전
        } else if(($('#byear').val()>tYear)&&($('#bmonth').children().val()>tMonth)&&($('#bday').val()>tDate)) {
             $('#bdateAlert').html('미래에서 오셨군요. ^^').css({color: "red"}); //오늘날짜초과
        } else {
            $('#bdateAlert').html('');
        } 
    });
    
    $('#bmonth').focusout(function(){
        $('#bdateAlert').html('');
    });
    
    /*유효성검사 - 성별*/
    $('#gender').focusout(function(){
        if($(this).children().val() == 'gDefault') {
            $('#genderAlert').html('필수 정보입니다.').css({color: "red"});
        }
        $('#genderAlert').html('');
    });
    
    /*유효성검사 - 이메일*/
    /*$('#email').focusout(function(){
        //이메일 주소를 다시 확인해주세요.
        var regEmail;
        
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
         //형식에 맞지 않는 번호입니다.
        var regPhnum;
        if() {
           $('#phnumAlert').html('형식에 맞지 않는 번호입니다.').css({color: "red"});
        }
    });*/
    
    /*유효성검사 - 전화번호 인증번호*/
    $('#phnum3').focusout(function(){
        if($(this).val().length <1) {
            $('#phnumAlert').html('인증이 필요합니다.').css({color: "red"});
        }
    });

    
});

/*생년월일 - 월 반복문*/
function bmonthSpan (){
    for(var i=1; i<13; i++) { $('#bmonth').append('<option value="'+i+'">'+i+'</option>');
    }
};