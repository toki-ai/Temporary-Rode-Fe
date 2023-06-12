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
                    enable: false,
                    mode: 'repulse',
                },
                onHover: {
                    enable: false,
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
                value: 80,
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
                src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAjCAYAAACD1LrRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKFSURBVHgBvZdbiE1RGMe/MSPTyOhMlIdREqWRktI8KJE8SHkRyoNL8aY8KDx5FEWR4sULE+VJKRJeCA9ukWnQpHG/zv1Sc//m/7X/a2Z15nL2Pmet+dfv4ey99vqts/vWZYuqXgQPQJ3MZiD8q0mGwBmQk9kIxcOgiwP4AfaDMokZCP6BP2AtuMlBWJ6DdRIrFP8GNfy9GbylfBRcBrUSOhT/Agu9a9XgJF+7pQUcBlUSKuisNV/s3VsGrvOfG0/ABgkRT7xgmvtlYCt4RHkfuAZWSSmh+CeYX6BdFTjA9pbv4CiolCLFbWnEXvtacAH0cwCvwTbJGjzUTnGmwkH7evCG8hFwAyzO0kE7X9s8yRg8Uw4Ocjoq+zoBKtI83FGs2OujBlzhsmtpApsKPdQJvpUi9vpaCR7rRO6BFTOJv6Z6PekHYNX/hXIrwmOTpqsmm0NQMfutBOdBNwfwGexSt/nwhonLJUI02XzueqvfbbDaiVs04jZo9QNOc9pZHtrFHhNLpKDvJeAsZ49yzdhpN3pjiNHnXHAcNFNof/AcWOoamLhZAsWKFGwH772qvmVTLb9hMDH6Wa/JycWdYl6AjVPWjybbXEliPL9Gk7V6lMJXYMeMBUvxRykieG6RJkcjd1D8D/Zqmp2O4g+SIWifA0e46ikr9pKm3FpdJ/1pxWg3B+wDnygcAA3jlZpx9CZuLNCmgkXy1KvU+6Beik0hMQunwatUK5zdWupKx9fVOMX1Ok54J7R5eUhCheJ33m+r1FOsULfi2ApULSFDsX05uGNME4V2mrgKlkuMUGBnppcUDoI7GvuzVSfOSZZnYItNG4kdTQ56Ni/3aOxP0zxxLtOKEyhj+6MNUdzXpEYAAAAASUVORK5CYII=',
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
