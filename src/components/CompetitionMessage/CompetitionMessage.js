import React from "react";

import Competition from "./Competition";

import { withTranslation } from "react-i18next";

class LegacyComponentClass extends React.Component {
  render() {
    const { t } = this.props;

    return (
      <div id="message">
        <h2 className="bold">{t("competitionPage.competition")}</h2>
        <h2 className="bold">{t("competitionPage.ceremony")}</h2>
        {this.props.isTextVisible ? (
          <Competition isVisible={this.props.isTextVisible} />
        ) : null}
        <button onClick={this.props.handleChange}>
          {this.props.isTextVisible ? (
            <span>{t("read.readLess")}</span>
          ) : (
            <span>{t("read.readMore")}</span>
          )}
        </button>
      </div>
    );
  }
}

const MyComponent = withTranslation()(LegacyComponentClass);

class CompetitionMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      isTextVisible: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState((prevState) => ({
      isTextVisible: !prevState.isTextVisible,
    }));
  }

  render() {
    return (
      <MyComponent
        handleChange={this.handleChange}
        isTextVisible={this.state.isTextVisible}
      />
    );
  }
}

export default CompetitionMessage;
