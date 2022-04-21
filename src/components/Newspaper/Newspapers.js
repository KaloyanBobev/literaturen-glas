import React from 'react';
import './newspapers.scss'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import newspapers from '../../data/newspaper.json';
import { withTranslation } from 'react-i18next';

class LegacyComponentClass extends React.Component {

    render() {
        const { t } = this.props;

        return (
            <section className="newsparers">
                <button onClick={this.props.handleChange}>{this.props.isReverse
                    ? <span>{t('newspapersPage.newest')}</span>
                    : <span>{t('newspapersPage.oldest')}</span>}</button>
                { this.props.news.reverse().map((value) => {
                    return (
                        <article key={value.href} className="row align-items-center">
                            <h2 className="col-md-3">{value.title}</h2>
                            <h3 className="col-md-4">{value.date}</h3>
                            <button className="align-self-center">
                                <a href={require(`../../newspapers/${value.href}`)} rel="noopener noreferrer" target="_blank">
                                    {t('newspapersPage.read')}
                                    <span role="img" aria-label="book"> &#128214; </span>
                                </a>
                            </button>
                            <button className="offset-md-1">
                                <a href={require(`../../newspapers/${value.href}`)} download>
                                    {t('newspapersPage.download')}
                                    <span role="img" aria-label="download"> &#8681; </span>
                                </a>
                            </button>
                        </article>
                    )
                })}
            </section>
        )
    }
}

const MyComponent = withTranslation()(LegacyComponentClass);

class Newspapers extends React.Component {
    constructor() {
        super();
        this.state = {
            isReverse: false,
            news: [],
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            news: newspapers
        })
    }

    handleChange() {
        this.setState(prevState => ({
            isReverse: !prevState.isReverse
        }));
    }

    render() {
        return (
            <MyComponent
                handleChange={this.handleChange}
                isReverse={this.state.isReverse}
                news={this.state.news} />
        )
    }
}

export default Newspapers;