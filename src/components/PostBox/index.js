/* eslint-disable react/no-array-index-key */
import React, { useCallback, memo, useRef, useState } from 'react';
import TextInput from '../TextInput';
import Avatar from '../Avatar';
import ColorCard from '../ColorCard';
import CardImage from '../CardImage';
import FilterChip from '../FilterChip';
import PopupCard from '../PopupCard';
import Button from '../Button';
import './index.css';
import CardContent from '../CardContent';

const colorCards = [
  { id: 1, background: 'red' },
  { id: 2, background: 'pink' },
  { id: 3, background: 'yellow' },
  { id: 4, background: '#fff' },
  { id: 5, background: 'green' },
];

const filterChips = [
  { text: 'Tag Friends' },
  { text: 'Check In' },
  { text: 'GIF' },
  { text: 'Tag Event' },
];

const PostBox = ({ handlePost }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [popups, setPopup] = useState({});
  const captionRef = useRef(null);
  const cardRef = useRef(null);

  const handleColorCard = (e) => {
    const { background } = e.target.style;
    cardRef.current.style.background = background;
  };

  const handlePopup = (filterName) => {
    if (filterName === 'GIF') {
      setPopup((prevObj) => {
        if (prevObj[filterName]) {
          const duplicateObj = { ...prevObj };
          delete duplicateObj[filterName];
          return { ...duplicateObj };
        }
        const obj = {};
        obj[filterName] = true;
        return { ...obj };
      });
    }
  };

  const handleSelectedItem = (filterName, item) => {
    const { title, images, id } = item;
    setSelectedItem({ title, ...images.preview_webp, id });
    handlePopup(filterName);
  };

  const memoizedHandlePopup = useCallback((args) => handlePopup(args), []);

  return (
    <article className="PostBox__root" ref={cardRef}>
      <CardContent className="PostBox__inputContainer">
        <div>
          <Avatar width="5rem" />
          <TextInput
            name="search"
            type="text"
            placeholder="Write something here..."
            className="PostBox__input"
            ref={captionRef}
          />
        </div>
        <div className="PostBox__post">
          {selectedItem ? <CardImage url={selectedItem.url} alt={selectedItem.title} /> : null}
        </div>
      </CardContent>

      <CardContent className="PostBox__colorCardContainer">
        {colorCards.map((card) => (
          <ColorCard key={card.id} background={card.background} handleColorCard={handleColorCard} />
        ))}
      </CardContent>

      <CardContent className="PostBox__filterContainer">
        {filterChips.map((chip, idx) => (
          <FilterChip key={idx} text={chip.text} handlePopup={memoizedHandlePopup}>
            {popups[chip.text] ? <PopupCard handleSelectedItem={handleSelectedItem} /> : null}
          </FilterChip>
        ))}
      </CardContent>

      <CardContent className="PostBox__actionContainer">
        <Button
          type="button"
          variant="contained"
          onClick={(e) => {
            const value = captionRef.current?.value;
            if (value && selectedItem) {
              handlePost({ caption: value, ...selectedItem });
            }
            e.stopPropagation();
          }}
        >
          Post
        </Button>
      </CardContent>
    </article>
  );
};

export default memo(PostBox);
