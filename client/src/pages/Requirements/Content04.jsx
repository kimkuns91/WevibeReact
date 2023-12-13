import RequirementControl from "../../components/RequirementsControl/RequirementControl";
import { useDispatch, useSelector } from "react-redux";
import { setting } from "../../redux/requirements.slice";
import { useState } from "react";

const Content04 = (props) => {
  const requirements = useSelector((state) => state.requirementsSlice.value);
  const [isRadioChecked, setIsRadioChecked] = useState("");
  const {
    budget,
    budgetTuning,
    startDate,
    progressPeriod,
    progressPeriodTuning,
  } = requirements;

  const dispatch = useDispatch();

  const handleNextBtn = () => {
    if (budget !== null && startDate !== null && progressPeriod !== null) {
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
              지출 가능 예산 <span className="Red">*</span>
            </h3>
            <p className="RequireSubTitle">
              프로젝트에 지출 가능한 예산을 입력해 주세요.
            </p>
          </div>
          <input
            type="text"
            className="TextInput"
            value={budget}
            onChange={(e) => {
              if (e.target.value === "" || /^[0-9]+$/.test(e.target.value)) {
                dispatch(setting({ budget: e.target.value }));
              }
            }}
          />
          <p className="RequireDesc">
            예상 결제 금액 :{" "}
            {!budget ? null : Math.floor(budget * 1.1).toLocaleString()} 원
            (부가가치세 10% 포함)
          </p>
          <div className="RequireInputWrap">
            <input
              type="checkbox"
              id="budgetTuning"
              checked={budgetTuning}
              onChange={() => {
                dispatch(
                  setting({
                    budgetTuning: !budgetTuning,
                  })
                );
              }}
            />
            <label htmlFor="budgetTuning" className="RequireDesc">
              입력한 예산의 조율이 가능합니다.
            </label>
          </div>
        </div>
        <div className="RequireContent">
          <div className="RequireHead">
            <h3 className="RequireTitle">
              예상 시작일 <span className="Red">*</span>
            </h3>
            <p className="RequireSubTitle">
              파트너가 프로젝트에 착수하는 날짜입니다. <br />
              해당 날짜에 프로젝트 시작이 가능한 파트너들이 지원하게 됩니다.
            </p>
          </div>

          <div className="RequireInputWrap">
            <input
              type="radio"
              name="radio"
              onChange={() => {
                setIsRadioChecked("custom");
                dispatch(
                  setting({
                    startDate: "",
                  })
                );
              }}
            />
            {isRadioChecked === "custom" ? (
              <input
                type="text"
                placeholder="yyyy/mm/dd 형식으로 입력해주세요."
                maxLength="10"
                value={startDate}
                onChange={(e) => dispatch(setting({ startDate: e.target.value }))}
              />
            ) : (
              <input
                type="text"
                placeholder="yyyy/mm/dd 형식으로 입력해주세요."
                disabled={true}
              />
            )}
          </div>
          <div className="RequireInputWrap">
            <input
              type="radio"
              name="radio"
              id="immediately"
              onChange={() => {
                setIsRadioChecked("immediately");
                dispatch(
                  setting({
                    startDate: "계약 체결 이후, 즉시 시작하길 희망합니다.",
                  })
                );
              }}
            />
            <label htmlFor="immediately" className="RequireDesc">
              계약 체결 이후, 즉시 시작하길 희망합니다.
            </label>
          </div>
        </div>
        <div className="RequireContent">
          <div className="RequireHead">
            <h3 className="RequireTitle">
              예상 진행 기간 <span className="Red">*</span>
            </h3>
            <p className="RequireSubTitle">프로젝트 진행 기간을 입력해 주세요.</p>
          </div>

          <div>
            <input
              type="text"
              className="TextInput"
              placeholder=""
              value={progressPeriod}
              onChange={(e) =>
                dispatch(setting({ progressPeriod: e.target.value }))
              }
            />
          </div>
          <div className="RequireInputWrap">
            <input
              type="checkbox"
              id="progressPeriodTuning"
              checked={progressPeriodTuning}
              onChange={() => {
                dispatch(
                  setting({
                    progressPeriodTuning: !progressPeriodTuning,
                  })
                );
              }}
            />
            <label htmlFor="progressPeriodTuning" className="RequireDesc">
              입력한 진행 기간의 조율이 가능합니다.
            </label>
          </div>
        </div>
      </div>
      <RequirementControl prevBtn={true} nextBtn={handleNextBtn()} page={4} />
    </div>
  );
};
export default Content04;
