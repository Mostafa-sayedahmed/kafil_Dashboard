import Spinner from 'react-bootstrap/Spinner';
import './spinner.css'

function SpinnerLoading() {
  return (
    <Spinner animation="border" role="status" className='m-3'>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default SpinnerLoading;