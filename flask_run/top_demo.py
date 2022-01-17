from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World! ISDN3002 project!'

if __name__ == '__main__':
    app.run(host='34.125.172.254',port=80,debug=True)