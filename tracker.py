from flask import Flask, render_template, jsonify
from api.bus_stops import BusStops
from datetime import datetime

app = Flask(__name__)


@app.route('/')
def index():
    return render_home_page()


@app.route('/track/')
def track_page():
    return render_home_page()


@app.route('/track/<stop>/')
def track_page_stop(stop):
    return render_home_page(stop=stop)


@app.route('/api/<bus_stop_code>/')
def json_stop(bus_stop_code):
    return jsonify(BusStops().by_stop_code(bus_stop_code))


def render_home_page(stop=36236464):
    return render_template('index.html', **get_page_data(stop))


def get_page_data(stop):
    return {
        'year': datetime.now().year,
        'stop': stop
    }

if __name__ == '__main__':
    app.run(debug=True)
