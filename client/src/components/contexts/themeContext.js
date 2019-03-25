import {createContext} from 'react';

import themes from '../../themes/globalStyle';

const AppContext = createContext(themes.theme1);

console.log(themes.theme1);

export default AppContext;

