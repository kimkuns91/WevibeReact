import RequirementControl from "../../components/RequirementsControl/RequirementControl";
import { GeoData } from "../../GeoData";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setting } from "../../redux/requirements.slice";

const Content05 = (props) => {
  const requirements = useSelector((state) => state.requirementsSlice.value);
  const { city, district, preMeeting, meeting, meetingCycle } = requirements;

  const dispatch = useDispatch();
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    const foundDistricts = getDistrictsByCity(city);
    setDistricts(foundDistricts);
  }, [city]);

  const getDistrictsByCity = (cityName) => {
    for (let i = 0; i < GeoData.length; i++) {
      if (GeoData[i][cityName]) {
        return GeoData[i][cityName];
      }
    }
    return [];
  };
  const handleNextBtn = () => {
    if (
      city !== null &&
      district !== null &&
      preMeeting !== null &&
      meeting !== null &&
      meetingCycle !== null
    ) {
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
              사전 미팅 방식 <span className="Red">*</span>
            </h3>
            <p className="RequireSubTitle">
              클라이언트님에게 편한 미팅 방식으로 파트너와의 미팅 조율을
              도와드립니다.
            </p>
          </div>

          <div className="RequireInputWrap">
            <input
              type="radio"
              name="preMeeting"
              id="preMeetingOnline"
              checked={preMeeting === "온라인" ? true : false}
              onChange={(e) => {
                dispatch(
                  setting({
                    preMeeting: "온라인",
                  })
                );
              }}
            />
            <label htmlFor="preMeetingOnline" className="RequireDesc">
              온라인 (카카오톡, 화상미팅 등)
            </label>
          </div>
          <div className="RequireInputWrap">
            <input
              type="radio"
              name="preMeeting"
              id="preMeetingOffline"
              checked={preMeeting === "오프라인" ? true : false}
              onChange={(e) => {
                dispatch(
                  setting({
                    preMeeting: "오프라인",
                  })
                );
              }}
            />
            <label htmlFor="preMeetingOffline" className="RequireDesc">
              오프라인
            </label>
          </div>
        </div>
        <div className="RequireContent">
          <div className="RequireHead">
            <h3 className="RequireTitle">
              진행 중 미팅 <span className="Red">*</span>
            </h3>
            <p className="RequireSubTitle">
              미팅 방식 <span className="Red">*</span>
            </p>
          </div>

          <div className="RequireInputWrap">
            <input
              type="radio"
              name="meeting"
              id="online"
              checked={meeting === "온라인" ? true : false}
              onChange={(e) => {
                dispatch(
                  setting({
                    meeting: "온라인",
                  })
                );
              }}
            />
            <label htmlFor="online" className="RequireDesc">
              온라인 (카카오톡, 화상미팅 등)
            </label>
          </div>

          <div className="RequireInputWrap">
            <input
              type="radio"
              name="meeting"
              id="offline"
              checked={meeting === "오프라인" ? true : false}
              onChange={(e) => {
                dispatch(
                  setting({
                    meeting: "오프라인",
                  })
                );
              }}
            />
            <label htmlFor="offline" className="RequireDesc">
              오프라인
            </label>
          </div>
          <div className="RequireHead">
            <div className="RequireTitle"></div>
            <p className="RequireSubTitle">
              미팅 주기<span className="Red">*</span>
            </p>
          </div>
          <div className="RequireInputWrap">
            <input
              type="radio"
              name="meetingCycle"
              id="week01"
              checked={meetingCycle === "주 2회" ? true : false}
              onChange={(e) => {
                dispatch(
                  setting({
                    meetingCycle: "주 2회",
                  })
                );
              }}
            />
            <label htmlFor="week01" className="RequireDesc">
              주 2회
            </label>
          </div>
          <div className="RequireInputWrap">
            <input
              type="radio"
              name="meetingCycle"
              id="week02"
              checked={meetingCycle === "주 1회" ? true : false}
              onChange={(e) => {
                dispatch(
                  setting({
                    meetingCycle: "주 1회",
                  })
                );
              }}
            />
            <label htmlFor="week02" className="RequireDesc">
              주 1회
            </label>
          </div>
          <div className="RequireInputWrap">
            <input
              type="radio"
              name="meetingCycle"
              id="necessary"
              checked={meetingCycle === "필요시 요청" ? true : false}
              onChange={(e) => {
                dispatch(
                  setting({
                    meetingCycle: "필요시 요청",
                  })
                );
              }}
            />
            <label htmlFor="necessary" className="RequireDesc">
              필요시 요청
            </label>
          </div>
        </div>
        <div className="RequireContent">
          <div className="RequireHead">
            <h3 className="RequireTitle">
              클라이언트 위치 <span className="Red">*</span>
            </h3>
            <p className="RequireSubTitle">
              파트너가 미팅 위치 선정시 클라이언트님의 위치를 참고합니다.
            </p>
          </div>
          <select
            className="RequireSelect"
            value={city}
            onChange={(e) => {
              dispatch(
                setting({
                  city: e.target.value,
                })
              );
            }}
          >
            <option value="">시/도</option>
            {GeoData.map((data, index) => {
              return (
                <option value={Object.keys(data)[0]} key={index}>
                  {Object.keys(data)[0]}
                </option>
              );
            })}
          </select>
          <select
            className="RequireSelect"
            value={district}
            onChange={(e) => {
              dispatch(
                setting({
                  district: e.target.value,
                })
              );
            }}
          >
            <option value="">시/군/구</option>
            {city && (
              <>
                {districts.map((district, index) => {
                  return (
                    <option value={district} key={index}>
                      {district}
                    </option>
                  );
                })}
              </>
            )}
          </select>
        </div>
      </div>
      <RequirementControl prevBtn={true} nextBtn={handleNextBtn()} page={5} />
    </div>
  );
};
export default Content05;
