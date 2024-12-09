import React, { useState } from 'react';
import { FaSearch, FaCheckCircle } from 'react-icons/fa'; // react-icons se search aur check circle icon import kiya
import ingridients_data from '../../constants/unique_ingridients.json'
import { setSearchValue } from '../../redux/searchSlice';
import { AppDispatch} from '../../redux/store'
import { useDispatch } from 'react-redux';

const IngredientsInput: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [showList, setShowList] = useState<boolean>(false);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState<string[]>([]);
  const dispatch: AppDispatch = useDispatch();
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setShowList(e.target.value.length > 0); // List ko show karna jab input mein kuch ho
    fetchInputData(e.target.value);
  };

  const fetchInputData=(input: string)=>{
    if(!input)
    {
      setIngredients([]);
      return;
    }
    const filteredIngredients = ingridients_data.filter((i)=>{
      const regex = new RegExp(input, "i"); // 'i' flag for case-insensitive match
      return regex.test(i.name);
    }).slice(0,10);
    console.log(filteredIngredients);
    setIngredients(filteredIngredients.map((i) => i.name));
    
  }
  const handleSlectedItem=(index:string)=>{
    let updatedSelectedItems: string[] = [];
    if(selectedItem.includes(index))
    {
      updatedSelectedItems = selectedItem.filter((i) => i !== index);
    }
    else
    {
      updatedSelectedItems = [...selectedItem, index];
    }
    // console.log("selected item",selectedItem);
    setSelectedItem(updatedSelectedItems);
    dispatch(setSearchValue(updatedSelectedItems.join(",")))
    // Add selected ingredient to the list here
    selectedItem.map((i)=>{
      console.log("selected item",i);
      // Add selected ingredient to the list here
    })
  }
  return (
    <div className='flex justify-center items-center'>
    <div className="relative w-full max-w-xs">
      {/* Search Box with icon */}
      <div className="flex items-center space-x-2 p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600">
        <FaSearch className="text-gray-500 dark:text-gray-300" size={20} />
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
          className="w-full p-2 bg-transparent text-gray-700 dark:text-gray-200 focus:outline-none"
        />
      </div>

      {/* List of items */}
      {showList && (
        <ul className="absolute z-10 w-full max-w-xs mt-2 bg-white dark:bg-gray-800 border rounded-lg shadow-lg dark:border-gray-600">
          {ingredients.map((item, index) => (
            <li
              key={index}
              className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300"
              onClick={()=>handleSlectedItem(item)}
            >
              {/* Green checked icon on the left side */}
              {selectedItem.includes(item) && <FaCheckCircle className="text-green-500 mr-2" />}
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
};

export default IngredientsInput;
