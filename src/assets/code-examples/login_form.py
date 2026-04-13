import gooeypie as gp

def check_login(event):
    """Checks the username and password and updates the status label."""
    if user_entry.text == 'admin' and pass_entry.text == 'bestpassword':
        status_label.text = '✔ Access granted!'
    else:
        status_label.text = '❌ Access denied!'

app = gp.GooeyPieApp('Login')

# Create labels and Entry widgets and a login button
user_label = gp.Label("Username")
user_entry = gp.Entry()
pass_label = gp.Label("Password")
pass_entry = gp.Secret()
login_btn = gp.Button('Login', check_login)

# An initially empty label to display the login status
status_label = gp.Label('')

# Add all widgets to the app
app.add(user_label, 1, 1)
app.add(user_entry, 2, 1)
app.add(pass_label, 1, 2)
app.add(pass_entry, 2, 2)
app.add(login_btn, 2, 3)
app.add(status_label, 2, 4)

app.run()
