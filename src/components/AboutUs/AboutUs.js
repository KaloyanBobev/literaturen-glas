import React, { Suspense } from 'react';
import center from '../../data/home.json';
import './AboutUs.scss';
import { withTranslation } from 'react-i18next';


class LegacyComponentClass extends React.Component {

    render() {
        const { t } = this.props;

        return (
            <span>{t(this.props.read)}</span>
        )
    }
}

const MyComponent = withTranslation()(LegacyComponentClass)

class AboutUs extends React.Component {

    constructor() {
        super();
        this.state = {
            isTextVisible: false,
            info: []
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        this.setState({ info: center })
    }

    handleChange() {
        this.setState(prevState => ({ isTextVisible: !prevState.isTextVisible }))
    }

    render() {

        return (
            <section id="second-article" className="col-md-8 offset-md-2">
                <h2>{this.state.info.centerHeading}</h2>
                <div>{this.state.info.fundationCenter}</div>
                <div>{this.state.info.history}</div>
                {this.state.isTextVisible
                    ? <div>
                        <div>{this.state.info.art}</div>
                        <div>{this.state.info.base}</div>
                    </div>
                    : null}
                <Suspense fallback="loading">
                    <a href="#second-article" onClick={this.handleChange}>
                        {this.state.isTextVisible
                            ? <MyComponent read={'read.readLess'} />
                            : <MyComponent read={'read.readMore'} />}</a>
                </Suspense>
            </section>
        )
    }
}

export default AboutUs;