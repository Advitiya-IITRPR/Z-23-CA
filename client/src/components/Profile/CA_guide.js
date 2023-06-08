import _CA_GUIDE_DATA from "./DATA/ca-guide";
import "./css/ca-guide-styles.css";
const _CA_GUIDE = () => {
  return (
    <>
      <div className="ca-guide-main">
        <ul>
          <li>
            <div className="title">{_CA_GUIDE_DATA[0].title}</div>
            <ul>
              {_CA_GUIDE_DATA[0].points?.map((d, index) => {
                return <li key={index}>{d}</li>;
              })}
            </ul>
          </li>
          <li>
            <div className="title_1">{_CA_GUIDE_DATA[1].title}</div>
            <ul>
              <div className="links">
                {_CA_GUIDE_DATA[1].links[0].title}:{" "}
                <a
                  href={_CA_GUIDE_DATA[1].links[0].value}
                  target="_blank"
                  rel="noreferrer"
                >
                  {_CA_GUIDE_DATA[1].links[0].value}
                </a>
              </div>
              <div className="links">
                {_CA_GUIDE_DATA[1].links[1].title}:{" "}
                <a
                  href={_CA_GUIDE_DATA[1].links[1].value}
                  target="_blank"
                  rel="noreferrer"
                >
                  {_CA_GUIDE_DATA[1].links[1].value}
                </a>
              </div>
            </ul>
          </li>
          <li>
            <div className="title">{_CA_GUIDE_DATA[2].title}</div>
            <ul>
              {_CA_GUIDE_DATA[2].points?.map((point, index) => {
                return (
                  <li key={index}>
                    <div className="subtitle">{point.subtitle}</div>
                    <ul>
                      {point.subpoints?.map((sp, i) => {
                        return <li key={i}>{sp}</li>;
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </li>
          <li>
            <div className="title_1">{_CA_GUIDE_DATA[3].title}</div>
          </li>
          <li>
            <div className="title">{_CA_GUIDE_DATA[4].title}</div>
            <ul>
              {_CA_GUIDE_DATA[4].points?.map((point, index) => {
                return (
                  <li key={index}>
                    <div className="subtitle">{point.subtitle}</div>
                    <ul>
                      {point.subpoints?.map((sp, i) => {
                        return <li key={i}>{sp}</li>;
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </li>
          <li>
            <div className="title_1">{_CA_GUIDE_DATA[5].title}</div>
          </li>
          <li>
            <div className="title">For Queries Contact:</div>
            <ul>
              <li>Apurva Pragya(CA head) - 8766275950</li>
              {/* <li>Bhavya Kumar Makwana - 9868325252</li> */}
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};
export default _CA_GUIDE;
