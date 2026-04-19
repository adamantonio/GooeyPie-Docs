import gooeypie as gp

app = gp.GooeyPieApp("Hello, You!")

# Create widgets
question_lbl = gp.Label("What's your name?")
name_entry = gp.Entry()
say_hello_btn = gp.Button("Say Hello", None)
greeting_lbl = gp.Label("")

# Make the label widget wider
name_entry.width = 200

app.run()
