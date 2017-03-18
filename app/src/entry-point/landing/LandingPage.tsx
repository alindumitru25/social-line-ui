import * as React from "react";

export class LandingPage extends React.Component<{}, {}> {
    renderAbsoluteLogo() {
        return <img src="../../images/logo.png" className="LandingPage-AbsoluteLogo" />
    }

    renderLoginInput() {
        return <div className="LandingPage-LoginInput">
            <div className="LandingPage-LoginInput-Username">
                <div className="LandingPage-LoginInput-Username-ico-user ico">
                </div>
                <input type="text" defaultValue="type e-mail address" className="LandingPage-LoginInput-Username-input" />
            </div>
            <div className="LandingPage-LoginInput-Password">
                <div className="LandingPage-LoginInput-Password-ico-text ico">
                </div>
                <input type="text" value="password" className="LandingPage-LoginInput-Password-input" />
            </div>
        </div>
    }

    renderSignUpText() {
        return <div className="LandingPage-SignUpText">
            SIGN UP
        </div>
    }

    render() {
        return <div className="LandingPage">
            {this.renderSignUpText()}
            {this.renderLoginInput()}
            {this.renderAbsoluteLogo()}
        </div>
    }
}