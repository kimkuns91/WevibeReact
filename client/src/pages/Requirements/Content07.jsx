import { useNavigate } from "react-router-dom";
import RequirementControl from "../../components/RequirementsControl/RequirementControl";
import { useDispatch, useSelector } from "react-redux";
import { setting } from "../../redux/requirements.slice";

const Content07 = (props) => {
  const options = ["산출물 완성도", "금액", "일정 준수"];

  const requirements = useSelector((state) => state.requirementsSlice.value);
  const { manpower, managingExperience, futurePlans, projectPriorities } =
    requirements;

  const dispatch = useDispatch();
  const filterOptions = (exclude) => {
    return options.filter((option) => ![...exclude].includes(option));
  };
  const handleNextBtn = () => {
    if (
      manpower !== null &&
      managingExperience !== null &&
      projectPriorities !== null
    ) {
      return true;
    }
    return false;
  };
  return (
    <div className="RequirementsBodyContents">
      <div className="RequireContent">
        <div className="RequireHead">
          <h3 className="RequireTitle">
            프로젝트 인력 상황 <span className="Red">*</span>
          </h3>
        </div>

        <div className="RequireInputWrap">
          <input
            type="radio"
            name="manpower"
            id="manpowerTrue"
            checked={manpower === true}
            onChange={(e) => dispatch(setting({ manpower: true }))}
          />
          <label htmlFor="manpowerTrue" className="RequireDesc">
            IT 프로젝트 경험이 있는 인력이 있습니다.
          </label>
        </div>
        <div className="RequireInputWrap">
          <input
            type="radio"
            name="manpower"
            id="manpowerFalse"
            checked={manpower === false}
            onChange={(e) => dispatch(setting({ manpower: false }))}
          />
          <label htmlFor="manpowerFalse" className="RequireDesc">
            없습니다.
          </label>
        </div>
      </div>
      <div className="RequireContent">
        <div className="RequireHead">
          <h3 className="RequireTitle">
            프로젝트 매니징 경험 <span className="Red">*</span>
          </h3>
        </div>
        <div className="RequireInputWrap">
          <input
            type="radio"
            name="managingExperience"
            id="managingExperienceTrue"
            checked={managingExperience === true}
            onChange={(e) => dispatch(setting({ managingExperience: true }))}
          />
          <label htmlFor="managingExperienceTrue" className="RequireDesc">
            프로젝트 매니징 경험이 있습니다.
          </label>
        </div>
        <div className="RequireInputWrap">
          <input
            type="radio"
            name="managingExperience"
            id="managingExperienceFalse"
            checked={managingExperience === false}
            onChange={(e) => dispatch(setting({ managingExperience: false }))}
          />
          <label htmlFor="managingExperienceFalse" className="RequireDesc">
            없습니다.
          </label>
        </div>
      </div>
      <div className="RequireContent">
        <div className="RequireHead">
          <h3 className="RequireTitle">향후 계획</h3>
        </div>
        <div className="RequireInputWrap">
          <input
            type="checkbox"
            id="futurePlansMonth"
            checked={futurePlans.month}
            onChange={(e) =>
              dispatch(
                setting({
                  futurePlans: {
                    ...futurePlans,
                    month: !futurePlans.month,
                  },
                })
              )
            }
          />
          <label htmlFor="futurePlansMonth" className="RequireDesc">
            월 단위 유지보수를 의뢰 예정입니다. 미팅 시 논의가 필요합니다.
          </label>
        </div>
        <div className="RequireInputWrap">
          <input
            type="checkbox"
            id="futurePlansUpdate"
            checked={futurePlans.update}
            onChange={(e) =>
              dispatch(
                setting({
                  futurePlans: {
                    ...futurePlans,
                    update: !futurePlans.update,
                  },
                })
              )
            }
          />
          <label htmlFor="futurePlansUpdate" className="RequireDesc">
            고도화 프로젝트를 의뢰 예정입니다. 미팅 시 논의가 필요합니다.
          </label>
        </div>
      </div>
      <div className="RequireContent">
        <div className="RequireHead">
          <h3 className="RequireTitle">
            프로젝트 우선순위 <span className="Red">*</span>
          </h3>
        </div>
        <div>
          <select
            className="RequireSelect"
            value={projectPriorities.first}
            onChange={(e) =>
              dispatch(
                setting({
                  projectPriorities: {
                    ...projectPriorities,
                    first: e.target.value,
                  },
                })
              )
            }
          >
            <option value=" ">1순위 선택</option>
            {filterOptions([
              projectPriorities.second,
              projectPriorities.third,
            ]).map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select
            className="RequireSelect"
            value={projectPriorities.second}
            onChange={(e) =>
              dispatch(
                setting({
                  projectPriorities: {
                    ...projectPriorities,
                    second: e.target.value,
                  },
                })
              )
            }
          >
            <option value=" ">2순위 선택</option>
            {filterOptions([
              projectPriorities.first,
              projectPriorities.third,
            ]).map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select
            className="RequireSelect"
            value={projectPriorities.third}
            onChange={(e) =>
              dispatch(
                setting({
                  projectPriorities: {
                    ...projectPriorities,
                    third: e.target.value,
                  },
                })
              )
            }
          >
            <option value=" ">3순위 선택</option>
            {filterOptions([
              projectPriorities.first,
              projectPriorities.second,
            ]).map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <RequirementControl
        prevBtn={true}
        nextBtn={handleNextBtn()}
        page={7}
      />
    </div>
  );
};
export default Content07;
