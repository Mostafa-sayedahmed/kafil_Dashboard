import react from "react ";

import React from "react";

const Card = (props) => {
  return (
    <>
      <table>
        <tr>
          <th scope="row">{props.hash}</th>
          <td className="text-nowrap p-2">
            <i
              class="fa-solid fa-list-check ms-2"
              style={{ color: "#9ca1ab" }}
            ></i>
            {props.NameProject}
          </td>
          <td className="text-nowrap p-2">
            <i class="fa-solid fa-user ms-2" style={{ color: "#9ca1ab" }}></i>
            {props.NamePerson}
          </td>
          <td className="text-nowrap p-2">
            <i
              class="fa-regular fa-clock ms-2"
              style={{ color: "#9ca1ab" }}
            ></i>
            منذ {props.Time} ساعات
          </td>
          <td className="text-nowrap p-2">
            <i
              class="fa-solid fa-money-bill-1-wave ms-2"
              style={{ color: " #9ca1ab" }}
            ></i>
            {props.budget}
          </td>
          <td>
            <button className="btn btn-outline-danger p-2 rounded">
              Delete
            </button>
          </td>
        </tr>
      </table>
    </>
  );
};

export default Card;
