import React from 'react';

import './SideNav.scss';
import Clock from '../Clock/Clock';
import datesAndMonths from '../../data/date.json';
import { withTranslation } from 'react-i18next';

class LegacyComponentClass extends React.Component {

    render() {
        const { t } = this.props;

        return (
            <>
                <h4>{t('sidenav.header')}</h4>
                <input
                    type="text"
                    className="search-bar"
                    value={this.props.query}
                    placeholder={t('sidenav.enterTown')}
                    onChange={this.props.changeHandler}
                    onKeyUp={this.props.searchTown}
                />
                <div className="location-box">
                    <div className="location">
                        {this.props.name},
                        {this.props.country}
                    </div>
                </div>
                <div className="weather-box">
                    <div>{this.props.weather}</div>
                    <div className="temp">
                        {Math.round(this.props.temp)}&#176;C
                        </div>
                </div>
            </>
        )
    }
}

const MyComponent = withTranslation()(LegacyComponentClass);

const KEY = "2b5a2ac09bf7d75d7be4aec6429fa12f";
const BASE = "https://api.openweathermap.org/data/2.5/";

export default class SideNav extends React.Component {
    constructor() {
        super();
        this.state = {
            query: "Стара Загора",
            temp: '',
            country: '',
            weather: '',
            feels_like: '',
            daysOfWeek: '',
            mounthsOfYear: '',
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.searchTown = this.searchTown.bind(this);
    }

    changeHandler(e) {
        this.setState({ query: e.target.value })
    }

    fetchData() {
        fetch(`${BASE}weather?q=${this.state.query}&units=metric&lang=en&APPID=${KEY}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    name: data.name,
                    country: data.sys.country,
                    temp: data.main.temp,
                    weather: data.weather[0].main,
                    query: ""
                })
            })
            .catch(error => {
                console.log("An error occurred while trying to fetch data from Foursquare: " +
                    error)
            })
    }

    componentDidMount() {
        this.fetchData();

        this.setState({
            daysOfWeek: datesAndMonths.days,
            mounthsOfYear: datesAndMonths.months
        })
    }

    searchTown(event, lng) {
        if (event.key === "Enter") {
            this.fetchData(lng);
        }
    }

    dateBuilder(d) {
        let day = this.state.daysOfWeek[d.getDay()];
        let date = d.getDate();
        let month = this.state.mounthsOfYear[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }

    render() {
        const weathertypes = ["Clear", "Clouds", "Fog", "Rain", "Snow"];
        let weatherClass;

        for (let i = 0; i < weathertypes.length; i += 1) {
            if (this.state.weather === weathertypes[i]) {
                weatherClass = this.state.weather;
            }
        }

        return (
            <div className={`side-nav ${weatherClass}`}>
                <Clock />
                <div className="date">
                    {this.dateBuilder(new Date())}
                </div>
                <MyComponent
                    value={this.query}
                    onChange={this.changeHandler}
                    onKeyUp={this.searchTown}
                    name={this.state.name}
                    country={this.state.country}
                    weather={this.state.weather}
                    temp={this.state.temp}
                    changeHandler={this.changeHandler}
                    searchTown={this.searchTown}
                    lng={this.state.lng}
                />
            </div>
        )
    }
}