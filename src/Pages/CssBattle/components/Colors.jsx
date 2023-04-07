import CopyToClipboard from 'react-copy-to-clipboard';

import { toastSuccess } from '../../../components/Toast';
import { BoxColor, CircleColor, ColorItem, TextColor } from '../styled';

// const listOfColor = colors.map((color) => (
//     <CopyToClipboard key={color} text={color} onCopy={() => toastSuccess('Copying💪')}>
//         <button className="color" key={color} value={color}>
//             <div className="color-demo" style={{ background: color }}></div>
//             <h5 className="color-name">{color}</h5>
//         </button>
//     </CopyToClipboard>
// ));
const Colors = ({ colors }) => {
    const LIST_COLOR = colors?.split(',');

    return (
        <BoxColor>
            {LIST_COLOR.map((color) => (
                <CopyToClipboard key={color} text={color} onCopy={() => toastSuccess('Copying💪')}>
                    <ColorItem key={color}>
                        <CircleColor color={color}></CircleColor>
                        <TextColor color={color}>{color}</TextColor>
                    </ColorItem>
                </CopyToClipboard>
            ))}
        </BoxColor>
    );
};

export default Colors;
