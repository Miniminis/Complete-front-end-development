/*문서객체 필터매서드 
true 만들어내는 조건만들기!!! */

$(document).ready(function(){
    
    /*$('h1:even').css('background-color', 'aqua').css('color', 'white');*/
    
    //string type 
    /*$('h1').filter(':even').css('background-color', 'red').css('color', 'yellow');*/
    
    //function type 
    /*$('h1').filter(function(index) {
        return index%2 == 1; //true- 선택, false- 미선택  
    }).css('background-color', 'green'); */
    
    
    //체인 형태로 선택 가능 
    //1. 모든 h1 에 아쿠아 배경색 적용 
    //2. 그 중에서 짝수번째 선택하여 글씨색을 빨강으로 적용 
    //3. 짝수번째 선택을 중단 
    //4. 홀수번째를 다시 선택 후 글씨색을 노란색으로 변경 
    //filter() + end() - 체이닝 코드를 가능하게 해준다. 
    //생각해보기: 아래의 예제에서 end()를 없엔다면?
    
    /*$('h1').css('background-color', 'aqua').filter(':even').css('color', 'red').end().filter(':odd').css('color', 'yellow');*/ 
    
    
    //add() : 선택 영역 확대 
    /*$('h1').css('background-color', 'red').add('h2').css('color', 'green').css('float', 'left');*/
    
    
    //parent() : 선택된태그를 감싸는 부모태그에 영향
    //네이버 테두리?
    $('input').parent().css('border', '3px solid red');
    
}); 

/* jquery 일반적인 특징 
- () - getter 
- (값) - setter 
- 값: 1) string , 2) 함수: 동적으로 바뀌는 값을 넣고 싶어서 */

