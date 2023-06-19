import { useCallback } from 'react';

import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

const ParticleAnimation = () => {
    const particlesInit = useCallback(async (engine) => {
        // console.log(engine);

        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        // await console.log(container);
    }, []);

    const particleOptions = {
        name: 'Data URI Images',
        interactivity: {
            events: {
                onClick: {
                    enable: false,
                    mode: 'push',
                },
                onDiv: {
                    elementId: 'repulse-div',
                    enable: true,
                    mode: 'repulse',
                },
                onHover: {
                    enable: true,
                    mode: 'bubble',
                    parallax: {
                        enable: false,
                        force: 60,
                        smooth: 10,
                    },
                },
            },
            modes: {
                bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                },
                connect: {
                    distance: 80,
                    links: {
                        opacity: 0.5,
                    },
                    radius: 60,
                },
                grab: {
                    distance: 400,
                    links: {
                        opacity: 1,
                    },
                },
                push: {
                    quantity: 4,
                },
                remove: {
                    quantity: 2,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: '#ffffff',
            },
            move: {
                direction: 'none',
                enable: true,
                speed: 2,
            },
            number: {
                density: {
                    enable: true,
                },
                limit: 0,
                value: 50,
            },
            opacity: {
                value: 0.5,
            },
            rotate: {
                animation: {
                    enable: true,
                    speed: { min: 10, max: 15 },
                    sync: false,
                },
                direction: 'random',
                value: {
                    min: 0,
                    max: 360,
                },
            },
            shape: {
                options: {
                    image: [
                        {
                            name: 'triangle',
                        },
                        {
                            name: 'hexagon',
                        },
                        {
                            name: 'x-blue',
                        },
                    ],
                },
                type: 'image',
            },
            size: {
                value: 16,
            },
        },
        preload: [
            {
                name: 'triangle',
                src: 'data:image/png;base64,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',
                width: 32,
                height: 32,
            },
            {
                name: 'hexagon',
                src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAkCAYAAADLsGk3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAR2SURBVHgBxZh9aFVlHMe/5+yKb7hW2toLw2xFLaRMFDIji6Bo1Vq1llQYSTGqoWQvGCZd6d3UVmtRIUhBaxslWLD6s1dK8A9BCyVZg224mWvWUJtu9/R55tm6bXd7nt17d+8XPve3nfN7fs/vd+95Xs4jOSgIggI4DjcrA6KfO6ADLlA6RcDt8IUyKPprhdeVLhGsDM7Axcqg6O9yOA2LlaoI4sFueENZEP3ugGaTh1IRASqhG2YrC6LfknBs3qZkReM8OAyPKIui/1r4CSKT+XmTBNiEqfQ8b7msvUV9dZdVKRZzfwQ8f1BF939uDX2ugO+hkVzqJww3QeOFmB9hNY1/kE09TTWK+e9rqvJUo4LqD21u5HMLphGWkE9n4lCJG76HyaXRQ7Kpe3e+NLSfRoWauo6pq2+RltWcmswpHOxN0ElOTyfy8RM0WoapghfkouDM5iSLMMpXUZ61H5IPMC/BWjMtJ/SJ/yes3DxSrTR+WTb1NJUqlvMLLWcqWXnq18DZJVr4YJvNlfxew1xNbuVj7439RR6GAnhbTsqpT6mI4ew0TzNn1Dt6vwmLKejOsTdGC+FmLmYLbKbifltE9bTcrVgK83u8ApWr49MbbW7k9ScmCnVhvqOK/0U2QBvOn9gCKmjJ0ZDSu9pHchq0b98MB8+P4A+oib84XAjVLcKsg6fkom6K9nSZ0qsrVdi2xubEFz2EeQ6i5D1/9Lr54EIL5hhOtbZA6mpcID9iBuY8pVueTjDwL2Hg99lcyfljjD+yRPhcuBZ7HWyVi/zIDk1HEcPZKU+RyCZH741w+8ju2OxuD2J3Udl2a9OOz65SJLZfk2xtUldwUoPeCpVUH7B6BkEUcyu5rzBj5DCUyEVzYyco4aSmU4HXx8j9y9G7FH43f5hf5EJsB6yisr3Wpt3N6+jMcZ1JRn6tCqsabF7kvRTzLZSZ/ZcZLGYqMwvNq3LR0OydfFpX4aTk6YgOHfzA5hbuQN6CV0Y2kSPriBkfpTjcZwui4opT8mLrNR0KgvW6KTro4Gmm6WJ4Z+SC91+M4Rcos46sdFrZj7Z8w+cqpUuB9qioutLqFgTnYQ7BM/GL9+jKzsVdGDPIHpeLApnt9D9Khzydln92g6O38TMTVOP/Q8TnFgQrMV/DUgr7TTYdbX6XEE8qVQWxOhWttu4qwh2IyesK8jsSf89L4Lxz+IbnPSqbeltzNdDfjvP5Sl7tmjtruXIrjtscw9V8gNweG3vPT+Bv3kPupZH9+Z9f/rdyfLfZbmJtdSziBsxdOreij9O4Qqi2HWO2IVuczpPyq8yMZ12FE8rzDqjgV5fpdhamDjaSX28iH3+CtttgATwgezLmNfR5JSM/eEJeNObgaWbUOWA9qBgnvoUK6IR8ZVH0XwztSR/SmfMk+ApeVBZF/9tgj1IRAa6B3vCcK+MKD7JN/5cqVRGkwRxkKwui3y/TdoBOoIvCg+zrlUGZMQFdaR2jBHsW9sIcZUCmn/AAfa3SKTOPw3dwjzIg+lkDP0+lzb8BIit/L5GP1gAAAABJRU5ErkJggg==',
                width: 50,
                height: 36,
            },
            {
                name: 'x-blue',
                src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI+SURBVHgBpZU7bxNBFIXPnXUBBQgKECDKNATsQEWBgCAaI55CINyhNPwFXrGzEFs8KhAlDRVCFEQUQJCgoAgiDUo2gEQBFQUVGNMgYe/l7MaL1+Nx1obbeHd25psz9+iMJX9Zp8XDOVW8bXmY+ODLV/xDjZZ1bw64r8AvvpaMGJyBYqMARa+F2Z2+rsOQtWNSx3OKx3zcSs4IeceNCO4kEzg4FjaHg49V9IAneMrF69uQL6HguflhcJc7+OjQdxP+bNsl3ZwF3U4oW/iQx18dLxXUzW+U3k/LnCSTCpM6RegFPq6KBxTzzRxO9Ot5vqz7OWdGEqVAHSEOBTV5E72YZGJQlSvc+VZaOXv+YNTXTTY0MsqCfifoSAJdXm5VoULlqdZws0XPw/iCL/XoPTKKkEdIKQ1DHH5Xk9dpTg84PmZFz4viOjr0eZNDUUPs4vOTpKeRURybWKrKC5uRc4F/Gtxe22Svpa2cbWmFeMXNtiBllNCohWsy52I4FSfVY2inuowaGtyG3+Oss6mhUEKcWqzJzErrzEofI6P4c8xeExpMZYWoL9hOFI/WSL4NklAn2JUoFZx0JHS2X0J7epyVqEET2qXYlSgadTTt/qAJ/avYlagWYxpdKHBUVkJjxa6rjz0+3Q8aK79K5cstSRR2GWr4D7Kv5+pTlFwxtStKqOvKHbmoG6RQ1oBD+eT4WYlylW0ohVYoDp/au32zjRq0bEM9xWfZc0PXNBoo8kIJgpvyEf9RNPQgbztZquLlH7Z6HT6HenedAAAAAElFTkSuQmCC',
                width: 10,
                height: 10,
            },
        ],
        background: {
            color: '#00071E',
            // image: '',
            // position: '50% 50%',
            // repeat: 'no-repeat',
            // size: 'cover',
        },
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particleOptions}
            // style={{ position: 'absolute', top: 0, left: 0 }}
        />
    );
};

export default ParticleAnimation;
