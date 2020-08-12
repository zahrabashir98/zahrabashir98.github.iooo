import { Component } from "react";
import ResumePDF from "../Assets/ZahraBashir_CV.pdf";

class Resume extends Component {
    render() {
        window.location.href = ResumePDF;
        return "Please wait... Redirecting you to Zahra Bashir's Resume PDF...";
    }
}

export default Resume;
