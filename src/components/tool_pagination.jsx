import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

import "../css/pagination.css";

const ToolPagination = ({page, total, getPage}) => {
    return (
        <div className={'pagination'}>
            <button onClick={() => getPage(page - 1)} disabled={page === 1}>
                <FontAwesomeIcon icon={faAngleLeft}/> 이전
            </button>
            <button onClick={() => getPage(page + 1)} disabled={page === total}>
                다음 <FontAwesomeIcon icon={faAngleRight}/>
            </button>
        </div>
    );
}
export default ToolPagination;