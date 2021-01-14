# Vue.js로 만드는 HackerNews

강의명: [인프런] Vue.js 완벽 가이드 - 실습과 리팩토링으로 배우는 실전 개념  
강사: 캡틴판교  
skill: JavaScript, Vue.js, ES6, Vuex, Router, RESTFul API

## HackerNews API

https://news.ycombinator.com/  
https://github.com/HackerNews/API

## 디렉토리     
    src
      ├── api                         # api 저장 폴더             
      ├── components                  # component 저장 폴더(ListItem, Spinner, Toolbar, UserProfile)  
      ├── mixins                      # mixins 저장 폴더 - 재사용할 컴포넌트 옵션들이 들어갈 자리(ListMixin)
      ├── routes                      # router 저장 폴더 
      ├── store                       # store 저장 폴더 (index, mutations, actions 분리)
      ├── utils                       # utils 저장 폴더 
      └── views                       # views 저장 폴더 - View단 (NewsView, AskView, JobsView...)
      App.vue                           
                        
## 데이터 호출 시점

1. 라우터 네비게이션 가드

- 특정 URL로 접근하기 전의 동작을 정의하는 속성(함수)

2. 컴포넌트 라이프 사이클 훅

- created : (컴포넌트가 생성) 되자마자 호출되는 로직

## 화면 구성
### News 
![vuejs_news_component](https://user-images.githubusercontent.com/42309919/104534724-2999fb00-5658-11eb-81fe-c90bb0ab5bf6.PNG)
![vuejs_news_vuex](https://user-images.githubusercontent.com/42309919/104534727-2a329180-5658-11eb-89a3-b1f8d47188f3.PNG)

### User 
![vuejs_user_component](https://user-images.githubusercontent.com/42309919/104534730-2acb2800-5658-11eb-8d36-27cc0ceb08fb.PNG)
![vuejs_user_vuex](https://user-images.githubusercontent.com/42309919/104534732-2acb2800-5658-11eb-96f6-e40ea08dfbe2.PNG)

### Ask 
![vuejs_ask_component](https://user-images.githubusercontent.com/42309919/104534733-2b63be80-5658-11eb-8e1f-6f6d67f812ee.PNG)
![vuejs_ask_vuex](https://user-images.githubusercontent.com/42309919/104534734-2b63be80-5658-11eb-8d82-6f0dd64c9d61.PNG)

### Item (Q & A) 
![vuejs_item_component](https://user-images.githubusercontent.com/42309919/104534735-2bfc5500-5658-11eb-87a5-3911ffe1e6b8.PNG)
![vuejs_item_vuex](https://user-images.githubusercontent.com/42309919/104534719-27d03780-5658-11eb-8981-cf9e3fe84aa2.PNG)

### Jobs
![vuejs_job_component](https://user-images.githubusercontent.com/42309919/104534721-29016480-5658-11eb-9ffb-c2e6a3b51a7b.PNG)
![vuejs_job_vuex](https://user-images.githubusercontent.com/42309919/104534723-2999fb00-5658-11eb-83ac-ed2f0f97ed15.PNG)

## 완강은 즐거웡:D  
![vuejs_certificate_of_completion](https://user-images.githubusercontent.com/42309919/104392801-351cf180-5586-11eb-895a-3ee9c397adc9.PNG)

