# Vite

[https://vite.dev/guide/](https://vite.dev/guide/)

책의 내용과 일부 설정 방법이 다른 부분이 있어서 정리한다.  
프로젝트 생성은 create-react-app이 개발 중단된 것 같아서 [vite](https://vite.dev/guide/)를 사용했다.  
놀랍게도 "[비트](https://www.google.com/search?q=%EB%B9%84%ED%8A%B8+%EB%B0%94%EC%9D%B4%ED%8A%B8+vite)"로 읽는다고 한다

```bash
npm create vite@latest
```

## tailwindcss

[https://tailwindcss.com/docs/installation/using-vite](https://tailwindcss.com/docs/installation/using-vite)

뭔가 편한 듯 불편한 듯 하다.

1. 설치

```bash
npm install tailwindcss @tailwindcss/vite
```

2. vite 플러그인 설정(vite.config.ts)에 tailwindcss() 추가

```javascript
// vite.config.ts

import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
});
```

3. CSS 수정

```css
@import "tailwindcss";
```

## 머터리얼 아이콘

[https://www.npmjs.com/package/@fontsource/material-icons](https://www.npmjs.com/package/@fontsource/material-icons)

플러터도 그렇고 대충 넣어도 그럴듯한 모양이 나온다.

1. 설치

```bash
npm install @fontsource/material-icons
```

2. CSS 수정

```css
@import "@fontsource/material-icons";

.material-icons {
  font-family: "Material Icons";
  display: "inline-block";
}
```

## daisyUI

[https://daisyui.com/docs/install/](https://daisyui.com/docs/install/)

tailwind를 미리 설정해야 한다.  
확실하게 편하다.

"다이시(da-i-sy)"라는 일본어인줄 알았다.  
꽃이 피는 식물(데이지, dai-sy)의 이름이다.  
학창시절에 공부를 아예 놓은 것도 아닌데 개무식하다.  
하긴 기초적인 맛츔뻡을 틀리는 것을 보면 모국어라고 잘하는 것도 아니다.

1. 설치

```bash
npm install --save-dev daisyui@latest
```

2. CSS 수정

```css
@plugin "daisyui";
```

## luxon, chance

[https://www.npmjs.com/package/luxon](https://www.npmjs.com/package/luxon)  
[https://www.npmjs.com/package/chance](https://www.npmjs.com/package/chance)

```bash
npm install luxon chance
npm install --save-dev @types/luxon @types/chance
```
