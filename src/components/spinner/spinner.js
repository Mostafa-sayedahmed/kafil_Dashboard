import Spinner from 'react-bootstrap/Spinner';
import './spinner.css'
import { useTranslation } from "react-i18next";

function SpinnerLoading() {
  
  const { t } = useTranslation();

  return (
    <Spinner animation="border" role="status" className='m-3'>
      <span className="visually-hidden">{t("Loading")}</span>
    </Spinner>
  );
}

export default SpinnerLoading;