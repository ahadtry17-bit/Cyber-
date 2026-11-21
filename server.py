
app = Flask(__name__)

# Free Fire connection aur panel ka logic yahan chalega
@app.route('/')
def home():
    return "Tiger Panel Active for Raja Ahad!"

@app.route('/connect-ff', methods=['POST'])
def connect_ff():
    data = request.json
    player_id = data.get('player_id')
    
    # Yahan hum Free Fire ke server ya game data ke sath handshake karenge
    if player_id:
        return jsonify({"status": "success", "message": f"Connected to Free Fire ID: {player_id}"})
    else:
        return jsonify({"status": "error", "message": "Connection Failed!"}), 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)