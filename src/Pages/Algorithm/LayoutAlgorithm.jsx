import { useRef } from 'react';

import { Tabs } from './styled';

const TestLayout = () => {
    let ref = useRef();
    // let tabHeaderRef = document.querySelectorAll('.tabs .tab-header > div');
    if (ref) {
        let tabHeaderRef = ref.current?.querySelectorAll('.tab-header > div');
        let tabContentRef = ref.current?.querySelectorAll('.tab-content > div');

        for (let i = 0; i < tabHeaderRef?.length; i++) {
            tabHeaderRef[i].addEventListener('click', function () {
                document.querySelector('.tabs .tab-header > .active')?.classList.remove('active');
                tabHeaderRef[i]?.classList.add('active');
                document.querySelector('.tabs .tab-content > .active')?.classList.remove('active');
                tabContentRef[i]?.classList.add('active');
            });
        }
    }

    return (
        <Tabs>
            <div className="tabs" ref={ref}>
                <div className="tab-header">
                    <div>tab 1</div>
                    <div>tab 2</div>
                    <div>tab 3</div>
                </div>
                <div className="tab-content">
                    <div className="active">
                        <h2> stes1 </h2>
                    </div>
                    <div>
                        <h2> stes2</h2>
                    </div>
                    <div>
                        <h2> stes3</h2>
                    </div>
                    <div>
                        <h2> stes4</h2>
                    </div>
                </div>
            </div>
        </Tabs>
    );
};

export default TestLayout;
