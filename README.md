# cg-t3-chirp

FE 타입스크립트 테크리드를 맡고 있는 글로벌 기업을 맡고 있는 선배로부터 추천을 받아서 진행하게 된 프로젝트.
T3 스택을 사용해 볼 수 있어서 좋았다.

프로젝트는 다음을 클론코딩 했다. 
- T3 Stack Tutorial - FROM 0 TO PROD FOR $0 (Next.js, tRPC, TypeScript, Tailwind, Prisma & More) 
- https://www.youtube.com/watch?v=YkOSUVzOAA4
 
선배에게 무한한 감사를 전한다. 옆에서 긴 시간 조언을 받았고, 많은 노하우(주로 태도)와 지식을 전수 받았다.
비록 클론 코딩이긴 했지만, 그래도 쉽지 않았다. 몰랐던 개념이 많았고 해결해야 할 문제도 중간중간 존재했다.
다하고 보니 그리 어려운 일은 아니였구나 쉽지만, 내 이해율은 50% 아래이지 않을까. 더불어 Theo 에게도 감사를 전한다.
(Theo, thank you. I appreciate it very much. Your help was truly valuable.)


- 가장 좋았던 점은 아무래도, FE와 BE가 하나의 validation 과 함수 정의를 통해서 유연하게 작동할 수 있다는 점.
- 국내에서 trpc에 대해 실질적인 프로젝트에 적용시킬 수 있는 기회가 있을까? (아쉬울 것 같지만, 우선은 어떤 식으로 적용이 될지 잘 모르겠다.)
- 특히 FE는 유지하고 BE 만 거대해지는 경우 등을 생각해보면, TS를 통해 api에 대한 type 추론만 남기고 따로 배보가 되면 진짜 좋을 것 같다.
- 다만 nextjs 는 fe, be가 한 곳에 다 들어있어서, be의 bg 작업이 커지는 경우에 대한 아키텍처가 어떻게 될 지 잘 모르겠다.
- 아무래도 실무에서 backend 까지 nextjs 에서 구현하기는 어렵고, 아마 nestjs 를 사용하되 어떻게든 타입 선언을 한번만 해서 가져다 쓸 수 있게끔 할 것 같다.
- 파이썬 보다 타입 추론이 깊게 된다는 점은 꽤 인상깊다.
- 다만 trpc 나 nextjs 나 2개월만 지나도 버전 정보에 다른 점이 생기기에 최신 코드를 유지하는 데는 아무래도 애로사항이 있을 것 같다.
- js 자체는 py 보다 깊이가 복잡하고 많이 깊어서 추상화하여 이해하기 힘들다
- 다만, 많은 사람이 쓰고, 큰 커뮤니티가 이를 지원하는 것이 느껴질 정도로, 라이브러리들이 고도화 되어있다.


## 배운점

- vercel 을 이용한 소규모 앱의 경우, ci/cd 까지 굉장히 빠르고 편하다. MVP 배포시 엄청난 이점이 될 것.
- fe는 react 뿐만 아니라 nextjs 를 공부해야 하는게 느껴지고, 또 hook 도 마스터 못했는데 멀리가야 해서 조금은 답답했다.
- 파일 구조를 잘 짜는 것은 매우 중요하다.
- **tailwind-css** 에 대한 경험. 매우 좋다. 
  - css, behavior lib, style system 등에 대해 알게 됨 (https://www.youtube.com/watch?v=CQuTF-bkOgc)
- 코드를 복사해서 막 가져다 쓰고 변형하고, 실행해 보는데 별로 겁내지 않게 됨. 
  - npm 안쓰고 pnpm 만 쓰던 나에게 걍 뭘하든 코드는 돌아가면 된다는 것을 다시 상기하게됨
- 기타 자잘한 노하우들 `git add -p` `chatgpt 를 이용한 ci.yaml 작성`, `nextjs type props` `prisma studio` `jetbrain git status`

## 기타 태도에 대해

- ⭐️ 좋은 목표를 만드는 방법 (선배로부터 추천받았다)
  - Your Goals Kinda Suck - LEVEL UP As A Developer https://www.youtube.com/watch?v=rzwaaWH0ksk&t=1049s
- 💡 풀스택에 대해 연연하지 말고, 빌더가 되어라. (받았다)
  - Is "Full Stack" Even Real? https://www.youtube.com/watch?v=rAjd8z-Fx5A&t=23s
- 쿠버네티스 같은거 너무 오래 공부하지 마라 (추천받았다)
  - You Don’t Need Kubernetes https://www.youtube.com/watch?v=H5sPGruv2yc
- 데브옵스에 많은 시간을 들이기 보다, 이미 개발된 유용한 서비스를 찾아 사용하라, t3같은거 (추천받았다)
  - The REAL Cost Of AWS https://www.youtube.com/watch?v=kK-iR6g-V1g&t=229s
- Typescript 챌린지 같은거 공부하기 전에 그냥 써라 (추천받았다)
  - Don't Learn TypeScript https://www.youtube.com/watch?v=kRiD6ZpAN_o
- 포맷터와 린터를 헷갈리지 말것
  - You're (Probably) Using Prettier Wrong https://www.youtube.com/watch?v=Cd-gBxzcsdA
- 타입스크립트를 쓸 때 OOP 파일구조로 짜지 마세요
  - You Might Be Using Typescript Wrong... https://www.youtube.com/watch?v=RmGHnYUqQ4k
- 부정적인 생각을 줄이고, 긍정적으로 사고하라, 성격은 조금씩 변할 수 있다.
  - Big 5 Aspect 성격검사에서 신경성만 98을 찍었다.
