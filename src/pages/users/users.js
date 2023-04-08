import React from "react";
import Table from 'react-bootstrap/Table';
import * as Icon from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';



import "./users.css";
const Users = () => {
  return   (
    <>
     <Alert className='p-3 my-3 col-12' variant='success'>
                        فى 5 ثواني, إربط حسابك بـ تلجرام/تويتر لتستلم تنبيهات فورية عند شراء خدماتك إذا كنت بائع و أخري هامة إذا كنت مشتري
                        <Button className="me-4"  variant="success" href="https://twitter.com/?lang=en" target="_blank"><Icon.Twitter  /></Button>
                        <Button className="me-2" variant="success" href="https://web.telegram.org/z/" target="_blank"><Icon.Telegram  /></Button>
                    </Alert>
    <Table className="my-5 p-3 text-center" striped bordered hover>
      <thead>
        <tr>
          <th>الرقم الوظيفي</th>
          <th>الاسم الاول</th>
          <th>اسم العائلة</th>
          <th>اسم المستخدم</th>
          <th>تعديل </th>
          <th>ازالة</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>عمر</td>
          <td>عبد المقصود</td>
          <td>@omar</td>
          <td><Button variant="success"><Icon.Pen /></Button>{' '}</td>
          <td><Button variant="danger"><Icon.Trash /></Button>{' '}</td>
        </tr>
        <tr>
          <td>2</td>
          <td>علي</td>
          <td>جمال الدين</td>
          <td>@fat</td>
          <td><Button variant="success"><Icon.Pen /></Button>{' '}</td>
          <td><Button variant="danger"><Icon.Trash /></Button>{' '}</td>
        </tr>
        <tr>
          <td>3</td>
          <td>علياء</td>
          <td>سيف النصر</td>
          <td>@twitter</td>
          <td><Button variant="success"><Icon.Pen /></Button>{' '}</td>
          <td><Button variant="danger"><Icon.Trash /></Button>{' '}</td>
        </tr>
        <tr>
          <td>4</td>
          <td >  جميل</td>
          <td >  منتصر</td>
          <td>@gamilll</td>
          <td><Button variant="success"><Icon.Pen /></Button>{' '}</td>
          <td><Button variant="danger"><Icon.Trash /></Button>{' '}</td>
        </tr>
        <tr>
          <td>5</td>
          <td>محمد</td>
          <td>سيف </td>
          <td>@saifp</td>
          <td><Button variant="success"><Icon.Pen /></Button>{' '}</td>
          <td><Button variant="danger"><Icon.Trash /></Button>{' '}</td>

        </tr>
        <tr>
          <td>6</td>
          <td>دنيا</td>
          <td>احمد </td>
          <td>@doniapp</td>
          <td><Button variant="success"><Icon.Pen /></Button>{' '}</td>
          <td><Button variant="danger"><Icon.Trash /></Button>{' '}</td>
        </tr>
        <tr>
          <td>7</td>
          <td>ليلى</td>
          <td>سيف النصر</td>
          <td>@Laila</td>
          <td><Button variant="success"><Icon.Pen /></Button>{' '}</td>
          <td><Button variant="danger"><Icon.Trash /></Button>{' '}</td>

        </tr>
        <tr>
          <td>8</td>
          <td>جميلة</td>
          <td>الزقازيقي </td>
          <td>@gamiladd</td>
          <td><Button variant="success"><Icon.Pen /></Button>{' '}</td>
          <td><Button variant="danger"><Icon.Trash /></Button>{' '}</td>

        </tr>
        <tr>
          <td>9</td>
          <td>طارق</td>
          <td>سيف</td>
          <td>@tarekoo</td>
          <td><Button variant="success"><Icon.Pen /></Button>{' '}</td>
          <td><Button variant="danger"><Icon.Trash /></Button>{' '}</td>

        </tr>
        <tr>
          <td>10</td>
          <td>محمود</td>
          <td>علي</td>
          <td>@mahmoudff</td>
          <td><Button variant="success"><Icon.Pen /></Button>{' '}</td>
          <td><Button variant="danger"><Icon.Trash /></Button>{' '}</td>

        </tr>
        <tr>
          <td>11</td>
          <td>جميل</td>
          <td>منتصر</td>
          <td>@gamilll</td>
          <td><Button variant="success"><Icon.Pen /></Button>{' '}</td>
          <td><Button variant="danger"><Icon.Trash /></Button>{' '}</td>

        </tr>
        <tr>
          <td>12</td>
          <td >  محمد</td>
          <td >  سيف </td>
          <td>@saifp</td>
          <td><Button variant="success"><Icon.Pen /></Button>{' '}</td>
          <td><Button variant="danger"><Icon.Trash /></Button>{' '}</td>

        </tr>
        <tr>
          <td>13</td>
          <td >  دنيا</td>
          <td >  احمد </td>
          <td>@doniapp</td>
          <td><Button variant="success"><Icon.Pen /></Button>{' '}</td>
          <td><Button variant="danger"><Icon.Trash /></Button>{' '}</td>

        </tr>
        <tr>
          <td>14</td>
          <td >  ليلى</td>
          <td >  سيف النصر</td>
          <td>@Laila</td>
          <td><Button variant="success"><Icon.Pen /></Button>{' '}</td>
          <td><Button variant="danger"><Icon.Trash /></Button>{' '}</td>

        </tr>
        <tr>
          <td>15</td>
          <td >  جميلة</td>
          <td >  الزقازيقي </td>
          <td>@gamiladd</td>
          <td><Button variant="success"><Icon.Pen /></Button>{' '}</td>
          <td><Button variant="danger"><Icon.Trash /></Button>{' '}</td>

        </tr>
        <tr></tr>
      </tbody>
    </Table>
    </>
  );
};

export default Users;


