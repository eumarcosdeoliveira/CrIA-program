from flask import Flask, jsonify, request, send_file
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

members_data = {"members": ["Member1", "Member2"]}

@app.route("/members")
def get_members():
    return jsonify(members_data)

@app.route("/images")
def get_image():
    try:
        image_path = "../src/assets/img/img.png"
        return send_file(image_path, mimetype='image/png', as_attachment=True)
    
    except FileNotFoundError:
        return jsonify({"error": "Imagem não encontrada"}), 404

@app.route("/update", methods=["POST"])
def update_members():
    data = request.get_json()
    members_data["members"] = data.get("members", [])

    print(f"Membros atualizados: {members_data['members']}")

    return jsonify({"message": "Membros atualizados com sucesso!"})

if __name__ == "__main__":
    app.run(debug=True)
