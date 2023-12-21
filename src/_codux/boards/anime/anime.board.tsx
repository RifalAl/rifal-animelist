import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Anime from '../../../components/Anime/Anime.jsx';

export default createBoard({
    name: 'Anime',
    Board: () => <Anime />,
    isSnippet: true,
});
