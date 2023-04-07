import React, { useState, useEffect } from 'react';

import * as St from '../Pages/CreateRoom/styles';

const PreviewImages = ({ FileList }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const loadImage = (file) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result);
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        };

        Promise.all(Object.values(FileList).map(loadImage)).then((results) => {
            setImages(results);
        });
    }, [FileList]);

    return images.map((src, index) => <St.PreviewImage key={index} src={src} alt="Image" />);
};

export default PreviewImages;
