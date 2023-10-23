import './Sidebar.css'
const Sidebar = (props) => {
  const getClassName = (pageIndex) => {
    if(props.page > pageIndex){
      return "RequirementsBodySidebarBodyMenuCompleted"
    }
    if(props.page === pageIndex){
      return "RequirementsBodySidebarBodyMenuActive"
    }
    return "RequirementsBodySidebarBodyMenu"
    // return props.page === pageIndex ? "RequirementsBodySidebarBodyMenuActive" : "RequirementsBodySidebarBodyMenu";
  };

  return (
    <div className="RequirementsBodySidebar">
      <div className='RequirementsBodySidebarOutBtn'>{'<'} 저장 후 나가기</div>
      <div className='RequirementsBodySidebarTitle'>프로젝트 정보 등록</div>
      <div>
        <div className='RequirementsBodySidebarMenu'>프로젝트 정보 등록</div>
        <div className='RequirementsBodySidebarBody'>
          <div className={getClassName(1)}>1. 기본 정보</div>
          <div className={getClassName(2)}>2. 준비 상태</div>
          <div className={getClassName(3)}>3. 프로젝트 상세</div>
          <div className={getClassName(4)}>4. 예산 및 일정</div>
          <div className={getClassName(5)}>5. 미팅</div>
          <div className={getClassName(6)}>6. 모집 요건</div>
          <div className={getClassName(7)}>7. 추가 정보</div>
          <div className={getClassName(8)}>8. 이메일 등록</div>
        </div>
      </div>
      <div className={'RequirementsBodySidebarMenu'}>프로젝트 등록 완료</div>
    </div>
  );
};

export default Sidebar