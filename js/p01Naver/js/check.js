/*jquery 이용하여 유효성 검사*/
$(document).ready(function(){
    var chkAll = $('#chkAll');
      
    /*1. 전체선택 (전체선택해제)--> 1-4번선택(1-4번 일괄해제) */
    chkAll.change(function(){
        var chk = chkAll.prop('checked');
        if(chk) {
            //alert( $('#uncheck'));
            $('tbody').find('.unchk').prop('checked', true);
        } else {
            $('tbody').find('.unchk').prop('checked', false);
        }
    });
        
    /*2. 1-4번선택(1-4번 중 하나라도 선택x) --> 전체선택(전체선택취소)*/
    $('tbody').find('.unchk').change(function(){
        //1-4번에 변화가 있을때, 만약 chkAll가 checked되어있으면 --> false로 바꿔주기
        if(chkAll.prop('checked')) {
            chkAll.prop('checked', false);
        }
        
        
        //1-4번이 모두 선택되면 --> 전체선택 
        if($('#chk1').prop('checked') &&
          $('#chk2').prop('checked') &&
          $('#chk3').prop('checked') &&
          $('#chk4').prop('checked')){
            chkAll.prop('checked', true);
        }
        
         //1-4번이 모두 선택되면 --> 전체선택
         //아래의 경우 --> 오류: 4개의 항목 중 하나만 선택되도 전체선택됨 
//        if($(this).prop('checked')) {
//           chkAll.prop('checked', true);
//        }  
        
    });
 
    
    /*3. 1번과 2번 필수선택항목 --> 체크 안하면 경고메시지*/
    $('#signupCheck').submit(function(){
        //alert($('#chk1').prop('checked'));
        if($('#chk1').prop('checked') && $('#chk2').prop('checked')) {
            //alert('true');
            return true;
        };
        $('#chkerror').html('네이버 이용약관과 개인정보 수집 및 이용에 대한 안내 모두 동의해주세요.').css({
            color: 'red',
            fontSize: '15px'
        });
        return false;
    });
});
