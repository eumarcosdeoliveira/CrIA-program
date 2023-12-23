from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/members")
def members():
    members_data = {"members": ["Member1", "Member2"]}
    return jsonify(members_data)

if __name__ == "__main__":
    app.run(debug=True)
