import { useRef, useContext } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useDrag, useDrop } from 'react-dnd';

import BoardContext from '../Board/context';

import { Container, Label } from './styles';

function Card({ data, index }) {
  return (
    <Draggable draggableId={data.id.toString()} index={index}>
      {(provided) => (
        <Container {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <header>
            {data.labels.map(label => <Label key={label} color={label} />)}
          </header>
          <p>{data.content}</p>
          {data.user &&
            <img src={data.user} alt="" />
          }
        </Container>
      )}
    </Draggable>
  );
}

export default Card;