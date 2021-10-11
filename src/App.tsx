import React from 'react';
import './App.css';
import Overview from "./models/overview";
import BasicInfo from "./models/basic-info";
import Experience from "./models/work-experience";
import Education from "./models/education";

const enum STAGES {
    basic = 'basic information',
    workExp = 'work experience',
    edu = 'education',
    overview = 'overview'
};

export default class App extends React.Component<{}, {
    stage: string,
    basic: BasicInfo | false,
    workExp: Experience | false,
    edu: Education | false
}> {

    constructor(props: {}) {
        super(props);
        this.state = {stage: 'basic', basic: false, workExp: false, edu: false};
        this.updateStage = this.updateStage.bind(this);
        this.updateBasic = this.updateBasic.bind(this);
        this.updateExp = this.updateExp.bind(this);
        this.updateEdu = this.updateEdu.bind(this);
    }

    updateStage(stage: string): void {
        this.setState({stage: stage});
    }

    updateBasic(basic: BasicInfo): void {
        this.setState({basic: basic});
    }

    updateExp(exp: Experience): void {
        this.setState({workExp: exp});
    }

    updateEdu(edu: Education): void {
        this.setState({edu: edu});
    }

    render() {
        return (
           <div>{this.state.stage}</div>
        );
    }
}
