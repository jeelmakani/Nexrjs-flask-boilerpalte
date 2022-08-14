from flask import Flask


app = Flask(__name__)

# Members api routes


@app.route("/hello")
def hello():
    return {"Hello World": "Hello World"}


if __name__ == "__main__":
    app.run(debug=True)
