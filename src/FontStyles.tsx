import { createGlobalStyle } from 'styled-components';

import PoppinsRegular from './assets/fonts/poppins/Poppins-Regular.ttf';

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: Poppins-Regular;
        src: url(${PoppinsRegular})
    }

    @font-face {
        font-family: SpaceMono-Bold;
        src: './assets/fonts/space-mono/SpaceMono-Bold.ttf';
    }

    @font-face {
        font-family: SpaceMono-Regular;
        src: './assets/fonts/space-mono/SpaceMono-Regular.ttf';
    }
`;

export default FontStyles;
