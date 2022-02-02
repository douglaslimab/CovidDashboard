from flask import Flask, render_template
from dashData import get_summary, get_geo

app = Flask(__name__)

@app.route('/home')
def home():
    return render_template('home.html', data = '')

@app.route('/<country>/summary')
def sumary(country):
    response = get_summary(country)
    response.update(get_geo(country))
    return render_template('index.html', data = response)

@app.route('/<country>/geo')
def geo(country):
    response = get_geo(country)
    response.update(get_summary(country))
    return response


if __name__ == "__main__":
    app.run(debug=True, host='127.0.0.1', port=5000)