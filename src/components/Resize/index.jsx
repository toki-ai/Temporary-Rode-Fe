import React, { useEffect, useState } from 'react';

import { ResizeStyle } from './style';

function getWindowDimensions() {
    const { innerWidth: width } = window;
    return {
        width,
    };
}
export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}
export const Resize = () => {
    return (
        <div className="w-100 vh-100">
            <ResizeStyle style={{ height: '100vh' }}>
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="box-style mw-50 d-flex flex-column justify-content-center align-items-center">
                        <div>
                            <iframe
                                src="https://giphy.com/embed/RM0FFEcOLBzEjtrbCK"
                                width="200"
                                height="200"
                                frameBorder="0"
                                class="giphy-embed"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <h2 className="color-primary">Sorry!</h2>
                        <span>We don't support Tablet and Mobile device.</span>
                        <span>Please use Laptop or Desktop instead.</span>
                    </div>
                </div>
            </ResizeStyle>
        </div>
    );
};
