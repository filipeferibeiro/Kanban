import { Container } from './styles';

import { MdAdd } from 'react-icons/md';

import Card from '../Card';
import { Droppable } from 'react-beautiful-dnd';

function List({ data, index: listIndex }) {
  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && 
          <button type='button'>
            <MdAdd size={24} color="#FFF" />
          </button>
        }
      </header>

      <Droppable droppableId={data.title}>
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {data.cards.map((card, index) => 
              <Card
                key={card.id}
                listIndex={listIndex}
                index={index}
                data={card}
              />
              )}
              {provided.placeholder}
          </ul>

        )}
      </Droppable>
    </Container>
  );
}

export default List;