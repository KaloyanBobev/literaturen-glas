import React, { Suspense } from "react";
import center from "../../data/home.json";
import "./AboutUs.scss";
import { withTranslation } from "react-i18next";

//class multilanguage
class LegacyComponentClass extends React.Component {
  render() {
    const { t } = this.props;

    return <span>{t(this.props.read)}</span>;
  }
}

const MyComponent = withTranslation()(LegacyComponentClass);
//class About us
class AboutUs extends React.Component {
  constructor() {
    super();
    //Text visibility state
    this.state = {
      isTextVisible: false,
      info: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }
  //updating the info injecting the data from home.json
  componentDidMount() {
    this.setState({ info: center });
  }
  //toggle the text visibility
  handleChange() {
    this.setState((prevState) => ({ isTextVisible: !prevState.isTextVisible }));
  }

  render() {
    return (
      /* creating the section  with heading and two paragraphs*/
      <section id="second-article" className="col-md-8 offset-md-2">
        <h2>{this.state.info.centerHeading}</h2>
        <div>{this.state.info.fundationCenter}</div>
        <div>{this.state.info.history}</div>
        {/*this two paragraphs is hidden but can be reviled */}
        {this.state.isTextVisible ? (
          <div>
            <div>{this.state.info.art}</div>
            <div>{this.state.info.base}</div>
          </div>
        ) : null}
        {/*Show the loading will information is loading */}
        <Suspense fallback="loading">
          {/*the link who toggle the visability of the second two paragraphs with click event */}
          <a href="#second-article" onClick={this.handleChange}>
            {/*ternary operatior to change the less or more  */}
            {this.state.isTextVisible ? (
              <MyComponent read={"read.readLess"} />
            ) : (
              <MyComponent read={"read.readMore"} />
            )}
          </a>
        </Suspense>
      </section>
    );
  }
}

export default AboutUs;
