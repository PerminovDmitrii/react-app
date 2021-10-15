import React from 'react';
import './App.css';
import BasicInfoInt from "./models/basic-info";
import WorkInfoInt from "./models/work-experience";
import Education from "./models/education";
import BasicInfo from "./components/basic-info";
import WorkExperience from "./components/work-experience";

export default class App extends React.Component<{}, {
    stage: string,
    basic: BasicInfoInt | false,
    workExp: WorkInfoInt[] | false,
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

    updateBasic(basic: BasicInfoInt): void {
        console.log(basic);
        this.setState({basic: basic});
    }

    updateExp(exp: WorkInfoInt[]): void {
        this.setState({workExp: exp});
    }

    updateEdu(edu: Education): void {
        this.setState({edu: edu});
    }

    render() {
        const stage: string = this.state.stage;
        if (stage === 'basic') {
            return <BasicInfo updateBasic={this.updateBasic} updateStage={this.updateStage}/>;
        } else if (stage === 'workExp') {
            return <WorkExperience updateExp={this.updateExp} updateStage={this.updateStage}/>;
        } else if (stage === 'edu') {
            return false;
        }
    }
}
