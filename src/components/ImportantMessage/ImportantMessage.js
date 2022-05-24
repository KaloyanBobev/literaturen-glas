import React from 'react';
import './ImportantMessage.scss';
import Message from './Message';

import { withTranslation } from 'react-i18next';

class LegacyComponentClass extends React.Component {

    render() {
        const { t } = this.props;

        return (
            <div id="message">
                <h2 className='bold'>{t('messagePage.competition')}</h2>
                <h2 className='bold'>{t('messagePage.ceremony')}</h2>
                {this.props.isTextVisible
                    ? <Message isVisible={this.props.isTextVisible} />
                    : null}
                <button onClick={this.props.handleChange}>
                    {this.props.isTextVisible
                        ? <span>{t('read.readLess')}</span>
                        : <span>{t('read.readMore')}</span>}</button>
            </div>
        )
    }
}

const MyComponent = withTranslation()(LegacyComponentClass)

class ImportantMessage extends React.Component {
    constructor() {
        super();
        this.state = {
            isTextVisible: false,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState(prevState => ({
            isTextVisible: !prevState.isTextVisible
        }));
    }

    render() {

        return (
            <MyComponent
                handleChange={this.handleChange}
                isTextVisible={this.state.isTextVisible}
            />
        )
    }
}

export default ImportantMessage;