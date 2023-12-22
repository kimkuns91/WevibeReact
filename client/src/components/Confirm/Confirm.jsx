import { useDispatch } from "react-redux";
import "./Confirm.css";
import { deleted } from "../../redux/requirements.slice";

const Confirm = (props) => {
  const dispatch = useDispatch();
  // if (window.confirm("작성 중인 요구 사항 명세서가 있습니다.")) {
  //   return setRequirementsModal(true);
  // } else {
  //   return dispatch(deleted())
  // }
  return (
    <div className="Confirm">
      <h3>작성하시던 프로젝트 정보가 있습니다.</h3>
      <div>
        <button
          onClick={() => {
            props.setRequirementsModal(true);
            props.setConfirm(false);
          }}
        >
          이어서 작성하기
        </button>
        <button
          onClick={() => {
            if (window.confirm("작성하던 문서를 삭제하시겠습니까?")) {
              dispatch(deleted());
              props.setConfirm(false);
              return;
            } else {
              return;
            }
          }}
        >
          작성하던 문서 삭제
        </button>
        <button
          onClick={() => {
            props.setConfirm(false);
          }}
        >
          다음에 작성하기
        </button>
      </div>
    </div>
  );
};
export default Confirm;
