/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  ExternalLink, 
  Thermometer, 
  Clock, 
  Droplets, 
  ChevronRight, 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  Sparkles,
  MapPin,
  Gift,
  Leaf,
  CheckCircle2,
  Compass,
  SlidersHorizontal,
  Sun,
  Moon,
  Coffee,
  Heart,
  RefreshCw,
  Award,
  ArrowRight,
  BookOpen,
  Search,
  LayoutGrid,
  ListFilter,
  Utensils,
  Calendar,
  Layers,
  Info,
  ShieldCheck,
  Music,
  Headphones,
  Radio,
  Disc
} from 'lucide-react';

interface TeaProduct {
  id: string;
  name: string;
  enName: string;
  category: 'pure' | 'blend' | 'fermented' | 'matcha' | 'gift';
  categoryLabel: string;
  badge: string;
  badgeColor: string;
  colorSwatch: string;
  colorName: string;
  desc: string;
  modalDesc: string;
  origin: string;
  notes: string;
  temp: string;
  timeSec: number;
  timeDisplay: string;
  tags: string[];
  image: string;
  
  // Sensory Profile (0 ~ 100)
  tasteProfile: {
    umami: number;      // 감칠맛
    sweetness: number;  // 단맛
    citrus: number;     // 상큼함/시트러스
    floral: number;     // 꽃향기
    body: number;       // 바디감/구수함
  };

  // Encyclopedia Deep Details
  encyclopedia: {
    fermentationType: '불발효차 (0%)' | '부분발효차 (20~60%)' | '후발효차 (100%)' | '가루차/말차';
    fermentationRate: number; // 0 ~ 100
    pluckingPeriod: string;
    garden: string;
    processingMethod: string;
    processingSteps: string[];
    topNote: string;
    palate: string;
    finish: string;
    pairing: string;
    caffeineLevel: '무카페인' | '낮음' | '보통' | '높음';
    recommendedTeaware: string;
    // Music & Playlist Recommendation
    musicPairing: {
      title: string;
      artistTrack: string;
      genre: string;
      mood: string;
      description: string;
      chimeFreq: number[];
    };
  };
}

const TEA_CATALOG: TeaProduct[] = [
  {
    id: 'illohyang',
    name: '일로향 (Illohyang)',
    enName: 'ILLOHYANG',
    category: 'pure',
    categoryLabel: '명품 순수차',
    badge: '최고급 명차',
    badgeColor: 'bg-[#1B362A]/90 text-[#C3A370]',
    colorSwatch: '#C2E09B',
    colorName: '맑은 담녹빛',
    desc: "'차를 끓이는 다로(茶爐)의 향기'라는 뜻의 최상급 수제차. 햇살이 비치는 싱그러운 어린 찻잎의 순수함을 오롯이 담았습니다.",
    modalDesc: '이른 봄 가장 먼저 돋아나는 여린 차순만을 선별해 장인의 손끝으로 완성한 최상급 명차입니다. 맑고 기품 있는 어린 순 향과 감칠맛이 빼어납니다.',
    origin: '제주 한남 다원 첫물차',
    notes: '기품 있는 어린 순 향, 극상의 은은한 단맛',
    temp: '60°C',
    timeSec: 120,
    timeDisplay: '60°C · 2분',
    tags: ['#세계품평회1위', '#첫물차', '#수제제다'],
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=80',
    tasteProfile: {
      umami: 98,
      sweetness: 65,
      citrus: 20,
      floral: 45,
      body: 60,
    },
    encyclopedia: {
      fermentationType: '불발효차 (0%)',
      fermentationRate: 0,
      pluckingPeriod: '4월 초순 (곡우 이전 우전 채엽)',
      garden: '제주 한남 다원 (유기농 100%)',
      processingMethod: '증제와 가마솥 덖음의 전통 복합 수제 제다 기법',
      processingSteps: ['극세 일엽일순 수작업 채엽', '고온 증제(녹색 유지)', '유념(찻잎 형태 잡기)', '가마솥 직화 덖음', '원적외선 마무리 건조'],
      topNote: '이슬 머금은 맑은 봄 숲의 어린 싹 내음',
      palate: '천연 테아닌이 선사하는 실크 같은 우마미와 은은한 미각의 여운',
      finish: '입안 가득 차오르는 청아한 단맛과 개운함',
      pairing: '개성주악, 잣설기, 백자 찻잔에 곁들이는 담백한 전병',
      caffeineLevel: '보통',
      recommendedTeaware: '정갈한 순백자 다관, 숙우(물식힘사발), 찻잔',
      musicPairing: {
        title: '정결한 숲의 미니멀 피아노 & 솔잎 바람',
        artistTrack: 'Ryuichi Sakamoto - Aqua & Erik Satie - Gymnopédie No.1',
        genre: '네오 클래시컬 & 앰비언트 피아노',
        mood: '#고요한새벽 #정갈한사색 #미니멀피아노',
        description: '이슬 맺힌 여린 차순의 맑고 결백한 감칠맛에 여백의 미가 깃든 정갈한 피아노 타건음이 마음의 번뇌를 비워냅니다.',
        chimeFreq: [523.25, 659.25, 783.99, 1046.5]
      }
    },
  },
  {
    id: 'ujeon',
    name: '우전 (Ujeon)',
    enName: 'UJEON',
    category: 'pure',
    categoryLabel: '최상급 순수차',
    badge: '첫물차 명작',
    badgeColor: 'bg-[#142920] text-[#E8DCC4]',
    colorSwatch: '#BCD893',
    colorName: '맑은 비취빛',
    desc: '24절기 중 곡우(穀雨) 5일 전 가장 먼저 돋아난 여린 차순을 정성스레 덖어낸 최고의 순수 녹차입니다.',
    modalDesc: '겨울 추위를 이겨내고 봄볕을 머금어 가장 먼저 피어난 어린 싹을 정성스레 덖어내어 맑고 깨끗한 맛과 향을 선사합니다.',
    origin: '제주 도순 다원',
    notes: '섬세한 풀향, 감미로운 단맛, 맑은 수색',
    temp: '65°C',
    timeSec: 120,
    timeDisplay: '65°C · 2분',
    tags: ['#곡우전채엽', '#최상급우전', '#순수녹차'],
    image: 'https://images.unsplash.com/photo-1546852199-2d8e8c4aaada?auto=format&fit=crop&w=1000&q=80',
    tasteProfile: {
      umami: 95,
      sweetness: 70,
      citrus: 20,
      floral: 40,
      body: 65,
    },
    encyclopedia: {
      fermentationType: '불발효차 (0%)',
      fermentationRate: 0,
      pluckingPeriod: '4월 중순 (곡우 5일 전)',
      garden: '제주 도순 다원',
      processingMethod: '증열 후 가마솥 덖음 복합 제다법',
      processingSteps: ['어린 차순 선별 채엽', '스팀 증열', '수작업 유념', '저온 숙성 덖음', '선별'],
      topNote: '신선한 솔잎과 맑은 봄비 갠 뒤의 들풀 향',
      palate: '감미로운 아미노산 단맛과 떫은맛이 완벽히 정제된 고결함',
      finish: '목 넘김 후 가슴속까지 퍼지는 맑은 청량감',
      pairing: '궁중 약과, 고운 콩고물 다식, 곶감오림',
      caffeineLevel: '보통',
      recommendedTeaware: '청자 찻잔 또는 백자 다기 세트',
      musicPairing: {
        title: '곡우의 봄비 소리와 어쿠스틱 현악',
        artistTrack: 'Ólafur Arnalds - Saman / 정재일 - 바다 소품곡',
        genre: '어쿠스틱 챔버 & 서정적 현악',
        mood: '#맑은봄비 #차분한집중 #따스한현악',
        description: '겨울 추위를 이겨내고 돋아난 첫 싹의 섬세한 단맛과 은은하게 젖어드는 서정적인 현악 선율이 완벽한 조화를 이룹니다.',
        chimeFreq: [440, 554.37, 659.25, 880]
      }
    },
  },
  {
    id: 'sejak',
    name: '세작 (Sejak)',
    enName: 'SEJAK',
    category: 'pure',
    categoryLabel: '대표 순수차',
    badge: '오설록 베스트셀러',
    badgeColor: 'bg-[#1B362A] text-white',
    colorSwatch: '#A2C76A',
    colorName: '연녹빛',
    desc: '곡우 무렵 어린 찻잎을 증제하고 덖어내어 싱그러운 향과 은은한 감칠맛이 일품인 오설록의 명차입니다.',
    modalDesc: '곡우 무렵 어린 찻잎을 정성스럽게 덖고 찌는 복합 제다법으로 탄생시킨 오설록의 대표 명차입니다.',
    origin: '제주 서광 다원',
    notes: '감칠맛, 싱그러운 풀내음, 구수한 덖음향',
    temp: '70°C',
    timeSec: 120,
    timeDisplay: '70°C · 2분',
    tags: ['#어린찻잎', '#감칠맛', '#유기농녹차'],
    image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=800&q=80',
    tasteProfile: {
      umami: 90,
      sweetness: 60,
      citrus: 25,
      floral: 40,
      body: 65,
    },
    encyclopedia: {
      fermentationType: '불발효차 (0%)',
      fermentationRate: 0,
      pluckingPeriod: '4월 하순 (곡우 무렵 제2창 채엽)',
      garden: '제주 서광 다원',
      processingMethod: '증제(Steaming)와 덖음(Pan-firing)의 황금비 복합 제다',
      processingSteps: ['곡우 무렵 수확', '고온 증제', '회전 유념', '가마솥 덖음 가공', '향기 발양 건조'],
      topNote: '싱그러운 제주 차밭의 풋풋한 잎 향기와 고소한 덖음 향',
      palate: '은은한 감칠맛과 혀끝에 닿는 상쾌한 산미의 균형',
      finish: '담백하고 청정한 맑은 여운',
      pairing: '녹차 랑그드샤, 쌀 전병, 담백한 모찌',
      caffeineLevel: '보통',
      recommendedTeaware: '유리 다관 또는 백자 다관',
      musicPairing: {
        title: '햇살 비치는 서광다원의 어쿠스틱 기타',
        artistTrack: 'DEPAPEPE - START / 유희열 - 소년 편지 (Acoustic Guitar)',
        genre: '어쿠스틱 핑거스타일 & 포크',
        mood: '#초여름산책 #산뜻한아침 #싱그러운풀내음',
        description: '곡우 무렵 어린 찻잎의 싱그러운 풀향과 고소한 덖음 내음에 경쾌하고 따스한 어쿠스틱 기타 핑거링이 일상의 활력을 돋웁니다.',
        chimeFreq: [392, 493.88, 587.33, 783.99]
      }
    },
  },
  {
    id: 'okro',
    name: '옥로 (Okro)',
    enName: 'OKRO',
    category: 'pure',
    categoryLabel: '차광 녹차',
    badge: '차광 재배 명차',
    badgeColor: 'bg-[#0F231B] text-[#C2E09B]',
    colorSwatch: '#8EB54F',
    colorName: '짙은 옥빛',
    desc: '채엽 전 햇빛을 20일간 차단하는 차광 재배를 통해 떫은맛은 낮추고 아미노산 감칠맛을 극대화한 최고급 녹차입니다.',
    modalDesc: '햇빛을 가려 키워 찻잎의 엽록소와 테아닌 성분이 풍부하여 특유의 깊고 짙은 옥빛 수색과 농밀한 감칠맛을 지닙니다.',
    origin: '제주 한남 다원 차광 구역',
    notes: '짙은 해조류 감칠맛, 농후한 단맛, 부드러운 목넘김',
    temp: '55°C',
    timeSec: 150,
    timeDisplay: '55°C · 2.5분',
    tags: ['#차광재배', '#극상의감칠맛', '#옥빛수색'],
    image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&w=1000&q=80',
    tasteProfile: {
      umami: 100,
      sweetness: 80,
      citrus: 15,
      floral: 30,
      body: 80,
    },
    encyclopedia: {
      fermentationType: '불발효차 (0%)',
      fermentationRate: 0,
      pluckingPeriod: '5월 초순 (20일 차광 후 채엽)',
      garden: '제주 한남 다원',
      processingMethod: '차광 재배(Gyokuro 방식) 후 저온 증제 제다',
      processingSteps: ['차광망 피복(20일)', '여린 잎 채엽', '깊은 증제(심증)', '침상 성형 유념', '저온 건조'],
      topNote: '신선한 바닷바람과 김, 해조류를 연상시키는 농밀한 아로마',
      palate: '육수처럼 진하게 우러나는 깊은 우마미(감칠맛)와 농후한 단맛',
      finish: '입안 전체를 코팅하듯 맴도는 미끄러운 바디감',
      pairing: '단호박 양갱, 흑임자 다식, 일식 핑거 디저트',
      caffeineLevel: '높음',
      recommendedTeaware: '소형 백자 다관(보병), 저온 식힘용 숙우',
      musicPairing: {
        title: '비취빛 이끼 낀 정원의 젠(Zen) 앰비언트',
        artistTrack: 'Brian Eno - Music for Airports / Hiroshi Yoshimura - Green',
        genre: '명상 앰비언트 & 젠 사운드스케이프',
        mood: '#깊은우마미 #차광의신비 #내면의고요',
        description: '20일간 어둠 속에서 응축된 짙은 감칠맛과 긴 여운을 잔잔한 자연의 울림과 앰비언트 사운드가 감싸줍니다.',
        chimeFreq: [329.63, 440, 523.25, 659.25]
      }
    },
  },
  {
    id: 'tangerine',
    name: '삼다연 제주영귤',
    enName: 'SAMDAYEON TANGERINE',
    category: 'fermented',
    categoryLabel: '시그니처 가향차',
    badge: '스테디셀러',
    badgeColor: 'bg-amber-700/90 text-white',
    colorSwatch: '#E88E38',
    colorName: '주홍빛 수색',
    desc: '제주 삼나무통에서 깊게 숙성된 발효차에 푸른 하늘 아래 탐스럽게 익은 제주 영귤의 상큼하고 싱그러운 과즙 아로마를 더했습니다.',
    modalDesc: '제주 삼나무통에서 숙성된 깊고 구수한 풍미의 후발효차에 무농약 제주 영귤의 싱그럽고 상큼한 과즙 아로마를 조화롭게 깃들인 티입니다.',
    origin: '제주 후발효차 + 제주 영귤',
    notes: '상큼한 감귤 향, 은은한 삼나무 향, 부드러운 단맛',
    temp: '90°C',
    timeSec: 120,
    timeDisplay: '90°C · 2분',
    tags: ['#제주영귤', '#삼나무숙성', '#오후의리프레시'],
    image: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=1000&q=80',
    tasteProfile: {
      umami: 50,
      sweetness: 75,
      citrus: 95,
      floral: 35,
      body: 70,
    },
    encyclopedia: {
      fermentationType: '후발효차 (100%)',
      fermentationRate: 100,
      pluckingPeriod: '하절기 채엽 후 삼나무통 100일 발효',
      garden: '제주 한남 다원 숙성고',
      processingMethod: '제주 삼나무통 후발효 숙성 + 천연 영귤 에센스 착향 블렌딩',
      processingSteps: ['제주 찻잎 채엽', '고온 살청', '삼나무통 적재 발효(100일)', '제주 무농약 영귤 과피 블렌딩', '완성 건조'],
      topNote: '코끝을 톡 쏘는 상큼하고 청량한 제주 영귤 과즙 향',
      palate: '후발효차 특유의 구수하고 묵직한 베이스 위에 얹히는 시트러스 풍미',
      finish: '달콤 쌉싸름하면서도 깨끗하게 떨어지는 잔향',
      pairing: '제주 감귤 타르트, 마들렌, 바스크 치즈케이크',
      caffeineLevel: '낮음',
      recommendedTeaware: '투명 내열유리 머그, 유리 티포트',
      musicPairing: {
        title: '푸른 바다와 제주 귤밭의 보사노바',
        artistTrack: 'Stan Getz & Astrud Gilberto - Corcovado / 로파이 보사노바',
        genre: '어쿠스틱 보사노바 & 서머 재즈',
        mood: '#오후의햇살 #상큼한에너지 #보사노바스윙',
        description: '영귤의 톡 터지는 시트러스 과즙과 삼나무 숙성차의 따스한 베이스에 기분 좋은 스윙 보사노바 리듬이 나른함을 깨웁니다.',
        chimeFreq: [587.33, 739.99, 880, 1174.66]
      }
    },
  },
  {
    id: 'samdayeon-original',
    name: '삼다연 오리지널 (Samdayeon Original)',
    enName: 'SAMDAYEON ORIGINAL',
    category: 'fermented',
    categoryLabel: '정통 후발효차',
    badge: '한국형 후발효차',
    badgeColor: 'bg-[#3D2619] text-[#E8DCC4]',
    colorSwatch: '#8A4F2A',
    colorName: '붉은 갈색',
    desc: '제주 한라산의 거친 삼나무통 안에서 100일간 온화하게 숨 쉬며 발효된 한국 고유의 프리미엄 후발효차입니다.',
    modalDesc: '보이차와는 차별화된 맑고 깨끗한 피톤치드 삼나무 향과 떫지 않고 구수한 맛이 일품입니다.',
    origin: '제주 직영 다원 삼나무 숙성고',
    notes: '그윽한 삼나무 향, 구수한 몰트향, 부드러운 목넘김',
    temp: '90°C',
    timeSec: 150,
    timeDisplay: '90°C · 2.5분',
    tags: ['#삼나무100일발효', '#피톤치드향', '#한국고유발효차'],
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    tasteProfile: {
      umami: 60,
      sweetness: 80,
      citrus: 20,
      floral: 30,
      body: 95,
    },
    encyclopedia: {
      fermentationType: '후발효차 (100%)',
      fermentationRate: 100,
      pluckingPeriod: '여름 찻잎 엄선 수확',
      garden: '제주 한남 다원 숙성고',
      processingMethod: '제주 고유 미생물 발효와 삼나무통 숙성 제다',
      processingSteps: ['찻잎 유념', '퇴적 발효', '제주 삼나무통 밀폐 100일 숙성', '품질 안정화', '포장'],
      topNote: '비 온 뒤 삼나무 숲길을 걷는 듯한 그윽한 우디 피톤치드 향',
      palate: '떫거나 쓰지 않고 둥글둥글하게 감싸는 몰트의 구수함',
      finish: '가슴속을 따뜻하게 덥혀주는 묵직하고 온화한 잔향',
      pairing: '구운 찰떡, 호두강정, 밤 만주',
      caffeineLevel: '낮음',
      recommendedTeaware: '도자기 다관, 자사호, 두터운 찻잔',
      musicPairing: {
        title: '비 온 뒤 비자림 숲길의 솔로 첼로',
        artistTrack: 'Yo-Yo Ma - Bach Cello Suite No.1 & 깊은 우디 사운드스케이프',
        genre: '중후한 솔로 첼로 & 우디 재즈',
        mood: '#삼나무피톤치드 #중후한따스함 #우디베이스',
        description: '100일간 삼나무통에서 숨 쉰 한국 전통 후발효차의 그윽한 몰트향과 첼로의 묵직한 중저음이 깊은 위로를 건넵니다.',
        chimeFreq: [220, 277.18, 329.63, 440]
      }
    },
  },
  {
    id: 'moonlight',
    name: '달빛걷기 (Moonlight Walk)',
    enName: 'MOONLIGHT WALK',
    category: 'blend',
    categoryLabel: '베스트셀러',
    badge: '로맨틱 베스트셀러',
    badgeColor: 'bg-[#0F231B] text-[#C3A370]',
    colorSwatch: '#E5B563',
    colorName: '호박빛',
    desc: '제주 밤하늘 아래 산책하듯, 은은하고 달콤한 배 향미가 감도는 후발효차 기반의 대표 가향차입니다.',
    modalDesc: '달콤하고 시원한 배의 향미를 블렌딩하여 달빛 아래 하루를 차분하게 마무리할 때 제격입니다.',
    origin: '제주 후발효차 + 돌배향',
    notes: '달콤한 배향, 부드러운 꿀맛, 온화한 잔향',
    temp: '90°C',
    timeSec: 120,
    timeDisplay: '90°C · 2분',
    tags: ['#달콤한배향', '#밤의휴식', '#후발효차'],
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=1000&q=80',
    tasteProfile: {
      umami: 45,
      sweetness: 90,
      citrus: 35,
      floral: 50,
      body: 80,
    },
    encyclopedia: {
      fermentationType: '후발효차 (100%)',
      fermentationRate: 85,
      pluckingPeriod: '제주 직영 다원 하절기',
      garden: '제주 서광 & 한남 다원',
      processingMethod: '후발효 숙성차에 제주 돌배향과 콘플라워 블렌딩',
      processingSteps: ['삼다연 후발효 베이스', '천연 돌배 아로마 인퓨전', '별빛 닮은 별사탕·콘플라워 조제', '품질 검사'],
      topNote: '달빛에 반짝이듯 시원하고 달콤한 서양배와 꿀의 향취',
      palate: '후발효차의 부드러운 바디 위에 부드럽게 퍼지는 잘 익은 과즙의 단맛',
      finish: '목 넘김 뒤에도 은은하게 피어오르는 감미로운 과일향',
      pairing: '휘낭시에, 마카롱, 몽블랑, 페이스트리',
      caffeineLevel: '낮음',
      recommendedTeaware: '투명 유리잔 또는 도예가 수제 찻잔',
      musicPairing: {
        title: '달빛 내린 돌담길의 미드나잇 재즈 발라드',
        artistTrack: 'Chet Baker - I Fall in Love Too Easily / Bill Evans - Moon Beams',
        genre: '미드나잇 재즈 & 빈티지 발라드',
        mood: '#달콤한배향 #밤의휴식 #감성재즈',
        description: '달콤한 돌배향과 호박빛 수색이 어스름한 밤공기에 녹아들며, 부드러운 트럼펫과 피아노가 하루의 마침표를 찍어줍니다.',
        chimeFreq: [349.23, 440, 523.25, 698.46]
      }
    },
  },
  {
    id: 'wedding',
    name: '웨딩 그린티 (Wedding Green Tea)',
    enName: 'WEDDING GREEN TEA',
    category: 'blend',
    categoryLabel: '블렌디드 티',
    badge: '축복의 티타임',
    badgeColor: 'bg-rose-800/90 text-white',
    colorSwatch: '#E5CD82',
    colorName: '황금빛',
    desc: '그린 마카롱과 꽃잎이 어우러진 감미로운 티타임. 설레는 축복을 담아 화사한 장미 꽃잎과 마스카포네 치즈향을 블렌딩했습니다.',
    modalDesc: '녹차 마카롱과 꽃잎의 설렘을 담은 장미와 콘플라워, 마스카포네 치즈향의 달콤하고 화사한 향미가 퍼지는 축복의 티입니다.',
    origin: '제주 유기농 녹차 + 꽃잎 블렌딩',
    notes: '화사한 꽃향, 달콤한 치즈향, 부드러운 디저트',
    temp: '70°C',
    timeSec: 90,
    timeDisplay: '70°C · 1.5분',
    tags: ['#마카롱티타임', '#꽃향기블렌딩', '#달콤한디저트'],
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=1000&q=80',
    tasteProfile: {
      umami: 55,
      sweetness: 85,
      citrus: 30,
      floral: 95,
      body: 55,
    },
    encyclopedia: {
      fermentationType: '부분발효차 (20~60%)',
      fermentationRate: 20,
      pluckingPeriod: '제주 서광 다원 5월 봄 채엽',
      garden: '제주 서광 다원',
      processingMethod: '증제 녹차 베이스에 천연 플라워 & 스위트 치즈 아로마 블렌딩',
      processingSteps: ['제주 녹차 베이스 제다', '프랑스산 장미 꽃잎·마리골드 건조', '치즈향 블렌딩', '저온 숙성'],
      topNote: '꽃다발을 안은 듯 화사하게 피어나는 붉은 장미 꽃잎의 부케',
      palate: '녹차의 쌉싸래함을 부드럽게 감싸는 스위트 마스카포네 치즈와 바닐라 향',
      finish: '기분 좋은 설렘을 남기는 파스텔톤의 달콤한 여운',
      pairing: '딸기 쇼트케이크, 레몬 타르트, 마카롱 세트',
      caffeineLevel: '보통',
      recommendedTeaware: '화려한 플라워 티잔, 유리 티포트',
      musicPairing: {
        title: '분홍빛 꽃잎 흩날리는 프렌치 왈츠',
        artistTrack: 'Yann Tiersen - Valse d\'Amélie / 로맨틱 챔버 팝',
        genre: '프렌치 왈츠 & 로맨틱 챔버 팝',
        mood: '#설레는축복 #디저트티타임 #장미꽃잎',
        description: '장미 꽃잎과 스위트 마스카포네 치즈향이 3박자의 사뿐한 왈츠 선율과 어우러져 축제 같은 로맨틱 티타임을 만듭니다.',
        chimeFreq: [523.25, 659.25, 783.99, 987.77]
      }
    },
  },
  {
    id: 'camellia',
    name: '동백이 피는 곶자왈 (Camellia Forest)',
    enName: 'CAMELLIA FOREST',
    category: 'blend',
    categoryLabel: '제주 테마 티',
    badge: '제주 자연 블렌드',
    badgeColor: 'bg-red-800 text-white',
    colorSwatch: '#D97373',
    colorName: '붉은 장밋빛',
    desc: '겨울 눈 속에서도 붉게 피어나는 제주 동백꽃의 매혹적인 향기와 열대 과일의 달콤함이 곶자왈의 신비를 전합니다.',
    modalDesc: '제주의 울창한 원시림 곶자왈에 피어난 붉은 동백꽃잎과 달콤한 파인애플, 파파야를 블렌딩하여 풍성한 과일 부케를 완성했습니다.',
    origin: '제주 발효차 + 동백꽃잎 + 열대과일',
    notes: '동백꽃 향, 달콤한 열대과일 향, 화사한 산미',
    temp: '85°C',
    timeSec: 120,
    timeDisplay: '85°C · 2분',
    tags: ['#동백꽃잎', '#제주곶자왈', '#열대과일향'],
    image: 'https://images.unsplash.com/photo-1774004638092-781ccf86945d?auto=format&fit=crop&w=1000&q=80',
    tasteProfile: {
      umami: 40,
      sweetness: 88,
      citrus: 60,
      floral: 90,
      body: 70,
    },
    encyclopedia: {
      fermentationType: '부분발효차 (20~60%)',
      fermentationRate: 50,
      pluckingPeriod: '제주 도순 다원',
      garden: '제주 도순 다원',
      processingMethod: '제주 반발효 홍차에 동백꽃 및 건조 과육 블렌딩',
      processingSteps: ['반발효차 위조 및 덖음', '제주 동백꽃잎 선별 건조', '열대과일 인퓨전', '블렌딩 숙성'],
      topNote: '붉은 동백꽃잎의 고혹적인 향기와 망고·파인애플의 달콤함',
      palate: '풍성한 과일 산미와 부드러운 발효차의 조화로운 단맛',
      finish: '숲속 붉은 꽃길을 걷는 듯 오래 지속되는 향기로운 여운',
      pairing: '과일 타르트, 치즈 플레이트, 버터 스콘',
      caffeineLevel: '낮음',
      recommendedTeaware: '투명 유리 티포트 & 찻잔',
      musicPairing: {
        title: '겨울 숲속 붉은 꽃길의 시네마틱 오케스트라',
        artistTrack: 'Hisaishi Joe - Summer & The Rain / 신비로운 현악 합주',
        genre: '시네마틱 오케스트라 & 뉴에이지',
        mood: '#곶자왈의신비 #붉은동백 #열대과일아로마',
        description: '동백꽃의 정열과 달콤한 열대과일의 다채로운 풍미가 웅장하면서도 서정적인 오케스트라와 함께 원시림의 신비를 펼쳐냅니다.',
        chimeFreq: [440, 554.37, 659.25, 830.61]
      }
    },
  },
  {
    id: 'matcha',
    name: '프리미엄 유기농 말차 (Premium Organic Matcha)',
    enName: 'ORGANIC MATCHA',
    category: 'matcha',
    categoryLabel: '유기농 가루차',
    badge: '초미세 맷돌 분쇄',
    badgeColor: 'bg-[#1B362A] text-[#C2E09B]',
    colorSwatch: '#538234',
    colorName: '선명한 비취빛',
    desc: '차광 재배한 유기농 어린 녹차 잎을 전통 화강암 맷돌로 곱게 갈아내어 찻잎의 모든 영양과 진한 감칠맛을 온전히 섭취합니다.',
    modalDesc: '100% 제주 유기농 다원에서 차광 재배한 텐차(Tencha)만을 엄선하여 특유의 고운 거품과 깊은 풍미를 자랑합니다.',
    origin: '제주 한남 다원 유기농 차광포',
    notes: '농밀한 크리미 감칠맛, 산뜻한 풀내음, 고운 거품',
    temp: '75°C',
    timeSec: 60,
    timeDisplay: '75°C · 격불 1분',
    tags: ['#100%유기농', '#차광재배', '#전통격불'],
    image: 'https://images.unsplash.com/photo-1589698272390-0501a07619bb?auto=format&fit=crop&w=1000&q=80',
    tasteProfile: {
      umami: 95,
      sweetness: 75,
      citrus: 15,
      floral: 40,
      body: 100,
    },
    encyclopedia: {
      fermentationType: '가루차/말차',
      fermentationRate: 0,
      pluckingPeriod: '5월 초순 (25일 이상 완벽 차광 재배)',
      garden: '제주 한남 다원 유기농',
      processingMethod: '증제 건조(텐차 제조) 후 저속 화강암 맷돌 미세 분쇄',
      processingSteps: ['25일 완벽 차광', '줄기/잎맥 제거(텐차 선별)', '냉동 보관', '전통 화강암 맷돌 분쇄(시간당 40g)', '진공 포장'],
      topNote: '가마솥에서 볶아낸 듯한 고소한 배전향과 신선한 녹색 엽록소 내음',
      palate: '차선(Chasen)으로 낸 미세한 거품의 벨벳 같은 촉감과 농밀한 감칠맛',
      finish: '뒷맛에 맴도는 은은하고 맑은 단맛과 피토케미컬의 충만감',
      pairing: '말차 롤케이크, 팥 찹쌀떡, 화과자, 말차 라떼',
      caffeineLevel: '높음',
      recommendedTeaware: '전통 도자기 다완(Chawan), 대나무 차선(Chasen), 차시(Chashaku)',
      musicPairing: {
        title: '단아한 다실의 일엽일다선(一葉一茶禪) 거문고 & 피아노',
        artistTrack: '정민아 - 잔상 & 현대적 국악 크로스오버 피아노',
        genre: '네오 국악 크로스오버 & 미니멀 사운드',
        mood: '#정통다도 #초록빛에너지 #마음의정렬',
        description: '차선으로 정성껏 격불한 고운 녹색 거품과 진한 감칠맛에 맑고 청아한 현악 선율이 집중과 몰입의 다도 명상을 완성합니다.',
        chimeFreq: [329.63, 392, 493.88, 587.33]
      }
    },
  },
  {
    id: 'masters',
    name: '마스터즈 티 기프트 에디션',
    enName: "MASTER'S GIFT EDITION",
    category: 'gift',
    categoryLabel: '선물 세트',
    badge: '프리미엄 기프트',
    badgeColor: 'bg-[#1B362A] text-[#C3A370]',
    colorSwatch: '#1B362A',
    colorName: '시그니처 컬렉션',
    desc: '말차 라떼부터 영귤·호지차 밀크티 패키지까지, 오설록의 역사와 티하우스 감성을 품격 있게 엮어낸 프리미엄 패키지입니다.',
    modalDesc: '말차 라떼와 오리지널 밀크티, 영귤 밀크티 및 호지차 라떼까지 오설록 명작들을 고풍스럽게 엮어낸 최고급 선물 세트입니다.',
    origin: '제주 직영 다원 시그니처 4종',
    notes: '다채로운 풍미의 조화, 품격 있는 패키지',
    temp: '85°C',
    timeSec: 120,
    timeDisplay: '정성스러운 패키징',
    tags: ['#밀크티에디션', '#오설록기프트', '#고급지함'],
    image: 'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&w=1000&q=80',
    tasteProfile: {
      umami: 80,
      sweetness: 80,
      citrus: 40,
      floral: 50,
      body: 95,
    },
    encyclopedia: {
      fermentationType: '후발효차 (100%)',
      fermentationRate: 60,
      pluckingPeriod: '제주 다원 연중 엄선 채엽',
      garden: '제주 서광 · 도순 · 한남 다원 총망라',
      processingMethod: '순수차, 가향차, 후발효차, 말차의 마스터 마스터피스 블렌딩',
      processingSteps: ['시그니처 티 4종 선별', '개별 맞춤 제다', '습도 차단 지함 포장', '품격 있는 선물 지함 완성'],
      topNote: '다채로운 제주 자연의 사계절 향미가 조화롭게 피어나는 부케',
      palate: '각 차마다 고유한 순수 감칠맛과 화사한 과일·꽃향, 부드러운 우유와의 조화',
      finish: '받는 이의 마음에 오랫동안 기억되는 따뜻한 품격',
      pairing: '오설록 녹차 쿠키, 전병, 애프터눈 티 플레이트',
      caffeineLevel: '보통',
      recommendedTeaware: '시그니처 머그 및 선물용 찻잔 세트',
      musicPairing: {
        title: '따뜻한 살롱의 클래식 피아노 트리오',
        artistTrack: 'Schumann - Träumerei & 따스한 챔버 앙상블',
        genre: '클래식 챔버 앙상블',
        mood: '#품격있는선물 #다정한온기 #명작의품격',
        description: '소중한 사람과 나누는 최고급 명차 4종에 깃든 정성을 클래식 트리오의 다정하고 격조 높은 하모니로 채워줍니다.',
        chimeFreq: [440, 554.37, 659.25, 880]
      }
    },
  },
];

type AppView = 'home' | 'finder' | 'encyclopedia' | 'collection' | 'routine';

export default function App() {
  const [activeView, setActiveView] = useState<AppView>('home');
  const [activeHomeSection, setActiveHomeSection] = useState<'story' | 'space' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'pure' | 'blend' | 'gift'>('all');
  const [activeModalProduct, setActiveModalProduct] = useState<TeaProduct | null>(null);
  const [activeEncyclopediaProduct, setActiveEncyclopediaProduct] = useState<TeaProduct | null>(null);

  // Music audio preview state
  const [isPlayingMusicChime, setIsPlayingMusicChime] = useState<boolean>(false);

  const navigateTo = (view: AppView, sectionId?: 'story' | 'space') => {
    setMobileMenuOpen(false);
    setActiveView(view);
    setActiveHomeSection(view === 'home' ? (sectionId ?? null) : null);

    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 40);
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  // ==========================================
  // '나만의 티 찾기 (Find My Tea)' State
  // ==========================================
  const [finderMode, setFinderMode] = useState<'step' | 'slider'>('step');
  const [quizStep, setQuizStep] = useState<number>(1);
  const [selectedFlavor, setSelectedFlavor] = useState<string | null>(null);
  const [selectedOccasion, setSelectedOccasion] = useState<string | null>(null);
  const [selectedBody, setSelectedBody] = useState<string | null>(null);
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);

  const [sensoryValues, setSensoryValues] = useState<{
    umami: number;
    sweetness: number;
    citrus: number;
    floral: number;
    body: number;
  }>({
    umami: 70,
    sweetness: 50,
    citrus: 40,
    floral: 40,
    body: 60,
  });

  // ==========================================
  // '티 도감 (Tea Encyclopedia)' State
  // ==========================================
  const [encyclopediaSearch, setEncyclopediaSearch] = useState<string>('');
  const [encyclopediaCategory, setEncyclopediaCategory] = useState<string>('all');
  const [encyclopediaFermentationFilter, setEncyclopediaFermentationFilter] = useState<string>('all');
  const [encyclopediaSort, setEncyclopediaSort] = useState<'featured' | 'fermentation' | 'umami' | 'name'>('featured');
  const [encyclopediaViewMode, setEncyclopediaViewMode] = useState<'grid' | 'table'>('grid');

  // Brewing Timer State
  const [timerSelectedTea, setTimerSelectedTea] = useState<TeaProduct>(TEA_CATALOG[0]);
  const [timerSecondsLeft, setTimerSecondsLeft] = useState<number>(TEA_CATALOG[0].timeSec);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [timerCompleted, setTimerCompleted] = useState<boolean>(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Sound chime when timer finishes
  const playTeaChime = (customFreqs?: number[]) => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = audioContextRef.current || new AudioCtx();
      audioContextRef.current = ctx;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const notes = customFreqs || [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.18);
        gain.gain.setValueAtTime(0.001, ctx.currentTime + idx * 0.18);
        gain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + idx * 0.18 + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.18 + 1.2);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.18);
        osc.stop(ctx.currentTime + idx * 0.18 + 1.3);
      });
    } catch {
      // Audio not permitted
    }
  };

  // Play serene music ambience simulation
  const playMusicPairingAmbience = (freqs: number[]) => {
    setIsPlayingMusicChime(true);
    playTeaChime(freqs);
    setTimeout(() => {
      setIsPlayingMusicChime(false);
    }, 2500);
  };

  // Timer countdown effect
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isTimerRunning && timerSecondsLeft > 0) {
      interval = setInterval(() => {
        setTimerSecondsLeft((prev) => {
          if (prev <= 1) {
            setIsTimerRunning(false);
            setTimerCompleted(true);
            playTeaChime();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, timerSecondsLeft]);

  const handleSelectTimerTea = (tea: TeaProduct) => {
    setTimerSelectedTea(tea);
    setTimerSecondsLeft(tea.timeSec);
    setIsTimerRunning(false);
    setTimerCompleted(false);
  };

  const handleResetTimer = () => {
    setIsTimerRunning(false);
    setTimerSecondsLeft(timerSelectedTea.timeSec);
    setTimerCompleted(false);
  };

  // Close modals on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activeModalProduct) setActiveModalProduct(null);
        if (activeEncyclopediaProduct) setActiveEncyclopediaProduct(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalProduct, activeEncyclopediaProduct]);

  const filteredCatalog = TEA_CATALOG.filter((item) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'pure') return item.category === 'pure';
    if (selectedCategory === 'blend') return item.category === 'blend' || item.category === 'fermented';
    if (selectedCategory === 'gift') return item.category === 'gift';
    return true;
  });

  const formatTimerDisplay = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // ==========================================
  // Recommendation Algorithm for Finder
  // ==========================================
  const getRecommendation = () => {
    let targetProfile = { ...sensoryValues };

    if (finderMode === 'step') {
      let u = 50, s = 50, c = 30, f = 30, b = 50;
      
      if (selectedFlavor === 'fresh') {
        u = 95; s = 60; c = 20; f = 40; b = 60;
      } else if (selectedFlavor === 'citrus') {
        u = 50; s = 75; c = 95; f = 35; b = 70;
      } else if (selectedFlavor === 'floral') {
        u = 50; s = 85; c = 30; f = 95; b = 55;
      } else if (selectedFlavor === 'moonlight') {
        u = 45; s = 90; c = 35; f = 50; b = 85;
      } else if (selectedFlavor === 'masters') {
        u = 75; s = 80; c = 35; f = 45; b = 95;
      }

      if (selectedOccasion === 'morning') {
        u += 10; b -= 5;
      } else if (selectedOccasion === 'afternoon') {
        c += 15; f += 10; s += 10;
      } else if (selectedOccasion === 'evening') {
        s += 15; b += 10;
      } else if (selectedOccasion === 'gift') {
        b += 25; u += 10;
      }

      if (selectedBody === 'clean') {
        u += 10; b -= 10;
      } else if (selectedBody === 'aromatic') {
        f += 15; c += 10;
      } else if (selectedBody === 'rich') {
        b += 20; s += 10;
      }

      targetProfile = {
        umami: Math.min(100, Math.max(0, u)),
        sweetness: Math.min(100, Math.max(0, s)),
        citrus: Math.min(100, Math.max(0, c)),
        floral: Math.min(100, Math.max(0, f)),
        body: Math.min(100, Math.max(0, b)),
      };
    }

    const scoredTeas = TEA_CATALOG.map((tea) => {
      const p = tea.tasteProfile;
      const diffSq = 
        Math.pow(p.umami - targetProfile.umami, 2) +
        Math.pow(p.sweetness - targetProfile.sweetness, 2) +
        Math.pow(p.citrus - targetProfile.citrus, 2) +
        Math.pow(p.floral - targetProfile.floral, 2) +
        Math.pow(p.body - targetProfile.body, 2);
      
      const maxDistance = Math.sqrt(5 * Math.pow(100, 2));
      const actualDistance = Math.sqrt(diffSq);
      const similarityPercent = Math.max(68, Math.round(100 - (actualDistance / maxDistance) * 75));

      return {
        tea,
        score: similarityPercent,
      };
    });

    scoredTeas.sort((a, b) => b.score - a.score);

    return {
      primary: scoredTeas[0],
      secondary: scoredTeas[1],
      targetProfile,
    };
  };

  const currentRecommendation = getRecommendation();
  const completedStepsCount = [selectedFlavor, selectedOccasion, selectedBody].filter(Boolean).length;
  const allStepsSelected = Boolean(selectedFlavor && selectedOccasion && selectedBody);
  const showRecommendationResult = finderMode === 'slider' || (isQuizCompleted && allStepsSelected);

  const flavorLabels: Record<string, string> = {
    fresh: '싱그러운 어린 순 & 맑은 감칠맛',
    citrus: '싱그러운 제주 시트러스 영귤',
    floral: '화사한 꽃잎 & 디저트 아로마',
    moonlight: '달빛 아래 달콤한 꿀배향',
    masters: '깊고 진한 말차 & 기프트 세트',
  };

  const occasionLabels: Record<string, string> = {
    morning: '아침의 맑은 시작과 집중',
    afternoon: '나른한 오후의 리프레시',
    evening: '고요한 밤, 편안한 휴식',
    gift: '소중한 분을 위한 품격 있는 선물',
  };

  const bodyLabels: Record<string, string> = {
    clean: '맑고 산뜻하며 깔끔한 피니시',
    aromatic: '화사하고 다채로운 여운의 밸런스',
    rich: '부드럽고 묵직한 바디감과 감미',
  };

  const applyPreset = (flavor: string, occasion: string, body: string) => {
    setFinderMode('step');
    setSelectedFlavor(flavor);
    setSelectedOccasion(occasion);
    setSelectedBody(body);
    setIsQuizCompleted(true);
    setQuizStep(3);
  };

  // ==========================================
  // Encyclopedia Filtering & Sorting Logic
  // ==========================================
  const filteredEncyclopediaTeas = TEA_CATALOG.filter((tea) => {
    // Search keyword query
    if (encyclopediaSearch.trim()) {
      const q = encyclopediaSearch.toLowerCase().trim();
      const matchName = tea.name.toLowerCase().includes(q) || tea.enName.toLowerCase().includes(q);
      const matchNotes = tea.notes.toLowerCase().includes(q) || tea.encyclopedia.topNote.toLowerCase().includes(q);
      const matchMethod = tea.encyclopedia.processingMethod.toLowerCase().includes(q) || tea.origin.toLowerCase().includes(q);
      const matchMusic = tea.encyclopedia.musicPairing.title.toLowerCase().includes(q) || tea.encyclopedia.musicPairing.artistTrack.toLowerCase().includes(q) || tea.encyclopedia.musicPairing.genre.toLowerCase().includes(q);
      const matchTags = tea.tags.some(t => t.toLowerCase().includes(q));
      if (!matchName && !matchNotes && !matchMethod && !matchMusic && !matchTags) return false;
    }

    // Category filter
    if (encyclopediaCategory !== 'all') {
      if (encyclopediaCategory === 'pure' && tea.category !== 'pure') return false;
      if (encyclopediaCategory === 'fermented' && tea.category !== 'fermented') return false;
      if (encyclopediaCategory === 'blend' && tea.category !== 'blend') return false;
      if (encyclopediaCategory === 'matcha' && tea.category !== 'matcha') return false;
      if (encyclopediaCategory === 'gift' && tea.category !== 'gift') return false;
    }

    // Fermentation spectrum filter
    if (encyclopediaFermentationFilter !== 'all') {
      if (encyclopediaFermentationFilter === 'unfermented' && tea.encyclopedia.fermentationRate !== 0) return false;
      if (encyclopediaFermentationFilter === 'semi' && (tea.encyclopedia.fermentationRate <= 0 || tea.encyclopedia.fermentationRate >= 100)) return false;
      if (encyclopediaFermentationFilter === 'post' && tea.encyclopedia.fermentationRate !== 100) return false;
    }

    return true;
  }).sort((a, b) => {
    if (encyclopediaSort === 'fermentation') {
      return a.encyclopedia.fermentationRate - b.encyclopedia.fermentationRate;
    }
    if (encyclopediaSort === 'umami') {
      return b.tasteProfile.umami - a.tasteProfile.umami;
    }
    if (encyclopediaSort === 'name') {
      return a.name.localeCompare(b.name, 'ko');
    }
    return 0;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F0] text-[#212623] font-['Noto_Sans_KR',sans-serif] selection:bg-[#1B362A] selection:text-white antialiased">
      {/* ==============================================
           1. NAVIGATION BAR
           ============================================== */}
      <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 glass-nav border-b border-[#EFECE4]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigateTo('home')}
            className="flex items-center gap-3 group cursor-pointer text-left"
          >
            <span className="text-2xl tracking-[0.28em] font-serif-kr font-bold text-[#0F231B] group-hover:text-[#1B362A] transition-colors">
              OSULLOC
            </span>
            <span className="text-xs text-[#637069] tracking-widest pl-2 border-l border-[#EFECE4] font-serif-kr hidden sm:inline">
              JEJU 1979
            </span>
          </button>

          {/* Desktop Nav: [브랜드 헤리티지] -> [나만의 티 찾기] -> [티 도감] -> [티 컬렉션] -> [루틴] -> [공간] */}
          <nav className="hidden lg:flex items-center space-x-1.5 text-sm font-medium tracking-wide text-[#212623]">
            <button
              type="button"
              onClick={() => navigateTo('home', 'story')}
              className={`relative group px-3.5 py-2 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 hover:text-[#1B362A] hover:bg-white/80 hover:shadow-xs flex items-center cursor-pointer ${
                activeView === 'home' && activeHomeSection === 'story' ? 'text-[#1B362A] bg-white/80 shadow-xs font-bold' : ''
              }`}
            >
              <span className="transition-transform duration-300 group-hover:font-bold">브랜드 헤리티지</span>
              <span
                className={`absolute bottom-1 left-3.5 right-3.5 h-[2px] bg-[#1B362A] transition-transform duration-300 rounded-full origin-center ${
                  activeView === 'home' && activeHomeSection === 'story' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </button>

            <button
              type="button"
              onClick={() => navigateTo('finder')}
              className={`relative group px-3.5 py-2 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 text-[#1B362A] hover:text-[#0F231B] hover:bg-white/80 hover:shadow-xs flex items-center gap-1.5 cursor-pointer ${
                activeView === 'finder' ? 'bg-white/90 shadow-xs' : ''
              }`}
            >
              <Compass className={`w-3.5 h-3.5 text-[#C3A370] transition-transform duration-300 ${activeView === 'finder' ? 'rotate-45' : 'group-hover:rotate-45'}`} />
              <span className="font-bold transition-transform duration-300">나만의 티 찾기</span>
              <span
                className={`absolute bottom-1 left-3.5 right-3.5 h-[2px] bg-[#C3A370] transition-transform duration-300 rounded-full origin-center ${
                  activeView === 'finder' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </button>

            <button
              type="button"
              onClick={() => navigateTo('encyclopedia')}
              className={`relative group px-3.5 py-2 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 hover:text-[#1B362A] hover:bg-white/80 hover:shadow-xs flex items-center gap-1.5 cursor-pointer ${
                activeView === 'encyclopedia' ? 'text-[#1B362A] bg-white/90 shadow-xs font-bold' : ''
              }`}
            >
              <BookOpen className={`w-3.5 h-3.5 text-[#C3A370] transition-transform duration-300 ${activeView === 'encyclopedia' ? 'scale-125' : 'group-hover:scale-125'}`} />
              <span className="transition-transform duration-300 group-hover:font-bold">티 도감</span>
              <span
                className={`absolute bottom-1 left-3.5 right-3.5 h-[2px] bg-[#1B362A] transition-transform duration-300 rounded-full origin-center ${
                  activeView === 'encyclopedia' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </button>

            <button
              type="button"
              onClick={() => navigateTo('collection')}
              className={`relative group px-3.5 py-2 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 hover:text-[#1B362A] hover:bg-white/80 hover:shadow-xs flex items-center cursor-pointer ${
                activeView === 'collection' ? 'text-[#1B362A] bg-white/90 shadow-xs font-bold' : ''
              }`}
            >
              <span className="transition-transform duration-300 group-hover:font-bold">티 컬렉션</span>
              <span
                className={`absolute bottom-1 left-3.5 right-3.5 h-[2px] bg-[#1B362A] transition-transform duration-300 rounded-full origin-center ${
                  activeView === 'collection' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </button>

            <button
              type="button"
              onClick={() => navigateTo('routine')}
              className={`relative group px-3.5 py-2 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 hover:text-[#1B362A] hover:bg-white/80 hover:shadow-xs flex items-center gap-1 cursor-pointer ${
                activeView === 'routine' ? 'text-[#1B362A] bg-white/90 shadow-xs font-bold' : ''
              }`}
            >
              <span className="transition-transform duration-300 group-hover:font-bold">브루잉 루틴 &amp; 타이머</span>
              <span
                className={`absolute bottom-1 left-3.5 right-3.5 h-[2px] bg-[#1B362A] transition-transform duration-300 rounded-full origin-center ${
                  activeView === 'routine' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </button>

            <button
              type="button"
              onClick={() => navigateTo('home', 'space')}
              className={`relative group px-3.5 py-2 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 hover:text-[#1B362A] hover:bg-white/80 hover:shadow-xs flex items-center cursor-pointer ${
                activeView === 'home' && activeHomeSection === 'space' ? 'text-[#1B362A] bg-white/80 shadow-xs font-bold' : ''
              }`}
            >
              <span className="transition-transform duration-300 group-hover:font-bold">공간 경험</span>
              <span
                className={`absolute bottom-1 left-3.5 right-3.5 h-[2px] bg-[#1B362A] transition-transform duration-300 rounded-full origin-center ${
                  activeView === 'home' && activeHomeSection === 'space' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://www.osulloc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex text-xs px-5 py-2.5 rounded-full bg-[#1B362A] text-white hover:bg-[#0F231B] transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-sm hover:shadow-md items-center gap-2 cursor-pointer font-medium"
            >
              <span>오설록 공식 스토어</span>
              <ExternalLink className="w-3 h-3 text-[#C3A370]" />
            </a>
            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="메뉴 열기"
              className="lg:hidden text-[#0F231B] p-2 text-xl focus:outline-none hover:scale-110 transition-transform cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F8F6F0] border-t border-[#EFECE4] px-6 py-5 space-y-2 text-sm font-medium text-[#212623] animate-in fade-in slide-in-from-top-2 duration-200">
            <button
              type="button"
              className={`w-full text-left block py-2.5 px-3 rounded-xl hover:bg-white hover:text-[#1B362A] hover:translate-x-2 hover:scale-[1.03] transition-all duration-200 cursor-pointer ${
                activeView === 'home' && activeHomeSection === 'story' ? 'bg-white text-[#1B362A] font-bold' : ''
              }`}
              onClick={() => navigateTo('home', 'story')}
            >
              브랜드 헤리티지
            </button>
            <button
              type="button"
              className={`w-full text-left py-2.5 px-3 rounded-xl hover:bg-white text-[#1B362A] font-bold flex items-center gap-2 hover:translate-x-2 hover:scale-[1.03] transition-all duration-200 cursor-pointer ${
                activeView === 'finder' ? 'bg-white ring-1 ring-[#C3A370]/40' : ''
              }`}
              onClick={() => navigateTo('finder')}
            >
              <Compass className="w-4 h-4 text-[#C3A370]" /> 나만의 티 찾기
            </button>
            <button
              type="button"
              className={`w-full text-left py-2.5 px-3 rounded-xl hover:bg-white hover:text-[#1B362A] flex items-center gap-2 hover:translate-x-2 hover:scale-[1.03] transition-all duration-200 cursor-pointer ${
                activeView === 'encyclopedia' ? 'bg-white text-[#1B362A] font-bold' : ''
              }`}
              onClick={() => navigateTo('encyclopedia')}
            >
              <BookOpen className="w-4 h-4 text-[#C3A370]" /> 티 도감 (Tea Encyclopedia)
            </button>
            <button
              type="button"
              className={`w-full text-left block py-2.5 px-3 rounded-xl hover:bg-white hover:text-[#1B362A] hover:translate-x-2 hover:scale-[1.03] transition-all duration-200 cursor-pointer ${
                activeView === 'collection' ? 'bg-white text-[#1B362A] font-bold' : ''
              }`}
              onClick={() => navigateTo('collection')}
            >
              티 컬렉션
            </button>
            <button
              type="button"
              className={`w-full text-left block py-2.5 px-3 rounded-xl hover:bg-white hover:text-[#1B362A] hover:translate-x-2 hover:scale-[1.03] transition-all duration-200 cursor-pointer ${
                activeView === 'routine' ? 'bg-white text-[#1B362A] font-bold' : ''
              }`}
              onClick={() => navigateTo('routine')}
            >
              브루잉 루틴 &amp; 타이머
            </button>
            <button
              type="button"
              className={`w-full text-left block py-2.5 px-3 rounded-xl hover:bg-white hover:text-[#1B362A] hover:translate-x-2 hover:scale-[1.03] transition-all duration-200 cursor-pointer ${
                activeView === 'home' && activeHomeSection === 'space' ? 'bg-white text-[#1B362A] font-bold' : ''
              }`}
              onClick={() => navigateTo('home', 'space')}
            >
              공간 경험
            </button>
            <a
              href="https://www.osulloc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs px-5 py-2.5 rounded-full bg-[#1B362A] text-white mt-3 font-medium hover:scale-105 transition-transform"
            >
              <span>오설록 공식 스토어 바로가기</span>
              <ExternalLink className="w-3 h-3 text-[#C3A370]" />
            </a>
          </div>
        )}
      </header>

      <main className="flex-1">
      {activeView === 'home' && (
        <>
      {/* ==============================================
           2. HERO SECTION
           ============================================== */}
      <section className="relative min-h-[92vh] flex items-center justify-center text-white px-6 pt-24 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=1800&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F231B]/95 via-[#0F231B]/65 to-[#0F231B]/75 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/25 backdrop-blur-md mb-8 text-xs tracking-[0.25em] uppercase text-white/90">
            <span className="w-2 h-2 rounded-full bg-[#C3A370] animate-pulse" />
            Jeju Heritage &amp; Organic Tea Culture
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-kr font-normal leading-[1.3] sm:leading-[1.25] tracking-tight mb-8">
            제주의 자연을 온전히 담아낸<br />
            <span className="font-semibold text-[#EFECE4]">한 잔의 쉼, 오설록</span>
          </h1>

          <p className="text-sm sm:text-lg text-white/85 max-w-2xl font-light leading-relaxed mb-10">
            돌밭을 일구어 이룩한 유기농 다원의 맑은 숨결.<br className="hidden sm:inline" />
            한라산의 바람과 화산암반수, 따사로운 볕이 빚어낸 한국 고유의 차 문화를 제안합니다.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => navigateTo('finder')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C3A370] text-[#0F231B] hover:bg-[#E8DCC4] font-medium text-sm tracking-wider transition shadow-lg text-center flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#0F231B] group-hover:rotate-45 transition-transform" />
              나만의 티 찾기
            </button>
            <button
              type="button"
              onClick={() => navigateTo('encyclopedia')}
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium text-sm tracking-wider transition text-center flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#C3A370]" />
              오설록 티 도감
            </button>
            <button
              type="button"
              onClick={() => navigateTo('home', 'story')}
              className="w-full sm:w-auto px-7 py-4 rounded-full border border-white/40 hover:bg-white/10 backdrop-blur-sm text-white font-medium text-sm tracking-wider transition text-center cursor-pointer"
            >
              1979 다원 이야기
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          type="button"
          onClick={() => navigateTo('home', 'story')}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white transition cursor-pointer"
        >
          <span className="text-[10px] tracking-widest uppercase font-mono">Scroll Down</span>
          <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-[#C3A370] animate-bounce" />
          </div>
        </button>
      </section>

      {/* ==============================================
           3. BRAND HERITAGE SECTION
           ============================================== */}
      <section id="story" className="py-24 px-6 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs tracking-[0.25em] text-[#446351] font-semibold uppercase">Brand Heritage</span>
            <h2 className="text-3xl sm:text-4xl font-serif-kr text-[#0F231B] mt-2 mb-4 font-normal">
              돌밭을 일구어 세운 <span className="font-semibold text-[#1B362A]">제주 유기농 다원</span>
            </h2>
            <div className="w-12 h-0.5 bg-[#C3A370] mx-auto mb-6" />
            <p className="text-[#637069] text-sm sm:text-base leading-relaxed">
              1979년부터 시작된 끈기 있는 개간으로 제주의 거친 황무지를 푸른 생명의 차밭으로 바꾸었습니다. 화산회토와 청정한 해무, 엄격한 유기농 재배가 오설록만의 깊은 풍미를 완성합니다.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
            <div className="p-6 rounded-2xl bg-white border border-[#EFECE4] text-center shadow-sm hover:shadow-md transition">
              <span className="block text-3xl sm:text-4xl font-display font-bold text-[#1B362A] mb-1">1979</span>
              <span className="text-xs text-[#637069]">제주 다원 개간 원년</span>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#EFECE4] text-center shadow-sm hover:shadow-md transition">
              <span className="block text-3xl sm:text-4xl font-display font-bold text-[#1B362A] mb-1">100%</span>
              <span className="text-xs text-[#637069]">유기농 인증 직영 다원</span>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#EFECE4] text-center shadow-sm hover:shadow-md transition">
              <span className="block text-3xl sm:text-4xl font-display font-bold text-[#1B362A] mb-1">Top 3</span>
              <span className="text-xs text-[#637069]">세계 녹차 품평회 수상</span>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#EFECE4] text-center shadow-sm hover:shadow-md transition">
              <span className="block text-3xl sm:text-4xl font-display font-bold text-[#1B362A] mb-1">3 Gardens</span>
              <span className="text-xs text-[#637069]">서광 · 도순 · 한남 다원</span>
            </div>
          </div>

          {/* 3 Pillars of Osulloc */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-[#EFECE4] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F8F6F0] flex items-center justify-center text-[#1B362A] mb-6">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif-kr font-bold text-[#0F231B] mb-2">화산회토 &amp; 유기농 재배</h3>
                <p className="text-xs text-[#637069] leading-relaxed">
                  물 빠짐이 좋고 유기물 함량이 풍부한 제주의 독특한 화산회토에서 화학 비료 없이 자연의 섭리대로 건강한 찻잎을 키워냅니다.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#EFECE4] text-[11px] text-[#446351] font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> 직영 유기농 다원 100% 인증
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#EFECE4] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F8F6F0] flex items-center justify-center text-[#1B362A] mb-6">
                  <Droplets className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif-kr font-bold text-[#0F231B] mb-2">청정 암반수와 해무</h3>
                <p className="text-xs text-[#637069] leading-relaxed">
                  한라산 맑은 지하 암반수와 사계절 불어오는 바닷바람, 아침 안개가 찻잎을 촉촉하게 감싸 떫은맛은 줄이고 감칠맛을 극대화합니다.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#EFECE4] text-[11px] text-[#446351] font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> 청정 제주 천혜의 기후 조건
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#EFECE4] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F8F6F0] flex items-center justify-center text-[#1B362A] mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif-kr font-bold text-[#0F231B] mb-2">덖음과 증제의 복합 제다</h3>
                <p className="text-xs text-[#637069] leading-relaxed">
                  찌는 방식(증제)으로 녹색의 싱그러운 색과 향을 살리고, 가마솥에 덖어 구수한 맛과 감칠맛을 배가하는 오설록 고유의 제다 기술입니다.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#EFECE4] text-[11px] text-[#446351] font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> 40년 전통의 장인 손길
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
      )}

      {/* ==============================================
           4. '나만의 티 찾기' (FIND MY SIGNATURE TEA)
           ============================================== */}
      {activeView === 'finder' && (
      <section id="finder" className="pt-24 sm:pt-32 pb-14 sm:pb-24 px-4 sm:px-6 bg-gradient-to-b from-[#F8F6F0] via-[#EFECE4]/60 to-[#F8F6F0] border-b border-[#EFECE4] animate-in fade-in duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="mb-5 sm:mb-8 flex items-center justify-between">
            <button
              type="button"
              onClick={() => navigateTo('home')}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#637069] hover:text-[#1B362A] px-3.5 py-2 rounded-full bg-white border border-[#EFECE4] hover:border-[#1B362A]/40 transition cursor-pointer shadow-xs"
            >
              <ArrowRight className="w-3.5 h-3.5 rotate-180 text-[#C3A370]" /> 홈으로 돌아가기
            </button>
            <span className="text-[11px] font-mono text-[#637069] hidden sm:inline">OSULLOC CURATION · FIND MY TEA</span>
          </div>
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
            <span className="text-xs tracking-[0.25em] text-[#446351] font-semibold uppercase flex items-center justify-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#C3A370]" />
              Personal Tea Sommelier
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif-kr text-[#0F231B] mt-2 font-normal">
              당신의 취향을 담은, <span className="font-semibold text-[#1B362A]">나만의 티 찾기</span>
            </h2>
            <div className="w-12 h-0.5 bg-[#C3A370] mx-auto my-3 sm:my-4" />
            <p className="text-[#637069] text-xs sm:text-sm leading-relaxed">
              선호하는 향과 풍미, 차를 마시는 순간을 선택해 보세요. 제주 유기농 다원의 맑은 숨결 중 당신의 감각에 가장 완벽하게 부합하는 차를 추천해 드립니다.
            </p>

            {/* Quick Presets */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center sm:justify-center gap-1.5 sm:gap-2 mt-5 sm:mt-6">
              <span className="col-span-2 sm:col-span-1 text-[11px] text-[#637069] font-medium sm:mr-1 mb-0.5 sm:mb-0">빠른 추천:</span>
              <button
                onClick={() => applyPreset('fresh', 'morning', 'clean')}
                className="text-[11px] sm:text-xs px-2.5 sm:px-3 py-1.5 rounded-full bg-white border border-[#EFECE4] text-[#1B362A] hover:border-[#1B362A] hover:bg-[#F8F6F0] transition flex items-center justify-center gap-1 cursor-pointer truncate"
              >
                🌿 맑은 감칠맛 명차
              </button>
              <button
                onClick={() => applyPreset('citrus', 'afternoon', 'aromatic')}
                className="text-[11px] sm:text-xs px-2.5 sm:px-3 py-1.5 rounded-full bg-white border border-[#EFECE4] text-[#1B362A] hover:border-[#1B362A] hover:bg-[#F8F6F0] transition flex items-center justify-center gap-1 cursor-pointer truncate"
              >
                🍊 싱그러운 제주 영귤
              </button>
              <button
                onClick={() => applyPreset('floral', 'afternoon', 'aromatic')}
                className="text-[11px] sm:text-xs px-2.5 sm:px-3 py-1.5 rounded-full bg-white border border-[#EFECE4] text-[#1B362A] hover:border-[#1B362A] hover:bg-[#F8F6F0] transition flex items-center justify-center gap-1 cursor-pointer truncate"
              >
                🌸 달콤한 꽃향기
              </button>
              <button
                onClick={() => applyPreset('moonlight', 'evening', 'rich')}
                className="text-[11px] sm:text-xs px-2.5 sm:px-3 py-1.5 rounded-full bg-white border border-[#EFECE4] text-[#1B362A] hover:border-[#1B362A] hover:bg-[#F8F6F0] transition flex items-center justify-center gap-1 cursor-pointer truncate"
              >
                🌙 고요한 밤 꿀배향
              </button>
              <button
                onClick={() => applyPreset('masters', 'gift', 'rich')}
                className="col-span-2 sm:col-span-1 text-[11px] sm:text-xs px-2.5 sm:px-3 py-1.5 rounded-full bg-white border border-[#EFECE4] text-[#1B362A] hover:border-[#1B362A] hover:bg-[#F8F6F0] transition flex items-center justify-center gap-1 cursor-pointer"
              >
                🎁 품격 있는 선물 세트
              </button>
            </div>
          </div>

          {/* Main Interactive Container */}
          <div className="grid lg:grid-cols-12 gap-5 sm:gap-8 items-start max-w-6xl mx-auto">
            
            {/* Left: Interactive Input Panel (7 Cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-4 sm:p-9 border border-[#EFECE4] shadow-md">
              {/* Mode Tabs */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#EFECE4] pb-4 sm:pb-5 mb-5 sm:mb-6">
                <div className="flex gap-1.5 sm:gap-2">
                  <button
                    onClick={() => {
                      setFinderMode('step');
                      if (!allStepsSelected) {
                        setIsQuizCompleted(false);
                      }
                    }}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-medium transition cursor-pointer flex items-center gap-1.5 ${
                      finderMode === 'step'
                        ? 'bg-[#1B362A] text-white shadow-sm'
                        : 'bg-[#F8F6F0] text-[#637069] hover:text-[#0F231B]'
                    }`}
                  >
                    <Compass className="w-3.5 h-3.5" /> 3단계 퀴즈
                  </button>
                  <button
                    onClick={() => setFinderMode('slider')}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-medium transition cursor-pointer flex items-center gap-1.5 ${
                      finderMode === 'slider'
                        ? 'bg-[#1B362A] text-white shadow-sm'
                        : 'bg-[#F8F6F0] text-[#637069] hover:text-[#0F231B]'
                    }`}
                  >
                    <SlidersHorizontal className="w-3.5 h-3.5" /> 센서리 슬라이더
                  </button>
                </div>

                <button
                  onClick={() => {
                    setQuizStep(1);
                    setSelectedFlavor(null);
                    setSelectedOccasion(null);
                    setSelectedBody(null);
                    setIsQuizCompleted(false);
                    setSensoryValues({
                      umami: 70,
                      sweetness: 50,
                      citrus: 40,
                      floral: 40,
                      body: 60,
                    });
                  }}
                  className="text-xs text-[#637069] hover:text-[#1B362A] flex items-center gap-1 transition cursor-pointer"
                  title="초기화"
                >
                  <RefreshCw className="w-3 h-3" /> 다시 하기
                </button>
              </div>

              {/* MODE 1: STEP-BY-STEP QUIZ */}
              {finderMode === 'step' && (
                <div>
                  {/* Step Indicators */}
                  <div className="flex items-center justify-between mb-8">
                    {[1, 2, 3].map((stepNum) => {
                      const isStepDone =
                        (stepNum === 1 && Boolean(selectedFlavor)) ||
                        (stepNum === 2 && Boolean(selectedOccasion)) ||
                        (stepNum === 3 && Boolean(selectedBody));
                      const canJumpToStep =
                        stepNum === 1 ||
                        (stepNum === 2 && Boolean(selectedFlavor)) ||
                        (stepNum === 3 && Boolean(selectedFlavor) && Boolean(selectedOccasion));

                      return (
                        <div key={stepNum} className="flex-1 flex items-center">
                          <button
                            type="button"
                            disabled={!canJumpToStep}
                            onClick={() => {
                              if (canJumpToStep) setQuizStep(stepNum);
                            }}
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition ${
                              quizStep === stepNum
                                ? 'bg-[#1B362A] text-[#C3A370] ring-4 ring-[#C3A370]/20 cursor-pointer'
                                : isStepDone
                                ? 'bg-[#446351] text-white cursor-pointer'
                                : canJumpToStep
                                ? 'bg-[#EFECE4] text-[#0F231B] cursor-pointer'
                                : 'bg-[#EFECE4] text-[#637069]/60 cursor-not-allowed'
                            }`}
                          >
                            {isStepDone && quizStep !== stepNum ? '✓' : stepNum}
                          </button>
                          <span className={`text-[11px] font-medium ml-2 hidden sm:inline ${
                            quizStep === stepNum ? 'text-[#0F231B] font-bold' : 'text-[#637069]'
                          }`}>
                            {stepNum === 1 ? '향과 풍미' : stepNum === 2 ? '음미하는 순간' : '질감과 바디'}
                          </span>
                          {stepNum < 3 && <div className="flex-1 h-0.5 bg-[#EFECE4] mx-2" />}
                        </div>
                      );
                    })}
                  </div>

                  {/* STEP 1: Flavor & Aroma */}
                  {quizStep === 1 && (
                    <div className="animate-in fade-in duration-200">
                      <div className="mb-4">
                        <span className="text-[11px] font-mono text-[#C3A370] font-bold uppercase tracking-wider">Step 01 / 03</span>
                        <h4 className="text-xl font-serif-kr font-bold text-[#0F231B] mt-1">
                          지금 가장 끌리는 향과 풍미는 무엇인가요?
                        </h4>
                        <p className="text-xs text-[#637069] mt-1">마음을 사로잡는 첫인상의 아로마를 골라주세요.</p>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-6">
                        {[
                          {
                            id: 'fresh',
                            title: '싱그러운 어린 순과 맑은 감칠맛',
                            desc: '여린 찻잎 본연의 맑고 기품 있는 풀내음과 은은한 단맛',
                            icon: '🍃',
                            tag: '#첫물차 #우마미',
                          },
                          {
                            id: 'citrus',
                            title: '제주 햇살을 머금은 시트러스 영귤',
                            desc: '상큼하고 청량한 감귤 아로마와 구수한 발효차의 조화',
                            icon: '🍊',
                            tag: '#제주영귤 #청량',
                          },
                          {
                            id: 'floral',
                            title: '화사한 꽃잎과 디저트 아로마',
                            desc: '붉은 장미 꽃잎과 달콤한 마스카포네 치즈향의 축복',
                            icon: '🌸',
                            tag: '#장미꽃잎 #디저트',
                          },
                          {
                            id: 'moonlight',
                            title: '달빛 아래 퍼지는 달콤한 배향',
                            desc: '후발효차의 부드러움과 시원하고 달콤한 꿀배의 향미',
                            icon: '🌙',
                            tag: '#달빛산책 #꿀배향',
                          },
                          {
                            id: 'masters',
                            title: '깊고 진한 말차 & 기프트 세트',
                            desc: '풍성한 프리미엄 라떼와 다채로운 오설록 명작의 집약',
                            icon: '🍵',
                            tag: '#말차 #기프트',
                          },
                        ].map((option, idx) => (
                          <div
                            key={option.id}
                            onClick={() => setSelectedFlavor(option.id)}
                            className={`p-3 sm:p-4 rounded-2xl border transition cursor-pointer flex flex-col justify-between gap-2 ${
                              idx === 4 ? 'col-span-2 sm:col-span-1' : ''
                            } ${
                              selectedFlavor === option.id
                                ? 'border-[#1B362A] bg-[#F8F6F0] shadow-sm ring-1 ring-[#1B362A]'
                                : 'border-[#EFECE4] hover:border-[#446351]/50 bg-white'
                            }`}
                          >
                            <div>
                              <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                                <span className="text-lg sm:text-2xl p-1 bg-white rounded-xl shadow-xs border border-[#EFECE4]">{option.icon}</span>
                                {selectedFlavor === option.id && (
                                  <span className="text-[10px] sm:text-[11px] font-bold text-[#1B362A] flex items-center gap-0.5">
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                    <span className="hidden sm:inline">선택됨</span>
                                  </span>
                                )}
                              </div>
                              <span className="text-xs sm:text-sm font-semibold text-[#0F231B] leading-snug block">{option.title}</span>
                              <p className="text-[11px] sm:text-xs text-[#637069] mt-1 leading-relaxed line-clamp-2">{option.desc}</p>
                            </div>
                            <span className="inline-block w-fit text-[9px] sm:text-[10px] text-[#446351] font-mono bg-[#EFECE4]/50 px-1.5 sm:px-2 py-0.5 rounded">
                              {option.tag}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        <span className="text-[11px] text-[#637069]">
                          {selectedFlavor ? '1단계 선택 완료 · 다음 단계로 이동하세요' : '끌리는 향과 풍미를 하나 선택해 주세요'}
                        </span>
                        <button
                          type="button"
                          disabled={!selectedFlavor}
                          onClick={() => setQuizStep(2)}
                          className={`px-6 py-2.5 rounded-full text-xs font-medium transition flex items-center gap-1.5 shadow-sm ${
                            selectedFlavor
                              ? 'bg-[#1B362A] text-white hover:bg-[#0F231B] cursor-pointer'
                              : 'bg-[#EFECE4] text-[#637069] cursor-not-allowed'
                          }`}
                        >
                          다음 단계 (순간 선택) <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Occasion & Moment */}
                  {quizStep === 2 && (
                    <div className="animate-in fade-in duration-200">
                      <div className="mb-4">
                        <span className="text-[11px] font-mono text-[#C3A370] font-bold uppercase tracking-wider">Step 02 / 03</span>
                        <h4 className="text-xl font-serif-kr font-bold text-[#0F231B] mt-1">
                          차를 음미하고 싶은 시간이나 상황은 언제인가요?
                        </h4>
                        <p className="text-xs text-[#637069] mt-1">티타임이 선사할 가장 이상적인 무드를 정해주세요.</p>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-6">
                        {[
                          {
                            id: 'morning',
                            title: '아침의 맑은 시작과 집중',
                            desc: '하루를 깨우는 맑은 물색과 산뜻한 감칠맛의 첫 잔',
                            icon: <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />,
                          },
                          {
                            id: 'afternoon',
                            title: '나른한 오후의 리프레시',
                            desc: '향긋한 기분 전환과 함께 즐기는 달콤한 디저트 타임',
                            icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#C3A370]" />,
                          },
                          {
                            id: 'evening',
                            title: '고요한 밤, 편안한 휴식',
                            desc: '하루의 긴장을 풀고 온기를 느끼는 차분한 쉼',
                            icon: <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />,
                          },
                          {
                            id: 'gift',
                            title: '소중한 분을 위한 선물',
                            desc: '정성스러운 포장과 고급스러운 패키지로 감사를 전할 때',
                            icon: <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />,
                          },
                        ].map((option) => (
                          <div
                            key={option.id}
                            onClick={() => setSelectedOccasion(option.id)}
                            className={`p-3 sm:p-4 rounded-2xl border transition cursor-pointer flex flex-col justify-between ${
                              selectedOccasion === option.id
                                ? 'border-[#1B362A] bg-[#F8F6F0] shadow-sm ring-1 ring-[#1B362A]'
                                : 'border-[#EFECE4] hover:border-[#446351]/50 bg-white'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className="p-1.5 sm:p-2 bg-white rounded-xl border border-[#EFECE4]">{option.icon}</div>
                              {selectedOccasion === option.id && (
                                <CheckCircle2 className="w-4 h-4 text-[#1B362A]" />
                              )}
                            </div>
                            <div>
                              <h5 className="text-xs sm:text-sm font-semibold text-[#0F231B] leading-snug">{option.title}</h5>
                              <p className="text-[11px] sm:text-xs text-[#637069] mt-1 leading-relaxed line-clamp-2">{option.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-between items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setQuizStep(1)}
                          className="px-5 py-2.5 rounded-full border border-[#EFECE4] text-[#637069] hover:text-[#0F231B] text-xs font-medium transition cursor-pointer"
                        >
                          이전 단계
                        </button>
                        <button
                          type="button"
                          disabled={!selectedOccasion}
                          onClick={() => setQuizStep(3)}
                          className={`px-6 py-2.5 rounded-full text-xs font-medium transition flex items-center gap-1.5 shadow-sm ${
                            selectedOccasion
                              ? 'bg-[#1B362A] text-white hover:bg-[#0F231B] cursor-pointer'
                              : 'bg-[#EFECE4] text-[#637069] cursor-not-allowed'
                          }`}
                        >
                          다음 단계 (질감 선택) <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Texture & Body */}
                  {quizStep === 3 && (
                    <div className="animate-in fade-in duration-200">
                      <div className="mb-4">
                        <span className="text-[11px] font-mono text-[#C3A370] font-bold uppercase tracking-wider">Step 03 / 03</span>
                        <h4 className="text-xl font-serif-kr font-bold text-[#0F231B] mt-1">
                          선호하는 질감과 여운의 깊이는 어떤가요?
                        </h4>
                        <p className="text-xs text-[#637069] mt-1">입안에 맴도는 바디감과 단맛의 여운을 결정합니다.</p>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-6">
                        {[
                          {
                            id: 'clean',
                            title: '맑고 산뜻한 피니시',
                            desc: '떫지 않고 맑으며 여린 풀내음이 감도는 담백한 질감',
                            badge: '순수 녹차 선호',
                          },
                          {
                            id: 'aromatic',
                            title: '화사한 여운의 밸런스',
                            desc: '입안 가득 피어나는 풍부하고 다채로운 향기',
                            badge: '블렌디드 선호',
                          },
                          {
                            id: 'rich',
                            title: '부드럽고 묵직한 바디',
                            desc: '숙성 발효차의 온기와 라떼의 포근한 밀도감',
                            badge: '발효·라떼 선호',
                          },
                        ].map((option, idx) => (
                          <div
                            key={option.id}
                            onClick={() => {
                              setSelectedBody(option.id);
                              if (selectedFlavor && selectedOccasion) {
                                setIsQuizCompleted(true);
                              }
                            }}
                            className={`p-3 sm:p-4 rounded-2xl border transition cursor-pointer flex flex-col justify-between ${
                              idx === 2 ? 'col-span-2 sm:col-span-1' : ''
                            } ${
                              selectedBody === option.id
                                ? 'border-[#1B362A] bg-[#F8F6F0] shadow-sm ring-1 ring-[#1B362A]'
                                : 'border-[#EFECE4] hover:border-[#446351]/50 bg-white'
                            }`}
                          >
                            <div>
                              <div className="flex items-center justify-between gap-1 mb-1.5">
                                <span className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded bg-[#EFECE4] text-[#446351] font-mono">
                                  {option.badge}
                                </span>
                                {selectedBody === option.id && (
                                  <CheckCircle2 className="w-4 h-4 text-[#1B362A] flex-shrink-0" />
                                )}
                              </div>
                              <span className="text-xs sm:text-sm font-semibold text-[#0F231B] leading-snug block">{option.title}</span>
                              <p className="text-[11px] sm:text-xs text-[#637069] mt-1 leading-relaxed">{option.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-between items-center pt-2">
                        <button
                          type="button"
                          onClick={() => setQuizStep(2)}
                          className="px-5 py-2.5 rounded-full border border-[#EFECE4] text-[#637069] hover:text-[#0F231B] text-xs font-medium transition cursor-pointer"
                        >
                          이전 단계
                        </button>
                        {showRecommendationResult ? (
                          <div className="text-xs text-[#1B362A] font-semibold flex items-center gap-1">
                            <Sparkles className="w-4 h-4 text-[#C3A370]" /> 3단계 맞춤 분석 완료! 추천 결과를 확인하세요
                          </div>
                        ) : (
                          <span className="text-xs text-[#637069]">
                            질감을 선택하시면 추천 티 결과가 공개됩니다
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* MODE 2: SENSORY TASTE SLIDERS */}
              {finderMode === 'slider' && (
                <div className="animate-in fade-in duration-200">
                  <div className="mb-6">
                    <span className="text-[11px] font-mono text-[#C3A370] font-bold uppercase tracking-wider">Sensory Mixer</span>
                    <h4 className="text-xl font-serif-kr font-bold text-[#0F231B] mt-1">
                      오설록 5대 감각 튜닝 슬라이더
                    </h4>
                    <p className="text-xs text-[#637069] mt-1">
                      슬라이더를 조절하면 다원의 블렌딩 매트릭스를 실시간으로 연산하여 추천 티를 도출합니다.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-1 gap-x-3 gap-y-4 sm:gap-5 mb-6">
                    {/* Umami */}
                    <div>
                      <div className="flex justify-between text-[11px] sm:text-xs mb-1.5">
                        <span className="font-medium text-[#0F231B] flex items-center gap-1">
                          <Leaf className="w-3.5 h-3.5 text-[#446351] flex-shrink-0" /> 감칠맛 (Umami)
                        </span>
                        <span className="font-mono text-[#1B362A] font-bold">{sensoryValues.umami}%</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="100"
                        value={sensoryValues.umami}
                        onChange={(e) => setSensoryValues({ ...sensoryValues, umami: Number(e.target.value) })}
                        className="w-full accent-[#1B362A] h-2 bg-[#EFECE4] rounded-lg cursor-pointer"
                      />
                      <div className="flex justify-between text-[9px] sm:text-[10px] text-[#637069] mt-0.5">
                        <span>순한 맛</span>
                        <span>첫물차 감칠맛</span>
                      </div>
                    </div>

                    {/* Citrus */}
                    <div>
                      <div className="flex justify-between text-[11px] sm:text-xs mb-1.5">
                        <span className="font-medium text-[#0F231B] flex items-center gap-1">
                          <Droplets className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" /> 상큼함 (Citrus)
                        </span>
                        <span className="font-mono text-amber-700 font-bold">{sensoryValues.citrus}%</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="100"
                        value={sensoryValues.citrus}
                        onChange={(e) => setSensoryValues({ ...sensoryValues, citrus: Number(e.target.value) })}
                        className="w-full accent-amber-600 h-2 bg-[#EFECE4] rounded-lg cursor-pointer"
                      />
                      <div className="flex justify-between text-[9px] sm:text-[10px] text-[#637069] mt-0.5">
                        <span>담백함</span>
                        <span>제주 영귤 과즙</span>
                      </div>
                    </div>

                    {/* Floral */}
                    <div>
                      <div className="flex justify-between text-[11px] sm:text-xs mb-1.5">
                        <span className="font-medium text-[#0F231B] flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" /> 꽃향기 (Floral)
                        </span>
                        <span className="font-mono text-rose-700 font-bold">{sensoryValues.floral}%</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="100"
                        value={sensoryValues.floral}
                        onChange={(e) => setSensoryValues({ ...sensoryValues, floral: Number(e.target.value) })}
                        className="w-full accent-rose-600 h-2 bg-[#EFECE4] rounded-lg cursor-pointer"
                      />
                      <div className="flex justify-between text-[9px] sm:text-[10px] text-[#637069] mt-0.5">
                        <span>순수 차</span>
                        <span>풍부한 꽃향</span>
                      </div>
                    </div>

                    {/* Sweetness */}
                    <div>
                      <div className="flex justify-between text-[11px] sm:text-xs mb-1.5">
                        <span className="font-medium text-[#0F231B] flex items-center gap-1">
                          <Heart className="w-3.5 h-3.5 text-[#C3A370] flex-shrink-0" /> 단맛 (Sweet)
                        </span>
                        <span className="font-mono text-[#C3A370] font-bold">{sensoryValues.sweetness}%</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="100"
                        value={sensoryValues.sweetness}
                        onChange={(e) => setSensoryValues({ ...sensoryValues, sweetness: Number(e.target.value) })}
                        className="w-full accent-[#C3A370] h-2 bg-[#EFECE4] rounded-lg cursor-pointer"
                      />
                      <div className="flex justify-between text-[9px] sm:text-[10px] text-[#637069] mt-0.5">
                        <span>담백함</span>
                        <span>달콤한 꿀배향</span>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="col-span-2 sm:col-span-1">
                      <div className="flex justify-between text-[11px] sm:text-xs mb-1.5">
                        <span className="font-medium text-[#0F231B] flex items-center gap-1">
                          <Coffee className="w-3.5 h-3.5 text-[#142920] flex-shrink-0" /> 묵직함 &amp; 바디감 (Body)
                        </span>
                        <span className="font-mono text-[#0F231B] font-bold">{sensoryValues.body}%</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="100"
                        value={sensoryValues.body}
                        onChange={(e) => setSensoryValues({ ...sensoryValues, body: Number(e.target.value) })}
                        className="w-full accent-[#0F231B] h-2 bg-[#EFECE4] rounded-lg cursor-pointer"
                      />
                      <div className="flex justify-between text-[9px] sm:text-[10px] text-[#637069] mt-0.5">
                        <span>가볍고 맑은 목넘김</span>
                        <span>삼나무 숙성 &amp; 밀크티 밀도</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Recommendation Result Card (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              {!showRecommendationResult ? (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EFECE4] shadow-lg relative overflow-hidden">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-mono tracking-wider text-[#C3A370] font-bold uppercase flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Sommelier Curation
                    </span>
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#F8F6F0] border border-[#EFECE4] text-[#1B362A]">
                      {completedStepsCount} / 3 완료
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif-kr font-bold text-[#0F231B] leading-snug mb-2">
                    3단계 취향을 모두 고르면<br />
                    나만의 시그니처 티가 완성됩니다
                  </h3>
                  <p className="text-xs text-[#637069] leading-relaxed mb-6">
                    향과 풍미, 차를 마시는 순간, 선호하는 질감까지 선택을 마치는 순간 고객님께 가장 완벽히 어울리는 오설록의 차와 음악을 추천해 드립니다.
                  </p>

                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-[#EFECE4] rounded-full overflow-hidden mb-6">
                    <div
                      className="h-full bg-gradient-to-r from-[#1B362A] to-[#C3A370] transition-all duration-500 rounded-full"
                      style={{ width: `${(completedStepsCount / 3) * 100}%` }}
                    />
                  </div>

                  {/* Step Checklist Summary */}
                  <div className="grid grid-cols-3 lg:grid-cols-1 gap-2 lg:gap-3 mb-5 sm:mb-6">
                    <div
                      onClick={() => setQuizStep(1)}
                      className={`p-2.5 lg:p-3.5 rounded-xl lg:rounded-2xl border transition cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-1 ${
                        selectedFlavor
                          ? 'bg-[#F8F6F0] border-[#1B362A]/30'
                          : quizStep === 1
                          ? 'bg-white border-[#C3A370] ring-1 ring-[#C3A370]/30'
                          : 'bg-[#F8F6F0]/50 border-[#EFECE4]'
                      }`}
                    >
                      <div className="min-w-0">
                        <span className="text-[9px] lg:text-[10px] font-mono text-[#637069] uppercase block">Step 01 · 향</span>
                        <span className={`text-[11px] lg:text-xs font-semibold block truncate ${selectedFlavor ? 'text-[#0F231B]' : 'text-[#637069]'}`}>
                          {selectedFlavor ? flavorLabels[selectedFlavor] : '선택 대기'}
                        </span>
                      </div>
                      {selectedFlavor ? (
                        <CheckCircle2 className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#1B362A] flex-shrink-0" />
                      ) : (
                        <span className="text-[9px] lg:text-[10px] font-mono text-[#C3A370] font-bold">진행 중</span>
                      )}
                    </div>

                    <div
                      onClick={() => {
                        if (selectedFlavor) setQuizStep(2);
                      }}
                      className={`p-2.5 lg:p-3.5 rounded-xl lg:rounded-2xl border transition flex flex-col lg:flex-row lg:items-center justify-between gap-1 ${
                        selectedFlavor ? 'cursor-pointer' : 'opacity-65'
                      } ${
                        selectedOccasion
                          ? 'bg-[#F8F6F0] border-[#1B362A]/30'
                          : quizStep === 2
                          ? 'bg-white border-[#C3A370] ring-1 ring-[#C3A370]/30'
                          : 'bg-[#F8F6F0]/50 border-[#EFECE4]'
                      }`}
                    >
                      <div className="min-w-0">
                        <span className="text-[9px] lg:text-[10px] font-mono text-[#637069] uppercase block">Step 02 · 순간</span>
                        <span className={`text-[11px] lg:text-xs font-semibold block truncate ${selectedOccasion ? 'text-[#0F231B]' : 'text-[#637069]'}`}>
                          {selectedOccasion ? occasionLabels[selectedOccasion] : '선택 대기'}
                        </span>
                      </div>
                      {selectedOccasion ? (
                        <CheckCircle2 className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#1B362A] flex-shrink-0" />
                      ) : (
                        <span className="text-[9px] lg:text-[10px] font-mono text-[#637069]">{quizStep === 2 ? '진행 중' : '대기'}</span>
                      )}
                    </div>

                    <div
                      onClick={() => {
                        if (selectedFlavor && selectedOccasion) setQuizStep(3);
                      }}
                      className={`p-2.5 lg:p-3.5 rounded-xl lg:rounded-2xl border transition flex flex-col lg:flex-row lg:items-center justify-between gap-1 ${
                        selectedFlavor && selectedOccasion ? 'cursor-pointer' : 'opacity-65'
                      } ${
                        selectedBody
                          ? 'bg-[#F8F6F0] border-[#1B362A]/30'
                          : quizStep === 3
                          ? 'bg-white border-[#C3A370] ring-1 ring-[#C3A370]/30'
                          : 'bg-[#F8F6F0]/50 border-[#EFECE4]'
                      }`}
                    >
                      <div className="min-w-0">
                        <span className="text-[9px] lg:text-[10px] font-mono text-[#637069] uppercase block">Step 03 · 질감</span>
                        <span className={`text-[11px] lg:text-xs font-semibold block truncate ${selectedBody ? 'text-[#0F231B]' : 'text-[#637069]'}`}>
                          {selectedBody ? bodyLabels[selectedBody] : '선택 대기'}
                        </span>
                      </div>
                      {selectedBody ? (
                        <CheckCircle2 className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#1B362A] flex-shrink-0" />
                      ) : (
                        <span className="text-[9px] lg:text-[10px] font-mono text-[#637069]">{quizStep === 3 ? '마지막' : '대기'}</span>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#EFECE4] flex items-center justify-between text-[11px] text-[#637069]">
                    <span>감각 수치로 직접 조절하고 싶으신가요?</span>
                    <button
                      type="button"
                      onClick={() => setFinderMode('slider')}
                      className="text-[#1B362A] font-semibold hover:underline cursor-pointer flex items-center gap-1"
                    >
                      슬라이더 모드 <ArrowRight className="w-3 h-3 text-[#C3A370]" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-5 animate-in fade-in zoom-in-95 duration-300">
                  {/* Main Match Card */}
                  <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#C3A370]/60 shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-[#C3A370] text-[#0F231B] text-[11px] font-bold px-4 py-1.5 rounded-bl-2xl shadow-sm flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" /> 매칭도 {currentRecommendation.primary.score}%
                    </div>

                    <div className="mb-4">
                      <span className="text-[11px] font-mono tracking-wider text-[#446351] font-bold uppercase">
                        Your Signature Recommendation
                      </span>
                      <h3 className="text-2xl font-serif-kr font-bold text-[#0F231B] mt-1">
                        {currentRecommendation.primary.tea.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs font-mono text-[#C3A370]">
                          {currentRecommendation.primary.tea.enName}
                        </span>
                        <span className="text-[11px] text-[#637069] flex items-center gap-1">
                          <span
                            className="w-2.5 h-2.5 rounded-full inline-block border border-black/10"
                            style={{ backgroundColor: currentRecommendation.primary.tea.colorSwatch }}
                          />
                          {currentRecommendation.primary.tea.colorName}
                        </span>
                      </div>
                    </div>

                    {/* Product Image & Badges */}
                    <div className="relative h-48 rounded-2xl overflow-hidden bg-[#F8F6F0] mb-5 border border-[#EFECE4]">
                      <span className={`absolute top-3 left-3 px-3 py-1 ${currentRecommendation.primary.tea.badgeColor} backdrop-blur-sm text-[11px] font-bold rounded-full z-10 shadow-sm`}>
                        {currentRecommendation.primary.tea.badge}
                      </span>
                      <img
                        src={currentRecommendation.primary.tea.image}
                        alt={currentRecommendation.primary.tea.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Sommelier Reason */}
                    <div className="p-3.5 bg-[#F8F6F0] rounded-2xl border border-[#EFECE4] mb-4 text-xs">
                      <div className="font-semibold text-[#1B362A] flex items-center gap-1.5 mb-1">
                        <Sparkles className="w-3.5 h-3.5 text-[#C3A370]" />
                        오설록 티 소믈리에의 맞춤 큐레이션 노트
                      </div>
                      <p className="text-[#637069] leading-relaxed">
                        {currentRecommendation.primary.tea.id === 'illohyang' && '이른 봄의 순수한 첫물차 감칠맛과 맑은 목넘김을 원하시는 고객님의 취향에 가장 고귀한 일로향을 추천합니다.'}
                        {currentRecommendation.primary.tea.id === 'ujeon' && '곡우 이전 여린 차순의 섬세한 단맛과 티 옥빛 수색의 맑고 결백한 아름다움이 마음에 평온을 줍니다.'}
                        {currentRecommendation.primary.tea.id === 'tangerine' && '제주 영귤의 산뜻한 과즙과 삼나무 숙성 발효차의 깊은 풍미가 오후의 나른함을 싱그럽게 깨워줄 최적의 선택입니다.'}
                        {currentRecommendation.primary.tea.id === 'wedding' && '달콤한 마스카포네 치즈향과 은은한 장미 꽃잎이 어우러져 기분 좋은 디저트 타임과 설레는 순간을 완벽히 채워줍니다.'}
                        {currentRecommendation.primary.tea.id === 'sejak' && '곡우 무렵 어린 찻잎을 정성스레 덖어낸 정통 녹차로, 부드러운 감칠맛과 청정한 다원의 기운을 고스란히 전합니다.'}
                        {currentRecommendation.primary.tea.id === 'moonlight' && '제주 밤하늘을 수놓은 달빛처럼 시원하고 달콤한 꿀배향이 하루의 피로를 부드럽게 감싸 안아줍니다.'}
                        {currentRecommendation.primary.tea.id === 'okro' && '차광 재배로 완성한 특유의 짙은 우마미와 풍부한 아미노산 단맛이 깊은 감동을 선사합니다.'}
                        {currentRecommendation.primary.tea.id === 'matcha' && '100% 유기농 어린 잎을 곱게 갈아낸 말차로, 풍부한 크리미 거품과 찻잎 전체의 영양을 듬뿍 만끽할 수 있습니다.'}
                        {currentRecommendation.primary.tea.id === 'masters' && '말차와 오리지널 밀크티, 영귤 블렌드까지 오설록의 시그니처 정수를 한 번에 만끽할 수 있는 품격 있는 구성입니다.'}
                        {currentRecommendation.primary.tea.id === 'camellia' && '붉은 동백꽃잎과 달콤한 열대과일의 매혹적인 향이 일상에 제주 원시림 곶자왈의 신비를 선물합니다.'}
                        {currentRecommendation.primary.tea.id === 'samdayeon-original' && '제주 삼나무통 100일 발효로 떫은맛 없이 구수하고 깊은 숲의 피톤치드를 전합니다.'}
                      </p>
                    </div>

                    {/* Music Pairing Recommendation Chip */}
                    <div className="p-3 bg-[#1B362A]/5 border border-[#1B362A]/15 rounded-2xl mb-4 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 overflow-hidden">
                        <div className="w-7 h-7 rounded-full bg-[#1B362A] text-[#C3A370] flex items-center justify-center flex-shrink-0">
                          <Music className="w-3.5 h-3.5" />
                        </div>
                        <div className="truncate">
                          <span className="text-[10px] text-[#C3A370] font-mono font-bold block uppercase">Recommended Playlist</span>
                          <span className="font-medium text-[#0F231B] truncate block">
                            {currentRecommendation.primary.tea.encyclopedia.musicPairing.title}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => playMusicPairingAmbience(currentRecommendation.primary.tea.encyclopedia.musicPairing.chimeFreq)}
                        className="p-1.5 rounded-full hover:bg-white text-[#1B362A] transition flex-shrink-0"
                        title="선율 앰비언스 체험"
                      >
                        <Headphones className="w-4 h-4 text-[#C3A370]" />
                      </button>
                    </div>

                    {/* Taste Radar Bars */}
                    <div className="grid grid-cols-2 sm:grid-cols-1 gap-x-3 gap-y-2.5 sm:gap-2 mb-5 sm:mb-6 text-[11px] sm:text-xs">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 text-[#637069]">
                        <span>감칠맛 &amp; 풀내음</span>
                        <div className="w-full sm:w-32 bg-[#EFECE4] rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-[#1B362A] h-full rounded-full transition-all duration-500"
                            style={{ width: `${currentRecommendation.primary.tea.tasteProfile.umami}%` }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 text-[#637069]">
                        <span>단맛 &amp; 여운</span>
                        <div className="w-full sm:w-32 bg-[#EFECE4] rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-[#C3A370] h-full rounded-full transition-all duration-500"
                            style={{ width: `${currentRecommendation.primary.tea.tasteProfile.sweetness}%` }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 text-[#637069]">
                        <span>상큼함 (시트러스)</span>
                        <div className="w-full sm:w-32 bg-[#EFECE4] rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-amber-600 h-full rounded-full transition-all duration-500"
                            style={{ width: `${currentRecommendation.primary.tea.tasteProfile.citrus}%` }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 text-[#637069]">
                        <span>꽃향기 &amp; 아로마</span>
                        <div className="w-full sm:w-32 bg-[#EFECE4] rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-rose-600 h-full rounded-full transition-all duration-500"
                            style={{ width: `${currentRecommendation.primary.tea.tasteProfile.floral}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2">
                      <button
                        onClick={() => setActiveEncyclopediaProduct(currentRecommendation.primary.tea)}
                        className="w-full py-3 bg-[#1B362A] text-white hover:bg-[#0F231B] text-xs font-medium rounded-full transition flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-[#C3A370]" />
                        이 차의 티 도감 &amp; 추천 음악 상세 보기
                      </button>
                      <button
                        onClick={() => {
                          handleSelectTimerTea(currentRecommendation.primary.tea);
                          navigateTo('routine');
                        }}
                        className="w-full py-2.5 bg-[#F8F6F0] text-[#1B362A] border border-[#1B362A] hover:bg-[#EFECE4] text-xs font-medium rounded-full transition flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Clock className="w-3.5 h-3.5 text-[#C3A370]" />
                        골든 브루잉 타이머 맞추기 ({currentRecommendation.primary.tea.temp}, {currentRecommendation.primary.tea.timeSec}초)
                      </button>
                    </div>
                  </div>

                  {/* Secondary Match (Alternative) */}
                  <div className="bg-white rounded-2xl p-4 border border-[#EFECE4] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl overflow-hidden bg-[#F8F6F0] flex-shrink-0 border border-[#EFECE4]">
                        <img
                          src={currentRecommendation.secondary.tea.image}
                          alt={currentRecommendation.secondary.tea.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] text-[#637069]">함께 어울리는 또 다른 선택 (매칭 {currentRecommendation.secondary.score}%)</span>
                        <h5 className="text-xs font-serif-kr font-bold text-[#0F231B]">
                          {currentRecommendation.secondary.tea.name}
                        </h5>
                      </div>
                    </div>
                    <button
                      onClick={() => setActiveEncyclopediaProduct(currentRecommendation.secondary.tea)}
                      className="text-xs text-[#1B362A] hover:text-[#0F231B] font-semibold flex items-center gap-1 px-3 py-1.5 rounded-full border border-[#EFECE4] hover:bg-[#F8F6F0] cursor-pointer"
                    >
                      도감 보기 <ArrowRight className="w-3 h-3 text-[#C3A370]" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      )}

      {/* ==============================================
           5. '티 도감 (TEA ENCYCLOPEDIA)' SECTION
           ============================================== */}
      {activeView === 'encyclopedia' && (
      <section id="encyclopedia" className="pt-24 sm:pt-32 pb-14 sm:pb-24 px-4 sm:px-6 bg-[#F3F0E8] border-b border-[#EFECE4] animate-in fade-in duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="mb-5 sm:mb-8 flex items-center justify-between">
            <button
              type="button"
              onClick={() => navigateTo('home')}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#637069] hover:text-[#1B362A] px-3.5 py-2 rounded-full bg-white border border-[#EFECE4] hover:border-[#1B362A]/40 transition cursor-pointer shadow-xs"
            >
              <ArrowRight className="w-3.5 h-3.5 rotate-180 text-[#C3A370]" /> 홈으로 돌아가기
            </button>
            <span className="text-[11px] font-mono text-[#637069] hidden sm:inline">OSULLOC ARCHIVE · TEA ENCYCLOPEDIA</span>
          </div>
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
            <span className="text-xs tracking-[0.25em] text-[#C3A370] font-semibold uppercase flex items-center justify-center gap-1.5 font-mono">
              <BookOpen className="w-4 h-4 text-[#C3A370]" />
              OSULLOC TEA ENCYCLOPEDIA &amp; MUSIC ARCHIVE
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif-kr text-[#0F231B] mt-2 mb-3 sm:mb-4 font-normal">
              한국의 차 문화를 집대성한 <span className="font-semibold text-[#1B362A]">오설록 티 도감(茶 圖鑑)</span>
            </h2>
            <div className="w-12 h-0.5 bg-[#C3A370] mx-auto mb-3 sm:mb-4" />
            <p className="text-[#637069] text-xs sm:text-sm leading-relaxed">
              제주 직영 다원의 채엽 시기부터 발효 스펙트럼, 덖음과 증제의 전통 제다법, 섬세한 테이스팅 노트, 그리고 <strong>각 차의 향미를 극대화하는 맞춤 음악(플레이리스트)</strong>까지 오설록 전 제품의 지식을 망라했습니다.
            </p>
          </div>

          {/* Interactive Fermentation Spectrum Banner */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-[#EFECE4] shadow-sm mb-6 sm:mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4">
              <div>
                <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[#C3A370] tracking-wider uppercase">Fermentation Spectrum</span>
                <h4 className="text-sm font-serif-kr font-bold text-[#0F231B]">차의 본질을 가르는 발효도 스펙트럼</h4>
              </div>
              <span className="text-[11px] sm:text-xs text-[#637069] mt-0.5 sm:mt-0">발효 단계 클릭 시 해당 분류만 필터링됩니다.</span>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <button
                onClick={() => setEncyclopediaFermentationFilter(encyclopediaFermentationFilter === 'unfermented' ? 'all' : 'unfermented')}
                className={`p-2.5 sm:p-4 rounded-xl sm:rounded-2xl text-left border transition cursor-pointer flex flex-col justify-between ${
                  encyclopediaFermentationFilter === 'unfermented'
                    ? 'border-[#1B362A] bg-[#F8F6F0] ring-2 ring-[#1B362A]'
                    : 'border-[#EFECE4] hover:border-[#446351] bg-[#F8F6F0]/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] sm:text-xs font-bold text-[#1B362A] flex items-center gap-1 sm:gap-1.5 leading-tight">
                      <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#A2C76A] inline-block flex-shrink-0" />
                      <span>불발효차<span className="hidden sm:inline"> (0%)</span></span>
                    </span>
                    <span className="text-[10px] font-mono text-[#637069] hidden sm:inline">우전 · 일로향 · 세작 · 옥로</span>
                  </div>
                  <p className="text-[11px] text-[#637069] leading-relaxed hidden sm:block">
                    찻잎을 따자마자 고온 증제 또는 덖음으로 산화효소를 억제해 녹색 엽록소와 맑은 감칠맛을 간직합니다.
                  </p>
                </div>
                <div className="mt-2 sm:mt-3 pt-1.5 sm:pt-2 border-t border-[#EFECE4] flex justify-between text-[9px] sm:text-[10px] text-[#446351] font-medium">
                  <span className="hidden sm:inline">싱그러움 &amp; 클래식 피아노</span>
                  <span className="sm:hidden">0% · 녹차</span>
                  <span>{encyclopediaFermentationFilter === 'unfermented' ? '해제 ✕' : '선택 →'}</span>
                </div>
              </button>

              <button
                onClick={() => setEncyclopediaFermentationFilter(encyclopediaFermentationFilter === 'semi' ? 'all' : 'semi')}
                className={`p-2.5 sm:p-4 rounded-xl sm:rounded-2xl text-left border transition cursor-pointer flex flex-col justify-between ${
                  encyclopediaFermentationFilter === 'semi'
                    ? 'border-[#1B362A] bg-[#F8F6F0] ring-2 ring-[#1B362A]'
                    : 'border-[#EFECE4] hover:border-[#446351] bg-[#F8F6F0]/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] sm:text-xs font-bold text-[#D97373] flex items-center gap-1 sm:gap-1.5 leading-tight">
                      <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#E5CD82] inline-block flex-shrink-0" />
                      <span>부분발효<span className="hidden sm:inline"> (20~60%)</span></span>
                    </span>
                    <span className="text-[10px] font-mono text-[#637069] hidden sm:inline">웨딩그린티 · 동백이피는곶자왈</span>
                  </div>
                  <p className="text-[11px] text-[#637069] leading-relaxed hidden sm:block">
                    적절한 산화 발효를 거쳐 꽃향기와 과일 아로마를 발현시킨 후 제다하여 화사한 부케를 자랑합니다.
                  </p>
                </div>
                <div className="mt-2 sm:mt-3 pt-1.5 sm:pt-2 border-t border-[#EFECE4] flex justify-between text-[9px] sm:text-[10px] text-[#446351] font-medium">
                  <span className="hidden sm:inline">화사한 플로럴 &amp; 프렌치 왈츠</span>
                  <span className="sm:hidden">20~60%</span>
                  <span>{encyclopediaFermentationFilter === 'semi' ? '해제 ✕' : '선택 →'}</span>
                </div>
              </button>

              <button
                onClick={() => setEncyclopediaFermentationFilter(encyclopediaFermentationFilter === 'post' ? 'all' : 'post')}
                className={`p-2.5 sm:p-4 rounded-xl sm:rounded-2xl text-left border transition cursor-pointer flex flex-col justify-between ${
                  encyclopediaFermentationFilter === 'post'
                    ? 'border-[#1B362A] bg-[#F8F6F0] ring-2 ring-[#1B362A]'
                    : 'border-[#EFECE4] hover:border-[#446351] bg-[#F8F6F0]/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] sm:text-xs font-bold text-amber-800 flex items-center gap-1 sm:gap-1.5 leading-tight">
                      <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#E88E38] inline-block flex-shrink-0" />
                      <span>후발효차<span className="hidden sm:inline"> (100%)</span></span>
                    </span>
                    <span className="text-[10px] font-mono text-[#637069] hidden sm:inline">삼다연 · 제주영귤 · 달빛걷기</span>
                  </div>
                  <p className="text-[11px] text-[#637069] leading-relaxed hidden sm:block">
                    제주 삼나무통에서 100일 이상 미생물 숙성 발효하여 떫은맛 없이 구수하고 깊은 숲의 향을 품습니다.
                  </p>
                </div>
                <div className="mt-2 sm:mt-3 pt-1.5 sm:pt-2 border-t border-[#EFECE4] flex justify-between text-[9px] sm:text-[10px] text-[#446351] font-medium">
                  <span className="hidden sm:inline">삼나무 숙성 &amp; 보사노바·재즈</span>
                  <span className="sm:hidden">100% 숙성</span>
                  <span>{encyclopediaFermentationFilter === 'post' ? '해제 ✕' : '선택 →'}</span>
                </div>
              </button>
            </div>
          </div>

          {/* Search, Filter & Controls Toolbar */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-[#EFECE4] shadow-sm mb-6 sm:mb-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 sm:gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#637069] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={encyclopediaSearch}
                onChange={(e) => setEncyclopediaSearch(e.target.value)}
                placeholder="차 이름, 다원, 음악(피아노, 재즈, 영귤, 우전) 검색..."
                className="w-full pl-11 pr-4 py-2 sm:py-2.5 rounded-full bg-[#F8F6F0] border border-[#EFECE4] text-xs text-[#212623] placeholder:text-[#637069] focus:outline-none focus:border-[#1B362A]"
              />
              {encyclopediaSearch && (
                <button
                  onClick={() => setEncyclopediaSearch('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#637069] hover:text-[#0F231B]"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="grid grid-cols-3 sm:flex sm:flex-wrap gap-1.5 items-center">
              {[
                { id: 'all', label: '전체' },
                { id: 'pure', label: '순수 녹차' },
                { id: 'fermented', label: '후발효차' },
                { id: 'blend', label: '블렌디드' },
                { id: 'matcha', label: '말차/가루차' },
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setEncyclopediaCategory(c.id)}
                  className={`px-2 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-medium transition cursor-pointer truncate text-center ${
                    encyclopediaCategory === c.id
                      ? 'bg-[#1B362A] text-white shadow-xs'
                      : 'bg-[#F8F6F0] text-[#637069] hover:text-[#0F231B] border border-[#EFECE4]'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Sort & View Mode Switch */}
            <div className="flex items-center gap-3 self-end lg:self-auto">
              <div className="flex items-center gap-1.5 text-xs text-[#637069]">
                <span>정렬:</span>
                <select
                  value={encyclopediaSort}
                  onChange={(e) => setEncyclopediaSort(e.target.value as 'featured' | 'fermentation' | 'umami' | 'name')}
                  className="bg-[#F8F6F0] border border-[#EFECE4] rounded-lg px-2.5 py-1.5 text-xs text-[#0F231B] focus:outline-none cursor-pointer"
                >
                  <option value="featured">오설록 명차순</option>
                  <option value="fermentation">발효도순 (0%→100%)</option>
                  <option value="umami">감칠맛(우마미) 강도순</option>
                  <option value="name">가나다순</option>
                </select>
              </div>

              {/* View Toggle */}
              <div className="flex bg-[#F8F6F0] p-1 rounded-xl border border-[#EFECE4]">
                <button
                  onClick={() => setEncyclopediaViewMode('grid')}
                  className={`p-1.5 rounded-lg transition cursor-pointer ${
                    encyclopediaViewMode === 'grid' ? 'bg-white shadow-xs text-[#1B362A]' : 'text-[#637069]'
                  }`}
                  title="그리드 도감 카드 뷰"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setEncyclopediaViewMode('table')}
                  className={`p-1.5 rounded-lg transition cursor-pointer ${
                    encyclopediaViewMode === 'table' ? 'bg-white shadow-xs text-[#1B362A]' : 'text-[#637069]'
                  }`}
                  title="매트릭스 테이블 뷰"
                >
                  <ListFilter className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Active Filter Summary Indicator */}
          {(encyclopediaSearch || encyclopediaCategory !== 'all' || encyclopediaFermentationFilter !== 'all') && (
            <div className="flex items-center justify-between mb-6 px-2 text-xs text-[#637069]">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-medium text-[#1B362A]">적용된 도감 조건:</span>
                {encyclopediaSearch && <span className="bg-white border px-2 py-0.5 rounded-md">검색: "{encyclopediaSearch}"</span>}
                {encyclopediaCategory !== 'all' && <span className="bg-white border px-2 py-0.5 rounded-md">카테고리: {encyclopediaCategory}</span>}
                {encyclopediaFermentationFilter !== 'all' && (
                  <span className="bg-white border px-2 py-0.5 rounded-md">
                    발효도: {encyclopediaFermentationFilter === 'unfermented' ? '불발효 0%' : encyclopediaFermentationFilter === 'semi' ? '부분발효' : '후발효 100%'}
                  </span>
                )}
                <span>총 <strong className="text-[#1B362A]">{filteredEncyclopediaTeas.length}종</strong> 수록</span>
              </div>
              <button
                onClick={() => {
                  setEncyclopediaSearch('');
                  setEncyclopediaCategory('all');
                  setEncyclopediaFermentationFilter('all');
                  setEncyclopediaSort('featured');
                }}
                className="text-[#1B362A] underline hover:text-[#0F231B] cursor-pointer"
              >
                조건 초기화
              </button>
            </div>
          )}

          {/* ========================================================
               VIEW MODE 1: GRID VIEW (RICH ENCYCLOPEDIA CARDS)
               ======================================================== */}
          {encyclopediaViewMode === 'grid' && (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-7">
              {filteredEncyclopediaTeas.map((tea) => (
                <div
                  key={tea.id}
                  className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-6 border border-[#EFECE4] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Visual Card Header */}
                    <div className="relative h-28 sm:h-56 rounded-xl sm:rounded-2xl overflow-hidden bg-[#F8F6F0] mb-2.5 sm:mb-5 border border-[#EFECE4]/80">
                      <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 flex flex-col gap-1">
                        <span className={`px-1.5 sm:px-2.5 py-0.5 sm:py-1 ${tea.badgeColor} backdrop-blur-sm text-[9px] sm:text-[11px] font-bold rounded-full shadow-sm`}>
                          {tea.badge}
                        </span>
                        <span className="hidden sm:inline-block px-2.5 py-0.5 bg-black/60 text-white backdrop-blur-sm text-[10px] rounded-full">
                          {tea.encyclopedia.fermentationType}
                        </span>
                      </div>

                      <div className="hidden sm:block absolute top-3 right-3 z-10">
                        <span className="px-2.5 py-1 bg-white/90 text-[#0F231B] font-mono text-[10px] font-bold rounded-full shadow-xs flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: tea.colorSwatch }} />
                          {tea.colorName}
                        </span>
                      </div>

                      <img
                        src={tea.image}
                        alt={tea.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    {/* Title & Origin Tag */}
                    <div className="flex items-center justify-between mb-0.5 sm:mb-1 gap-1">
                      <span className="text-[9px] sm:text-[11px] font-mono text-[#C3A370] font-bold tracking-wider truncate">{tea.enName}</span>
                      <span className="hidden sm:flex text-[10px] text-[#446351] font-medium bg-[#EFECE4]/60 px-2 py-0.5 rounded items-center gap-1 flex-shrink-0">
                        <MapPin className="w-2.5 h-2.5" /> {tea.encyclopedia.garden.split(' ')[1] || '제주'}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-xl font-serif-kr text-[#0F231B] font-bold mb-1 sm:mb-2 truncate">
                      {tea.name}
                    </h3>

                    <p className="text-[11px] sm:text-xs text-[#637069] leading-relaxed mb-2.5 sm:mb-4 line-clamp-2">
                      {tea.desc}
                    </p>

                    {/* Music Pairing Badge (New) */}
                    <div className="flex items-center gap-1.5 sm:gap-2 p-2 sm:p-2.5 bg-[#1B362A]/5 border border-[#1B362A]/10 rounded-xl mb-2.5 sm:mb-4 text-xs text-[#1B362A]">
                      <Headphones className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C3A370] flex-shrink-0" />
                      <div className="truncate flex-1">
                        <span className="hidden sm:block text-[10px] text-[#C3A370] font-mono font-bold uppercase leading-tight">Recommended BGM</span>
                        <span className="font-medium text-[#0F231B] truncate block text-[10px] sm:text-[11px]">
                          {tea.encyclopedia.musicPairing.title}
                        </span>
                      </div>
                    </div>

                    {/* Botanical & Production Matrix Pill Badges */}
                    <div className="space-y-1 sm:space-y-1.5 p-2 sm:p-3.5 bg-[#F8F6F0] rounded-xl sm:rounded-2xl text-[10px] sm:text-[11px] mb-2.5 sm:mb-5 border border-[#EFECE4]">
                      <div className="flex items-start justify-between gap-1">
                        <span className="text-[#637069] flex items-center gap-1 flex-shrink-0">
                          <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#C3A370]" /> 채엽:
                        </span>
                        <span className="font-medium text-[#0F231B] text-right truncate">{tea.encyclopedia.pluckingPeriod}</span>
                      </div>
                      <div className="hidden sm:flex items-start justify-between gap-1">
                        <span className="text-[#637069] flex items-center gap-1">
                          <Layers className="w-3 h-3 text-[#1B362A]" /> 제다 공법:
                        </span>
                        <span className="font-medium text-[#1B362A] text-right">{tea.encyclopedia.processingMethod}</span>
                      </div>
                      <div className="hidden sm:flex items-start justify-between gap-1">
                        <span className="text-[#637069] flex items-center gap-1">
                          <Utensils className="w-3 h-3 text-amber-700" /> 다식 페어링:
                        </span>
                        <span className="font-medium text-[#0F231B] text-right">{tea.encyclopedia.pairing}</span>
                      </div>
                    </div>

                    {/* Tasting Profile Meter */}
                    <div className="mb-3 sm:mb-4">
                      <div className="flex justify-between items-center text-[10px] sm:text-[11px] mb-1">
                        <span className="text-[#637069]">감칠맛(우마미)</span>
                        <span className="font-mono font-bold text-[#1B362A]">{tea.tasteProfile.umami}%</span>
                      </div>
                      <div className="w-full bg-[#EFECE4] rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-[#1B362A] h-full rounded-full"
                          style={{ width: `${tea.tasteProfile.umami}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-2.5 sm:pt-4 border-t border-[#EFECE4] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="text-[10px] sm:text-xs text-[#637069] flex items-center gap-1 truncate">
                      <Thermometer className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C3A370] flex-shrink-0" />
                      {tea.timeDisplay}
                    </span>

                    <div className="flex items-center justify-between sm:justify-end gap-1.5">
                      <button
                        onClick={() => {
                          handleSelectTimerTea(tea);
                          navigateTo('routine');
                        }}
                        className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-1 rounded-full border border-[#EFECE4] text-[#446351] hover:text-[#1B362A] hover:border-[#1B362A] transition cursor-pointer"
                        title="이 차로 타이머 맞추기"
                      >
                        타이머
                      </button>
                      <button
                        onClick={() => setActiveEncyclopediaProduct(tea)}
                        className="text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 bg-[#1B362A] text-white hover:bg-[#0F231B] rounded-full transition flex items-center gap-0.5 sm:gap-1 cursor-pointer"
                      >
                        상세 <ChevronRight className="w-3 h-3 text-[#C3A370]" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ========================================================
               VIEW MODE 2: TABLE MATRIX VIEW (DEEP ENCYCLOPEDIA)
               ======================================================== */}
          {encyclopediaViewMode === 'table' && (
            <div className="bg-white rounded-3xl border border-[#EFECE4] shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#F8F6F0] border-b border-[#EFECE4] text-[#637069] font-medium">
                    <tr>
                      <th className="py-4 px-5">차 명칭 / 수색</th>
                      <th className="py-4 px-4">분류 / 발효도</th>
                      <th className="py-4 px-4">채엽 다원 &amp; 시기</th>
                      <th className="py-4 px-4">제다 기법</th>
                      <th className="py-4 px-4">추천 음악 (BGM 페어링)</th>
                      <th className="py-4 px-4">브루잉 가이드</th>
                      <th className="py-4 px-4">다식 페어링</th>
                      <th className="py-4 px-5 text-right">상세 탐색</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EFECE4]/70 text-[#212623]">
                    {filteredEncyclopediaTeas.map((tea) => (
                      <tr key={tea.id} className="hover:bg-[#F8F6F0]/60 transition">
                        <td className="py-4 px-5">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl overflow-hidden bg-[#F8F6F0] flex-shrink-0 border border-[#EFECE4]">
                              <img src={tea.image} alt={tea.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <div className="font-serif-kr font-bold text-sm text-[#0F231B]">{tea.name}</div>
                              <span className="text-[10px] text-[#637069] flex items-center gap-1 mt-0.5">
                                <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: tea.colorSwatch }} />
                                {tea.colorName}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className="font-semibold text-[#1B362A] block">{tea.categoryLabel}</span>
                          <span className="text-[10px] text-[#637069] font-mono">{tea.encyclopedia.fermentationType}</span>
                        </td>
                        <td className="py-4 px-4">
                          <span className="font-medium text-[#0F231B] block">{tea.encyclopedia.garden}</span>
                          <span className="text-[10px] text-[#637069]">{tea.encyclopedia.pluckingPeriod}</span>
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-[11px] text-[#212623] leading-relaxed block max-w-xs">
                            {tea.encyclopedia.processingMethod}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="max-w-xs space-y-0.5">
                            <span className="text-[11px] text-[#1B362A] font-semibold flex items-center gap-1">
                              <Music className="w-3 h-3 text-[#C3A370]" />
                              {tea.encyclopedia.musicPairing.title}
                            </span>
                            <span className="text-[10px] text-[#637069] block">
                              {tea.encyclopedia.musicPairing.artistTrack}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className="font-mono text-[#C3A370] font-bold block">{tea.timeDisplay}</span>
                          <span className="text-[10px] text-[#637069]">{tea.temp} 추출</span>
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-[11px] text-[#637069] max-w-xs block">{tea.encyclopedia.pairing}</span>
                        </td>
                        <td className="py-4 px-5 text-right">
                          <button
                            onClick={() => setActiveEncyclopediaProduct(tea)}
                            className="px-3 py-1.5 bg-[#1B362A] text-white hover:bg-[#0F231B] rounded-full text-xs font-medium transition cursor-pointer inline-flex items-center gap-1"
                          >
                            상세 <ChevronRight className="w-3 h-3 text-[#C3A370]" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {filteredEncyclopediaTeas.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-[#EFECE4]">
              <Info className="w-8 h-8 text-[#637069] mx-auto mb-2" />
              <h4 className="text-sm font-bold text-[#0F231B]">검색 조건에 맞는 차가 없습니다.</h4>
              <p className="text-xs text-[#637069] mt-1 mb-4">다른 키워드나 필터 조건을 변경해 보세요.</p>
              <button
                onClick={() => {
                  setEncyclopediaSearch('');
                  setEncyclopediaCategory('all');
                  setEncyclopediaFermentationFilter('all');
                }}
                className="px-4 py-2 bg-[#1B362A] text-white text-xs rounded-full cursor-pointer"
              >
                도감 필터 초기화
              </button>
            </div>
          )}
        </div>
      </section>
      )}

      {/* ==============================================
           6. CURATED TEA COLLECTION
           ============================================== */}
      {activeView === 'collection' && (
      <section id="collection" className="pt-24 sm:pt-32 pb-14 sm:pb-24 px-4 sm:px-6 bg-[#EFECE4]/35 animate-in fade-in duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="mb-5 sm:mb-8 flex items-center justify-between">
            <button
              type="button"
              onClick={() => navigateTo('home')}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#637069] hover:text-[#1B362A] px-3.5 py-2 rounded-full bg-white border border-[#EFECE4] hover:border-[#1B362A]/40 transition cursor-pointer shadow-xs"
            >
              <ArrowRight className="w-3.5 h-3.5 rotate-180 text-[#C3A370]" /> 홈으로 돌아가기
            </button>
            <span className="text-[11px] font-mono text-[#637069] hidden sm:inline">OSULLOC SIGNATURE · COLLECTION</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-12">
            <div>
              <span className="text-xs tracking-[0.25em] text-[#446351] font-semibold uppercase">Curated Tea Collection</span>
              <h2 className="text-2xl sm:text-4xl font-serif-kr text-[#0F231B] mt-2 font-normal">
                오설록 <span className="font-semibold text-[#1B362A]">시그니처 컬렉션</span>
              </h2>
            </div>
            <p className="text-[#637069] text-xs sm:text-sm max-w-md mt-2 md:mt-0">
              가장 먼저 돋아난 첫물차의 기품부터 감미로운 꽃향기와 제주 영귤의 싱그러움까지, 일상에 쉼을 더하는 대표 라인업입니다.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-2.5 mb-6 sm:mb-10 border-b border-[#EFECE4] pb-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition cursor-pointer text-center ${
                selectedCategory === 'all'
                  ? 'bg-[#1B362A] text-white shadow-sm'
                  : 'bg-white text-[#637069] border border-[#EFECE4] hover:text-[#212623]'
              }`}
            >
              전체 보기
            </button>
            <button
              onClick={() => setSelectedCategory('pure')}
              className={`px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition cursor-pointer text-center ${
                selectedCategory === 'pure'
                  ? 'bg-[#1B362A] text-white shadow-sm'
                  : 'bg-white text-[#637069] border border-[#EFECE4] hover:text-[#212623]'
              }`}
            >
              순수차 (Pure Tea)
            </button>
            <button
              onClick={() => setSelectedCategory('blend')}
              className={`px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition cursor-pointer text-center ${
                selectedCategory === 'blend'
                  ? 'bg-[#1B362A] text-white shadow-sm'
                  : 'bg-white text-[#637069] border border-[#EFECE4] hover:text-[#212623]'
              }`}
            >
              블렌디드 &amp; 발효차
            </button>
            <button
              onClick={() => setSelectedCategory('gift')}
              className={`px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition cursor-pointer text-center ${
                selectedCategory === 'gift'
                  ? 'bg-[#1B362A] text-white shadow-sm'
                  : 'bg-white text-[#637069] border border-[#EFECE4] hover:text-[#212623]'
              }`}
            >
              선물 세트 (Gift)
            </button>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8">
            {filteredCatalog.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-6 border border-[#EFECE4] shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-28 sm:h-64 rounded-xl sm:rounded-2xl overflow-hidden bg-[#F8F6F0] mb-2.5 sm:mb-6 border border-[#EFECE4]/60">
                    <span className={`absolute top-2 left-2 sm:top-3 sm:left-3 px-2 sm:px-3 py-0.5 sm:py-1 ${product.badgeColor} backdrop-blur-sm text-[9px] sm:text-[11px] font-bold rounded-full z-10 shadow-sm`}>
                      {product.badge}
                    </span>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-xl transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-1 sm:mb-2 gap-1">
                    <span className="text-[9px] sm:text-xs font-mono text-[#C3A370] font-bold tracking-wider truncate">{product.enName}</span>
                    <span className="text-[10px] sm:text-[11px] text-[#637069] flex items-center gap-1 flex-shrink-0">
                      <span
                        className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full inline-block border border-black/10"
                        style={{ backgroundColor: product.colorSwatch }}
                      />
                      <span className="hidden sm:inline">{product.colorName}</span>
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-xl font-serif-kr text-[#0F231B] font-semibold mb-1 sm:mb-2 truncate">{product.name}</h3>
                  <p className="text-[11px] sm:text-xs text-[#637069] leading-relaxed mb-2.5 sm:mb-4 line-clamp-2">{product.desc}</p>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3 sm:mb-6">
                    {product.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-[9px] sm:text-[11px] px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded bg-[#EFECE4]/60 text-[#212623]">
                        {tag}
                      </span>
                    ))}
                    {product.tags[2] && (
                      <span className="hidden sm:inline-block text-[11px] px-2.5 py-1 rounded bg-[#EFECE4]/60 text-[#212623]">
                        {product.tags[2]}
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-2.5 sm:pt-4 border-t border-[#EFECE4]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="text-[10px] sm:text-xs text-[#637069] flex items-center gap-1 truncate">
                    <Thermometer className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C3A370] flex-shrink-0" />
                    {product.timeDisplay}
                  </span>
                  <div className="flex items-center justify-between sm:justify-end gap-1.5">
                    <button
                      onClick={() => {
                        handleSelectTimerTea(product);
                        navigateTo('routine');
                      }}
                      className="text-[10px] sm:text-xs text-[#446351] hover:text-[#1B362A] px-2 sm:px-2.5 py-1 rounded-full border border-[#EFECE4] hover:border-[#1B362A] transition cursor-pointer"
                      title="이 차로 타이머 설정하기"
                    >
                      타이머
                    </button>
                    <button
                      onClick={() => setActiveModalProduct(product)}
                      className="text-[10px] sm:text-xs font-semibold text-[#1B362A] hover:text-[#0F231B] flex items-center gap-0.5 sm:gap-1 cursor-pointer"
                    >
                      상세 <ChevronRight className="w-3 h-3 text-[#C3A370]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* ==============================================
           7. INTERACTIVE BREWING ROUTINE & TIMER
           ============================================== */}
      {activeView === 'routine' && (
      <section id="routine" className="pt-24 sm:pt-32 pb-14 sm:pb-24 px-4 sm:px-6 bg-[#F8F6F0] animate-in fade-in duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="mb-5 sm:mb-8 flex items-center justify-between">
            <button
              type="button"
              onClick={() => navigateTo('home')}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#637069] hover:text-[#1B362A] px-3.5 py-2 rounded-full bg-white border border-[#EFECE4] hover:border-[#1B362A]/40 transition cursor-pointer shadow-xs"
            >
              <ArrowRight className="w-3.5 h-3.5 rotate-180 text-[#C3A370]" /> 홈으로 돌아가기
            </button>
            <span className="text-[11px] font-mono text-[#637069] hidden sm:inline">OSULLOC RITUAL · BREWING TIMER</span>
          </div>
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
            <span className="text-xs tracking-[0.25em] text-[#446351] font-semibold uppercase">Daily Tea Routine</span>
            <h2 className="text-2xl sm:text-4xl font-serif-kr text-[#0F231B] mt-2 font-normal">
              오늘 당신을 위한 <span className="font-semibold text-[#1B362A]">골든 브루잉 룰</span>
            </h2>
            <div className="w-12 h-0.5 bg-[#C3A370] mx-auto my-3 sm:my-4" />
            <p className="text-xs sm:text-sm text-[#637069]">
              차 본연의 섬세한 향미를 온전히 이끌어내는 오설록만의 정온·정시 브루잉 가이드입니다.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-12 border border-[#EFECE4] shadow-md mb-8 sm:mb-12">
            <div className="grid grid-cols-3 gap-2 sm:gap-6 text-center mb-5 sm:mb-8">
              <div className="p-2.5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#F8F6F0] border border-[#EFECE4]">
                <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto rounded-full bg-[#1B362A]/10 flex items-center justify-center text-[#1B362A] mb-1.5 sm:mb-2">
                  <Thermometer className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h4 className="text-[10px] sm:text-xs text-[#637069] mb-0.5 sm:mb-1 font-medium">적정 수온</h4>
                <p className="text-xs sm:text-2xl font-bold font-display text-[#0F231B] leading-tight">70~90°C</p>
                <span className="text-[9px] sm:text-[11px] text-[#637069] block mt-0.5 leading-tight">감칠맛 보존</span>
              </div>

              <div className="p-2.5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#F8F6F0] border border-[#EFECE4]">
                <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto rounded-full bg-[#C3A370]/10 flex items-center justify-center text-[#C3A370] mb-1.5 sm:mb-2">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h4 className="text-[10px] sm:text-xs text-[#637069] mb-0.5 sm:mb-1 font-medium">침출 시간</h4>
                <p className="text-xs sm:text-2xl font-bold font-display text-[#0F231B] leading-tight">1분 30초~2분</p>
                <span className="text-[9px] sm:text-[11px] text-[#637069] block mt-0.5 leading-tight">자연스럽게 침출</span>
              </div>

              <div className="p-2.5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#F8F6F0] border border-[#EFECE4]">
                <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto rounded-full bg-[#446351]/10 flex items-center justify-center text-[#446351] mb-1.5 sm:mb-2">
                  <Droplets className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h4 className="text-[10px] sm:text-xs text-[#637069] mb-0.5 sm:mb-1 font-medium">적정 물량</h4>
                <p className="text-xs sm:text-2xl font-bold font-display text-[#0F231B] leading-tight">150ml</p>
                <span className="text-[9px] sm:text-[11px] text-[#637069] block mt-0.5 leading-tight">부드러운 한 잔</span>
              </div>
            </div>

            <p className="text-[11px] sm:text-xs text-center text-[#637069] leading-relaxed">
              한 김 식힌 물에 찻잎을 가만히 내려두고 수색이 맑게 퍼지는 과정을 지켜보세요. 차를 마시는 시간 자체가 마음의 정원이 됩니다.
            </p>
          </div>

          {/* Interactive Tea Steeping Timer Widget */}
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-[#1B362A] to-[#0F231B] text-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Leaf className="w-48 h-48 text-[#C3A370]" />
            </div>

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#C3A370] text-xs font-mono uppercase tracking-wider mb-3 sm:mb-4">
                <Clock className="w-3.5 h-3.5" /> Osulloc Brewing Timer
              </div>

              <h3 className="text-xl sm:text-2xl font-serif-kr font-normal mb-2">실시간 찻물 우리기 타이머</h3>
              <p className="text-xs text-white/70 mb-5 sm:mb-6">
                티를 선택하고 시작 버튼을 누르면 알맞은 침출 시간에 맞춰 은은한 차 벨소리로 알려드립니다.
              </p>

              {/* Tea Selector Chips */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                {TEA_CATALOG.filter(t => t.id !== 'masters').slice(0, 6).map((tea) => (
                  <button
                    key={tea.id}
                    onClick={() => handleSelectTimerTea(tea)}
                    className={`px-2.5 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-medium transition cursor-pointer flex items-center justify-center gap-1.5 truncate ${
                      timerSelectedTea.id === tea.id
                        ? 'bg-[#C3A370] text-[#0F231B] font-semibold shadow-md'
                        : 'bg-white/10 text-white/80 hover:bg-white/20'
                    }`}
                  >
                    <span
                      className="w-2 h-2 rounded-full inline-block flex-shrink-0"
                      style={{ backgroundColor: tea.colorSwatch }}
                    />
                    <span className="truncate">{tea.name.split(' ')[0]} ({tea.temp}, {tea.timeSec}초)</span>
                  </button>
                ))}
              </div>

              {/* Countdown Display & Ripple Circle */}
              <div className="relative w-44 h-44 mx-auto mb-6 flex flex-col items-center justify-center rounded-full border-4 border-[#C3A370]/30 bg-black/20 backdrop-blur-sm">
                {isTimerRunning && (
                  <div className="absolute inset-0 rounded-full border-2 border-[#C3A370] animate-ping opacity-25 pointer-events-none" />
                )}
                <span className="text-4xl font-display font-bold tracking-wider text-white">
                  {formatTimerDisplay(timerSecondsLeft)}
                </span>
                <span className="text-[11px] text-[#C3A370] mt-1 font-mono">
                  {timerSelectedTea.temp} · {timerSelectedTea.colorName}
                </span>
              </div>

              {/* Status Message */}
              <div className="mb-6 h-6 flex items-center justify-center">
                {timerCompleted ? (
                  <span className="text-xs text-[#E8DCC4] flex items-center gap-1.5 font-medium animate-pulse">
                    <Volume2 className="w-4 h-4 text-[#C3A370]" />
                    차의 깊은 향미가 완성되었습니다! 따뜻한 한 잔을 즐겨보세요.
                  </span>
                ) : isTimerRunning ? (
                  <span className="text-xs text-white/80">찻잎이 부드럽게 풀리며 맑은 수색이 퍼져나갑니다...</span>
                ) : (
                  <span className="text-xs text-white/60">찻잎에 따뜻한 물을 붓고 타이머를 시작해보세요.</span>
                )}
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className="px-6 py-3 rounded-full bg-[#C3A370] text-[#0F231B] font-medium text-xs hover:bg-[#E8DCC4] transition flex items-center gap-2 shadow-lg cursor-pointer"
                >
                  {isTimerRunning ? (
                    <>
                      <Pause className="w-4 h-4" /> 일시 정지
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" /> 타이머 시작
                    </>
                  )}
                </button>
                <button
                  onClick={handleResetTimer}
                  className="px-5 py-3 rounded-full bg-white/10 text-white font-medium text-xs hover:bg-white/20 transition flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> 초기화
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* ==============================================
           8. SPACE EXPERIENCE SECTION (첫 화면 노출)
           ============================================== */}
      {activeView === 'home' && (
      <section id="space" className="py-24 px-6 bg-[#1B362A] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs tracking-[0.25em] text-[#C3A370] font-semibold uppercase">Off-line Space</span>
            <h2 className="text-3xl sm:text-4xl font-serif-kr mt-2 font-normal">오설록이 제안하는 차의 공간</h2>
            <div className="w-12 h-0.5 bg-[#C3A370] mx-auto my-4" />
            <p className="text-xs sm:text-sm text-white/70">
              한국의 아름다운 자연과 현대적인 감각이 어우러진 오설록의 시그니처 오프라인 공간을 소개합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0F231B]/60 rounded-3xl p-7 border border-white/10 hover:border-[#C3A370]/50 transition duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#C3A370] mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif-kr font-bold mb-2 text-white">제주 티뮤지엄</h3>
                <p className="text-xs text-white/70 leading-relaxed mb-6">
                  끝없는 서광다원 옆에서 즐기는 한국 최초의 차 박물관이자 다도 체험 공간 티스톤(Tea Stone).
                </p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <span className="text-[11px] text-[#C3A370] block">제주 서귀포시 안덕면 신화역사로 15</span>
              </div>
            </div>

            <div className="bg-[#0F231B]/60 rounded-3xl p-7 border border-white/10 hover:border-[#C3A370]/50 transition duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#C3A370] mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif-kr font-bold mb-2 text-white">티하우스 북촌점</h3>
                <p className="text-xs text-white/70 leading-relaxed mb-6">
                  1970년대 양옥의 고즈넉한 정취와 바설록의 무알코올 티 칵테일 코스를 경험할 수 있는 공간.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <span className="text-[11px] text-[#C3A370] block">서울 종로구 북촌로 45</span>
              </div>
            </div>

            <div className="bg-[#0F231B]/60 rounded-3xl p-7 border border-white/10 hover:border-[#C3A370]/50 transition duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#C3A370] mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif-kr font-bold mb-2 text-white">티하우스 한남점</h3>
                <p className="text-xs text-white/70 leading-relaxed mb-6">
                  페이스갤러리와의 협업으로 미술 작품과 정갈한 차 디저트가 공존하는 도심 속 휴식처.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <span className="text-[11px] text-[#C3A370] block">서울 용산구 이태원로 267 2층</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}
      </main>

      {/* ==============================================
           9. FOOTER
           ============================================== */}
      <footer className="bg-[#0F231B] text-white/60 text-xs py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-xl tracking-[0.25em] font-serif-kr font-bold text-white block mb-2">
              OSULLOC
            </span>
            <p className="text-[11px]">
              제주의 자연을 오롯이 담아낸 한 잔의 쉼, 오설록 브랜드 쇼케이스 &amp; 티 도감
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 text-[11px]">
            <a
              href="https://www.osulloc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition flex items-center gap-1"
            >
              <span>공식 온라인몰</span>
              <ExternalLink className="w-3 h-3 text-[#C3A370]" />
            </a>
            <span className="hidden sm:inline text-white/30">|</span>
            <p>© OSULLOC All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* ==============================================
           PRODUCT DETAIL MODAL (QUICK VIEW)
           ============================================== */}
      {activeModalProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveModalProduct(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalProduct(null)}
              aria-label="닫기"
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#EFECE4] text-[#212623] flex items-center justify-center hover:bg-[#EFECE4]/80 transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-start mt-2">
              <div className="w-full sm:w-1/2 h-64 rounded-2xl overflow-hidden bg-[#F8F6F0] flex-shrink-0">
                <img
                  src={activeModalProduct.image}
                  alt={activeModalProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full sm:w-1/2 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-mono tracking-wider text-[#C3A370] uppercase font-bold">
                      {activeModalProduct.categoryLabel}
                    </span>
                    <span
                      className="w-2.5 h-2.5 rounded-full inline-block border border-black/10"
                      style={{ backgroundColor: activeModalProduct.colorSwatch }}
                    />
                  </div>
                  <h3 className="text-2xl font-serif-kr font-bold text-[#0F231B] mb-2">
                    {activeModalProduct.name}
                  </h3>
                  <p className="text-xs text-[#637069] leading-relaxed mb-4">
                    {activeModalProduct.modalDesc}
                  </p>

                  <div className="space-y-2 p-3.5 bg-[#F8F6F0] rounded-xl text-xs mb-4 border border-[#EFECE4]">
                    <div className="flex justify-between">
                      <span className="text-[#637069]">채엽/원산지:</span>
                      <span className="font-medium text-[#0F231B]">{activeModalProduct.origin}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#637069]">테이스팅 노트:</span>
                      <span className="font-medium text-[#1B362A]">{activeModalProduct.notes}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#637069]">권장 브루잉:</span>
                      <span className="font-medium text-[#C3A370]">{activeModalProduct.timeDisplay}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => {
                      setActiveEncyclopediaProduct(activeModalProduct);
                      setActiveModalProduct(null);
                    }}
                    className="w-full py-2.5 bg-[#F8F6F0] text-[#1B362A] border border-[#1B362A] text-center text-xs rounded-full font-medium hover:bg-[#EFECE4] transition cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <BookOpen className="w-3.5 h-3.5" /> 이 차의 티 도감 &amp; 추천 음악 보기
                  </button>
                  <a
                    href="https://www.osulloc.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-[#1B362A] text-white text-center text-xs rounded-full font-medium hover:bg-[#0F231B] transition shadow-sm flex items-center justify-center gap-1.5"
                  >
                    <span>오설록 공식몰에서 보기</span>
                    <ExternalLink className="w-3 h-3 text-[#C3A370]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==============================================
           ENCYCLOPEDIA DEEP DIVE MODAL (COMPREHENSIVE)
           WITH MUSIC & PLAYLIST PAIRING RECOMMENDATION
           ============================================== */}
      {activeEncyclopediaProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveEncyclopediaProduct(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-9 relative shadow-2xl overflow-y-auto max-h-[92vh] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveEncyclopediaProduct(null)}
              aria-label="닫기"
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#EFECE4] text-[#212623] flex items-center justify-center hover:bg-[#EFECE4]/80 transition cursor-pointer z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Encyclopedia Header */}
            <div className="flex flex-col sm:flex-row gap-6 items-start mb-6 pb-6 border-b border-[#EFECE4]">
              <div className="w-full sm:w-1/3 h-52 rounded-2xl overflow-hidden bg-[#F8F6F0] flex-shrink-0 relative border border-[#EFECE4]">
                <img
                  src={activeEncyclopediaProduct.image}
                  alt={activeEncyclopediaProduct.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2.5 left-2.5 px-3 py-1 bg-black/70 backdrop-blur-md text-white text-[10px] font-mono rounded-full flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeEncyclopediaProduct.colorSwatch }} />
                  {activeEncyclopediaProduct.colorName}
                </span>
              </div>

              <div className="flex-1">
                <div className="inline-flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-bold text-[#C3A370] uppercase tracking-wider">
                    {activeEncyclopediaProduct.enName}
                  </span>
                  <span className="text-[10px] bg-[#EFECE4] text-[#1B362A] px-2 py-0.5 rounded font-mono">
                    {activeEncyclopediaProduct.encyclopedia.fermentationType}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif-kr font-bold text-[#0F231B] mb-2">
                  {activeEncyclopediaProduct.name}
                </h3>

                <p className="text-xs text-[#637069] leading-relaxed mb-4">
                  {activeEncyclopediaProduct.modalDesc}
                </p>

                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1 rounded-full bg-[#F8F6F0] border border-[#EFECE4] text-[#446351] font-medium flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#C3A370]" /> {activeEncyclopediaProduct.encyclopedia.garden}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#F8F6F0] border border-[#EFECE4] text-[#446351] font-medium flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#C3A370]" /> {activeEncyclopediaProduct.encyclopedia.pluckingPeriod}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#F8F6F0] border border-[#EFECE4] text-[#446351] font-medium flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#1B362A]" /> 카페인: {activeEncyclopediaProduct.encyclopedia.caffeineLevel}
                  </span>
                </div>
              </div>
            </div>

            {/* ========================================================
                 FEATURE: 추천 음악 & BGM 플레이리스트 페어링 카드 (NEW)
                 ======================================================== */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#1B362A] via-[#142920] to-[#0F231B] text-white mb-6 border border-white/10 shadow-md relative overflow-hidden">
              <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-center">
                <Disc className="w-48 h-48 animate-spin" style={{ animationDuration: '20s' }} />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono tracking-wider text-[#C3A370] uppercase font-bold flex items-center gap-1.5">
                    <Headphones className="w-3.5 h-3.5" />
                    Tea &amp; Sound Harmony · 페어링 음악
                  </span>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/10 text-white/80 font-mono">
                    {activeEncyclopediaProduct.encyclopedia.musicPairing.genre}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                  <div>
                    <h4 className="text-lg font-serif-kr font-bold text-white flex items-center gap-2">
                      <Music className="w-4 h-4 text-[#C3A370]" />
                      {activeEncyclopediaProduct.encyclopedia.musicPairing.title}
                    </h4>
                    <p className="text-xs text-[#E8DCC4] mt-0.5 font-mono">
                      추천 트랙: {activeEncyclopediaProduct.encyclopedia.musicPairing.artistTrack}
                    </p>
                  </div>

                  <button
                    onClick={() => playMusicPairingAmbience(activeEncyclopediaProduct.encyclopedia.musicPairing.chimeFreq)}
                    className="self-start sm:self-auto px-4 py-2 rounded-full bg-[#C3A370] text-[#0F231B] hover:bg-[#E8DCC4] text-xs font-semibold transition flex items-center gap-2 shadow-sm cursor-pointer"
                  >
                    {isPlayingMusicChime ? (
                      <>
                        <Volume2 className="w-3.5 h-3.5 animate-pulse" /> 선율 청음 중...
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5" /> 선율 앰비언스 청음
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs text-white/80 leading-relaxed mb-3 bg-black/20 p-3 rounded-xl border border-white/5">
                  {activeEncyclopediaProduct.encyclopedia.musicPairing.description}
                </p>

                <div className="text-[10px] text-[#C3A370] font-mono">
                  {activeEncyclopediaProduct.encyclopedia.musicPairing.mood}
                </div>
              </div>
            </div>

            {/* Encyclopedia Deep Sections */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Section 1: 제다 공정 단계 */}
              <div className="p-5 rounded-2xl bg-[#F8F6F0] border border-[#EFECE4]">
                <h4 className="text-sm font-serif-kr font-bold text-[#0F231B] mb-3 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-[#1B362A]" />
                  오설록 장인의 5단계 제다 공정
                </h4>
                <div className="space-y-2 text-xs">
                  {activeEncyclopediaProduct.encyclopedia.processingSteps.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#1B362A] text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-[#212623]">{step}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-[#EFECE4] text-[11px] text-[#637069]">
                  <strong className="text-[#1B362A]">핵심 제다법:</strong> {activeEncyclopediaProduct.encyclopedia.processingMethod}
                </div>
              </div>

              {/* Section 2: 센서리 테이스팅 아로마 휠 */}
              <div className="p-5 rounded-2xl bg-[#F8F6F0] border border-[#EFECE4]">
                <h4 className="text-sm font-serif-kr font-bold text-[#0F231B] mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#C3A370]" />
                  테이스팅 아로마 &amp; 센서리 노트
                </h4>
                <div className="space-y-2.5 text-xs">
                  <div>
                    <span className="text-[#637069] block text-[10px]">첫 향 (Top Note)</span>
                    <p className="font-medium text-[#0F231B]">{activeEncyclopediaProduct.encyclopedia.topNote}</p>
                  </div>
                  <div>
                    <span className="text-[#637069] block text-[10px]">본 풍미 (Palate)</span>
                    <p className="font-medium text-[#1B362A]">{activeEncyclopediaProduct.encyclopedia.palate}</p>
                  </div>
                  <div>
                    <span className="text-[#637069] block text-[10px]">여운 (Finish)</span>
                    <p className="font-medium text-[#0F231B]">{activeEncyclopediaProduct.encyclopedia.finish}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Brewing Chemistry & Food Pairing Bar */}
            <div className="p-5 rounded-2xl bg-[#1B362A] text-white mb-6 grid sm:grid-cols-3 gap-5 text-center">
              <div>
                <div className="text-[10px] text-white/70 uppercase tracking-wider mb-1 font-mono">Water Temp</div>
                <div className="text-xl font-bold font-display text-[#C3A370]">{activeEncyclopediaProduct.temp}</div>
                <span className="text-[10px] text-white/60">차 본연의 향미 추출</span>
              </div>
              <div>
                <div className="text-[10px] text-white/70 uppercase tracking-wider mb-1 font-mono">Infusion Time</div>
                <div className="text-xl font-bold font-display text-[#C3A370]">{activeEncyclopediaProduct.timeSec}초</div>
                <span className="text-[10px] text-white/60">적정 침출 시간</span>
              </div>
              <div>
                <div className="text-[10px] text-white/70 uppercase tracking-wider mb-1 font-mono">Teaware Pairing</div>
                <div className="text-xs font-semibold text-[#E8DCC4] mt-1">{activeEncyclopediaProduct.encyclopedia.recommendedTeaware}</div>
              </div>
            </div>

            {/* Pairing & Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#EFECE4]">
              <div className="flex items-center gap-2 text-xs text-[#637069]">
                <Utensils className="w-4 h-4 text-amber-700" />
                <span>추천 다식: <strong className="text-[#0F231B]">{activeEncyclopediaProduct.encyclopedia.pairing}</strong></span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    handleSelectTimerTea(activeEncyclopediaProduct);
                    setActiveEncyclopediaProduct(null);
                    navigateTo('routine');
                  }}
                  className="flex-1 sm:flex-initial px-5 py-2.5 rounded-full bg-[#F8F6F0] border border-[#1B362A] text-[#1B362A] hover:bg-[#EFECE4] text-xs font-medium transition cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Clock className="w-3.5 h-3.5" /> 브루잉 타이머 맞추기
                </button>
                <a
                  href="https://www.osulloc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial px-6 py-2.5 rounded-full bg-[#1B362A] hover:bg-[#0F231B] text-white text-xs font-medium transition shadow-sm flex items-center justify-center gap-1.5"
                >
                  <span>공식몰 구매</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#C3A370]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
