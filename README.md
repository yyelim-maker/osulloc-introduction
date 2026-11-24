# OSULLOC | 제주의 자연을 담아낸 차, 오설록

오설록 브랜드 헤리티지, 공간 경험, 나만의 티 찾기, 티 도감(추천 음악 포함), 시그니처 티 컬렉션, 브루잉 타이머를 담은 정적 웹 애플리케이션입니다.

## GitHub Pages 배포 방법

이 프로젝트는 `.github/workflows/deploy.yml`을 통해 GitHub Pages로 자동 배포되도록 구성되어 있습니다.

1. GitHub에 새 저장소(Repository)를 만들고 이 프로젝트를 Push 합니다. (`main` 또는 `master` 브랜치)
2. GitHub 저장소 상단 **Settings** → 좌측 메뉴 **Pages**로 이동합니다.
3. **Build and deployment** → **Source**를 **GitHub Actions**로 선택합니다.
4. `main` 또는 `master` 브랜치에 Push 하거나 **Actions** 탭에서 **Deploy to GitHub Pages** 워크플로우를 실행하면 자동으로 빌드 및 배포됩니다.

## 로컬 실행 및 빌드

```bash
npm install
npm run dev     # 개발 서버 (http://localhost:3000)
npm run build   # 프로덕션 정적 빌드 (dist/)
```
