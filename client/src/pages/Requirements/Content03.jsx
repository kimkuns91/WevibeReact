import { useNavigate } from "react-router-dom";
import RequirementControl from "../../components/RequirementsControl/RequirementControl";
import { useDispatch, useSelector } from "react-redux";
import { setting } from "../../redux/requirements.slice";

const Content03 = (props) => {
  const requirements = useSelector((state) => state.requirementsSlice.value);
  const { desc } = requirements;
  const dispatch = useDispatch();
  return (
    <div className="RequirementsBodyContents">
      <div className="RequireContent">
        <div className="RequireHead">
          <h3 className="RequireTitle">상세 업무 내용</h3>
          <p className="RequireSubTitle">
            업무 내용을 상세하게 작성해주실수록, 더 적합한 파트너를 만날 수
            있습니다. <br />
            파트너가 알아야 할 유의사항(필수 사항, 전문 경험 등)도 함께 작성해
            주세요.
          </p>
        </div>
        <textarea
          className="RequirementsBodyTextArea"
          value={desc}
          onChange={(e) => dispatch(setting({ desc: e.target.value }))}
        />
      </div>
      <RequirementControl
        prevBtn={true}
        nextBtn={true}
        page={3}
        setPage={props.setPage}
      />
    </div>
  );
};
export default Content03;
