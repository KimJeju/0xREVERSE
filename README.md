# 0xREVERSE — 티스토리 스킨

리버스 엔지니어링 / 해커 터미널 컨셉의 다크 티스토리 스킨. (v1.0.2)

- CRT 스캔라인 + 그리드 배경, 포스포 그린(`#3dff88`) 팔레트
- 헤더: 칼리 리눅스 프롬프트 스타일 터미널 창 + 타이핑 애니메이션
- 글 목록: 디스어셈블리 리스팅 (가상 주소 거터 `0x00401000` + `call` 니모닉, JS가 자동 부여)
- 글 제목: 호버 시 글리치 효과 / 코드블록: `hexdump` 헤더 달린 터미널 박스
- 댓글: gdb 백트레이스 "stack frame" 스타일 / 방명록: `/dev/guestbook`
- 카테고리: `readelf -S`, 최근 글: `tail -f posts.log`, 카운터: `/proc/stat`, whoami: GitHub 링크
- 이스터에그: 코나미 커맨드(↑↑↓↓←→←→BA) 입력 시 매트릭스 레인 5초
- 반응형(960px / 560px 브레이크포인트), `prefers-reduced-motion` 지원

## 변경 이력

- v1.0.0 최초 제작
- v1.0.1 카테고리 트리 흰 박스(이전 스킨 index.xml 잔재) 강제 오버라이드 / GitHub whoami·footer 링크 추가
- v1.0.2 댓글·방명록 프로필 이미지(`[##_rp_rep_logo_##]`) URL 문자열 출력으로 레이아웃 깨지던 문제 수정
  → `<img src>`로 감싸고 로고 박스 40px 고정, `.cmt-desc` 긴 URL 줄바꿈 처리

## 파일 구성

```
skin.html        스킨 템플릿 (티스토리 치환자 포함)
style.css        스타일시트
index.xml        스킨 정보
images/script.js 타이핑·주소·이스터에그 스크립트
preview*.jpg/gif 스킨 미리보기 이미지
```

## 설치 방법 (티스토리)

1. 티스토리 관리자 → **꾸미기 → 스킨 편집 → html 편집**
2. **HTML 탭**에 `skin.html` 내용 붙여넣기
3. **CSS 탭**에 `style.css` 내용 붙여넣기
4. **파일업로드 탭**에서 `images/script.js` 와 preview 이미지 4개 업로드
5. 적용 저장

또는 스킨 등록 페이지에서 zip 내부 파일 전체를 업로드해 "보관된 스킨"으로 등록할 수 있습니다.

## 커스터마이즈

- 색상: `style.css` 상단 `:root` CSS 변수만 바꾸면 전체 테마 변경
- 헤더 타이핑 문구: `images/script.js` 의 `lines` 배열 수정
- 프롬프트 호스트명(`root㉿reverse`): `skin.html` 헤더 부분에서 수정
- whoami 링크 추가: `skin.html` 의 `whoami-list` 안에 `<li>` 복제
