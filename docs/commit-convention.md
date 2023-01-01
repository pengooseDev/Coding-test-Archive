# Commit Convention

[커밋 컨벤션](https://aroundlena.tistory.com/55)

### 커밋 컨벤션 예시

> git commit -m "feat: Scroll Handler 기능 추가"

### 왜 사용하는가?

저장을 하지 않아, 작업이 날아간 경험.
게임을 세이브 하지 않아, 원하는 곳에서 다시 게임을 시작하지 못한 경험.
뼈아픈 경험입니다.

git을 통해, 우리는 최대한 많은 세이브포인트를 만들어야합니다.
문제가 발생했을 경우, 원하는 세이브포인트로 돌아가기 위해서는 반드시 해당 커밋이 무슨 커밋인지 직관적으로 이해할 수 있어야합니다.

협업을 진행하는 과정에서 이 과정의 난이도는 기하급수적으로 올라갑니다.
commit convention은 이에 대한 효율적이고 효과적인 솔루션이 됩니다.

commit의 양식을 통일함에 따라, 각 커밋에서 무슨 기능이 추가되었는지 직관적으로 알 수 있기 때문입니다.

### 사용 방법

커밋 메시지는 크게 세 부분으로 분류 됩니다.

- type: Subject
- body
- footer

##### 1. Type 기술

- feat: 새로운 기능 추가
- fix: 버그 수정
- docs: 문서 수정
- style: 포맷팅, 세미콜론 빠졌을때, 코드 변경이 없는 수정
- refactor: 리팩토링
- test: 테스트 코드 추가, 테스트코드 리팩토링
- chore: 빌드관련 수정, 패키지 매니저 수정change

##### 2. Subject 기술

- Type을 기술한 뒤에, 해당 커밋에서 어떤 작업을 했는지 직관적으로 알아볼 수 있는 Subject를 작성합니다. 콜론 뒤에 띄어쓰기를 한 번 한 뒤에 작성하도록 합니다.
- 마침표를 작성하지 않습니다.

##### 3. body(optional)

위의 Type: Subject에서 모든 내용을 담아내지 못하고 부연 설명이 필요한 경우 작성하도록 합니다.

##### 4. The Footer(optional)

- footer 또한 필수가 아닙니다. issue tracker ID의 reference를 남길 때 사용합니다.

##### Example Commit Message

```
feat: Summarize changes in around 50 characters or less

More detailed explanatory text, if necessary. Wrap it to about 72
characters or so. In some contexts, the first line is treated as the
subject of the commit and the rest of the text as the body. The
blank line separating the summary from the body is critical (unless
you omit the body entirely); various tools like `log`, `shortlog`
and `rebase` can get confused if you run the two together.

Explain the problem that this commit is solving. Focus on why you
are making this change as opposed to how (the code explains that).
Are there side effects or other unintuitive consequences of this
change? Here's the place to explain them.

Further paragraphs come after blank lines.

 - Bullet points are okay, too

 - Typically a hyphen or asterisk is used for the bullet, preceded
   by a single space, with blank lines in between, but conventions
   vary here

If you use an issue tracker, put references to them at the bottom,
like this:

Resolves: #123
See also: #456, #789
```
