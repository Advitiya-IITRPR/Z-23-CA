import "./css/leaderboard-styles.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const LeadersTrophy = [
  "data:image/png;base64,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",
  "data:image/png;base64,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",
  "data:image/png;base64,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",
];
const Leaderboard = (props) => {
  const leaders = useSelector((state) => state.getleaders).result;
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const handleSearchBar = (e) => {
    setSearchText(e.target.value);
  };
  if (loading) {
    return <>Loading...</>;
  }
  return (
    <div className="leaderboard-main">
      <div className="leaderboard-leaders">
        {" "}
        {leaders &&
          [...Array(3)].map((x, i) => (
            <div className="leader-card" key={i}>
              <div className="leaders-card-first">
                <div className="leaders-card-details">
                  <div
                    className="leaders-card-details-name"
                    title={leaders[i]?.name}
                  >
                    {" "}
                    {leaders[i]?.name}{" "}
                  </div>{" "}
                  <div className="leaders-card-details-college">
                    {" "}
                    {leaders[i]?.collegeName}{" "}
                  </div>{" "}
                </div>{" "}
                <div className="leaders-card-badge">
                  <img src={LeadersTrophy[i]} alt="" />
                </div>{" "}
              </div>{" "}
              <div className="leaders-card-second">
                <div className="points">
                  <div className="points-head"> Points </div>{" "}
                  <div className="points-value"> {leaders[i]?.points} </div>{" "}
                </div>{" "}
                <div className="referals">
                  <div className="referals-head"> Invites </div>{" "}
                  <div className="referals-value"> {leaders[i]?.invites} </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>
          ))}{" "}
      </div>{" "}
      <div className="leaders-list">
        <div className="search-bar">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search here.."
            onChange={handleSearchBar}
          />
        </div>
        <table id="leaders-table">
          <thead>
            <tr>
              <th> Sr.No. </th> <th> Name </th> <th> College </th>{" "}
              <th> Points </th>{" "}
            </tr>{" "}
          </thead>{" "}
          <tbody>
            <ShowLeaders leaders={leaders} searchText={searchText} />
          </tbody>{" "}
        </table>{" "}
      </div>{" "}
    </div>
  );
};

export default Leaderboard;

const ShowLeaders = ({ leaders, searchText }) => {
  try {
    return (
      <>
        {" "}
        {leaders &&
          leaders
            ?.filter(
              (item) =>
                item.name.toLowerCase().includes(searchText.toLowerCase()) |
                item.collegeName
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
            )
            .map((item, index) => {
              return (
                <tr key={index}>
                  <td> {index + 1} </td> <td> {item?.name} </td>{" "}
                  <td> {item?.collegeName} </td> <td> {item?.points} </td>{" "}
                </tr>
              );
            })}{" "}
      </>
    );
  } catch {
    return "Loading...";
  }
};
