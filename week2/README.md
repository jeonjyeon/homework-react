# React 2주차 과제 회고

## 상태 있는 컴포넌트 제작

> 회원 가입 또는 로그인 UI 화면을 리액트를 사용해 구현하기

## 컴포넌트 설계 및 고민

![alt text](/week2/public/assets/sing-up-and-in.png)

이번 과제에서는 UI를 기능별로 분리하는 것에 집중했다.

디자인 시안을 보면 크게 **SignUp**과 **SignIn** 컴포넌트로 나눌 수 있고,

그 다음으로는 input 컴포넌트와 button 컴포넌트로 나눌 수 있다.

### 컴포넌트 구조

- 가장 상위에는 App 컴포넌트가 있고, 그 안에 SignIn과 SignUp 컴포넌트를 배치했다.
- 로그인/회원가입 화면은 공통적으로 input과 button이 필요하므로, 이를 각각 FormInput, FormButton으로 최소 단위로 분리했다.

#### 리팩토링 전

```
App
├── SignIn
│  ├── FormInput (type="email")
│  ├── FormInput (type="password")
│  └── FormButton ("로그인")
└── SignUp (미구현)
```

#### input-config.json을 활용하여 컴포넌트 리팩토링 후

```json
// input-config.json
{
  "name": {
    "label": "이름",
    "placeholder": "2글자 이상 입력",
    "type": "text"
  },
  "email": {
    "label": "이메일",
    "placeholder": "user@company.io",
    "type": "email"
  },
  "password": {
    "label": "패스워드",
    "placeholder": "숫자, 영문 조합 6자리 이상 입력",
    "type": "password"
  },
  "passwordCheck": {
    "label": "패스워드 확인",
    "placeholder": "입력한 패스워드 다시 입력",
    "type": "password"
  }
}
```

```
App
├── SignIn
│  ├── FormInput (type="email")
│  ├── FormInput (type="password")
│  └── FormButton ("로그인")
└── SignUp
│  ├── FormInput (type="name")
│  ├── FormInput (type="email")
│  ├── FormInput (type="password")
│  ├── FormInput (type="passwordCheck")
│  └── FormButton ("회원가입")
```

- **FormInput**: 입력 타입별(label, placeholder, input type 등) 정보를 `src/data/input-config.json`에서 불러와 동적으로 렌더링
- **FormButton**: 폼 제출 버튼, children으로 텍스트를 받음

### 고민한 점

- **하나의 input 컴포넌트를 어떻게 더 효율적으로 활용할 수 있을까?**
  - 현재 FormInput 컴포넌트는 type을 props로 받아 이메일과 패스워드 입력을 구분한다. 앞으로 입력 타입이 더 늘어난다면(예: 이름, 패스워드 확인 등), 확장성과 유지보수성을 고려해야 할 것 같다.
  - 예를 들어, 입력 타입별로 placeholder, input type 등 필요한 정보를 json 형태로 관리하면, 컴포넌트에서 해당 정보를 쉽게 불러와 사용할 수 있어 코드가 더 깔끔해지고 유지보수도 쉬워질 것이다.
  - 특히 SignUp 컴포넌트처럼 다양한 입력 필드가 필요한 경우, json을 활용해 input 정보를 관리하면 새로운 타입 추가나 수정이 훨씬 편리할 것 같다.
- **스타일링**
  - 급하게 과제를 수행하면서 직접 Tailwind CSS를 작성하기보다는, 디자인 시안에 있는 CSS 코드를 가져와 VSCode extension을 활용해 Tailwind CSS로 변환하여 사용했다.
  - 덕분에 디자인 시안과 유사하게 스타일을 빠르게 적용할 수 있었지만, 직접 작성하지 않다 보니 각 컴포넌트에 꼭 필요한 스타일만을 선별하는 데에는 어려움이 있었다.
  - 다음에는 직접 Tailwind CSS를 작성해보며, 불필요한 스타일은 줄이고 꼭 필요한 부분만 명확하게 적용하는 경험을 쌓고 싶다.

## 리팩토링

- **FormInput 컴포넌트 json 기반 리팩토링**
  - 입력 필드(label, placeholder, type 등)를 하드코딩하지 않고, `src/data/input-config.json`에서 관리하도록 구조를 개선했다.
  - FormInput 컴포넌트는 json에서 필요한 정보를 동적으로 불러와 렌더링하므로, 새로운 입력 타입 추가나 수정이 훨씬 간편해졌다.

- **label과 id 속성 추가**
  - 기존에는 FormInput 컴포넌트에 label과 id를 사용하지 않아, 입력 필드와 라벨이 명확하게 연결되지 않았고 접근성이 떨어졌다.
  - 리팩토링을 통해 각 input에 id를 동적으로 생성하고, label의 htmlFor 속성으로 연결함으로써 스크린리더 등 접근성 도구에서 폼을 더 잘 인식할 수 있게 개선했다.

## 브라우저 자동완성(autocomplete) 이슈 및 해결

- **문제점**
  - input 태그에 id나 name 속성은 있지만, autocomplete 속성이 없으면 브라우저가 자동완성(autofill)을 제대로 처리하지 못해 사용자가 이전에 입력한 정보(이메일, 비밀번호 등)를 자동으로 채워주지 못할 수 있다는 내용이 이슈창에 떴다.

- **해결 방법**
  - FormInput 컴포넌트에서 input 태그에 `autoComplete="on"`을 추가하였다.
