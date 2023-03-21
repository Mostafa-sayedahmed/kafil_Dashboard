import React from "react";
import Smpilcard from "../../components/smpilcard/smpilcard";
import "../serves/serves.css";
function Serves() {
  return (
    <div className=" ">
      <div className="bg-white border border-secondary-subtle  rounded ">
        <h1 className="m-2">الخدمات</h1>
      </div>
      <div className="B-serves p-5 ">
        <Smpilcard cardName="الاجمالى الخدمات" cardValue="0" />
        <Smpilcard cardName="بانتظار موافقة الادارة" cardValue="0" />
        <Smpilcard cardName="يحتاج الى تعديلات" cardValue="0" />
        <Smpilcard cardName="نشط" cardValue="0" />
        <Smpilcard cardName=" متوقف مؤقتا" cardValue="0" />
        <Smpilcard cardName="مرفوض" cardValue="0" />
      </div>
      <div className="bg-white border border-secondary-subtle mt-3 rounded">
        <h1 className="m-2">الخدمات</h1>
      </div>
    </div>
  );
}
export default Serves;
