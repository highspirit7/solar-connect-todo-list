# 원티드 프론트엔드 프리온보딩 코스 - 솔라커넥트 과제 #1

## 프로젝트 개요
간단한 투두 리스트 프로젝트
- 상단에 현재 시간 표시
- 투두 아이템 생성, 완료, 제거 가능
- 완료 목표일 설정 필수    
  
## 구현 사항(과제 요구 사항)
- Todo List 화면에 현재 시간을 표시
- Todo 항목에 완료 버튼을 누르면 Todo가 완료되도록 처리(토글 기능)
- Antd DatePicker 활용해 완료 목표일 입력 
- 예외 처리(모달 사용)
  - 오늘보다 이전 날짜 클릭하는 경우
  - 목표일 설정 없이 투두 아이템 만들려고 하는 경우
  - 텍스트 value 없이 투두 아이템 만들려고 하는 경우

## 추가 구현 사항 및 개선사항
- 각종 버튼 커서 pointer로 변경
- 투두 아이템 삭제 시에도 모달로 한번 더 confirm
- 완료목표일 기준 최신 날짜 순으로 정렬하여 출력

## 실행 방법
Project setup   
```npm install```

Project start for development   
```npm run start```   

## 기술 스택
React, AntDesign, Styled-Components, TypeScript
