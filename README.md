# Affluences Dashboard

Display the reservations of several rooms in the form of a dashboard using the unofficial [Affluences](https://affluences.com) API

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Knowing the `resource_id` of the rooms you want to see on your dashboard

**How to get them ?**

1. Using the [Affluences](http://affluences.com) page, search for your university or company.

2. Open the "Developer" menu (F12) and go to the "Network" tab.

3. Select the types of room you would like to book and check the requests sent by the server.

   **watch out for the `available?date=...` file.**

4. Inside of the available file you can find all `resource_id` of this types of room.

Repeat this step to fetch data for every room you want to add to the dashboard.

### Installing

Start by cloning this repo and editing the `rooms.js` file with the informations you gathered on the [Affluences](http://affluences.com) website. you can let `"name": "roomX"` inside this file, it has relation with the REAL name of the room.

In the `index.html` file add the exact number of rooms you need and match the `id` with the `name` inside the  `rooms.js` file.

Here you go ! Host it on a web server and you are ready to go !

## Built With

* [Bootstrap-Calendar](https://github.com/Serhioromano/bootstrap-calendar) - A Full view calendar based on Twitter Bootstrap - @Serhioromano
* [Ical.js](https://github.com/mozilla-comm/ical.js/) - Parse the iCalendar format using JavaScript - @mozilla-comm

## Authors

* **Thomas Boeglin** - *Initial work* - [Boeglin.me](https://www.boeglin.me)

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details
