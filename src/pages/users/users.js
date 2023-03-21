import React from "react";
import Table from 'react-bootstrap/Table';

import "./users.css";
const Users = () => {
  return   (
    <>
    <Table className="m-5 p-3 text-center" striped bordered hover>
      <thead>
        <tr>
          <th>الرقم الوظيفي</th>
          <th>الاسم الاول</th>
          <th>اسم العائلة</th>
          <th>اسم المستخدم</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>عمر</td>
          <td>عبد المقصود</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>علي</td>
          <td>جمال الدين</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td >  علياء</td>
          <td >  سيف النصر</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <td>4</td>
          <td >  جميل</td>
          <td >  منتصر</td>
          <td>@gamilll</td>
        </tr>
        <tr>
          <td>5</td>
          <td >  محمد</td>
          <td >  سيف </td>
          <td>@saifp</td>
        </tr>
        <tr>
          <td>6</td>
          <td >  دنيا</td>
          <td >  احمد </td>
          <td>@doniapp</td>
        </tr>
        <tr>
          <td>7</td>
          <td >  ليلى</td>
          <td >  سيف النصر</td>
          <td>@Laila</td>
        </tr>
        <tr>
          <td>8</td>
          <td >  جميلة</td>
          <td >  الزقازيقي </td>
          <td>@gamiladd</td>
        </tr>
        <tr>
          <td>9</td>
          <td >  طارق</td>
          <td >  سيف</td>
          <td>@tarekoo</td>
        </tr>
        <tr>
          <td>10</td>
          <td >  محمود</td>
          <td >  علي</td>
          <td>@mahmoudff</td>
        </tr>
        <tr>
          <td>11</td>
          <td >  جميل</td>
          <td >  منتصر</td>
          <td>@gamilll</td>
        </tr>
        <tr>
          <td>12</td>
          <td >  محمد</td>
          <td >  سيف </td>
          <td>@saifp</td>
        </tr>
        <tr>
          <td>13</td>
          <td >  دنيا</td>
          <td >  احمد </td>
          <td>@doniapp</td>
        </tr>
        <tr>
          <td>14</td>
          <td >  ليلى</td>
          <td >  سيف النصر</td>
          <td>@Laila</td>
        </tr>
        <tr>
          <td>15</td>
          <td >  جميلة</td>
          <td >  الزقازيقي </td>
          <td>@gamiladd</td>
        </tr>
        <tr></tr>
      </tbody>
    </Table>
    </>
  );
};

export default Users;
