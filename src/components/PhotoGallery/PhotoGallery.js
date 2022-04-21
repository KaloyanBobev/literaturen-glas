import React from 'react';
import './PhotoGallery.scss';
import imagesSorce from '../../data/images.json';
import { withTranslation } from 'react-i18next';

class LegacyComponentClass extends React.Component {

    render() {
        const { t } = this.props;

        return (
            <section id="gallery">
                <h1>{t('booksPage.header')}</h1>
                <h3>{t('booksPage.newspapersPhoto')}</h3>
                <div className="row">
                    {this.props.images.slice(0, 11).map((value) => {
                        return (
                            <div key={value.src} className="col=md-3 offset-md-1">
                                <a href={require("../../images/books/" + value.src + ".jpg")}>
                                    <img src={require("../../images/books/" + value.src + ".jpg")} target="_blank" title={value.src} alt="book covers" />
                                </a>
                            </div>
                        )
                    })}
                </div>
                <h3>{t('booksPage.photos')}</h3>
                <div className="row">
                    {this.props.images.slice(11, 32).map((value, index) => {
                        return (
                            <div key={index} className="col=md-3 offset-md-1">
                                <a href={require("../../images/gallery/" + value.src + ".jpg")}>
                                    <img src={require("../../images/gallery/" + value.src + ".jpg")} target="_blank" title={value.src} alt="important meetings" />
                                </a>
                            </div>
                        )
                    })}
                    {this.props.images.slice(32,49).map((value, index) => {
                        return (
                            <div key={index} className="col=md-3 offset-md-1">
                                <a href={require("../../images/gallery/photos2020/" + value.src + ".jpg")}>
                                    <img src={require("../../images/gallery/photos2020/" + value.src + ".jpg")} target="_blank" title={value.src} alt="important meetings" />
                                </a>
                            </div>
                        )
                    })}
                </div>
                <h3>{t('booksPage.childrenWorkshops')}</h3>
                <div className="row">
                    {this.props.images.slice(49, 52).map((value) => {
                        return (
                            <div key={value.src} className="col=md-3 offset-md-1">
                                <a href={require("../../images/children-work/" + value.src + ".jpg")}>
                                    <img src={require("../../images/children-work/" + value.src + ".jpg")} target="_blank" title={value.src} alt="children work" />
                                </a>
                            </div>
                        )
                    })}
                </div>
            </section>
        )
    }
}

const MyComponent = withTranslation()(LegacyComponentClass);

class PhotoGallery extends React.Component {
    constructor() {
        super();
        this.state = {
            images: []
        }
    }
    componentDidMount() {
        this.setState({
            images: imagesSorce
        })
    }
    render() {
        return (
            <MyComponent
                images={this.state.images} />
        )
    }
}

export default PhotoGallery;