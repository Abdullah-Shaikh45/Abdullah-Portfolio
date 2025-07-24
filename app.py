from flask import Flask, render_template, request, redirect, flash
from datetime import datetime
from dotenv import load_dotenv
import os

app = Flask(__name__)
load_dotenv()
app.secret_key = os.getenv('SECRET_KEY')


@app.route('/')
def index():
    return render_template('index.html', year=datetime.now().year)


@app.route('/contact', methods=['POST'])
def contact():
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']

    print("New message from:", name, email)
    print("Message:", message)

    flash("Thanks for contacting me, " + name + "!", "success")
    return redirect('/')


if __name__ == '__main__':
    app.run(debug=True, port=8000)
