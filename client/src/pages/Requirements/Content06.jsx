import { useNavigate } from "react-router-dom";
import RequirementControl from "../../components/RequirementsControl/RequirementControl";
import { useDispatch, useSelector } from "react-redux";
import { setting } from "../../redux/requirements.slice";

const Content06 = (props) => {
  const requirements = useSelector((state) => state.requirementsSlice.value);
  const { deadlineDate, supportProject, applicantRequirements, question } =
    requirements;

  const dispatch = useDispatch();
  const handleNextBtn = () => {
    if (deadlineDate !== null && supportProject !== null) {
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
              지원자 모집 마감일 <span className="Red">*</span>
            </h3>
            <p className="RequireSubTitle">
              지원자를 모집하는 기간은 최대 14일까지 가능합니다.
              <br />
              지원자 모집 기간 중에도 파트너 선정과 계약 진행이 가능합니다.
            </p>
          </div>
          <input
            type="text"
            className="TextInput"
            value={deadlineDate}
            onChange={(e) => dispatch(setting({ deadlineDate: e.target.value }))}
          />
        </div>
        <div className="RequireContent">
          <div className="RequireHead">
            <h3 className="RequireTitle">
              지원사업 여부 <span className="Red">*</span>
            </h3>
          </div>
          <div className="RequireInputWrap">
            <input
              type="radio"
              name="supportProject"
              id="supportProjectTrue"
              checked={supportProject === "true" ? true : false}
              onChange={(e) => {
                dispatch(
                  setting({
                    supportProject: "true",
                  })
                );
              }}
            />
            <label htmlFor="supportProjectTrue" className="RequireDesc">
              네, 정부지원사업 또는 연구과제입니다.
            </label>
          </div>
          <div className="RequireInputWrap">
            <input
              type="radio"
              name="supportProject"
              id="supportProjectFalse"
              checked={supportProject === "false" ? true : false}
              onChange={(e) => {
                dispatch(
                  setting({
                    supportProject: "false",
                  })
                );
              }}
            />
            <label htmlFor="supportProjectFalse" className="RequireDesc">
              아닙니다
            </label>
          </div>
        </div>
        <div className="RequireContent">
          <div className="RequireHead">
            <h3 className="RequireTitle">
              지원자 필수 요건 <span className="Red">*</span>
            </h3>
            <p className="RequireSubTitle">
              아래 조건에 맞는 파트너를 지원자로 받습니다.
            </p>
          </div>
          <div className="RequireInputWrap">
            <input
              type="checkbox"
              id="applicantRequirements01"
              onChange={() => {
                dispatch(
                  setting({
                    applicantRequirements: {
                      ...applicantRequirements,
                      applicantRequirements01:
                        !applicantRequirements.applicantRequirements01,
                    },
                  })
                );
              }}
            />
            <label htmlFor="applicantRequirements01" className="RequireDesc">
              개인 또는 팀 가능
            </label>
          </div>
          <div className="RequireInputWrap">
            <input
              type="checkbox"
              id="applicantRequirements02"
              onChange={() => {
                dispatch(
                  setting({
                    applicantRequirements: {
                      ...applicantRequirements,
                      applicantRequirements02:
                        !applicantRequirements.applicantRequirements02,
                    },
                  })
                );
              }}
            />
            <label htmlFor="applicantRequirements02" className="RequireDesc">
              사업자 가능 (세금계산서 발행)
            </label>
          </div>
          <div className="RequireInputWrap">
            <input
              type="checkbox"
              id="applicantRequirements03"
              onChange={() => {
                dispatch(
                  setting({
                    applicantRequirements: {
                      ...applicantRequirements,
                      applicantRequirements03:
                        !applicantRequirements.applicantRequirements03,
                    },
                  })
                );
              }}
            />
            <label htmlFor="applicantRequirements03" className="RequireDesc">
              업력 1년 이상 (사업자등록증 기준)
            </label>
          </div>
          <div className="RequireInputWrap">
            <input
              type="checkbox"
              id="applicantRequirements04"
              onChange={() => {
                dispatch(
                  setting({
                    applicantRequirements: {
                      ...applicantRequirements,
                      applicantRequirements04:
                        !applicantRequirements.applicantRequirements04,
                    },
                  })
                );
              }}
            />
            <label htmlFor="applicantRequirements04" className="RequireDesc">
              보증보험 발급 가능
            </label>
          </div>
          <div className="RequireInputWrap">
            <input
              type="checkbox"
              id="applicantRequirements05"
              checked={applicantRequirements.applicantRequirements05}
              onChange={(e) => {
                if (!e.target.checked) {
                  dispatch(
                    setting({
                      applicantRequirements: {
                        ...applicantRequirements,
                        applicantRequirements05: false,
                        applicantRequirementsDesc: null,
                      },
                    })
                  );
                } else {
                  dispatch(
                    setting({
                      applicantRequirements: {
                        ...applicantRequirements,
                        applicantRequirements05: true,
                      },
                    })
                  );
                }
              }}
            />
            <input
              type="text"
              disabled={!applicantRequirements.applicantRequirements05}
              value={applicantRequirements.applicantRequirementsDesc}
              onChange={(e) => {
                dispatch(
                  setting({
                    applicantRequirements: {
                      ...applicantRequirements,
                      applicantRequirementsDesc: e.target.value,
                    },
                  })
                );
              }}
              placeholder="기타 (직접 입력)"
            />
          </div>
        </div>
        <div className="RequireContent">
          <div className="RequireHead">
            <h3 className="RequireTitle">파트너 지원 전 질문</h3>
            <p className="RequireSubTitle">
              파트너가 프로젝트에 지원할 때 답변해야 할 질문을 작성해 주세요.
              <br />
              클라이언트님이 파트너를 선정할 때 지원서와 함께 답변 내용을 검토할
              수 있습니다.
            </p>
          </div>
          <textarea
            type="text"
            value={question}
            onChange={(e) => dispatch(setting({ question: e.target.value }))}
          />
        </div>
      </div>
      <RequirementControl prevBtn={true} nextBtn={handleNextBtn()} page={6} />
    </div>
  );
};
export default Content06;
