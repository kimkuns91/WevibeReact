import { useDispatch, useSelector } from "react-redux";
import { setting } from "../../redux/requirements.slice";
import { requirementsCompleted } from "../../service/requirementsService";

const RequirementControl = (props) => {
  const requirements = useSelector((state) => state.requirementsSlice.value);
  const page = useSelector((state) => state.requirementsSlice.value.page);

  const dispatch = useDispatch();
  const completeBtn = async () => {
    try {
      props.setSending(true)
      const response = await requirementsCompleted(requirements);
      if(response.status === 200){
        return alert('프로젝트가 등록이 완료되었습니다.')
      }
    } catch (error) {
      console.log(error)
      alert(`프로젝트가 등록이 실패했습니다 : ${error.message}`)
    } finally {
      props.setSending(false)
    }
  };

  return (
    <div className="RequirementsBodyControls">
      {page === 1 ? null : (
        <button
          className="PrevBtn"
          onClick={async () => {
            await dispatch(setting({ page: props.page - 1 }));
          }}
        >
          이전
        </button>
      )}
      {page === 8 ? (
        <button
          className={props.nextBtn ? "NextBtn" : "NextBtn InactiveBtn"}
          disabled={!props.nextBtn}
          onClick={completeBtn}
        >
          완료
        </button>
      ) : (
        <button
          className={props.nextBtn ? "NextBtn" : "NextBtn InactiveBtn"}
          disabled={!props.nextBtn}
          onClick={async () => {
            await dispatch(setting({ page: props.page + 1 }));
          }}
        >
          다음
        </button>
      )}
    </div>
  );
};
export default RequirementControl;
