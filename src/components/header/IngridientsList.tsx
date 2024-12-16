import { useSelector } from "react-redux";
import {RootState} from '../../redux/store'

function IngridientsList() {
  const ingredient=useSelector((state:RootState)=>state.searchInput.searchValue)
  return (
    
      <div className=" py-4 dark:bg-gray-900 flex items-center justify-center">
        <div className=" min-w-80 h-10 w-auto px-4 flex items-center justify-center bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg shadow-lg">
          {ingredient}
        </div>
        {/* <button
          className="ml-4 px-4 py-2 text-sm font-medium bg-blue-500 text-white rounded-md hover:bg-blue-600" 
        >
          search
        </button> */}
      </div>
    
  );
}

export default IngridientsList;
