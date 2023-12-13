import RequirementControl from "../../components/RequirementsControl/RequirementControl";
import { useDispatch, useSelector } from "react-redux";
import { setting } from "../../redux/requirements.slice";

const Content08 = (props) => {
  const requirements = useSelector((state) => state.requirementsSlice.value);
  const { email } = requirements;

  const dispatch = useDispatch();

  const handleNextBtn = () => {
    if (email !== null) {
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
              이메일 주소 <span className="Red">*</span>
            </h3>
            <p className="RequireSubTitle">
              해당 이메일로 프로젝트 정보 등록 내역이 전송됩니다.
            </p>
          </div>

          <div className="RequireInputWrap">
            <input
              className="TextInput"
              type="text"
              value={email}
              onChange={(e) => dispatch(setting({ email: e.target.value }))}
            />
          </div>
        </div>
      </div>
      <RequirementControl
        prevBtn={true}
        nextBtn={handleNextBtn()}
        setSending={props.setSending}
        page={8}
      />
    </div>
  );
};
export default Content08;
