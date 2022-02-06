import { useState } from 'react';

import produce from 'immer';
import BoardContext from './context';
import { Container } from './styles';
import { loadLists } from "../../services/api";

import List from '../List';
import { DragDropContext } from 'react-beautiful-dnd';

const data = loadLists();

function Board() {
    const [lists, setLists] = useState(data);

    function move(fromList, toList, from, to) {
        setLists(produce(lists, draft => {
            const dragged = draft[fromList].cards[from];

            draft[fromList].cards.splice(from, 1);
            draft[toList].cards.splice(to, 0, dragged);
        }));
    }

    function handleOnDragEnd(result) {
        if (!result.destination) return;

        const listsCp = Array.from(lists);

        if (result.source.droppableId === result.destination.droppableId) {
            let items = listsCp.filter(list => list.title === result.source.droppableId)[0].cards;
        
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItem);
        } else {
            let itemsFrom = listsCp.filter(list => list.title === result.source.droppableId)[0].cards;
            let itemsTo = listsCp.filter(list => list.title === result.destination.droppableId)[0].cards;
        
            const [reorderedItem] = itemsFrom.splice(result.source.index, 1);
            itemsTo.splice(result.destination.index, 0, reorderedItem);
        }
        
        setLists(listsCp);
    }

    return (
        <BoardContext.Provider value={{ lists, move }}>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Container>
                    {lists.map((list, index) => <List key={list.id} index={index} data={list} />)}
                </Container>
            </DragDropContext>
        </BoardContext.Provider>
    );
}

export default Board;