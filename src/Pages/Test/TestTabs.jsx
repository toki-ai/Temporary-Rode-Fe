import './test.css';

const TestTabs = () => {
    return (
        <section className="main-content">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-10 mb-5">
                        <h1 className="text-center text-uppercase">
                            Bootstrap Vertical Tabs with Text and Images
                        </h1>
                    </div>
                </div>

                <div className="row d-flex justify-content-center">
                    <div className="col-sm-10 text-center">
                        <div className="d-flex flex-row">
                            <div className="d-flex align-items-start">
                                <div
                                    className="nav flex-column nav-pills me-3"
                                    id="v-pills-tab"
                                    role="tablist"
                                    aria-orientation="vertical"
                                >
                                    <button
                                        className="nav-link active"
                                        id="v-pills-home-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#v-pills-home"
                                        type="button"
                                        role="tab"
                                        aria-controls="v-pills-home"
                                        aria-selected="true"
                                    >
                                        <div className="circle-icon">
                                            {' '}
                                            <i className="fa fa-home"></i>{' '}
                                        </div>
                                        <h5>Home</h5>
                                    </button>
                                    <button
                                        className="nav-link"
                                        id="v-pills-profile-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#v-pills-profile"
                                        type="button"
                                        role="tab"
                                        aria-controls="v-pills-profile"
                                        aria-selected="false"
                                    >
                                        <div className="circle-icon">
                                            {' '}
                                            <i className="fa fa-user" aria-hidden="true"></i>{' '}
                                        </div>
                                        <h5>Profile</h5>
                                    </button>
                                    <button
                                        className="nav-link"
                                        id="v-pills-messages-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#v-pills-messages"
                                        type="button"
                                        role="tab"
                                        aria-controls="v-pills-messages"
                                        aria-selected="false"
                                    >
                                        <div className="circle-icon">
                                            {' '}
                                            <i
                                                className="fa fa-commenting-o"
                                                aria-hidden="true"
                                            ></i>{' '}
                                        </div>
                                        <h5>Messages</h5>
                                    </button>
                                    <button
                                        className="nav-link"
                                        id="v-pills-settings-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#v-pills-settings"
                                        type="button"
                                        role="tab"
                                        aria-controls="v-pills-settings"
                                        aria-selected="false"
                                    >
                                        <div className="circle-icon">
                                            {' '}
                                            <i className="fa fa-cogs" aria-hidden="true"></i>{' '}
                                        </div>
                                        <h5>Settings</h5>
                                    </button>
                                </div>
                                <div className="tab-content" id="v-pills-tabContent">
                                    <div
                                        className="tab-pane fade show active"
                                        id="v-pills-home"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-home-tab"
                                    >
                                        <p className="text-overlay">
                                            Sed ut perspiciatis unde omnis iste natus error sit
                                            voluptatem accusantium doloremque laudantium, totam rem
                                            aperiam
                                        </p>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="v-pills-profile"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-profile-tab"
                                    >
                                        <p className="text-overlay">
                                            Neque porro quisquam est, qui dolorem ipsum quia dolor
                                            sit amet, consectetur, adipisci velit
                                        </p>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="v-pills-messages"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-messages-tab"
                                    >
                                        <p className="text-overlay">
                                            Ut enim ad minima veniam, quis nostrum exercitationem
                                            ullam corporis suscipit laboriosam, nisi ut aliquid ex
                                            ea
                                        </p>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="v-pills-settings"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-settings-tab"
                                    >
                                        <p className="text-overlay">
                                            Quis autem vel eum iure reprehenderit qui in ea
                                            voluptate velit esse quam nihil molestiae consequatur,
                                            vel illum qui dolorem
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestTabs;
