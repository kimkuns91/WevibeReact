import RequirementControl from "../../components/RequirementsControl/RequirementControl";
import { useDispatch, useSelector } from "react-redux";
import { setting } from "../../redux/requirements.slice";

const Content02 = (props) => {
  const requirements = useSelector((state) => state.requirementsSlice.value);
  const { projectProgress, planningStatus } = requirements;

  const dispatch = useDispatch();
  const handleNextBtn = () => {
    if (projectProgress !== null && planningStatus !== null) {
      return true;
    }
    return false;
  };
  return (
    <div className="RequirementsBodyContents">
      <div className="RequireContentWrap">
        <div className="RequireContent">
          <div className="RequireHead">
            <h3 className="RequireTitle">
              프로젝트 진행 분류 <span className="Red">*</span>
            </h3>
          </div>
          <div className="RequireInputWrap">
            <input
              type="checkbox"
              checked={projectProgress === "new"}
              id="new"
              onChange={async () => {
                await dispatch(
                  setting({
                    projectProgress: "new",
                  })
                );
              }}
            />
            <label htmlFor="new" className="RequireDesc">
              신규 프로젝트를 진행하려 합니다.
            </label>
          </div>
          <div className="RequireInputWrap">
            <input
              type="checkbox"
              checked={projectProgress === "maintenance"}
              id="maintenance"
              onChange={async () => {
                await dispatch(
                  setting({
                    projectProgress: "maintenance",
                  })
                );
              }}
            />
            <label htmlFor="maintenance" className="RequireDesc">
              운영 중인 서비스의 리뉴얼 또는 유지보수를 하려 합니다.
            </label>
          </div>
        </div>
        <div className="RequireContent">
          <div className="RequireHead">
            <h3 className="RequireTitle">
              기획 상태 <span className="Red">*</span>
            </h3>
            <p className="RequireSubTitle">
              업무 범위 산정과 예산 및 일정 상담을 위해 현재 기획 상태를
              선택해주세요
            </p>
          </div>
          <div className="RequireInputWrap">
            <input
              type="checkbox"
              checked={planningStatus === 1}
              id="planningStatus01"
              onChange={async () => {
                await dispatch(
                  setting({
                    planningStatus: 1,
                  })
                );
              }}
            />
            <label htmlFor="planningStatus01" className="RequireDesc">
              아이디어만 있습니다.
            </label>
          </div>
          <div className="RequireInputWrap">
            <input
              type="checkbox"
              checked={planningStatus === 2}
              id="planningStatus02"
              onChange={async () => {
                await dispatch(
                  setting({
                    planningStatus: 2,
                  })
                );
              }}
            />
            <label htmlFor="planningStatus02" className="RequireDesc">
              필요한 내용들을 간단히 정리해두었습니다.
            </label>
          </div>
          <div className="RequireInputWrap">
            <input
              type="checkbox"
              checked={planningStatus === 3}
              id="planningStatus03"
              onChange={async () => {
                await dispatch(
                  setting({
                    planningStatus: 3,
                  })
                );
              }}
            />
            <label htmlFor="planningStatus03" className="RequireDesc">
              상세한 기획 문서가 존재합니다.
            </label>
          </div>
        </div>
      </div>
      {/* <div className="RequireContent">
        <div className="RequireHead">
          <h3 className="RequireTitle">프로젝트 관련 자료</h3>
          <p className="RequireSubTitle">
            아이디어 또는 필요한 내용을 정리한 문서를 추가해 주세요. 프로젝트
            예산 및 일정 산정에 활용되며, 문서 및 이미지 파일만 추가 가능합니다.
          </p>
        </div>
        <div>
          <p>+ 프로젝트 관련 자료 추가</p>
        </div>
        <div>
          <p>안심하세요! 자료 공개 대상을 설정할 수 있습니다.</p>
          <select name="languages" id="lang">
            <option value="1">Wevibe만</option>
            <option value="2">Wevibe, 미팅 예정 파트너</option>
            <option value="3">전체 공개</option>
          </select>
        </div>
      </div> */}
      <RequirementControl
        prevBtn={true}
        nextBtn={handleNextBtn()}
        page={2}
      />
    </div>
  );
};
export default Content02;
