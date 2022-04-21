import React, { Suspense } from 'react';
import books from '../../data/books.json';
import './Books.scss';
import Book from './Book';
import { withTranslation } from 'react-i18next';


class LegacyComponentClass extends React.Component {

    render() {
        const { t } = this.props;

        return (
            <>
                <h1 className="center">{t('booksTrans.header')}</h1>
                <label>
                    {t('booksTrans.sort')}
                </label>

            </>
        )
    }
}

const MyComponent = withTranslation()(LegacyComponentClass)

class Books extends React.Component {
    constructor() {
        super();
        this.state = {
            isReverse: false,
            tracked: "",
            poems: []
        }
        this.filterHadler = this.filterHadler.bind(this);
    }

    componentDidMount() {
        this.setState({
            poems: books,
        })
    }

    filterHadler(e) {
        this.setState({
            tracked: e.target.value
        })
    }

    render() {
        return (
            <Suspense fallback="loading">
                <section id="books">
                    <MyComponent />
                    <input
                        placeholder=""
                        value={this.state.tracked}
                        onChange={this.filterHadler}
                    />
                    <Book poems={this.state.poems} tracked={this.state.tracked} />
                </section>
            </Suspense>
        )
    }
}
export default Books;