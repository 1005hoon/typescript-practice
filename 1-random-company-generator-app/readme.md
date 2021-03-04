# typescript 연습용 앱입니다

## 기능

User와 Company 정보를 랜덤하게 생성하여, 웹상의 지도에 표시를 해주는 앱입니다.
이는 Class를 활용하여 타입스크립트의 interface 기능을 더 효율적으로 사용하는 방법을 공부하기 위해 제작된 앱입니다

## parcel bundelr

`parcel-bundler`: Typescript를 브라우저에서 활용할 수 있게 해줍니다
최신 버전으로 설치하는 경우, 에러가 발생하기때문에 @1.12.3 버전으로 설치해주어야 합니다

Parcel Bundler를 활용하면 `index.html` 파일 안에 소스로 연결되어있는 `index.ts` 파일을 보고, 타입스크립트 파일을 자바스크립트 파일로 컴파일하여 웹에서 사용할 수 있도록 도와줍니다.

## Definitely Typed

JavaScript library를 활용하는 경우, 해당 라이브러리에 대한 타입 설정이 없다면 바로 사용할 수가 없습니다.
따라서 npm에 @types/라이브러리 이름을 검색해본 뒤 존재한다면 해당 라이브러리의 타입도 함께 설치해야 합니다
