import React, { Component, Suspense } from "react";
import Preloader from "../Components/Preloader/main";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "mdbreact/dist/css/mdb.css";
import "../common.css";

class Main extends Component {
    render() {
        const SiteContent = React.lazy(() => import("../Layouts/Default"))

        return (
            <Suspense fallback={<Preloader />}>
                <SiteContent />
            </Suspense>
        );
    }
}

export default Main;