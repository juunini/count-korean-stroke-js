# count-korean-stroke

## [Demo](https://ko-stroke.netlify.app/)

https://ko-stroke.netlify.app/

## Intrudoce

한글의 '획 수'를 세어주는 라이브러리 입니다.  
A library that counts the number of strokes in Korean characters.

## Install

```bash
npm install count-korean-stroke
```

```html
<script src="https://unpkg.com/count-korean-stroke"></script>
```

## Usage

### Strict mode

전통적인 한글 획 수 세는 방법으로 계산해서 출력합니다.  
Calculates and outputs the stroke count using the traditional Korean method.

```ts
import { countKoreanStroke } from 'count-korean-stroke';

countKoreanStroke('죠나단 죠스타') // 26
countKoreanStroke('디오 브란도') // 21
countKoreanStroke('지상 최강의 개발자 쥬니니') // 47
```

### Non-Strict mode

꺾이는 부분마다 1획으로 계산합니다.  
Calculates the stroke count by considering each bend or corner as one stroke.

```ts
import { countKoreanStroke } from 'count-korean-stroke';

countKoreanStroke('죠나단 죠스타', false) // 32
countKoreanStroke('디오 브란도', false) // 26
countKoreanStroke('지상 최강의 개발자 쥬니니', false) // 57
```
