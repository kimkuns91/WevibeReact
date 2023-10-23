import { createSlice } from '@reduxjs/toolkit';

const defaultDesc = "<프로젝트의 현재 상황>\n예시) 프로젝트의 목적, 배경, 현재 준비 상황, 진행 계획 등\n\n<상세한 업무 내용>\n지원 플랫폼 :\n예시 1) PC 웹사이트, 모바일 웹사이트 지원\n예시 2) PC 웹사이트, 모바일 웹사이트, 모바일 애플리케이션 지원\n\n판매자 종류 : \n예시 1) 운영자가 직접 판매 \n예시 2) 쇼핑몰 회원이 판매 \n\n솔루션 사용 유무 : \n예시 1) 사용하지 않습니다. \n예시 2) 사용할 솔루션을 선정하지 않았습니다.\n예시 3) Cafe24를 사용 예정\n\n사용자 메뉴 구성 : \n예시) 여성의류, 남성의류, 액세서리, 이벤트, 마이페이지, 장바구니 등 \n\n사용자 주요 기능 : \n예시) 정기 결제/배송, 할인 쿠폰, 상품 추천, SNS 소셜 로그인 등 \n\n관리자 주요 기능 : \n예시) 회원정보 조회, 전체 주문 조회, 상품 관리, 이벤트(프로모션) 관리 등 \n\n<참고자료 / 유의사항> \n기능 및 디자인 참고 사이트 : \n예시) 사이트의 기능은 ‘G마켓‘을 참고하며, 디자인은 ‘쿠팡’을 참고합니다. \n\n기타 유의사항 : \n예시) 우대 사항 등"

const initialStateValue = {
  page : 1,
  email : null,
  category : {
    develop: false,
    design: false,
    planning: false,
  },
  subCategory : {
    web: false,
    application: false,
    commerce: false,
    software: false,
    publishing: false,
    wordpress: false,
    embedded: false,
    game: false,
    etc: false,
  },
  projectProgress : null,
  planningStatus : null,
  desc: defaultDesc,
  budget : null,
  budgetTuning : false,
  startDate : null,
  progressPeriod : null,
  progressPeriodTuning : false,
  preMeeting : null,
  meeting: null,
  meetingCycle: null,
  city : null, 
  district : null,
  deadlineDate : null,
  supportProject : null,
  applicantRequirements : {
    applicantRequirements01: false,
    applicantRequirements02: false,
    applicantRequirements03: false,
    applicantRequirements04: false,
    applicantRequirements05: null,
    applicantRequirementsDesc: null,
  },
  question : null,
  manpower : null,
  managingExperience: null,
  futurePlans: {
    month: false,
    update: false,
  },
  projectPriorities : {
    first: null,
    second : null,
    third : null
  }
}

export const requirementsSlice = createSlice({
    name: "requirements",
    initialState: { 
        value: initialStateValue
    },
    reducers: {
        setting: (state, action) => {
            state.value = { ...state.value, ...action.payload };
        },
        deleted: (state) => {
            state.value = initialStateValue
        }
    },
});

export const { setting, deleted } = requirementsSlice.actions;

export default requirementsSlice.reducer;
