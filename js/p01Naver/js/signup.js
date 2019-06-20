$(document).ready(function(){
    //프로그램 시작 시 --> 생년월일의 월 반목문 실행
    bmonthSpan();
    
    //form submit --> 필수 항목들이 모두 true 상태인지 확인
    var validation ={
        0: false, //id
        1: false, //pw
        2: false, //pwhk
        3: false, //name
        4: false, //byear
        5: false, //bmonth
        6: false, //bday
        7: false, //gender
        8: true, // email: 필수항목아님
        9: false //phnum (verinum)
    };
    
       
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
            validation.id = true;
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
            validation.pw=true;
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
            $('#pwchkAlert').html('');
            validation.pwchk=true;
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
            validation.username=true;
        }
    });
    
    /*생년월일 유효성 검사를 위한 현재날짜 변수선언*/
    var today = new Date(); //오늘날짜
    var tYear = today.getFullYear();
    var tMonth = today.getMonth()+1;
    var tDate = today.getDate();
    var regYear = /^19[1-9][0-9]|20[0-9]{2}$/; //1919년 6월 20일 이후
    var regDay= /^0[0-9]|[1-2][0-9]|3[0-1]$/; //일의 범위: 1-31일까지
    
    /*유효성검사 - 연도*/
    $('#byear').focusout(function(){
        if(regYear.test($(this).val())==false) {
            $('#bdateAlert').html('태어난 년도 4자리를 정확하게 입력하세요.').css({color: "red"});
        } else if( $('#bday').val()==''){
            $('#bdateAlert').html('태어난 일(날짜) 2자리를 정확하게 입력하세요.').css({color: "red"});
        } else if($('#bmonth option:selected').val()==0) {
            $('#bdateAlert').html('생년월일을 다시 확인해주세요.').css({color: "red"});
        } else if ($('#byear').val()<1920){
            $('#bdateAlert').html('정말이세요?').css({color: "red"});
        } else if ($('#byear').val()>tYear){
            $('#bdateAlert').html('미래에서 오셨군요. ^^?').css({color: "red"});
        } else { 
            $('#bdateAlert').html('');
            validation.byear=true;
        }   
    });
    
    /*유효성검사 - 달: 월 선택이 기본값에서 변할때 --> 1) 년도 값이 없을때 2) 일 값이 없을때 */
    $('#bmonth').focusout(function(){
        //alert($('#byear').val());
        if($('#byear').val()=='') {
            $('#bdateAlert').html('태어난 년도 4자리를 정확하게 입력하세요.').css({color: "red"});
        } else if($('#bday').val()=='') {
            $('#bdateAlert').html('태어난 일(날짜) 2자리를 정확하게 입력하세요.').css({color: "red"});
        } else if($('#bmonth option:selected').val()==0){
            $('#bdateAlert').html('생년월일을 다시 확인해주세요.').css({color: "red"});                           
        } else if (($('#byear').val()<1920) && ($('#bmonth option:selected').val()<7)){
            $('#bdateAlert').html('정말이세요?').css({color: "red"});
        } else if (($('#byear').val()>tYear) && ($('#bmonth option:selected').val()>tMonth)){
            $('#bdateAlert').html('미래에서 오셨군요. ^^?').css({color: "red"});
        } else {
            $('#bdateAlert').html('');
            validation.bmonth=true;
        }
    });
    
    /*유효성검사 - 날짜*/
    $('#bday').focusout(function(){        
        if($('#byear').val()=='') {
            $('#bdateAlert').html('태어난 년도 4자리를 정확하게 입력하세요.').css({color: "red"});
        } else if(regDay.test($('#bday').val())==false) {
            $('#bdateAlert').html('태어난 일(날짜) 2자리를 정확하게 입력하세요.').css({color: "red"});
        } else if ($('#bmonth option:selected').val()==0) {
            $('#bdateAlert').html('생년월일을 다시 확인해주세요.').css({color: "red"});
        } else if (($('#byear').val()<1920) && ($('#bmonth option:selected').val()<7)&&($('#bday').val()<21)){
            $('#bdateAlert').html('정말이세요?').css({color: "red"});
        } else if ( ($('#byear').val()>tYear) && ($('#bmonth option:selected').val()>tMonth) && ($('#bday').val()>tDate)){
            $('#bdateAlert').html('미래에서 오셨군요. ^^?').css({color: "red"});
        } else {
            $('#bdateAlert').html(''); 
            validation.bday=true;
        }
    });
    
    
    
    /*유효성검사 - 성별*/
    $('#gender').focusout(function(){
        if($('#gender option:selected').val() == 0) {
            $('#genderAlert').html('필수 정보입니다.').css({color: "red"});
            //alert('필수정보')
        } else {
            $('#genderAlert').html('');
            validation.gender=true;
        }
        //alert($('#gender option:selected').val() ==0);
    });
    
    /*유효성검사 - 이메일*/
    $('#email').focusout(function(){
        var regEmail = /^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/;
        if($(this).val().length>1 && regEmail.test($(this).val())==false) {
            $('#emailAlert').html('이메일 주소를 다시 확인해주세요.').css({color: "red"});
        }else {
            $('#emailAlert').html('');
        }
    });
    
    /*유효성검사 - 전화번호 입력유무*/
    $('#phnum2').focusout(function(){
        if($(this).val().length<1) { //정보미입력
            $('#phnumAlert').html('필수 정보입니다.').css({color: "red"});
        } else { //정보입력
            $('#phnumAlert').html('');
        }
    });
    
    /*유효성검사 - 인증번호 클릭시 --> 전화번호 유효성*/
    $('#veriNum').click(function(){
        var regPhnum = /^010-?([0-9]{4})-?([0-9]{4})$/;
        if(regPhnum.test($(this).val()) == false) {
           $('#phnumAlert').html('형식에 맞지 않는 번호입니다.').css({color: "red"});
        } else {
            $('#phnumAlert').html('');
            validation.veriNum=true;
        }
    });
    
    /*유효성검사 - 전화번호 인증번호*/
    $('#phnum3').focusout(function(){
        if($(this).val().length <1) { //인증번호 미입력
            $('#phnumAlert').html('인증이 필요합니다.').css({color: "red"});
        } else {
            $('#phnumAlert').html('');
        }
    });
    
    //form - 가입하기버튼 클릭시 --> 미해결
    $("#content").submit(function(){
        //alert(Object.keys(validation).length);
        for(var i=0; i<Object.keys(validation).length; i++) {
            //alert(validation[i]);
            if(validation[i]==false) {
                alert('필수사항입니다.');
                $(span).each(function(){
                    $(this).html('필수 정보입니다.').css({color: "red"});
                });
            } else {
                 alert('회원가입이 완료되었습니다.');
            }
        }
    });
}); //ready() END

/*생년월일 - 월 반복문*/
function bmonthSpan (){
    for(var i=1; i<13; i++) { $('#bmonth').append('<option value="'+i+'">'+i+'</option>');
    }
};
        