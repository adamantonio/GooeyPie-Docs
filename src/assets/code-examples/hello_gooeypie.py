import gooeypie as gp

def say_hello(event):
    """Changes the label text to "Hello GooeyPie!"."""
    hello_lbl.text = "Hello GooeyPie!"

app = gp.GooeyPieApp("Hi!")
app.width = 300

# Create a button and an empty label
hello_btn = gp.Button("Say hello", say_hello)
hello_lbl = gp.Label("")

# Add the button and label to the app
app.add(hello_btn, 1, 1)
app.add(hello_lbl, 1, 2)

app.run()
