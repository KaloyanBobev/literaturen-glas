import React from "react";
import ImportantMessage from "../ImportantMessage/ImportantMessage";
import CompetitionMessage from "../CompetitionMessage/CompetitionMessage";
import center from "../../data/home.json";
import "./Home.scss";
import SideNav from "../SideNav/SideNav";
import { withTranslation } from "react-i18next";

class LegacyComponentClass extends React.Component {
  render() {
    const { t } = this.props;
    return <span>{t(this.props.read)}</span>;
  }
}

const MyComponent = withTranslation()(LegacyComponentClass);

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      isTextVisible: false,
      info: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ info: center });
  }

  handleChange() {
    this.setState((prevState) => ({
      isTextVisible: !prevState.isTextVisible,
    }));
  }

  render() {
    return (
      <div className="container">
        <div className="main-container">
          <article id="home" className="row">
            <div id="first-article" className="col-md-12  offset-md-2">
              <ImportantMessage />
              {/* <CompetitionMessage /> */}
              <h1>{this.state.info.mainHeader}</h1>
              <h2>{this.state.info.teacher}</h2>
              <div>{this.state.info.firstEdition}</div>
              {this.state.isTextVisible ? (
                <p>
                  <div>{this.state.info.fundation}</div>
                  <div>{this.state.info.newspaper}</div>
                  <div>{this.state.info.contract}</div>
                </p>
              ) : null}
              <a href="#first-article" onClick={this.handleChange}>
                {this.state.isTextVisible ? (
                  <MyComponent read={"read.readLess"} />
                ) : (
                  <MyComponent read={"read.readMore"} />
                )}
              </a>
            </div>
          </article>
        </div>
        <SideNav />
      </div>
    );
  }
}

export default Home;
