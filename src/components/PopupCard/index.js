import React, { useCallback, useEffect, useState } from 'react';
import { getSearch, getTrending } from '../../services/giphyApi';
import { debounce } from '../../utils';
import CardContent from '../CardContent';
import CardImage from '../CardImage';
import TextInput from '../TextInput';
import './index.css';

const PopupCard = ({ handleSelectedItem }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getTrending()
      .then((res) => res.json())
      .then((_data) => setData(_data))
      .catch((err) => err);
  }, []);

  const handleSearch = async (e) => {
    try {
      const res = await getSearch(e);
      const resData = await res.json();
      setData(resData);
    } catch (error) {
      // No OP
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedHandleSearch = useCallback(debounce(handleSearch, 500), []);

  return (
    <div className="PopupCard__root">
      <TextInput
        type="text"
        placeholder="Search for a gif"
        onChange={debouncedHandleSearch}
        onClick={(e) => {
          e.stopPropagation();
        }}
      />
      <CardContent>
        {data?.data.map((item) => (
          <div
            key={item.id}
            className="PopupCard__imageContainer"
            onClick={(e) => {
              handleSelectedItem('GIF', item);
              e.stopPropagation();
            }}
            aria-hidden
          >
            <CardImage url={item?.images?.preview_webp?.url} alt={item?.username} />
          </div>
        ))}
      </CardContent>
    </div>
  );
};

export default PopupCard;
