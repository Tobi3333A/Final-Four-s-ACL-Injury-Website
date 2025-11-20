from flask import Flask, render_template_string, request
import sqlite3
from werkzeug.security import generate_password_hash

app = Flask(__name__)

# Step 1: Load the HTML directly from file
with open("checker.html", "r") as file:
    signup_page = file.read()

# Step 2: Route to show signup form
@app.route("/")
def home():
    return signup_page

# Step 3: Handle the form submission
@app.route("/signup", methods=["POST"])
def signup():
    name = request.form["name"]
    email = request.form["email"]
    password = generate_password_hash(request.form["password"])

    # Create or connect to the database
    conn = sqlite3.connect("users.db")
    c = conn.cursor()

    # Create table if it doesn’t exist
    c.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT UNIQUE,
            password TEXT
        )
    """)

    try:
        # Insert the user data
        c.execute("INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
                  (name, email, password))
        conn.commit()
        message = "✅ Account created successfully!"
    except sqlite3.IntegrityError:
        message = "⚠️ Email already exists. Try logging in."
    finally:
        conn.close()

    return f"<h3>{message}</h3><a href='/'>Go Back</a>"

if __name__ == "__main__":
    app.run(debug=True)