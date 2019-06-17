//배열관리: jquery 는 태그 객체불러와서 자동 반복처리, 
//각 배열마다 다른 처리를 하고 싶을때는 - each() 
//1. $each(object(배열의 원본), function(index, item-배열의 요소){ });
//2. $(selector).each(function(index, item) { });

$('document').ready(function(){
    
    
    //자바스크립트 배열 관리
    var arr =[];
    arr.push({name: 'naver', url:'http://www.naver.com'});
    arr.push({name: 'google', url:'http://www.google.com'});
    arr.push({name: 'daum', url:'http://www.daum.net'});
    arr.push({name: 'github', url:'http://www.github.com'});
    
    //배열의 정보를 담은 html 문서를 작성할 변수 생성 
    var nhtml ='';
    
    //each(배열이름, 처리할 콜백함수) 
    //1. naver 2. daum 3. facebook 
    //<a href = "경로">1. naver</a>
   $.each(arr, function(index, item){
        
        nhtml += '자바스크립트 배열관리: '+'<a href="'+item.url+'">'+ index + '.' + item.name
        +'</a>';
        
    });
     document.body.innerHTML += nhtml;
    
    
    
    
    
    
    /*jquery 배열의 관리*/
    /*h1태그를 선택자로 가져와 배열을 생성*/ 
    
    //모든 배열 요소에 한가지 속성 일괄적용 
    //$('h1').css('background-color', 'red');
    
    //각 요소마다 적용     
    $('h1').each(function(index, item){
        
        //배열의 요소 확인 
        alert(index);
        
        //배열의 요소.값 - 각 h1 태그에 [index] 값을 표시 
        //item.innerHTML += '['+index+']';
        
        
        //var v = $(item).html();
        //alert(v);
        
        //$(item).html($(item).html());
        
        
        /*위에서 만들어두었던 배열의 요소들을 새로 생성된 h1 배열에 담아줌
        -h1태그 내부의 value 를 아예 새로운 내용으로 대체*/
        var inserthtml ='';
        inserthtml += '<a href = "'+arr[index].url+'">';
        inserthtml += arr[index].name;
        inserthtml += '</a>';
        
        $(item).html(inserthtml);
        
        /*짝수?true --> title 클래스 더해주기*/
        /*if(index%2 == 0) {
            $(item).addClass('title');
        }*/
        $(item).addClass('title');
        
    });
    
});