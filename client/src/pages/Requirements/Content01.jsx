import RequirementControl from "../../components/RequirementsControl/RequirementControl";
import { useDispatch, useSelector } from "react-redux";
import { setting } from "../../redux/requirements.slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faFile, faPenNib } from "@fortawesome/free-solid-svg-icons";

import "./Content01.css";

const Content01 = (props) => {
  const requirements = useSelector((state) => state.requirementsSlice.value);
  const { category, subCategory } = requirements;

  const dispatch = useDispatch();
  const handleNextBtn = (subCategory) => {
    return Object.values(subCategory).some((value) => value === true);
  };
  return (
    <div className="RequirementsBodyContents">
      <div className="RequireContentWrap">
        <div className="RequireContent">
          <div className="RequireHead">
            <h3 className="RequireTitle">
            프로젝트 카테고리  <span className="Red">*</span>
            </h3>
            <p className="RequireSubTitle">
            해당하는 프로젝트 카테고리를 모두 선택해 주세요.
            </p>
          </div>
          <div className="RequirementsBodyContentsBoxWrap">
            <div
              className={
                category.develop
                  ? "RequirementsBodyContentsBox Active"
                  : "RequirementsBodyContentsBox"
              }
              onClick={async () =>
                await dispatch(
                  setting({
                    category: { ...category, develop: !category.develop },
                  })
                )
              }
            >
              <input
                type="checkbox"
                name="develop"
                checked={category.develop}
                onChange={async () =>
                  await dispatch(
                    setting({
                      category: { ...category, develop: !category.develop },
                    })
                  )
                }
              />
              <FontAwesomeIcon className="Icon" icon={faCode} />
              <p>개발</p>
            </div>
            <div
              className={
                category.design
                  ? "RequirementsBodyContentsBox Active"
                  : "RequirementsBodyContentsBox"
              }
              onClick={async () =>
                await dispatch(
                  setting({ category: { ...category, design: !category.design } })
                )
              }
            >
              <input
                type="checkbox"
                name="design"
                checked={category.design}
                onChange={async () =>
                  await dispatch(
                    setting({
                      category: { ...category, design: !category.design },
                    })
                  )
                }
              />
              <FontAwesomeIcon className="Icon" icon={faPenNib} />
              <p>디자인</p>
            </div>
            <div
              className={
                category.planning
                  ? "RequirementsBodyContentsBox Active"
                  : "RequirementsBodyContentsBox"
              }
              onClick={async () =>
                await dispatch(
                  setting({
                    category: { ...category, planning: !category.planning },
                  })
                )
              }
            >
              <input
                type="checkbox"
                name="planning"
                checked={category.planning}
                onChange={async () =>
                  await dispatch(
                    setting({
                      category: { ...category, planning: !category.planning },
                    })
                  )
                }
              />

              <FontAwesomeIcon className="Icon" icon={faFile} />
              <p>기획</p>
            </div>
          </div>
        </div>

        <div className="RequireContent">
          <div className="RequireHead">
            <h3 className="RequireTitle">
            프로젝트 분야  <span className="Red">*</span>
            </h3>
            <p className="RequireSubTitle">
            해당하는 프로젝트 분야를 모두 선택해 주세요.
            </p>
          </div>
          {!category.develop && !category.design && !category.planning ? null : (
            <div className="RequirementsBodyContentsWrap">
              <div
                className={
                  subCategory.web
                    ? "RequirementsBodyContentsClick Clicked"
                    : "RequirementsBodyContentsClick"
                }
                onClick={async () =>
                  await dispatch(
                    setting({
                      subCategory: { ...subCategory, web: !subCategory.web },
                    })
                  )
                }
              >
                웹
              </div>
              <div
                className={
                  subCategory.application
                    ? "RequirementsBodyContentsClick Clicked"
                    : "RequirementsBodyContentsClick"
                }
                onClick={async () =>
                  await dispatch(
                    setting({
                      subCategory: {
                        ...subCategory,
                        application: !subCategory.application,
                      },
                    })
                  )
                }
              >
                어플리케이션
              </div>
              <div
                className={
                  subCategory.software
                    ? "RequirementsBodyContentsClick Clicked"
                    : "RequirementsBodyContentsClick"
                }
                onClick={async () =>
                  await dispatch(
                    setting({
                      subCategory: {
                        ...subCategory,
                        software: !subCategory.software,
                      },
                    })
                  )
                }
              >
                소프트웨어
              </div>
              <div
                className={
                  subCategory.publishing
                    ? "RequirementsBodyContentsClick Clicked"
                    : "RequirementsBodyContentsClick"
                }
                onClick={async () =>
                  await dispatch(
                    setting({
                      subCategory: {
                        ...subCategory,
                        publishing: !subCategory.publishing,
                      },
                    })
                  )
                }
              >
                퍼블리싱
              </div>
              <div
                className={
                  subCategory.wordpress
                    ? "RequirementsBodyContentsClick Clicked"
                    : "RequirementsBodyContentsClick"
                }
                onClick={async () =>
                  await dispatch(
                    setting({
                      subCategory: {
                        ...subCategory,
                        wordpress: !subCategory.wordpress,
                      },
                    })
                  )
                }
              >
                워드프레스
              </div>
              <div
                className={
                  subCategory.embedded
                    ? "RequirementsBodyContentsClick Clicked"
                    : "RequirementsBodyContentsClick"
                }
                onClick={async () =>
                  await dispatch(
                    setting({
                      subCategory: {
                        ...subCategory,
                        embedded: !subCategory.embedded,
                      },
                    })
                  )
                }
              >
                임베디드
              </div>
              <div
                className={
                  subCategory.game
                    ? "RequirementsBodyContentsClick Clicked"
                    : "RequirementsBodyContentsClick"
                }
                onClick={async () =>
                  await dispatch(
                    setting({
                      subCategory: { ...subCategory, game: !subCategory.game },
                    })
                  )
                }
              >
                게임
              </div>
              <div
                className={
                  subCategory.etc
                    ? "RequirementsBodyContentsClick Clicked"
                    : "RequirementsBodyContentsClick"
                }
                onClick={async () =>
                  await dispatch(
                    setting({
                      subCategory: { ...subCategory, etc: !subCategory.etc },
                    })
                  )
                }
              >
                기타
              </div>
            </div>
          )}
        </div>
      </div>
      <RequirementControl
        prevBtn={false}
        nextBtn={handleNextBtn(subCategory)}
        page={1}
      />
    </div>
  );
};
export default Content01;
