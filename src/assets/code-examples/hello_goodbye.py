import gooeypie as gp

def update_greeting(event):
    """Updates the greeting message based on the user's name."""
    
    # Determine whether the hello or goodbye button was pressed
    if event.widget == say_hello_btn:
        greeting = "Hello"
    else:        
        greeting = "Goodbye"

    # Get the name or use "friend" if the entry is empty
    if name_entry.text:
        name = name_entry.text
    else:
        name = "friend"

    # Update the greeting label
    greeting_lbl.text = f"{greeting}, {name}!"


app = gp.GooeyPieApp("Hello, You!")

# Create widgets
question_lbl = gp.Label("What's your name?")
name_entry = gp.Entry()
say_hello_btn = gp.Button("Say Hello", update_greeting)
say_goodbye_btn = gp.Button("Say Goodbye", update_greeting)
greeting_lbl = gp.Label()

# Make the label widget wider
name_entry.width = 200

# Add widgets to the window
app.add(question_lbl, 1, 1)
app.add(name_entry, 1, 2)
app.add(say_hello_btn, 1, 3)
app.add(say_goodbye_btn, 1, 4)
app.add(greeting_lbl, 1, 5)

app.run()